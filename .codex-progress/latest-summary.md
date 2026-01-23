# Latest Summary

- 迁移了 openfmvideo 风格的 Dashboard/Membership/Orders 与退款面板、API。
- 完成 /podcast-mvp 与 /voice-cloning 全量迁移（页面、组件、TTS/分享/历史/克隆 API、schema、静态资源）。
- 新增 site-config/asset-url/store/tts/pricing/tokens/R2/Google credentials 等支撑库，并补齐 resolveIntlNumberLocale 兼容导出。
- 已执行 pnpm lint（仅 creem webhook 未使用变量警告）与 pnpm db:push --force。
- 待处理：Header hydration mismatch、TTS 相关环境配置校验。
