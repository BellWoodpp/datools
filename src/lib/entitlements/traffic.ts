import { and, eq, inArray } from "drizzle-orm";

import { db } from "@/lib/db/client";
import { orders } from "@/lib/db/schema/orders";
import { subscriptions } from "@/lib/db/schema/subscriptions";

export const TRAFFIC_ENTITLEMENT_PRODUCTS = ["professional", "enterprise"] as const;
export const TRAFFIC_CHECKOUT_PRODUCT_ID = "professional";

export async function hasTrafficEntitlement(userId: string): Promise<boolean> {
  const oneTimeOrder = await db
    .select({ id: orders.id })
    .from(orders)
    .where(
      and(
        eq(orders.userId, userId),
        eq(orders.status, "paid"),
        eq(orders.productType, "one_time"),
        inArray(orders.productId, [...TRAFFIC_ENTITLEMENT_PRODUCTS]),
      ),
    )
    .limit(1);

  if (oneTimeOrder.length > 0) {
    return true;
  }

  const activeSubscription = await db
    .select({ id: subscriptions.id })
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.userId, userId),
        eq(subscriptions.status, "active"),
        inArray(subscriptions.planId, [...TRAFFIC_ENTITLEMENT_PRODUCTS]),
      ),
    )
    .limit(1);

  return activeSubscription.length > 0;
}
