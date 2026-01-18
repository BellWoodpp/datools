import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error('Missing OPENAI_API_KEY in .env.local');
  process.exit(1);
}

const client = new OpenAI({
  apiKey,
  // 自定义兼容 OpenAI 的代理
  baseURL: process.env.OPENAI_BASE_URL,
  timeout: Number(process.env.OPENAI_TIMEOUT_MS || '60000'),
  maxRetries: Number(process.env.OPENAI_MAX_RETRIES || '2'),
});

const MODEL = process.env.OPENAI_TRANSLATE_MODEL || 'gpt-4o-mini';

type JsonValue = string | number | boolean | null | JsonValue[] | JsonObject;
type JsonObject = { [key: string]: JsonValue };

const isJsonObject = (value: JsonValue): value is JsonObject =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

function readJson(filePath: string): JsonValue {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as JsonValue;
}

function writeJson(filePath: string, data: JsonValue) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function flatten(obj: JsonValue, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      Object.assign(out, flatten(item, `${prefix}${idx}.`));
    });
  } else if (isJsonObject(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      Object.assign(out, flatten(v, prefix ? `${prefix}${k}.` : `${k}.`));
    }
  } else {
    out[prefix.slice(0, -1)] = String(obj ?? '');
  }
  return out;
}

function unflatten(flat: Record<string, string>): JsonObject {
  const root: JsonObject = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split('.');
    let cur: JsonObject = root;
    parts.forEach((part, idx) => {
      const isLast = idx === parts.length - 1;
      if (isLast) {
        cur[part] = value;
      } else {
        if (!isJsonObject(cur[part])) cur[part] = {};
        cur = cur[part] as JsonObject;
      }
    });
  }
  return root;
}

async function translateText(text: string, target: string, source: string) {
  const prompt = `You are a professional translator. Translate the following JSON values from ${source} to ${target}, preserving placeholders like {name} and markdown. Return JSON only.`;
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: prompt },
    { role: 'user', content: text },
  ];
  const resp = await client.chat.completions.create({
    model: MODEL,
    messages,
    temperature: 0.3,
  });
  return resp.choices[0]?.message?.content || '{}';
}

function parseJsonLoose(raw: string): Record<string, string> {
  const cleaned = raw.trim().replace(/^```(?:json)?/i, '').replace(/```$/i, '').trim();
  return JSON.parse(cleaned);
}

function chunkEntries<T>(entries: [string, T][], size: number) {
  const chunks: [string, T][][] = [];
  for (let i = 0; i < entries.length; i += size) {
    chunks.push(entries.slice(i, i + size));
  }
  return chunks;
}

async function main() {
  const locale = process.argv[2];
  const mode = process.argv.includes('--incremental') ? 'incremental' : process.argv.includes('--new-only') ? 'new' : 'full';
  if (!locale) {
    console.error('Usage: pnpm translate <locale> [-- --incremental|--new-only]');
    process.exit(1);
  }
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const messagesDir = path.resolve(__dirname, '..', 'messages');
  const sourcePath = path.join(messagesDir, 'en.json');
  const targetPath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(sourcePath)) {
    console.error('Missing messages/en.json');
    process.exit(1);
  }
  const source = readJson(sourcePath);
  const target = fs.existsSync(targetPath) ? readJson(targetPath) : ({} as JsonObject);

  const flatSource = flatten(source);
  const flatTarget = flatten(target);

  const toTranslate: Record<string, string> = {};
  for (const [k, v] of Object.entries(flatSource)) {
    const existing = flatTarget[k];
    if (mode === 'full') {
      toTranslate[k] = v;
    } else if (mode === 'incremental') {
      if (!existing || existing === v) {
        toTranslate[k] = v;
      }
    } else if (mode === 'new') {
      if (existing === undefined) {
        toTranslate[k] = v;
      }
    }
  }

  if (Object.keys(toTranslate).length === 0) {
    console.log('Nothing to translate');
    return;
  }

  console.log(`Translating ${Object.keys(toTranslate).length} keys to ${locale} (mode=${mode})...`);
  const mergedFlat = { ...flatTarget };
  const entries = Object.entries(toTranslate);
  const chunkSize = Number(process.env.TRANSLATE_CHUNK_SIZE || '5');
  const chunks = chunkEntries(entries, Math.max(1, chunkSize));

  for (let idx = 0; idx < chunks.length; idx += 1) {
    const chunk = chunks[idx];
    const obj = Object.fromEntries(chunk);
    const jsonChunk = JSON.stringify(obj, null, 2);
    const translatedJson = await translateText(jsonChunk, locale, 'English');
    let translated: Record<string, string> = {};
    try {
      translated = parseJsonLoose(translatedJson);
    } catch (error) {
      console.error('Failed to parse translation result, raw output:', translatedJson, error);
      process.exit(1);
    }
    for (const [k, v] of Object.entries(translated)) {
      if (typeof v === 'string') mergedFlat[k] = v;
    }

    if ((idx + 1) % 25 === 0 || idx === chunks.length - 1) {
      console.log(`Progress: ${idx + 1}/${chunks.length} chunks`);
    }
  }

  const merged = unflatten(mergedFlat);
  writeJson(targetPath, merged);
  console.log(`Saved to messages/${locale}.json`);
}

main();
