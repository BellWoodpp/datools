import { users } from "./users";
import * as auth from "./auth";
import * as orders from "./orders";
import * as blogs from "./blogs";
import * as clock from "./clock"
import * as subscriptions from "./subscriptions";

export const schema = {
  users,
  ...auth,
  ...orders,
  ...subscriptions,
  ...blogs,
  ...clock,
};

export type Schema = typeof schema;

export * from "./users";
export * from "./auth";
export * from "./orders";
export * from "./subscriptions";
export * from "./blogs";
export * from "./clock";
