"use client";

import { getArchetypeById } from "@/lib/archetypes";

interface ResultCardProps {
  brand: string;
  archetypeId: string;
  content: string;
  isStreaming: boolean;
}

interface Section {
  title: string;
  icon: string;
  content: string;
}

function parseContent(raw: string): Section[] {
  const sections: Section[] = [
    { title: "Brand Voice", icon: "🎙️", content: "" },
    { title: "Tagline", icon: "💬", content: "" },
    { title: "Core Message", icon: "📣", content: "" },
    { title: "Visual Personality", icon: "🖼️", content: "" },
    { title: "Campaign Shift", icon: "📡", content: "" },
    { title: "Example Campaign Concept", icon: "🚀", content: "" },
  ];

  const headings = [
    "Brand Voice",
    "Tagline",
    "Core Message",
    "Visual Personality",
    "Campaign Shift",
    "Example Campaign Concept",
  ];

  let remaining = raw;

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const nextHeading = headings[i + 1];

    const headingRegex = new RegExp(`##\\s*${heading}\\s*\\n?`, "i");
    const match = remaining.match(headingRegex);

    if (!match || match.index === undefined) continue;

    const contentStart = match.index + match[0].length;
    let contentEnd: number;

    if (nextHeading) {
      const nextRegex = new RegExp(`##\\s*${nextHeading}`, "i");
      const nextMatch = remaining.match(nextRegex);
      contentEnd = nextMatch?.index ?? remaining.length;
    } else {
      contentEnd = remaining.length;
    }

    sections[i].content = remaining.slice(contentStart, contentEnd).trim();
  }

  return sections;
}

export function ResultCard({ brand, archetypeId, content, isStreaming }: ResultCardProps) {
  const archetype = getArchetypeById(archetypeId);
  const sections = parseContent(content);
  const hasContent = content.length > 10;

  if (!hasContent && !isStreaming) return null;

  return (
    <div className="w-full rounded-2xl border-2 border-stone-200 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div
        className="px-8 py-6 flex items-center gap-4"
        style={{
          background: `linear-gradient(135deg, #1C1C1E 0%, #2D2D30 100%)`,
        }}
      >
        <div className="text-4xl">{archetype?.emoji || "✨"}</div>
        <div>
          <p className="text-stone-400 text-xs font-semibold uppercase tracking-widest mb-1">
            Archetype Transformation
          </p>
          <h2 className="text-white text-xl font-bold">
            {brand}{" "}
            <span className="text-amber-400">as the {archetype?.name || archetypeId}</span>
          </h2>
          <p className="text-stone-400 text-sm mt-0.5">{archetype?.tagline}</p>
        </div>
        {isStreaming && (
          <div className="ml-auto flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-stone-400 text-xs font-medium">Generating…</span>
          </div>
        )}
      </div>

      {/* Sections */}
      <div className="divide-y divide-stone-100">
        {sections.map((section, i) => (
          <SectionBlock key={i} section={section} archetypeId={archetypeId} index={i} />
        ))}
      </div>

      {/* Footer */}
      {!isStreaming && hasContent && (
        <div className="px-8 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
          <p className="text-stone-400 text-xs">
            Brand Archetype Analyzer · {archetype?.traits.join(" · ")}
          </p>
        </div>
      )}
    </div>
  );
}

function SectionBlock({
  section,
  archetypeId,
  index,
}: {
  section: Section;
  archetypeId: string;
  index: number;
}) {
  const archetype = getArchetypeById(archetypeId);
  const isEmpty = !section.content;

  return (
    <div className={`px-8 py-6 ${isEmpty ? "opacity-40" : ""}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{section.icon}</span>
        <h3
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: archetype?.accentColor || "#92400e" }}
        >
          {section.title}
        </h3>
      </div>
      {isEmpty ? (
        <div className="h-4 bg-stone-100 rounded animate-pulse w-3/4" />
      ) : (
        <div className="text-stone-700 leading-relaxed text-sm whitespace-pre-wrap">
          {index === 1 ? (
            // Tagline gets special treatment
            <p className="text-2xl font-bold text-stone-900 italic leading-tight">
              &ldquo;{section.content.replace(/^["']|["']$/g, "")}&rdquo;
            </p>
          ) : index === 0 ? (
            // Brand Voice — split adjectives from description
            <BrandVoiceBlock content={section.content} accentColor={archetype?.accentColor} />
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      )}
    </div>
  );
}

function BrandVoiceBlock({
  content,
  accentColor,
}: {
  content: string;
  accentColor?: string;
}) {
  const lines = content.split("\n").filter(Boolean);
  const firstLine = lines[0] || "";
  const rest = lines.slice(1).join("\n").trim();

  // Try to detect comma-separated adjectives on first line
  const adjectives = firstLine.split(",").map((s) => s.trim()).filter(Boolean);
  const isAdjectiveLine = adjectives.length >= 2 && adjectives.length <= 5;

  return (
    <div className="space-y-3">
      {isAdjectiveLine ? (
        <div className="flex flex-wrap gap-2">
          {adjectives.map((adj, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: accentColor || "#92400e" }}
            >
              {adj}
            </span>
          ))}
        </div>
      ) : (
        <p>{firstLine}</p>
      )}
      {rest && <p className="text-stone-600 leading-relaxed">{rest}</p>}
    </div>
  );
}
