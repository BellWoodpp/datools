import { pgTable, text, timestamp, json } from "drizzle-orm/pg-core";
import { users } from "./users";

export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  planId: text("plan_id").notNull(),
  provider: text("provider").notNull().default("creem"),
  providerSubscriptionId: text("provider_subscription_id").notNull().unique(),
  status: text("status").notNull().default("active"), // active, cancelled, expired
  metadata: json("metadata"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
  expiredAt: timestamp("expired_at", { withTimezone: true }),
});

export type SubscriptionStatus = "active" | "cancelled" | "expired";
export type Subscription = typeof subscriptions.$inferSelect;
export type NewSubscription = typeof subscriptions.$inferInsert;

