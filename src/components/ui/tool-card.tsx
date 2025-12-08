'use client'

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageSquare } from "lucide-react";
import type { HomeFeedTool } from "@/i18n/types";
import { useState } from "react";

function highlightText(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "ig");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={`${part}-${index}`} className="text-red-500">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}-plain`}>{part}</span>
    ),
  );
}

interface ToolCardProps {
  tool: HomeFeedTool;
  viewDetailsLabel: string;
  visitSiteLabel: string;
  highlightTerm?: string;
  detailHref: string;
  officialHref?: string;
}

export function ToolCard({
  tool,
  viewDetailsLabel,
  visitSiteLabel,
  highlightTerm = "",
  detailHref,
  officialHref = "#",
}: ToolCardProps) {
  const isExternal = /^https?:\/\//i.test(officialHref);
  const [logoError, setLogoError] = useState(false);

  const renderLogo = () => {
    const fromConfig = tool.logo ?? tool.image;
    const official = tool.officialUrl && /^https?:\/\//i.test(tool.officialUrl) ? tool.officialUrl : undefined;
    const fromOfficial = (() => {
      if (!official) return undefined;
      try {
        const url = new URL(official);
        return `${url.origin}/favicon.ico`;
      } catch {
        return undefined;
      }
    })();
    const logoSrc = fromConfig ?? fromOfficial;

    if (logoSrc && !logoError) {
      return (
        <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-[#1e5bff]/40 bg-[#0f1f3f]">
          <Image
            src={logoSrc}
            alt={tool.name}
            fill
            sizes="36px"
            className="object-contain p-1.5"
            onError={() => setLogoError(true)}
          />
        </div>
      );
    }

    return (
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#1e5bff]/30 bg-[#0f1f3f]">
        <ReactGlyph />
      </div>
    );
  };

  return (
    <Card className="overflow-hidden border border-[#1e5bff]/30 bg-[#0b162e]/90 shadow-[0_15px_40px_-18px_rgba(30,91,255,0.65)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(18,194,233,0.7)]">
      {tool.image ? (
        <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      ) : null}
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {renderLogo()}
            <div>
              <CardTitle className="text-lg text-slate-100">{highlightText(tool.name, highlightTerm)}</CardTitle>
              <p className="text-sm text-slate-300">
                {highlightText(tool.summary, highlightTerm)}
              </p>
            </div>
          </div>
          <div className="text-right text-sm font-semibold text-slate-100">
            <div className="text-[#f8a13c]">▲ {tool.votes}</div>
            <div className="text-xs text-slate-400">
              <MessageSquare className="mr-1 inline-block h-4 w-4 align-middle" />
              {tool.comments}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {highlightText(tag, highlightTerm)}
            </Badge>
          ))}
          <Badge variant="outline">{highlightText(tool.pricing, highlightTerm)}</Badge>
          <Badge variant="outline">{highlightText(tool.deployment, highlightTerm)}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex items-center justify-between px-6 pb-6 pt-0">
        <Link
          href={detailHref}
          className="inline-flex items-center text-sm font-semibold text-[#12c2e9] hover:text-[#f8a13c]"
        >
          {viewDetailsLabel}
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
        <Button
          size="sm"
          className="bg-gradient-to-r from-[#12c2e9] to-[#1e5bff] text-white shadow-[0_10px_25px_-12px_rgba(30,91,255,0.75)] hover:from-[#1e5bff] hover:to-[#12c2e9]"
          asChild
        >
          <Link href={officialHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
            {visitSiteLabel}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ReactGlyph() {
  return (
    <svg viewBox="0 0 256 256" className="h-6 w-6 text-[#61dafb]" role="img" aria-label="React logo">
      <g fill="none" stroke="currentColor" strokeWidth="16">
        <circle cx="128" cy="128" r="24" />
        <ellipse cx="128" cy="128" rx="92" ry="36" />
        <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(120 128 128)" />
      </g>
    </svg>
  );
}
