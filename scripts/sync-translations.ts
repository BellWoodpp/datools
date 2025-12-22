import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 简单深合并：仅同步缺失的 key，用源语言值占位
function syncMissingKeys(source: any, target: any) {
  if (Array.isArray(source)) {
    return target ?? source;
  }
  if (source && typeof source === 'object') {
    const result: Record<string, any> = { ...(target ?? {}) };
    for (const key of Object.keys(source)) {
      result[key] = syncMissingKeys(source[key], target?.[key]);
    }
    return result;
  }
  return target ?? source;
}

function readJson(filePath: string) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath: string, data: any) {
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
    const target = fs.existsSync(targetPath) ? readJson(targetPath) : {};
    const merged = syncMissingKeys(source, target);
    let added = 0;
    const countAdded = (s: any, t: any) => {
      if (Array.isArray(s)) return 0;
      if (s && typeof s === 'object') {
        let total = 0;
        for (const k of Object.keys(s)) {
          if (t?.[k] === undefined) total += 1;
          total += countAdded(s[k], t?.[k]);
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
