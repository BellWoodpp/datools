import { execSync } from 'child_process';

const args = process.argv.slice(2);
const extra = [] as string[];
const locales: string[] = [];
for (const arg of args) {
  if (arg.startsWith('--')) {
    extra.push(arg);
  } else {
    locales.push(arg);
  }
}

// 默认语言列表，可按需调整
const defaultLocales = ['zh','ja','es','de','fr','pt','ru','id','ar'];
const targets = locales.length ? locales : defaultLocales;

console.log(`Batch translating: ${targets.join(', ')} with extra args: ${extra.join(' ')}`);
for (const locale of targets) {
  console.log(`\n━━━ ${locale} ━━━`);
  const cmd = ['pnpm', 'translate', locale, '--', ...extra].filter(Boolean).join(' ');
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Failed on ${locale}`, e);
    process.exit(1);
  }
}
