# Translation Scripts Guide (DaTools)

本目录提供简化版翻译脚本，基于 OpenRouter（`OPENROUTER_API_KEY`）。流程沿用 messages/*.json 为源，支持同步 key 和调用 API 翻译，翻译后可回填到 `src/i18n/locales/*.json`。

## 目录
- `translate.ts`：翻译单一语言，支持增量/只翻新 key。
- `translate-batch.ts`：批量翻译多语言（默认 zh/ja/es/de/fr/pt/ru/id/ar）。
- `sync-translations.ts`：只同步缺失 key，用英文占位，不调用 API。
- `sync-to-locales.ts`：把 messages/*.json 写回 `src/i18n/locales/*.json`。

## 环境准备
1. 安装依赖：`pnpm install`（需要 openai/dotenv/tsx 等，已放在项目依赖）。
2. 在 `.env.local` 配置：
```
OPENROUTER_API_KEY=your_key
OPENROUTER_SITE_URL=https://your-site (可选)
OPENROUTER_SITE_NAME=DaTools (可选)
```

## 常用命令（需在 package.json 添加）
```
"sync-translations": "tsx scripts/sync-translations.ts",
"translate": "tsx scripts/translate.ts",
"translate:batch": "tsx scripts/translate-batch.ts",
"translate:incremental": "pnpm translate:batch -- --incremental",
"sync-to-locales": "tsx scripts/sync-to-locales.ts"
```

## 使用流程
1) 准备源文件：将 `src/i18n/locales/en.json` 复制为 `messages/en.json`（若不存在，先创建）。
2) 同步 key 结构：
```
pnpm sync-translations
```
会将英文缺失的 key 占位到其他语言的 `messages/*.json`。
3) 翻译缺失内容（增量）：
```
pnpm translate:batch -- --incremental
```
或单语言：`pnpm translate es -- --incremental`
4) 将翻译结果回填到现有 i18n 目录：
```
pnpm sync-to-locales
```

## 选项说明
- `translate.ts`
  - 用法：`pnpm translate <locale> [-- --incremental|--new-only]`
  - `--incremental`：仅翻译缺失或与英文相同的值。
  - `--new-only`：仅翻译在目标文件中不存在的 key。
  - 默认模式：`full`（全部重新翻译）。

- `translate-batch.ts`
  - 默认语言列表：`['zh','ja','es','de','fr','pt','ru','id','ar']`
  - 覆盖：传入语言代码即可，如 `pnpm translate:batch it ko -- --incremental`。

- `sync-translations.ts`
  - 从 `messages/en.json` 将缺失 key 占位同步到其它语言文件。

- `sync-to-locales.ts`
  - 简单复制 `messages/*.json` 到 `src/i18n/locales/*.json`（如需更复杂合并，可按需修改）。

## 提示
- 翻译质量需人工抽检。
- 脚本未处理占位符保护的高级逻辑，默认按键值 JSON 逐项翻译，遇到特殊占位符请手动校对。
- 大批量翻译会消耗 API 配额，建议优先用 `--incremental`。

