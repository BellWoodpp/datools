"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ManageSubscriptionButton({
  label = "管理订阅",
}: {
  label?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/payments/customer-portal", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const payload = (await res.json().catch(() => null)) as
        | { ok: true; data: { url: string } }
        | { ok: false; message: string }
        | null;

      if (!res.ok || !payload || payload.ok === false) {
        setError(payload && "message" in payload ? payload.message : "请求失败");
        return;
      }

      window.location.href = payload.data.url;
    } catch {
      setError("请求失败");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button type="button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            正在打开…
          </>
        ) : (
          label
        )}
      </Button>
      {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  );
}

