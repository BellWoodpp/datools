"use client";

import { Check, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type PricingPlan, type PricingPeriod } from "@/lib/pricing/i18n-config";
import { usePayment } from "@/hooks/use-payment";
import type { PricingCopy } from "@/i18n/components/pricing";
import type { Locale } from "@/i18n/types";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
  locale: Locale;
  copy: PricingCopy["card"];
  onSelect?: (planId: string, period: PricingPeriod) => void;
  className?: string;
}

export function PricingCard({
  plan,
  period,
  locale,
  copy,
  onSelect,
  className
}: PricingCardProps) {
  const pricing = plan.pricing[period];
  const hasDiscount = pricing.discount && pricing.originalPrice;
  const { isLoading, error, createCheckout } = usePayment();
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [policyError, setPolicyError] = useState<string | null>(null);
  const checkboxId = useId();

  const handleSelect = async () => {
    // 如果是免费计划，直接调用原有的回调
    if (plan.id === 'free') {
      onSelect?.(plan.id, period);
      return;
    }

    // 如果是企业版，也调用原有回调（可能需要联系销售）
    if (plan.id === 'enterprise') {
      onSelect?.(plan.id, period);
      return;
    }

    if (!acceptedPolicies) {
      setPolicyError(
        locale === "zh"
          ? "请先勾选同意《服务条款》和《退款政策》"
          : "Please agree to the Terms of Service and Refund Policy",
      );
      return;
    }

    // 其他付费计划，调用支付接口
    await createCheckout(plan.id, {
      period,
    });
  };

  const getCtaText = () => {
    if (plan.id === 'free') return copy.getStarted;
    if (plan.id === 'enterprise') return copy.contactSales;
    return copy.buyNow;
  };

  const hrefPrefix = locale === "en" ? "" : `/${locale}`;
  const legalCopy = useMemo(
    () =>
      locale === "zh"
        ? {
            prefix: "购买即表示同意",
            terms: "服务条款",
            refund: "退款政策",
            and: "和",
            checkbox: "我已阅读并同意",
          }
        : {
            prefix: "By purchasing, you agree to the",
            terms: "Terms of Service",
            refund: "Refund Policy",
            and: "and",
            checkbox: "I agree to the",
          },
    [locale],
  );

  const legalSummary = useMemo(() => {
    return (
      <>
        {legalCopy.prefix}{" "}
        <Link className="underline underline-offset-4" href={`${hrefPrefix}/terms`}>
          {legalCopy.terms}
        </Link>{" "}
        {legalCopy.and}{" "}
        <Link className="underline underline-offset-4" href={`${hrefPrefix}/refund-policy`}>
          {legalCopy.refund}
        </Link>
      </>
    );
  }, [hrefPrefix, legalCopy]);

  return (
    <Card
      className={cn(
        "relative flex flex-col",
        plan.popular && "border-primary shadow-lg",
        className
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="default" className="px-3 py-1">
            {copy.popular}
          </Badge>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription className="text-base">
          {plan.description}
        </CardDescription>

        <div className="mt-4">
          <div className="flex items-baseline justify-center">
            {hasDiscount && (
              <span className="text-lg text-muted-foreground line-through mr-2">
                {formatPrice(pricing.originalPrice!, pricing.currency)}
              </span>
            )}
            <span className="text-4xl font-bold">
              {formatPrice(pricing.price, pricing.currency)}
            </span>
            <span className="text-muted-foreground ml-1">
              {pricing.period}
            </span>
          </div>

          {hasDiscount && (
            <div className="mt-2">
              <Badge variant="secondary" className="text-xs">
                {copy.save} {pricing.discount}%
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-sm text-muted-foreground mb-2">
              {copy.included}
            </h4>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {plan.limitations && plan.limitations.length > 0 && (
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-2">
                {copy.limitations}
              </h4>
              <ul className="space-y-2">
                {plan.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <div className="w-full space-y-2">
          <Button
            className="w-full"
            variant={plan.popular ? "default" : "outline"}
            onClick={handleSelect}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {copy.processing}
              </>
            ) : (
              getCtaText()
            )}
          </Button>
          
          {error && (
            <div className="text-sm text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          )}

          {plan.id !== "free" && plan.id !== "enterprise" ? (
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <input
                  id={checkboxId}
                  type="checkbox"
                  checked={acceptedPolicies}
                  onChange={(event) => {
                    setAcceptedPolicies(event.target.checked);
                    if (event.target.checked) setPolicyError(null);
                  }}
                  className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-neutral-900 dark:border-neutral-700 dark:text-neutral-100"
                />
                <label htmlFor={checkboxId} className="text-xs text-muted-foreground">
                  {legalCopy.checkbox}{" "}
                  <Link className="underline underline-offset-4" href={`${hrefPrefix}/terms`}>
                    {legalCopy.terms}
                  </Link>{" "}
                  {legalCopy.and}{" "}
                  <Link className="underline underline-offset-4" href={`${hrefPrefix}/refund-policy`}>
                    {legalCopy.refund}
                  </Link>
                </label>
              </div>
              {policyError ? (
                <p className="text-center text-xs text-red-600 dark:text-red-400">
                  {policyError}
                </p>
              ) : (
                <p className="text-center text-xs text-muted-foreground">
                  {legalSummary}
                </p>
              )}
            </div>
          ) : plan.id !== "free" ? (
            <p className="text-center text-xs text-muted-foreground">
              {legalSummary}
            </p>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
