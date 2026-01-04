import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buildCanonicalPath } from "@/lib/seo";
import { locales } from "@/i18n";

const copy = {
  en: {
    title: "Refund Policy",
    subtitle: "Cancellation and prorated refunds for subscriptions",
    updatedAt: "Last updated: 2026-01-04",
    intro:
      "This policy explains how cancellations and refunds work for DaTools subscriptions.",
    sections: {
      scope: {
        title: "1. Scope",
        body: "This policy applies to paid subscriptions (monthly/yearly). One-time purchases (if any) are non-refundable unless otherwise stated.",
      },
      cancellation: {
        title: "2. Cancellation",
        body: "You can cancel anytime. Unless a refund is issued, access remains available until the end of the current billing period.",
      },
      prorated: {
        title: "3. Prorated refunds (remaining time)",
        body: "If approved, refunds are prorated based on unused days in the current billing period.",
        formula:
          "Refund amount = amount paid × (remaining days ÷ total days in the billing period).",
        notes: [
          "Total days are calculated using the natural day count of the current period (e.g., 30/31 days; yearly uses 365 days or the actual period length).",
          "Non-refundable processing fees charged by payment providers (if any) may be deducted; the final refund is based on the amount we can actually recover from the processor.",
        ],
      },
      exceptions: {
        title: "4. Non-refundable cases",
        items: [
          "Fraud, abuse, or violation of our Terms of Service.",
          "Chargebacks/disputes already filed with the card issuer.",
          "Special products explicitly marked as non-refundable.",
        ],
      },
      processing: {
        title: "5. Processing time",
        body: "We usually process requests within 1–7 business days. Bank/card posting time depends on the payment method and can take 3–15 business days.",
      },
      contact: {
        title: "6. Contact",
        bodyPrefix: "To request a refund, please contact:",
      },
    },
    links: {
      terms: "Terms of Service",
    },
  },
  zh: {
    title: "退款政策",
    subtitle: "订阅取消与按剩余时间比例退款说明",
    updatedAt: "更新日期：2026-01-04",
    intro: "本政策用于说明 DaTools 订阅服务的取消与退款规则。",
    sections: {
      scope: {
        title: "1. 适用范围",
        body: "本政策适用于按月/按年订阅服务。一次性付费产品（如有）除非另有说明，不适用本比例退款规则。",
      },
      cancellation: {
        title: "2. 取消订阅",
        body: "用户可随时取消订阅。除非退款申请通过，否则订阅权益可持续至当前计费周期结束。",
      },
      prorated: {
        title: "3. 比例退款（按剩余时间）",
        body: "如在计费周期内申请退款且审核通过，我们将按未使用的剩余天数进行比例退款。",
        formula: "退款金额 = 实付金额 ×（剩余天数 ÷ 计费周期总天数）。",
        notes: [
          "计费周期总天数按当期自然天数计算（如 30/31 天；年付按 365 天或按当期实际天数）。",
          "第三方支付通道产生且不可退回的手续费（如适用）可能会被扣除；以最终可退回金额为准。",
        ],
      },
      exceptions: {
        title: "4. 不予退款的情形",
        items: [
          "存在欺诈、滥用或违反服务条款的行为。",
          "已向发卡行/支付机构发起拒付或争议处理。",
          "明确标注为不可退款的特殊产品/活动。",
        ],
      },
      processing: {
        title: "5. 退款处理时间",
        body: "我们通常在收到申请后 1–7 个工作日内完成审核与处理。到账时间取决于支付渠道，可能需要额外 3–15 个工作日。",
      },
      contact: {
        title: "6. 联系方式",
        bodyPrefix: "如需申请退款，请联系：",
      },
    },
    links: {
      terms: "服务条款",
    },
  },
} as const;

type CopyLocale = keyof typeof copy;

interface RefundPolicyPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function RefundPolicyPage({ params }: RefundPolicyPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  if (!normalizedLocale) notFound();

  const content =
    (normalizedLocale as CopyLocale) in copy
      ? copy[normalizedLocale as CopyLocale]
      : copy.en;
  const supportEmail = "stormrobin50@gmail.com";
  const hrefPrefix = normalizedLocale === "en" ? "" : `/${normalizedLocale}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <h1>{content.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          {content.subtitle}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {content.updatedAt}
        </p>
        <p>{content.intro}</p>

        <h2>{content.sections.scope.title}</h2>
        <p>{content.sections.scope.body}</p>

        <h2>{content.sections.cancellation.title}</h2>
        <p>{content.sections.cancellation.body}</p>

        <h2>{content.sections.prorated.title}</h2>
        <p>{content.sections.prorated.body}</p>
        <p>
          <strong>{content.sections.prorated.formula}</strong>
        </p>
        <ul>
          {content.sections.prorated.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        <h2>{content.sections.exceptions.title}</h2>
        <ul>
          {content.sections.exceptions.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>{content.sections.processing.title}</h2>
        <p>{content.sections.processing.body}</p>

        <h2>{content.sections.contact.title}</h2>
        <p>
          {content.sections.contact.bodyPrefix}{" "}
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>

        <hr />
        <p className="text-sm">
          <Link href={`${hrefPrefix}/terms`}>{content.links.terms}</Link>
        </p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: RefundPolicyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  const titleLocale =
    normalizedLocale && (normalizedLocale as CopyLocale) in copy
      ? (normalizedLocale as CopyLocale)
      : "en";

  return {
    title: `${copy[titleLocale].title} - DaTools`,
    description: copy[titleLocale].subtitle,
    alternates: {
      canonical: buildCanonicalPath(normalizedLocale, "refund-policy"),
    },
  };
}
