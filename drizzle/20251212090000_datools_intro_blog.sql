-- Seed a default author for blog content
INSERT INTO "users" ("id", "email", "display_name", "email_verified", "name")
VALUES (
  'blog-author-datools',
  'team@datools.org',
  'DaTools Team',
  true,
  'DaTools Team'
)
ON CONFLICT ("id") DO NOTHING;

-- Publish a product overview blog post
INSERT INTO "blogs" (
  "id",
  "author_id",
  "language",
  "title",
  "slug",
  "description",
  "content",
  "tags",
  "status",
  "visibility",
  "featured",
  "metadata",
  "published_at"
)
VALUES (
  'blog-what-is-datools',
  'blog-author-datools',
  'en',
  'What Is DaTools? A Quick Tour of Our Data Productivity Stack',
  'what-is-datools',
  'Learn what DaTools is for, what it does, and the value you get from day one.',
  to_json($$
# What Is DaTools?

DaTools is a modern workspace for teams that want trustworthy insights without wrangling a dozen disconnected tools. It blends data integration, analytics, collaboration, and governance so you can move from raw events to decision-ready dashboards in hours instead of weeks.

## Who DaTools Is For
- Founders and operators who need a clear view of activation, retention, and revenue.
- Data leads who want a governed, multi-tenant-ready stack without heavy ops work.
- Growth and product teams who need self-serve experiments, attribution, and feature analytics.

## What You Can Do With DaTools
- Connect your sources once and keep them synced with ELT connectors.
- Explore metrics with interactive dashboards, AI assistants, and shareable notebooks.
- Run product analytics, cohort studies, and A/B tests that tie to real revenue.
- Keep access, quality checks, and documentation in one place for the whole team.

## What You Get Inside DaTools
- **Unified workspace:** Warehousing, visualization, and collaboration under one roof.
- **Data-aware AI:** Natural-language answers, SQL drafting, and insight summaries.
- **Prebuilt templates:** Starter dashboards for acquisition, monetization, and ops.
- **Governance built-in:** Role-based access, lineage hints, and data quality signals.

## How DaTools Helps Your Team
- Ship reporting faster with fewer tools to wire together.
- Reduce maintenance overhead with managed connectors and sensible defaults.
- Improve confidence with consistent metrics, documentation, and review workflows.
- Give every team a safe self-serve surface so analysts focus on the hard problems.

## Get Started in Minutes
1) Create a workspace and invite your teammates.
2) Connect your primary data sources and choose a starter template.
3) Explore the live dashboards, ask the AI assistant for next steps, and share insights.

DaTools keeps your data reliable, your collaboration smooth, and your decisions fast—so you can focus on building.
$$),
  json_build_array('product', 'overview', 'data platform', 'announcement'),
  'published',
  'public',
  true,
  jsonb_build_object('category', 'product', 'source', 'seed')::json,
  now()
)
ON CONFLICT ("slug") DO UPDATE SET
  "title" = EXCLUDED."title",
  "description" = EXCLUDED."description",
  "content" = EXCLUDED."content",
  "tags" = EXCLUDED."tags",
  "status" = EXCLUDED."status",
  "visibility" = EXCLUDED."visibility",
  "featured" = EXCLUDED."featured",
  "metadata" = EXCLUDED."metadata",
  "published_at" = EXCLUDED."published_at",
  "updated_at" = now();
