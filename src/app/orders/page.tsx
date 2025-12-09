import { Metadata } from "next";
import { OrdersPage } from "@/components/orders/orders-page";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dictionary.pages.orders.title,
  description: dictionary.pages.orders.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "orders"),
  },
};

export default async function OrdersRootPage() {
  return <OrdersPage dict={dictionary.pages.orders} />;
}
