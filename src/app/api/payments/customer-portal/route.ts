import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth-server/auth";
import { newCreemClient } from "@/lib/payments/creem";

function respErr(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return respErr("no auth, please sign-in", 401);
  }

  const client = newCreemClient();

  const customer = await client
    .creem()
    .retrieveCustomer({ xApiKey: client.apiKey(), email: userEmail });

  if (!customer?.id) {
    return respErr("customer not found", 404);
  }

  const links = await client.creem().generateCustomerLinks({
    xApiKey: client.apiKey(),
    createCustomerPortalLinkRequestEntity: {
      customerId: customer.id,
    },
  });

  return respData({ url: links.customerPortalLink });
}

