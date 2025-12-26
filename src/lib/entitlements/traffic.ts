import { and, eq, inArray } from "drizzle-orm";

import { db } from "@/lib/db/client";
import { orders } from "@/lib/db/schema/orders";

export const TRAFFIC_ENTITLEMENT_PRODUCTS = ["professional", "enterprise"] as const;
export const TRAFFIC_CHECKOUT_PRODUCT_ID = "professional";

export async function hasTrafficEntitlement(userId: string): Promise<boolean> {
  const result = await db
    .select({ id: orders.id })
    .from(orders)
    .where(
      and(
        eq(orders.userId, userId),
        eq(orders.status, "paid"),
        inArray(orders.productId, [...TRAFFIC_ENTITLEMENT_PRODUCTS]),
      ),
    )
    .limit(1);

  return result.length > 0;
}

