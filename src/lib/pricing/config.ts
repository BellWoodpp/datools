/**
 * 价格配置文件
 * 支持一次性付费、按月付费、按年付费
 */

export type PricingPeriod = 'one-time' | 'monthly' | 'yearly';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  limitations?: string[];
  popular?: boolean;
  pricing: {
    [K in PricingPeriod]: {
      price: number;
      currency: string;
      period: string;
      originalPrice?: number; // 用于显示折扣
      discount?: number; // 折扣百分比
    };
  };
}

export interface PricingConfig {
  currency: string;
  plans: PricingPlan[];
  billingCycles: {
    [K in PricingPeriod]: {
      label: string;
      description: string;
      discount?: string; // 年付折扣说明
    };
  };
}

// 价格配置
export const pricingConfig: PricingConfig = {
  currency: 'CNY',
  billingCycles: {
    'one-time': {
      label: '一次性付费',
      description: '永久使用，无需续费'
    },
    'monthly': {
      label: '按月付费',
      description: '灵活付费，随时取消'
    },
    'yearly': {
      label: '按年付费',
      description: '年付优惠 20%'
    }
  },
  plans: [
    {
      id: 'free',
      name: '免费版',
      description: '适合个人使用与轻度检索',
      features: [
        '浏览工具目录与详情页',
        '基础搜索与筛选',
        '登录后解锁基础功能'
      ],
      limitations: [
        '不包含访问量等高级数据'
      ],
      popular: false,
      pricing: {
        'one-time': {
          price: 0,
          currency: 'CNY',
          period: '永久免费'
        },
        'monthly': {
          price: 0,
          currency: 'CNY',
          period: '永久免费'
        },
        'yearly': {
          price: 0,
          currency: 'CNY',
          period: '永久免费'
        }
      }
    },
    {
      id: 'professional',
      name: '专业版',
      description: '解锁访问量等高级数据（第三方估算）',
      features: [
        '访问量数据解锁（估算值，可能无数据）',
        '更高的查询与使用额度',
        '邮件支持'
      ],
      limitations: [],
      popular: true,
      pricing: {
        'one-time': {
          price: 299,
          currency: 'CNY',
          period: '一次性付费'
        },
        'monthly': {
          price: 39,
          currency: 'CNY',
          period: '每月'
        },
        'yearly': {
          price: 374,
          currency: 'CNY',
          period: '每年',
          originalPrice: 468,
          discount: 20
        }
      }
    },
    {
      id: 'enterprise',
      name: '企业版',
      description: '适合团队与定制需求',
      features: [
        '专业版所有功能',
        '更高额度与定制数据需求',
        '优先支持与对接'
      ],
      limitations: [],
      popular: false,
      pricing: {
        'one-time': {
          price: 999,
          currency: 'CNY',
          period: '一次性付费'
        },
        'monthly': {
          price: 129,
          currency: 'CNY',
          period: '每月'
        },
        'yearly': {
          price: 1238,
          currency: 'CNY',
          period: '每年',
          originalPrice: 1548,
          discount: 20
        }
      }
    }
  ]
};

// 获取指定周期的价格
export function getPricingForPeriod(planId: string, period: PricingPeriod) {
  const plan = pricingConfig.plans.find(p => p.id === planId);
  return plan?.pricing[period];
}

// 获取所有周期的价格
export function getAllPricingForPlan(planId: string) {
  const plan = pricingConfig.plans.find(p => p.id === planId);
  return plan?.pricing;
}

// 获取推荐的价格周期（年付优先）
export function getRecommendedPeriod(): PricingPeriod {
  return 'yearly';
}

// 计算年付节省金额
export function calculateYearlySavings(monthlyPrice: number): number {
  const yearlyPrice = monthlyPrice * 12;
  const discountedYearlyPrice = yearlyPrice * 0.8; // 20% 折扣
  return yearlyPrice - discountedYearlyPrice;
}

// 格式化价格显示
export function formatPrice(price: number, currency: string = 'CNY'): string {
  const symbols: Record<string, string> = {
    'CNY': '¥',
    'USD': '$',
    'EUR': '€',
    'GBP': '£'
  };
  
  const symbol = symbols[currency] || currency;
  return `${symbol}${price}`;
}

// 获取价格周期标签
export function getPeriodLabel(period: PricingPeriod): string {
  return pricingConfig.billingCycles[period].label;
}

// 获取价格周期描述
export function getPeriodDescription(period: PricingPeriod): string {
  return pricingConfig.billingCycles[period].description;
}
