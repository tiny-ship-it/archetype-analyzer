"use client";

import { getArchetypesByCategory, CATEGORY_ORDER, type Archetype } from "@/lib/archetypes";

interface ArchetypeGridProps {
  selected: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

// Convert hex color to a very light alpha variant for selected bg
function hexToAlpha(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ArchetypeGrid({ selected, onSelect, disabled }: ArchetypeGridProps) {
  const byCategory = getArchetypesByCategory();

  return (
    <div className="space-y-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
        Select Target Archetype
      </h2>
      {CATEGORY_ORDER.map((category) => {
        const archetypes = byCategory[category];
        if (!archetypes?.length) return null;
        return (
          <div key={category}>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 pl-0.5">
              {category}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {archetypes.map((archetype) => (
                <ArchetypeCard
                  key={archetype.id}
                  archetype={archetype}
                  isSelected={selected === archetype.id}
                  onSelect={onSelect}
                  disabled={disabled}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface ArchetypeCardProps {
  archetype: Archetype;
  isSelected: boolean;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

function ArchetypeCard({ archetype, isSelected, onSelect, disabled }: ArchetypeCardProps) {
  return (
    <button
      onClick={() => !disabled && onSelect(archetype.id)}
      disabled={disabled}
      style={
        isSelected
          ? {
              backgroundColor: hexToAlpha(archetype.color, 0.1),
              borderColor: archetype.color,
            }
          : undefined
      }
      className={`
        relative group text-left p-3 rounded-xl border-2 transition-all duration-200
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:shadow-md hover:-translate-y-0.5"}
        ${isSelected ? "shadow-sm" : "bg-white border-stone-200 hover:border-stone-300"}
      `}
      aria-pressed={isSelected}
      aria-label={`${archetype.name}: ${archetype.description}`}
    >
      {isSelected && (
        <div
          className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: archetype.color }}
        >
          <svg
            className="w-2.5 h-2.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      <span className="text-xl block mb-1.5">{archetype.emoji}</span>
      <span
        className="block font-semibold text-xs mb-1 leading-tight"
        style={{ color: isSelected ? archetype.color : undefined }}
      >
        {archetype.name.replace('The ', '')}
      </span>
      <span className="block text-xs text-stone-400 leading-snug line-clamp-2">
        {archetype.description.split('.')[0]}.
      </span>
    </button>
  );
}
