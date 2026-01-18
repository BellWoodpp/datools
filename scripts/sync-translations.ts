import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type JsonValue = string | number | boolean | null | JsonValue[] | JsonObject;
type JsonObject = { [key: string]: JsonValue };

const isJsonObject = (value: JsonValue | undefined): value is JsonObject =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

// 简单深合并：仅同步缺失的 key，用源语言值占位
function syncMissingKeys(source: JsonValue, target?: JsonValue): JsonValue {
  if (Array.isArray(source)) {
    return target ?? source;
  }
  if (isJsonObject(source)) {
    const result: JsonObject = { ...(isJsonObject(target) ? target : {}) };
    for (const key of Object.keys(source)) {
      result[key] = syncMissingKeys(source[key], isJsonObject(target) ? target[key] : undefined);
    }
    return result;
  }
  return target ?? source;
}

function readJson(filePath: string): JsonValue {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as JsonValue;
}

function writeJson(filePath: string, data: JsonValue) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const messagesDir = path.resolve(__dirname, '..', 'messages');
  const sourcePath = path.join(messagesDir, 'en.json');
  if (!fs.existsSync(sourcePath)) {
    console.error('Missing messages/en.json as source');
    process.exit(1);
  }
  const source = readJson(sourcePath);
  const files = fs.readdirSync(messagesDir).filter((f) => f.endsWith('.json') && f !== 'en.json');
  const summary: Record<string, number> = {};

  for (const file of files) {
    const targetPath = path.join(messagesDir, file);
    const target = fs.existsSync(targetPath) ? readJson(targetPath) : ({} as JsonObject);
    const merged = syncMissingKeys(source, target);
    let added = 0;
    const countAdded = (s: JsonValue, t?: JsonValue): number => {
      if (Array.isArray(s)) return 0;
      if (isJsonObject(s)) {
        let total = 0;
        const targetObj = isJsonObject(t) ? t : undefined;
        for (const k of Object.keys(s)) {
          const nextTarget = targetObj ? targetObj[k] : undefined;
          if (nextTarget === undefined) total += 1;
          total += countAdded(s[k], nextTarget);
        }
        return total;
      }
      return t === undefined ? 1 : 0;
    };
    added = countAdded(source, target);
    writeJson(targetPath, merged);
    summary[file] = added;
    console.log(`📝 Processed ${file} (+${added} keys)`);
  }

  console.log('\nSummary:');
  for (const [file, added] of Object.entries(summary)) {
    console.log(`  ${file}: added ${added}`);
  }
}

main();
