/**
 * 国际化价格配置文件
 * 支持一次性付费、按月付费、按年付费
 */

import { type Locale } from "@/i18n/types";

const FALLBACK_LOCALE: Locale = "en";

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

// 国际化价格配置
export const pricingConfigs: Partial<Record<Locale, PricingConfig>> = {
  zh: {
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
        description: '适合个人开发者和小型项目',
        features: [
          '基础 Next.js 模板',
          'GitHub 集成',
          '社区支持',
          '基础文档',
          '个人使用许可'
        ],
        limitations: [
          '不支持商业使用',
          '无技术支持',
          '功能有限'
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
        description: '适合初创公司和中小企业',
        features: [
          '完整功能模板',
          '身份验证系统',
          '支付集成',
          '数据库设置',
          'AI 集成',
          '一键部署',
          '邮件支持',
          '商业使用许可',
          '源码访问'
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
        description: '适合大型企业和团队',
        features: [
          '专业版所有功能',
          '高级 AI 功能',
          '多租户支持',
          '高级分析',
          '优先技术支持',
          '定制开发服务',
          '团队协作功能',
          'SLA 保障',
          '培训服务'
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
  },
  en: {
    currency: 'USD',
    billingCycles: {
      'one-time': {
        label: 'One-time Payment',
        description: 'Pay once, use forever'
      },
      'monthly': {
        label: 'Monthly',
        description: 'Flexible billing, cancel anytime'
      },
      'yearly': {
        label: 'Yearly',
        description: 'Save 20% with annual billing'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Free',
        description: 'Perfect for individual developers and small projects',
        features: [
          'Basic Next.js template',
          'GitHub integration',
          'Community support',
          'Basic documentation',
          'Personal use license'
        ],
        limitations: [
          'No commercial use',
          'No technical support',
          'Limited features'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          },
          'monthly': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          },
          'yearly': {
            price: 0,
            currency: 'USD',
            period: 'Free forever'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Perfect for startups and small businesses',
        features: [
          'Complete feature templates',
          'Authentication system',
          'Payment integration',
          'Database setup',
          'AI integration',
          'One-click deployment',
          'Email support',
          'Commercial use license',
          'Source code access'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 49,
            currency: 'USD',
            period: 'One-time payment'
          },
          'monthly': {
            price: 6,
            currency: 'USD',
            period: 'per month'
          },
          'yearly': {
            price: 58,
            currency: 'USD',
            period: 'per year',
            originalPrice: 72,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Perfect for large enterprises and teams',
        features: [
          'All Professional features',
          'Advanced AI features',
          'Multi-tenant support',
          'Advanced analytics',
          'Priority technical support',
          'Custom development services',
          'Team collaboration features',
          'SLA guarantee',
          'Training services'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 199,
            currency: 'USD',
            period: 'One-time payment'
          },
          'monthly': {
            price: 19,
            currency: 'USD',
            period: 'per month'
          },
          'yearly': {
            price: 182,
            currency: 'USD',
            period: 'per year',
            originalPrice: 228,
            discount: 20
          }
        }
      }
    ]
  },
  ja: {
    currency: 'JPY',
    billingCycles: {
      'one-time': {
        label: '一回払い',
        description: '一度支払えば永久に利用可能'
      },
      'monthly': {
        label: '月払い',
        description: '柔軟な支払い、いつでもキャンセル可能'
      },
      'yearly': {
        label: '年払い',
        description: '年払いで20%割引'
      }
    },
    plans: [
      {
        id: 'free',
        name: '無料版',
        description: '個人開発者や小規模プロジェクトに最適',
        features: [
          '基本的なNext.jsテンプレート',
          'GitHub統合',
          'コミュニティサポート',
          '基本ドキュメント',
          '個人利用ライセンス'
        ],
        limitations: [
          '商用利用不可',
          '技術サポートなし',
          '機能制限あり'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          },
          'monthly': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          },
          'yearly': {
            price: 0,
            currency: 'JPY',
            period: '永久無料'
          }
        }
      },
      {
        id: 'professional',
        name: 'プロフェッショナル版',
        description: 'スタートアップや中小企業に最適',
        features: [
          '完全な機能テンプレート',
          '認証システム',
          '決済統合',
          'データベース設定',
          'AI統合',
          'ワンクリックデプロイ',
          'メールサポート',
          '商用利用ライセンス',
          'ソースコードアクセス'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 7200,
            currency: 'JPY',
            period: '一回払い'
          },
          'monthly': {
            price: 900,
            currency: 'JPY',
            period: '月額'
          },
          'yearly': {
            price: 8640,
            currency: 'JPY',
            period: '年額',
            originalPrice: 10800,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'エンタープライズ版',
        description: '大企業やチームに最適',
        features: [
          'プロフェッショナル版の全機能',
          '高度なAI機能',
          'マルチテナントサポート',
          '高度な分析',
          '優先技術サポート',
          'カスタム開発サービス',
          'チームコラボレーション機能',
          'SLA保証',
          'トレーニングサービス'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 24000,
            currency: 'JPY',
            period: '一回払い'
          },
          'monthly': {
            price: 2400,
            currency: 'JPY',
            period: '月額'
          },
          'yearly': {
            price: 23040,
            currency: 'JPY',
            period: '年額',
            originalPrice: 28800,
            discount: 20
          }
        }
      }
    ]
  },
  es: {
    currency: 'EUR',
    billingCycles: {
      'one-time': {
        label: 'Pago único',
        description: 'Paga una vez, úsalo para siempre'
      },
      'monthly': {
        label: 'Mensual',
        description: 'Facturación flexible, cancela cuando quieras'
      },
      'yearly': {
        label: 'Anual',
        description: 'Ahorra un 20% con pago anual'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Gratis',
        description: 'Perfecto para desarrolladores individuales y proyectos pequeños',
        features: [
          'Plantillas básicas de Next.js',
          'Integración con GitHub',
          'Soporte de la comunidad',
          'Documentación básica',
          'Licencia de uso personal'
        ],
        limitations: [
          'Sin uso comercial',
          'Sin soporte técnico',
          'Funciones limitadas'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'EUR',
            period: 'Para siempre'
          },
          'monthly': {
            price: 0,
            currency: 'EUR',
            period: 'Para siempre'
          },
          'yearly': {
            price: 0,
            currency: 'EUR',
            period: 'Para siempre'
          }
        }
      },
      {
        id: 'professional',
        name: 'Profesional',
        description: 'Perfecto para startups y pequeñas empresas',
        features: [
          'Plantillas con funciones completas',
          'Sistema de autenticación',
          'Integración de pagos',
          'Configuración de base de datos',
          'Integración de IA',
          'Despliegue en un clic',
          'Soporte por email',
          'Licencia de uso comercial',
          'Acceso al código fuente'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 49,
            currency: 'EUR',
            period: 'Pago único'
          },
          'monthly': {
            price: 6,
            currency: 'EUR',
            period: 'Mensual'
          },
          'yearly': {
            price: 58,
            currency: 'EUR',
            period: 'Anual',
            originalPrice: 72,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Perfecto para grandes empresas y equipos',
        features: [
          'Todas las funciones de Profesional',
          'Funciones avanzadas de IA',
          'Soporte multi-tenant',
          'Analítica avanzada',
          'Soporte técnico prioritario',
          'Servicios de desarrollo a medida',
          'Colaboración en equipo',
          'SLA garantizado',
          'Servicios de formación'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 199,
            currency: 'EUR',
            period: 'Pago único'
          },
          'monthly': {
            price: 19,
            currency: 'EUR',
            period: 'Mensual'
          },
          'yearly': {
            price: 182,
            currency: 'EUR',
            period: 'Anual',
            originalPrice: 228,
            discount: 20
          }
        }
      }
    ]
  },
  de: {
    currency: 'EUR',
    billingCycles: {
      'one-time': {
        label: 'Einmalzahlung',
        description: 'Einmal zahlen, für immer nutzen'
      },
      'monthly': {
        label: 'Monatlich',
        description: 'Flexibel, jederzeit kündbar'
      },
      'yearly': {
        label: 'Jährlich',
        description: 'Spare 20 % mit Jahresabrechnung'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Free',
        description: 'Ideal für einzelne Entwickler:innen und kleine Projekte',
        features: [
          'Basis-Next.js-Vorlagen',
          'GitHub-Integration',
          'Community-Support',
          'Basisdokumentation',
          'Lizenz für private Nutzung'
        ],
        limitations: [
          'Keine kommerzielle Nutzung',
          'Kein technischer Support',
          'Eingeschränkte Funktionen'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'EUR',
            period: 'Für immer'
          },
          'monthly': {
            price: 0,
            currency: 'EUR',
            period: 'Für immer'
          },
          'yearly': {
            price: 0,
            currency: 'EUR',
            period: 'Für immer'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Ideal für Startups und kleine Unternehmen',
        features: [
          'Vollständige Feature-Vorlagen',
          'Authentifizierungssystem',
          'Zahlungsintegration',
          'Datenbank-Setup',
          'AI-Integration',
          'One-Click-Deployment',
          'E-Mail-Support',
          'Kommerzielle Lizenz',
          'Source-Code-Zugriff'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 49,
            currency: 'EUR',
            period: 'Einmalzahlung'
          },
          'monthly': {
            price: 6,
            currency: 'EUR',
            period: 'Monatlich'
          },
          'yearly': {
            price: 58,
            currency: 'EUR',
            period: 'Jährlich',
            originalPrice: 72,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Ideal für Großunternehmen und Teams',
        features: [
          'Alle Professional-Features',
          'Erweiterte AI-Funktionen',
          'Multi-Tenant-Support',
          'Erweiterte Analysen',
          'Priorisierter technischer Support',
          'Individuelle Entwicklungsservices',
          'Team-Kollaboration',
          'SLA-Garantie',
          'Schulungen'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 199,
            currency: 'EUR',
            period: 'Einmalzahlung'
          },
          'monthly': {
            price: 19,
            currency: 'EUR',
            period: 'Monatlich'
          },
          'yearly': {
            price: 182,
            currency: 'EUR',
            period: 'Jährlich',
            originalPrice: 228,
            discount: 20
          }
        }
      }
    ]
  },
  fr: {
    currency: 'EUR',
    billingCycles: {
      'one-time': {
        label: 'Paiement unique',
        description: 'Payez une fois, utilisez toujours'
      },
      'monthly': {
        label: 'Mensuel',
        description: 'Facturation flexible, résiliable à tout moment'
      },
      'yearly': {
        label: 'Annuel',
        description: 'Économisez 20 % avec la facturation annuelle'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Gratuit',
        description: 'Idéal pour les développeurs individuels et les petits projets',
        features: [
          'Modèles Next.js de base',
          'Intégration GitHub',
          'Support communautaire',
          'Documentation de base',
          'Licence d’usage personnel'
        ],
        limitations: [
          'Pas d’usage commercial',
          'Pas de support technique',
          'Fonctionnalités limitées'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'EUR',
            period: 'À vie'
          },
          'monthly': {
            price: 0,
            currency: 'EUR',
            period: 'À vie'
          },
          'yearly': {
            price: 0,
            currency: 'EUR',
            period: 'À vie'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professionnel',
        description: 'Parfait pour les startups et petites entreprises',
        features: [
          'Modèles complets',
          'Système d’authentification',
          'Intégration des paiements',
          'Configuration de la base de données',
          'Intégration IA',
          'Déploiement en un clic',
          'Support par e-mail',
          'Licence d’usage commercial',
          'Accès au code source'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 49,
            currency: 'EUR',
            period: 'Paiement unique'
          },
          'monthly': {
            price: 6,
            currency: 'EUR',
            period: 'Mensuel'
          },
          'yearly': {
            price: 58,
            currency: 'EUR',
            period: 'Annuel',
            originalPrice: 72,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Entreprise',
        description: 'Idéal pour les grandes entreprises et équipes',
        features: [
          'Toutes les fonctionnalités Professionnel',
          'Fonctionnalités IA avancées',
          'Support multi-locataires',
          'Analytique avancée',
          'Support technique prioritaire',
          'Services de développement sur mesure',
          'Fonctionnalités de collaboration d’équipe',
          'Garantie SLA',
          'Services de formation'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 199,
            currency: 'EUR',
            period: 'Paiement unique'
          },
          'monthly': {
            price: 19,
            currency: 'EUR',
            period: 'Mensuel'
          },
          'yearly': {
            price: 182,
            currency: 'EUR',
            period: 'Annuel',
            originalPrice: 228,
            discount: 20
          }
        }
      }
    ]
  },
  pt: {
    currency: 'BRL',
    billingCycles: {
      'one-time': {
        label: 'Pagamento Único',
        description: 'Pague uma vez, use para sempre'
      },
      'monthly': {
        label: 'Mensal',
        description: 'Cobrança flexível, cancele quando quiser'
      },
      'yearly': {
        label: 'Anual',
        description: 'Economize 20% no faturamento anual'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Gratuito',
        description: 'Perfeito para desenvolvedores individuais e projetos pequenos',
        features: [
          'Templates básicos de Next.js',
          'Integração com GitHub',
          'Suporte da comunidade',
          'Documentação básica',
          'Licença para uso pessoal'
        ],
        limitations: [
          'Sem uso comercial',
          'Sem suporte técnico',
          'Recursos limitados'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'BRL',
            period: 'Para sempre'
          },
          'monthly': {
            price: 0,
            currency: 'BRL',
            period: 'Para sempre'
          },
          'yearly': {
            price: 0,
            currency: 'BRL',
            period: 'Para sempre'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Perfeito para startups e pequenos negócios',
        features: [
          'Templates com recursos completos',
          'Sistema de autenticação',
          'Integração de pagamentos',
          'Configuração de banco de dados',
          'Integração de IA',
          'Deploy com um clique',
          'Suporte por e-mail',
          'Licença para uso comercial',
          'Acesso ao código-fonte'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 249,
            currency: 'BRL',
            period: 'Pagamento único'
          },
          'monthly': {
            price: 30,
            currency: 'BRL',
            period: 'Mensal'
          },
          'yearly': {
            price: 288,
            currency: 'BRL',
            period: 'Anual',
            originalPrice: 360,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Perfeito para grandes empresas e times',
        features: [
          'Todos os recursos do Professional',
          'Recursos avançados de IA',
          'Suporte a multi-tenant',
          'Analytics avançado',
          'Suporte técnico prioritário',
          'Serviços de desenvolvimento sob medida',
          'Recursos de colaboração em equipe',
          'Garantia de SLA',
          'Serviços de treinamento'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 999,
            currency: 'BRL',
            period: 'Pagamento único'
          },
          'monthly': {
            price: 95,
            currency: 'BRL',
            period: 'Mensal'
          },
          'yearly': {
            price: 912,
            currency: 'BRL',
            period: 'Anual',
            originalPrice: 1140,
            discount: 20
          }
        }
      }
    ]
  },
  ru: {
    currency: 'RUB',
    billingCycles: {
      'one-time': {
        label: 'Единоразовый платёж',
        description: 'Платите один раз — пользуйтесь всегда'
      },
      'monthly': {
        label: 'Ежемесячно',
        description: 'Гибкая оплата, отмена в любое время'
      },
      'yearly': {
        label: 'Ежегодно',
        description: 'Экономия 20% при оплате за год'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Free',
        description: 'Идеально для отдельных разработчиков и небольших проектов',
        features: [
          'Базовые шаблоны Next.js',
          'Интеграция с GitHub',
          'Сообщество-поддержка',
          'Базовая документация',
          'Лицензия для личного использования'
        ],
        limitations: [
          'Без коммерческого использования',
          'Без технической поддержки',
          'Ограниченный функционал'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'RUB',
            period: 'Навсегда'
          },
          'monthly': {
            price: 0,
            currency: 'RUB',
            period: 'Навсегда'
          },
          'yearly': {
            price: 0,
            currency: 'RUB',
            period: 'Навсегда'
          }
        }
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Идеально для стартапов и небольших компаний',
        features: [
          'Полные функциональные шаблоны',
          'Система аутентификации',
          'Интеграция платежей',
          'Настройка базы данных',
          'AI-интеграция',
          'Деплой в один клик',
          'Поддержка по email',
          'Коммерческая лицензия',
          'Доступ к исходному коду'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 4400,
            currency: 'RUB',
            period: 'Единоразовый платёж'
          },
          'monthly': {
            price: 540,
            currency: 'RUB',
            period: 'Ежемесячно'
          },
          'yearly': {
            price: 5184,
            currency: 'RUB',
            period: 'Ежегодно',
            originalPrice: 6480,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Идеально для крупных компаний и команд',
        features: [
          'Все возможности Professional',
          'Продвинутые AI-фичи',
          'Мульти-тенантность',
          'Расширенная аналитика',
          'Приоритетная поддержка',
          'Кастомная разработка',
          'Командные функции',
          'SLA-гарантия',
          'Обучение'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 17900,
            currency: 'RUB',
            period: 'Единоразовый платёж'
          },
          'monthly': {
            price: 1710,
            currency: 'RUB',
            period: 'Ежемесячно'
          },
          'yearly': {
            price: 16416,
            currency: 'RUB',
            period: 'Ежегодно',
            originalPrice: 20520,
            discount: 20
          }
        }
      }
    ]
  },
  id: {
    currency: 'IDR',
    billingCycles: {
      'one-time': {
        label: 'Pembayaran Sekali',
        description: 'Bayar sekali, gunakan selamanya'
      },
      'monthly': {
        label: 'Bulanan',
        description: 'Penagihan fleksibel, bisa batal kapan saja'
      },
      'yearly': {
        label: 'Tahunan',
        description: 'Hemat 20% dengan penagihan tahunan'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'Gratis',
        description: 'Sempurna untuk developer individu dan proyek kecil',
        features: [
          'Template Next.js dasar',
          'Integrasi GitHub',
          'Dukungan komunitas',
          'Dokumentasi dasar',
          'Lisensi penggunaan personal'
        ],
        limitations: [
          'Tidak untuk komersial',
          'Tanpa dukungan teknis',
          'Fitur terbatas'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'IDR',
            period: 'Selamanya'
          },
          'monthly': {
            price: 0,
            currency: 'IDR',
            period: 'Selamanya'
          },
          'yearly': {
            price: 0,
            currency: 'IDR',
            period: 'Selamanya'
          }
        }
      },
      {
        id: 'professional',
        name: 'Profesional',
        description: 'Sempurna untuk startup dan bisnis kecil',
        features: [
          'Template fitur lengkap',
          'Sistem autentikasi',
          'Integrasi pembayaran',
          'Penyiapan basis data',
          'Integrasi AI',
          'Deploy satu klik',
          'Dukungan email',
          'Lisensi penggunaan komersial',
          'Akses kode sumber'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 750000,
            currency: 'IDR',
            period: 'Pembayaran sekali'
          },
          'monthly': {
            price: 90000,
            currency: 'IDR',
            period: 'Bulanan'
          },
          'yearly': {
            price: 864000,
            currency: 'IDR',
            period: 'Tahunan',
            originalPrice: 1080000,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Sempurna untuk perusahaan besar dan tim',
        features: [
          'Semua fitur Profesional',
          'Fitur AI lanjutan',
          'Dukungan multi-tenant',
          'Analitik lanjutan',
          'Dukungan teknis prioritas',
          'Layanan pengembangan kustom',
          'Fitur kolaborasi tim',
          'Jaminan SLA',
          'Layanan pelatihan'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 2990000,
            currency: 'IDR',
            period: 'Pembayaran sekali'
          },
          'monthly': {
            price: 285000,
            currency: 'IDR',
            period: 'Bulanan'
          },
          'yearly': {
            price: 2736000,
            currency: 'IDR',
            period: 'Tahunan',
            originalPrice: 3420000,
            discount: 20
          }
        }
      }
    ]
  },
  ar: {
    currency: 'SAR',
    billingCycles: {
      'one-time': {
        label: 'دفع لمرة واحدة',
        description: 'ادفع مرة واحدة، استخدم للأبد'
      },
      'monthly': {
        label: 'شهريًا',
        description: 'فوترة مرنة، ألغِ في أي وقت'
      },
      'yearly': {
        label: 'سنويًا',
        description: 'وفر 20% مع الفوترة السنوية'
      }
    },
    plans: [
      {
        id: 'free',
        name: 'مجاني',
        description: 'مثالي للمطورين الأفراد والمشاريع الصغيرة',
        features: [
          'قوالب Next.js الأساسية',
          'تكامل GitHub',
          'دعم المجتمع',
          'الوثائق الأساسية',
          'ترخيص للاستخدام الشخصي'
        ],
        limitations: [
          'لا الاستخدام التجاري',
          'لا دعم فني',
          'ميزات محدودة'
        ],
        popular: false,
        pricing: {
          'one-time': {
            price: 0,
            currency: 'SAR',
            period: 'للأبد'
          },
          'monthly': {
            price: 0,
            currency: 'SAR',
            period: 'للأبد'
          },
          'yearly': {
            price: 0,
            currency: 'SAR',
            period: 'للأبد'
          }
        }
      },
      {
        id: 'professional',
        name: 'احترافي',
        description: 'مثالي للشركات الناشئة والمؤسسات الصغيرة',
        features: [
          'قوالب الميزات الكاملة',
          'نظام المصادقة',
          'تكامل المدفوعات',
          'إعداد قاعدة البيانات',
          'تكامل الذكاء الاصطناعي',
          'نشر بنقرة واحدة',
          'دعم البريد الإلكتروني',
          'ترخيص الاستخدام التجاري',
          'الوصول إلى الكود المصدري'
        ],
        limitations: [],
        popular: true,
        pricing: {
          'one-time': {
            price: 184,
            currency: 'SAR',
            period: 'دفع لمرة واحدة'
          },
          'monthly': {
            price: 23,
            currency: 'SAR',
            period: 'شهريًا'
          },
          'yearly': {
            price: 220,
            currency: 'SAR',
            period: 'سنويًا',
            originalPrice: 276,
            discount: 20
          }
        }
      },
      {
        id: 'enterprise',
        name: 'المؤسسة',
        description: 'مثالي للمؤسسات الكبيرة والفرق',
        features: [
          'جميع ميزات الاحترافي',
          'ميزات الذكاء الاصطناعي المتقدمة',
          'دعم متعدد المستأجرين',
          'التحليلات المتقدمة',
          'دعم فني ذو أولوية',
          'خدمات التطوير المخصصة',
          'ميزات تعاون الفريق',
          'ضمان SLA',
          'خدمات التدريب'
        ],
        limitations: [],
        popular: false,
        pricing: {
          'one-time': {
            price: 746,
            currency: 'SAR',
            period: 'دفع لمرة واحدة'
          },
          'monthly': {
            price: 71,
            currency: 'SAR',
            period: 'شهريًا'
          },
          'yearly': {
            price: 682,
            currency: 'SAR',
            period: 'سنويًا',
            originalPrice: 852,
            discount: 20
          }
        }
      }
    ]
  }
};

const fallbackPricingConfig = pricingConfigs[FALLBACK_LOCALE]!;

// 获取指定语言的价格配置
export function getPricingConfig(locale: Locale): PricingConfig {
  return pricingConfigs[locale] ?? fallbackPricingConfig;
}

// 获取指定周期的价格
export function getPricingForPeriod(planId: string, period: PricingPeriod, locale: Locale = 'en') {
  const config = getPricingConfig(locale);
  const plan = config.plans.find(p => p.id === planId);
  return plan?.pricing[period];
}

// 获取所有周期的价格
export function getAllPricingForPlan(planId: string, locale: Locale = 'en') {
  const config = getPricingConfig(locale);
  const plan = config.plans.find(p => p.id === planId);
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
export function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = {
    'CNY': '¥',
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'BRL': 'R$',
    'RUB': '₽',
    'IDR': 'Rp',
    'SAR': '﷼'
  };
  
  const symbol = symbols[currency] || currency;
  return `${symbol}${price}`;
}

// 获取价格周期标签
export function getPeriodLabel(period: PricingPeriod, locale: Locale = 'en'): string {
  const config = getPricingConfig(locale);
  return config.billingCycles[period].label;
}

// 获取价格周期描述
export function getPeriodDescription(period: PricingPeriod, locale: Locale = 'en'): string {
  const config = getPricingConfig(locale);
  return config.billingCycles[period].description;
}
