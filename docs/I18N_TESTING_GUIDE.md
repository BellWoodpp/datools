# 国际化价格功能测试指南

## 🌍 国际化支持完成！

DaTools 的价格功能现在完全支持国际化，包括：

### ✅ 支持的语言
- **中文 (zh)** - 简体中文
- **英文 (en)** - English  
- **日文 (ja)** - 日本語
- **西班牙文 (es)** - Español
- **德文 (de)** - Deutsch
- **法文 (fr)** - Français
- **葡萄牙文 (pt)** - Português
- **俄文 (ru)** - Русский
- **印尼文 (id)** - Bahasa Indonesia
- **阿拉伯文 (ar)** - العربية

### ✅ 国际化功能
1. **价格配置国际化**
   - 每种语言都有独立的价格配置
   - 支持不同货币（CNY、USD、JPY、EUR、BRL、RUB、IDR、SAR）
   - 本地化的价格标签和描述

2. **组件文本国际化**
   - 所有UI文本都支持多语言
   - 按钮、标签、提示信息等
   - 错误消息和成功提示

3. **动态语言切换**
   - 支持URL参数切换语言
   - 自动检测用户语言偏好
   - 保持用户选择状态

## 🧪 测试方法

### 1. 访问不同语言的价格页面

```
# 英文
http://localhost:3000/en/pricing

# 中文
http://localhost:3000/zh/pricing

# 日文
http://localhost:3000/ja/pricing

# 西班牙文
http://localhost:3000/es/pricing

# 德文
http://localhost:3000/de/pricing

# 法文
http://localhost:3000/fr/pricing

# 葡萄牙文
http://localhost:3000/pt/pricing

# 俄文
http://localhost:3000/ru/pricing

# 印尼文
http://localhost:3000/id/pricing

# 阿拉伯文
http://localhost:3000/ar/pricing
```

### 2. 测试演示页面

```
# 英文演示
http://localhost:3000/pricing-demo?locale=en

# 中文演示
http://localhost:3000/pricing-demo?locale=zh

# 日文演示
http://localhost:3000/pricing-demo?locale=ja

# 西班牙文演示
http://localhost:3000/pricing-demo?locale=es

# 德文演示
http://localhost:3000/pricing-demo?locale=de

# 法文演示
http://localhost:3000/pricing-demo?locale=fr

# 葡萄牙文演示
http://localhost:3000/pricing-demo?locale=pt

# 俄文演示
http://localhost:3000/pricing-demo?locale=ru

# 印尼文演示
http://localhost:3000/pricing-demo?locale=id

# 阿拉伯文演示
http://localhost:3000/pricing-demo?locale=ar
```

### 3. 测试功能点

#### 价格显示
- ✅ 中文：¥299 一次性付费
- ✅ 英文：$49 One-time payment  
- ✅ 日文：¥7200 一回払い
- ✅ 西班牙文：€49 Pago único | €6/mes | €58/año
- ✅ 德文：€49 Einmalzahlung | €6/Monat | €58/Jahr
- ✅ 法文：€49 Paiement unique | €6/mois | €58/an
- ✅ 葡萄牙文：R$249 Pagamento único | R$30/mês | R$288/ano
- ✅ 俄文：₽4,400 Единоразовый платёж | ₽540/месяц | ₽5,184/год
- ✅ 印尼文：Rp750,000 Pembayaran sekali | Rp90,000/bulan | Rp864,000/tahun
- ✅ 阿拉伯文：﷼184 دفع لمرة واحدة | ﷼23/شهر | ﷼220/سنة

#### 计费周期切换
- ✅ 所有语言：一次性/按月/按年文案本地化（示例：es = Pago único/Mensual/Anual，ar = دفع لمرة واحدة/شهريًا/سنويًا）
- ✅ 切换周期后价格、折扣标识同步更新

