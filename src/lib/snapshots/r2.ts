
// R2 私有桶读写/签名
import { S3Client, GetObjectCommand, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export type SnapshotObjectInfo = {
  key: string;
  lastModified?: Date;
  contentLength?: number;
  eTag?: string;
};

export function getR2SnapshotBucket() {
  return requiredEnv("R2_SNAPSHOTS_BUCKET");
}

export function getR2Client() {
  const endpoint = requiredEnv("R2_ENDPOINT");
  const accessKeyId = requiredEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requiredEnv("R2_SECRET_ACCESS_KEY");

  return new S3Client({
    region: "auto",
    endpoint,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    forcePathStyle: true,
  });
}

export async function headSnapshotObject(key: string): Promise<SnapshotObjectInfo | null> {
  const s3 = getR2Client();
  const bucket = getR2SnapshotBucket();

  try {
    const res = await s3.send(
      new HeadObjectCommand({
        Bucket: bucket,
        Key: key,
      }),
    );

    return {
      key,
      lastModified: res.LastModified,
      contentLength: res.ContentLength,
      eTag: res.ETag,
    };
  } catch (error) {
    const status = (error as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode;
    const code =
      (error as { name?: string; Code?: string })?.name ?? (error as { Code?: string })?.Code;

    if (status === 404 || code === "NotFound" || code === "NoSuchKey") return null;
    throw error;
  }
}

export async function putSnapshotObject({
  key,
  body,
  contentType = "image/png",
}: {
  key: string;
  body: Uint8Array;
  contentType?: string;
}) {
  const s3 = getR2Client();
  const bucket = getR2SnapshotBucket();

  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: "public, max-age=604800, immutable",
    }),
  );
}

export async function getSignedSnapshotUrl(key: string, expiresInSeconds = 600) {
  const s3 = getR2Client();
  const bucket = getR2SnapshotBucket();

  const url = await getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    }),
    { expiresIn: expiresInSeconds },
  );

  return url;
}
