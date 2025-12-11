import Link from "next/link";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

const title = "Data Analysis Tools Directory";
const description =
  "Browse curated data analysis tools by category. Find BI, product analytics, ELT/ETL, warehouses, notebooks, governance, and AI assistants with quick links to each detail page.";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const metadata = {
  title: `${title} - DaTools`,
  description,
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools"),
  },
};

export default function DataAnalysisToolsPage() {
  const categories = dictionary.homeFeed.categories ?? [];
  const tools = dictionary.homeFeed.tools ?? [];
  const breadcrumb = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: buildCanonicalPath(),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Data Analysis Tools",
      item: buildCanonicalPath(undefined, "data-analysis-tools"),
    },
  ];
  const itemList = tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.name,
    url: buildCanonicalPath(undefined, tool.link?.replace(/^\//, "") ?? ""),
  }));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f] text-slate-50">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <header className="space-y-3">
          <p className="text-sm font-semibold text-[#12c2e9] uppercase tracking-wide">
            Data Analysis
          </p>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-base text-slate-200/90">{description}</p>
        </header>

        <section className="rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">Quick selection guide</h2>
          <p className="mt-2 text-sm text-slate-200">
            Start with BI/Visualization for dashboards, Product Analytics for events and retention, Experimentation/Attribution for A/B tests,
            ETL/ELT to sync data, Warehouse/Lake for storage and compute, Governance for quality and catalog, Notebook/Collaboration for analysis
            workflows, and AI/AutoML assistants for faster modeling. Choose based on deployment (Cloud vs. Self-hosted), pricing model (Free, Usage,
            Subscription), and your stack (e.g., dbt, warehouses, event pipelines).
          </p>
        </section>

        {categories.length ? (
          <section className="rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]">
            <h2 className="text-xl font-semibold text-slate-50">Categories</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.title}
                  href={`#${slugify(cat.title)}`}
                  className="inline-flex items-center rounded-lg border border-[#1e5bff]/40 bg-[#0b162e]/80 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-[#12c2e9] hover:text-[#12c2e9]"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {categories.map((cat) => {
          const anchor = slugify(cat.title);
          const toolNames = new Set(cat.items ?? []);
          const linkedTools = tools.filter((t) => toolNames.has(t.name));
          return (
            <section
              key={cat.title}
              id={anchor}
              className="space-y-4 rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-xl font-semibold text-slate-50">{cat.title}</h2>
                <Link
                  href="#top"
                  className="text-xs font-medium text-[#12c2e9] hover:text-[#f8a13c]"
                >
                  Back to top
                </Link>
              </div>
              <p className="text-sm text-slate-300">
                Explore popular tools in {cat.title}. Click a tool to view details, pricing, and deployment options.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {linkedTools.map((tool) => {
                  const detailHref = tool.link
                    ? tool.link.startsWith("/")
                      ? tool.link
                      : `/${tool.link}`
                    : "#";
                  return (
                    <Link
                      key={tool.name}
                      href={detailHref}
                      className="group rounded-lg border border-[#1e5bff]/30 bg-[#0b162e]/70 p-4 hover:border-[#12c2e9]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-50 group-hover:text-[#f8a13c]">
                            {tool.name}
                          </h3>
                          <p className="mt-1 text-sm text-slate-300">{tool.summary}</p>
                        </div>
                        <span className="rounded-full bg-[#1e5bff]/20 px-2 py-1 text-xs text-[#12c2e9]">
                          {tool.pricing}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
                        <span className="rounded-full border border-[#1e5bff]/30 px-2 py-1">
                          {tool.deployment}
                        </span>
                        {tool.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#1e5bff]/30 px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumb,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: itemList,
              name: "Data Analysis Tools",
              description,
            }),
          }}
        />
      </div>
    </main>
  );
}