#### 功能列表
- ✅ 每种语言都有本地化的功能描述
- ✅ 限制说明也支持多语言
- ✅ 按钮文本（开始使用、立即购买、联系销售）

#### 年付优惠
- ✅ 所有语言：年付展示 20% 优惠文案（示例：es「Ahorra 20%...」、fr「Économisez 20 %...」、ar「وفر 20%...」）

## 🔧 技术实现

### 1. 国际化价格配置
```typescript
// src/lib/pricing/i18n-config.ts
export const locales = [
  "en","zh","es","ar","id","pt","fr","ja","ru","de",
] as const;
export type Locale = (typeof locales)[number];

export const pricingConfigs: Partial<Record<Locale, PricingConfig>> = {
  // 每个语言一份配置，未命中回退 en
};
```

### 2. 组件国际化
```typescript
// 组件内部文本国际化
const texts: Partial<Record<Locale, { title: string }>> = {
  en: { title: "Pricing Plans", /* ... */ },
  zh: { title: "价格方案", /* ... */ },
  // 其他 locale (es/de/fr/pt/ru/id/ar/ja) 同步补齐
};
```

### 3. 动态语言检测
```typescript
// 根据URL参数或用户偏好自动选择语言
const locale = searchParams.locale || "en";
const pricingConfig = getPricingConfig(locale);
```

## 📊 价格对比

**专业版（Professional）**

| 语言 | 一次性 | 月付 | 年付（20%折扣） |
|------|--------|------|----------------|
| zh | ¥299 | ¥39/月 | ¥374/年 |
| en | $49 | $6/月 | $58/年 |
| ja | ¥7,200 | ¥900/月 | ¥8,640/年 |
| es | €49 | €6/mes | €58/año |
| de | €49 | €6/Monat | €58/Jahr |
| fr | €49 | €6/mois | €58/an |
| pt | R$249 | R$30/mês | R$288/ano |
| ru | ₽4,400 | ₽540/мес | ₽5,184/год |
| id | Rp750,000 | Rp90,000/bulan | Rp864,000/tahun |
| ar | ﷼184 | ﷼23/شهر | ﷼220/سنة |

**企业版（Enterprise）**

| 语言 | 一次性 | 月付 | 年付（20%折扣） |
|------|--------|------|----------------|
| zh | ¥999 | ¥129/月 | ¥1,238/年 |
| en | $199 | $19/月 | $182/年 |
| ja | ¥24,000 | ¥2,400/月 | ¥23,040/年 |
| es | €199 | €19/mes | €182/año |
| de | €199 | €19/Monat | €182/Jahr |
| fr | €199 | €19/mois | €182/an |
| pt | R$999 | R$95/mês | R$912/ano |
| ru | ₽17,900 | ₽1,710/мес | ₽16,416/год |
| id | Rp2,990,000 | Rp285,000/bulan | Rp2,736,000/tahun |
| ar | ﷼746 | ﷼71/شهر | ﷼682/سنة |

## 🎯 测试检查清单

- [ ] 访问所有语言价格页面（en/zh/ja/es/de/fr/pt/ru/id/ar），检查文本与价格
- [ ] 访问所有语言演示页面（pricing-demo?locale=...），检查加载与默认回退
- [ ] 测试计费周期切换功能
- [ ] 测试价格卡片交互
- [ ] 测试年付优惠显示
- [ ] 测试演示页面的语言切换
- [ ] 检查货币符号显示正确
- [ ] 检查价格格式化正确
- [ ] 测试响应式设计在不同语言下的表现

## 🚀 下一步

国际化功能已经完全实现！您可以：

1. **校准区域定价** - 根据市场反馈微调各语言/货币的价格点
2. **自定义价格** - 修改各语言的价格配置
3. **集成支付系统** - 连接 Stripe 或其他支付服务
4. **添加更多功能** - 如优惠码、团队折扣等

现在您可以访问 `http://localhost:3000` 开始测试国际化价格功能了！🎉
