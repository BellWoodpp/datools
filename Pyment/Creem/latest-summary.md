# 最新会话摘要（Creem）

- Session：`Pyment/Creem/logs/2026-01-05T19-05-42+08-00.md`
- 主题：Creem 测试模式端到端验证（Products 映射、Webhook/ngrok、站内退款政策与勾选确认、订阅表迁移）

## 结论

- `CREEM_PRODUCTS` 必须配置到 `planId:period -> prod_xxx`，否则会报 `invalid product_id mapping`（常见是默认 `yearly` 但只配了 `monthly`）。
- Webhook URL 不能写 `localhost`：本地需用 ngrok 暴露公网 HTTPS，指向 `/api/pay/callback/creem` 才能收到事件。
- Return/Success URL ≠ Webhook：回跳只负责体验；Webhooks 负责服务端可信的支付/订阅状态流转。
- 数据库必须包含 `subscriptions` 表，否则权益校验会报 `relation "subscriptions" does not exist` 并导致接口 500。
- 站内已补齐退款政策与“跳转前勾选同意”，避免用户争议时称未看到条款。

