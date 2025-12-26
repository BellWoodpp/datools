# 环境变量配置说明

## 管理员配置

### ADMIN_EMAILS

**描述：** 配置管理员邮箱列表，多个邮箱用逗号分隔。

**示例：**
```bash
ADMIN_EMAILS=admin@example.com,owner@example.com,superuser@example.com
```

**用途：**
- 管理员可以访问管理后台（/admin/blogs）
- 管理员在用户菜单中会看到"管理后台"选项
- 管理员拥有所有博客的编辑和删除权限

**安全注意事项：**
- 不要在生产环境中公开这些邮箱
- 定期审查管理员列表
- 确保邮箱地址正确无误

## Sitemap 配置

### NEXT_PUBLIC_BASE_URL

**描述：** 网站的完整基础 URL，用于生成 sitemap.xml 和其他需要绝对 URL 的场景。

**示例：**
```bash
# 生产环境
NEXT_PUBLIC_BASE_URL=https://datools.org

# 开发环境（可选，默认使用 http://localhost:3000）
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**用途：**
- 生成 sitemap.xml 中的完整 URL
- 社交分享的 Open Graph 图片 URL
- 其他需要绝对 URL 的场景

**注意事项：**
- 生产环境必须设置此变量
- 必须以 `http://` 或 `https://` 开头
- 不要包含末尾的斜杠

## 网站快照（截图）配置

用于生成工具详情页的“官网快照”，截图会缓存到 Cloudflare R2 私有桶，并通过签名 URL 访问。

### R2_ENDPOINT

**描述：** Cloudflare R2 的 S3 兼容 Endpoint（通常包含你的 Account ID）。

**示例：**
```bash
R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
```

### R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY

**描述：** R2 的访问密钥（用于服务端读写私有桶）。

**示例：**
```bash
R2_ACCESS_KEY_ID=xxxx
R2_SECRET_ACCESS_KEY=yyyy
```

### R2_SNAPSHOTS_BUCKET

**描述：** 存放截图的私有桶名称。

**示例：**
```bash
R2_SNAPSHOTS_BUCKET=datools-snapshots
```

### SNAPSHOT_REFRESH_SECRET（可选）

**描述：** 用于强制刷新截图/手动触发 Cron 的服务端密钥（Bearer Token）。

**示例：**
```bash
SNAPSHOT_REFRESH_SECRET=your-long-random-string
```

## 完整环境变量列表

除了现有的环境变量（DATABASE_URL, BETTER_AUTH_SECRET 等），新增：

```bash
# 管理员邮箱（多个用逗号分隔）
ADMIN_EMAILS=admin@example.com,owner@example.com

# 网站基础 URL（用于 sitemap）
NEXT_PUBLIC_BASE_URL=https://datools.org

# Cloudflare R2 (site snapshots)
R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
R2_ACCESS_KEY_ID=xxxx
R2_SECRET_ACCESS_KEY=yyyy
R2_SNAPSHOTS_BUCKET=datools-snapshots
# 可选：用于强制刷新/手动触发
SNAPSHOT_REFRESH_SECRET=your-long-random-string
```

## 在 .env.local 中配置

在项目根目录的 `.env.local` 文件中添加：

```bash
# Admin Configuration
ADMIN_EMAILS=your-admin-email@example.com

# Website Base URL (for sitemap and social sharing)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

多个管理员：

```bash
ADMIN_EMAILS=admin1@example.com,admin2@example.com,admin3@example.com
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 使用示例

在代码中使用：

```typescript
import { isAdmin } from "@/lib/auth/admin";

const userEmail = session?.user?.email;
if (isAdmin(userEmail)) {
  // 用户是管理员
  // 显示管理员功能
}
```
