import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

function readJson(filePath: string): JsonValue {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as JsonValue;
}

function writeJson(filePath: string, data: JsonValue) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function main() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const messagesDir = path.resolve(__dirname, '..', 'messages');
  const localesDir = path.resolve(__dirname, '..', 'src', 'i18n', 'locales');
  const files = fs.readdirSync(messagesDir).filter((f) => f.endsWith('.json'));

  for (const file of files) {
    const srcPath = path.join(messagesDir, file);
    const destPath = path.join(localesDir, file);
    if (!fs.existsSync(srcPath)) continue;
    const data = readJson(srcPath);
    writeJson(destPath, data);
    console.log(`Synced messages/${file} -> src/i18n/locales/${file}`);
  }
}

main();
