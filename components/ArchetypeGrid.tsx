"use client";

import { ARCHETYPES, Archetype } from "@/lib/archetypes";

interface ArchetypeGridProps {
  selected: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export function ArchetypeGrid({ selected, onSelect, disabled }: ArchetypeGridProps) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
        Select Target Archetype
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {ARCHETYPES.map((archetype) => (
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
      className={`
        relative group text-left p-4 rounded-xl border-2 transition-all duration-200
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:shadow-md hover:-translate-y-0.5"}
        ${isSelected
          ? `${archetype.bgColor} ${archetype.borderColor} shadow-sm`
          : "bg-white border-stone-200 hover:border-stone-300"
        }
      `}
      aria-pressed={isSelected}
      aria-label={`${archetype.name}: ${archetype.tagline}`}
    >
      {isSelected && (
        <div
          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: archetype.accentColor }}
        >
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      <span className="text-2xl block mb-2">{archetype.emoji}</span>
      <span
        className={`block font-semibold text-sm mb-1 ${
          isSelected ? archetype.textColor : "text-stone-800"
        }`}
      >
        {archetype.name}
      </span>
      <span className="block text-xs text-stone-500 leading-snug line-clamp-2">
        {archetype.tagline}
      </span>
    </button>
  );
}
