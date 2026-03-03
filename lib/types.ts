export interface ArchetypeStrategy {
  tagline: string;
  coreMotivation: string;
  deepestFear: string;
  brandPromise: string;
  toneOfVoice: {
    summary: string;
    keywords: string[];
    doThis: string[];
    avoidThis: string[];
  };
  brandPillars: {
    pillar: string;
    description: string;
  }[];
  contentHooks: string[];
  storytellingStyle: string;
  visualMood: string[];
  categoryId: string;
  differentiator: string;
}

// Legacy alias
export type Strategy = ArchetypeStrategy;

export interface Archetype {
  id: string;
  name: string;
  description: string;
  traits: string[];
  image: string;
  color: string;
  emoji: string;
  category: string;
  strategy?: ArchetypeStrategy;
}
