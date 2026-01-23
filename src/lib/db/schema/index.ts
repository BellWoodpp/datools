import { users } from "./users";
import * as auth from "./auth";
import * as orders from "./orders";
import * as blogs from "./blogs";
import * as clock from "./clock"
import * as subscriptions from "./subscriptions";
import * as tts from "./tts";
import * as shares from "./shares";
import * as voiceClones from "./voiceClones";

export const schema = {
  users,
  ...auth,
  ...orders,
  ...subscriptions,
  ...blogs,
  ...clock,
  ...tts,
  ...shares,
  ...voiceClones,
};

export type Schema = typeof schema;

export * from "./users";
export * from "./auth";
export * from "./orders";
export * from "./subscriptions";
export * from "./blogs";
export * from "./clock";
export * from "./tts";
export * from "./shares";
export * from "./voiceClones";
