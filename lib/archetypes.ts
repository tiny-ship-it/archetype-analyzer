export interface Archetype {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  traits: string[];
  accentColor: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

export const ARCHETYPES: Archetype[] = [
  {
    id: "innocent",
    name: "Innocent",
    emoji: "🌸",
    tagline: "Optimism, purity, simplicity, safety",
    traits: ["Pure", "Joyful", "Trustworthy"],
    accentColor: "#F9A825",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    id: "sage",
    name: "Sage",
    emoji: "🦉",
    tagline: "Knowledge, wisdom, guidance, truth",
    traits: ["Wise", "Thoughtful", "Authoritative"],
    accentColor: "#2E7D32",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    id: "explorer",
    name: "Explorer",
    emoji: "🧭",
    tagline: "Adventure, discovery, freedom, authenticity",
    traits: ["Bold", "Adventurous", "Independent"],
    accentColor: "#E65100",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
  },
  {
    id: "outlaw",
    name: "Outlaw",
    emoji: "💥",
    tagline: "Disruption, rebellion, challenge, revolution",
    traits: ["Defiant", "Provocative", "Raw"],
    accentColor: "#C62828",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    id: "magician",
    name: "Magician",
    emoji: "✨",
    tagline: "Transformation, vision, wonder, make it happen",
    traits: ["Visionary", "Transformative", "Mystical"],
    accentColor: "#6A1B9A",
    bgColor: "bg-fuchsia-50",
    textColor: "text-fuchsia-700",
    borderColor: "border-fuchsia-200",
  },
  {
    id: "hero",
    name: "Hero",
    emoji: "⚡",
    tagline: "Courage, mastery, strength, overcoming obstacles",
    traits: ["Courageous", "Determined", "Inspiring"],
    accentColor: "#1565C0",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    id: "lover",
    name: "Lover",
    emoji: "💖",
    tagline: "Connection, intimacy, beauty, passion",
    traits: ["Passionate", "Sensual", "Devoted"],
    accentColor: "#AD1457",
    bgColor: "bg-rose-50",
    textColor: "text-rose-700",
    borderColor: "border-rose-200",
  },
  {
    id: "jester",
    name: "Jester",
    emoji: "🎭",
    tagline: "Playfulness, humor, joy, living in the moment",
    traits: ["Playful", "Witty", "Spontaneous"],
    accentColor: "#F57F17",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
  },
  {
    id: "everyman",
    name: "Everyman",
    emoji: "🤝",
    tagline: "Belonging, community, realism, being down to earth",
    traits: ["Relatable", "Humble", "Genuine"],
    accentColor: "#4E342E",
    bgColor: "bg-stone-50",
    textColor: "text-stone-700",
    borderColor: "border-stone-200",
  },
  {
    id: "caregiver",
    name: "Caregiver",
    emoji: "💚",
    tagline: "Nurturing, protection, service, compassion",
    traits: ["Nurturing", "Compassionate", "Generous"],
    accentColor: "#2E7D32",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
  },
  {
    id: "ruler",
    name: "Ruler",
    emoji: "👑",
    tagline: "Control, stability, leadership, excellence",
    traits: ["Commanding", "Refined", "Authoritative"],
    accentColor: "#1A1A2E",
    bgColor: "bg-slate-50",
    textColor: "text-slate-700",
    borderColor: "border-slate-300",
  },
  {
    id: "creator",
    name: "Creator",
    emoji: "🎨",
    tagline: "Innovation, expression, imagination, originality",
    traits: ["Creative", "Expressive", "Inventive"],
    accentColor: "#D84315",
    bgColor: "bg-amber-50",
    textColor: "text-amber-800",
    borderColor: "border-amber-300",
  },
];

export function getArchetypeById(id: string): Archetype | undefined {
  return ARCHETYPES.find((a) => a.id === id);
}
