// app/api/checkout/route.ts
import { Checkout } from "@creem_io/nextjs";

const apiKey = process.env.CREEM_API_KEY;
if (!apiKey) throw new Error("找不到Creem的API值")

export const GET = Checkout({
  apiKey,
  testMode: true,
  defaultSuccessUrl: "/success",
});