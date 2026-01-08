import { Image, type ImageProps } from "@unpic/react";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

type WsrvImageProps = DistributiveOmit<ImageProps, "cdn" | "fallback">;

export function WsrvImage({ operations, ...props }: WsrvImageProps) {
  return (
    <Image
      cdn="wsrv"
      operations={{
        ...operations,
        wsrv: { q: 75, ...(operations?.wsrv ?? {}) },
      }}
      {...props}
    />
  );
}
