import type { Archetype } from './types';
import { archetypeStrategies } from './archetype-strategies';

export type { Archetype };

// TinyWins Custom Archetypes - 60 unique brand personalities
// Strategy data is merged from archetype-strategies.ts

const ARCHETYPE_EMOJIS: Record<string, string> = {
  // Connection & Service
  everyman: '🤝', citizen: '🗳️', advocate: '✊', networker: '🕸️', servant: '🙏',
  // Strength & Action
  hero: '⚡', athlete: '🏃', warrior: '⚔️', liberator: '🔓', rescuer: '🚨',
  // Disruption & Change
  outlaw: '💥', activist: '📢', gambler: '🎲', reformer: '📜', maverick: '🦅',
  // Care & Nurturing
  caregiver: '💚', angel: '😇', guardian: '🛡️', samaritan: '🤲', healer: '🌿',
  // Innocence & Vision
  innocent: '🌸', muse: '🎭', dreamer: '💭', idealist: '⭐', child: '🎈',
  // Wisdom & Knowledge
  sage: '🦉', detective: '🔍', mentor: '📚', shaman: '🔮', translator: '🌐',
  // Entertainment & Joy
  jester: '🃏', provocateur: '💣', shapeshifter: '🦋', entertainer: '🎪', clown: '🤡',
  // Exploration & Discovery
  explorer: '🧭', adventurer: '🏔️', pioneer: '🚀', generalist: '🔧', seeker: '🔭',
  // Creation & Innovation
  creator: '🎨', entrepreneur: '💡', storyteller: '📖', artist: '🖌️', visionary: '👁️',
  // Magic & Transformation
  magician: '✨', alchemist: '⚗️', engineer: '⚙️', scientist: '🔬', innovator: '🧪',
  // Love & Connection
  lover: '💖', romantic: '🌹', matchmaker: '💘', companion: '🫂', hedonist: '🍷',
  // Authority & Leadership
  ruler: '👑', judge: '⚖️', sovereign: '🏛️', patriarch: '🌳', ambassador: '🕊️',
};

const ARCHETYPE_CATEGORIES: Record<string, string> = {
  everyman: 'Connection & Service',
  citizen: 'Connection & Service',
  advocate: 'Connection & Service',
  networker: 'Connection & Service',
  servant: 'Connection & Service',
  hero: 'Strength & Action',
  athlete: 'Strength & Action',
  warrior: 'Strength & Action',
  liberator: 'Strength & Action',
  rescuer: 'Strength & Action',
  outlaw: 'Disruption & Change',
  activist: 'Disruption & Change',
  gambler: 'Disruption & Change',
  reformer: 'Disruption & Change',
  maverick: 'Disruption & Change',
  caregiver: 'Care & Nurturing',
  angel: 'Care & Nurturing',
  guardian: 'Care & Nurturing',
  samaritan: 'Care & Nurturing',
  healer: 'Care & Nurturing',
  innocent: 'Innocence & Vision',
  muse: 'Innocence & Vision',
  dreamer: 'Innocence & Vision',
  idealist: 'Innocence & Vision',
  child: 'Innocence & Vision',
  sage: 'Wisdom & Knowledge',
  detective: 'Wisdom & Knowledge',
  mentor: 'Wisdom & Knowledge',
  shaman: 'Wisdom & Knowledge',
  translator: 'Wisdom & Knowledge',
  jester: 'Entertainment & Joy',
  provocateur: 'Entertainment & Joy',
  shapeshifter: 'Entertainment & Joy',
  entertainer: 'Entertainment & Joy',
  clown: 'Entertainment & Joy',
  explorer: 'Exploration & Discovery',
  adventurer: 'Exploration & Discovery',
  pioneer: 'Exploration & Discovery',
  generalist: 'Exploration & Discovery',
  seeker: 'Exploration & Discovery',
  creator: 'Creation & Innovation',
  entrepreneur: 'Creation & Innovation',
  storyteller: 'Creation & Innovation',
  artist: 'Creation & Innovation',
  visionary: 'Creation & Innovation',
  magician: 'Magic & Transformation',
  alchemist: 'Magic & Transformation',
  engineer: 'Magic & Transformation',
  scientist: 'Magic & Transformation',
  innovator: 'Magic & Transformation',
  lover: 'Love & Connection',
  romantic: 'Love & Connection',
  matchmaker: 'Love & Connection',
  companion: 'Love & Connection',
  hedonist: 'Love & Connection',
  ruler: 'Authority & Leadership',
  judge: 'Authority & Leadership',
  sovereign: 'Authority & Leadership',
  patriarch: 'Authority & Leadership',
  ambassador: 'Authority & Leadership',
};

const baseArchetypes = [
  // Row 1 - Connection & Service
  {
    id: 'everyman',
    name: 'The Everyman',
    description: 'Relatable, down-to-earth, and authentic. Connects through shared experiences and genuine understanding.',
    traits: ['authentic', 'relatable', 'humble', 'approachable', 'genuine'],
    image: '/archetypes/everyman.png',
    color: '#8B7355',
  },
  {
    id: 'citizen',
    name: 'The Citizen',
    description: 'Civic-minded and community-focused. Values belonging and contributing to the greater good.',
    traits: ['responsible', 'community-focused', 'democratic', 'fair', 'inclusive'],
    image: '/archetypes/citizen.png',
    color: '#5F9EA0',
  },
  {
    id: 'advocate',
    name: 'The Advocate',
    description: 'Champions causes and speaks up for others. Passionate about making a difference.',
    traits: ['passionate', 'persuasive', 'dedicated', 'empathetic', 'vocal'],
    image: '/archetypes/advocate.png',
    color: '#4169E1',
  },
  {
    id: 'networker',
    name: 'The Networker',
    description: 'Master connector who brings people together. Builds bridges between communities and ideas.',
    traits: ['social', 'connected', 'resourceful', 'charismatic', 'collaborative'],
    image: '/archetypes/networker.png',
    color: '#FF6B6B',
  },
  {
    id: 'servant',
    name: 'The Servant',
    description: 'Selflessly serves others with humility and grace. Finds fulfillment in helping.',
    traits: ['humble', 'selfless', 'dedicated', 'caring', 'patient'],
    image: '/archetypes/servant.png',
    color: '#98D8C8',
  },
  // Row 2 - Strength & Action
  {
    id: 'hero',
    name: 'The Hero',
    description: 'Courageous and determined to prove worth through brave acts. Overcomes challenges with strength.',
    traits: ['brave', 'determined', 'honorable', 'strong', 'inspiring'],
    image: '/archetypes/hero.png',
    color: '#DC143C',
  },
  {
    id: 'athlete',
    name: 'The Athlete',
    description: 'Disciplined and competitive. Pushes limits and strives for excellence through dedication.',
    traits: ['disciplined', 'competitive', 'resilient', 'focused', 'driven'],
    image: '/archetypes/athlete.png',
    color: '#FF8C00',
  },
  {
    id: 'warrior',
    name: 'The Warrior',
    description: 'Fierce protector who fights for what matters. Combines strength with purpose.',
    traits: ['fierce', 'protective', 'strategic', 'fearless', 'loyal'],
    image: '/archetypes/warrior.png',
    color: '#B22222',
  },
  {
    id: 'liberator',
    name: 'The Liberator',
    description: 'Breaks chains and frees minds. Champions freedom and independence for all.',
    traits: ['revolutionary', 'bold', 'inspiring', 'principled', 'fearless'],
    image: '/archetypes/liberator.png',
    color: '#2E8B57',
  },
  {
    id: 'rescuer',
    name: 'The Rescuer',
    description: 'Swift to help those in need. Combines courage with compassion to save others.',
    traits: ['heroic', 'compassionate', 'quick-thinking', 'brave', 'protective'],
    image: '/archetypes/rescuer.png',
    color: '#FF4500',
  },
  // Row 3 - Disruption & Change
  {
    id: 'outlaw',
    name: 'The Outlaw',
    description: 'Rebels against the status quo. Challenges conventions and breaks the rules that need breaking.',
    traits: ['rebellious', 'disruptive', 'bold', 'unconventional', 'fearless'],
    image: '/archetypes/outlaw.png',
    color: '#2F4F4F',
  },
  {
    id: 'activist',
    name: 'The Activist',
    description: 'Fights for change and social justice. Mobilizes others to create a better world.',
    traits: ['passionate', 'determined', 'vocal', 'committed', 'inspiring'],
    image: '/archetypes/activist.png',
    color: '#32CD32',
  },
  {
    id: 'gambler',
    name: 'The Gambler',
    description: 'Takes calculated risks for big rewards. Lives on the edge with style and confidence.',
    traits: ['risk-taking', 'confident', 'strategic', 'daring', 'lucky'],
    image: '/archetypes/gambler.png',
    color: '#DAA520',
  },
  {
    id: 'reformer',
    name: 'The Reformer',
    description: 'Works within systems to change them. Combines idealism with practical action.',
    traits: ['principled', 'methodical', 'persistent', 'ethical', 'visionary'],
    image: '/archetypes/reformer.png',
    color: '#4682B4',
  },
  {
    id: 'maverick',
    name: 'The Maverick',
    description: 'Independent thinker who forges their own path. Refuses to conform to expectations.',
    traits: ['independent', 'unconventional', 'innovative', 'bold', 'original'],
    image: '/archetypes/maverick.png',
    color: '#FF6B35',
  },
  // Row 4 - Care & Nurturing
  {
    id: 'caregiver',
    name: 'The Caregiver',
    description: "Nurtures and protects others with compassion. Puts others' needs before their own.",
    traits: ['nurturing', 'compassionate', 'selfless', 'protective', 'generous'],
    image: '/archetypes/caregiver.png',
    color: '#E75480',
  },
  {
    id: 'angel',
    name: 'The Angel',
    description: 'Pure-hearted guide who brings light to darkness. Offers hope and divine inspiration.',
    traits: ['pure', 'hopeful', 'inspiring', 'gentle', 'guiding'],
    image: '/archetypes/angel.png',
    color: '#9B8EB8',
  },
  {
    id: 'guardian',
    name: 'The Guardian',
    description: 'Watchful protector who keeps others safe. Stands vigilant against threats.',
    traits: ['protective', 'vigilant', 'reliable', 'strong', 'trustworthy'],
    image: '/archetypes/guardian.png',
    color: '#708090',
  },
  {
    id: 'samaritan',
    name: 'The Samaritan',
    description: 'Helps strangers without expectation. Embodies kindness and unexpected generosity.',
    traits: ['kind', 'generous', 'humble', 'compassionate', 'selfless'],
    image: '/archetypes/samaritan.png',
    color: '#3CB371',
  },
  {
    id: 'healer',
    name: 'The Healer',
    description: 'Restores wellness and wholeness. Brings healing through understanding and care.',
    traits: ['restorative', 'empathetic', 'patient', 'wise', 'gentle'],
    image: '/archetypes/healer.png',
    color: '#20B2AA',
  },
  // Row 5 - Innocence & Vision
  {
    id: 'innocent',
    name: 'The Innocent',
    description: 'Pure and optimistic. Sees the good in everything and everyone with childlike wonder.',
    traits: ['optimistic', 'pure', 'trusting', 'hopeful', 'simple'],
    image: '/archetypes/innocent.png',
    color: '#F9A825',
  },
  {
    id: 'muse',
    name: 'The Muse',
    description: 'Inspires creativity in others. Sparks imagination and artistic expression.',
    traits: ['inspiring', 'creative', 'enchanting', 'artistic', 'mysterious'],
    image: '/archetypes/muse.png',
    color: '#C2698F',
  },
  {
    id: 'dreamer',
    name: 'The Dreamer',
    description: 'Lives in possibility. Imagines better worlds and inspires others to dream big.',
    traits: ['imaginative', 'hopeful', 'idealistic', 'creative', 'visionary'],
    image: '/archetypes/dreamer.png',
    color: '#6495ED',
  },
  {
    id: 'idealist',
    name: 'The Idealist',
    description: 'Holds high principles and believes in the best. Strives for perfection and meaning.',
    traits: ['principled', 'optimistic', 'passionate', 'ethical', 'dedicated'],
    image: '/archetypes/idealist.png',
    color: '#DAA520',
  },
  {
    id: 'child',
    name: 'The Child',
    description: 'Embodies wonder, spontaneity, and joy. Approaches life with curiosity and playfulness.',
    traits: ['curious', 'playful', 'spontaneous', 'joyful', 'open'],
    image: '/archetypes/child.png',
    color: '#FF69B4',
  },
  // Row 6 - Wisdom & Knowledge
  {
    id: 'sage',
    name: 'The Sage',
    description: 'Seeks truth and understanding. Shares wisdom to help others navigate complexity.',
    traits: ['wise', 'knowledgeable', 'thoughtful', 'analytical', 'guiding'],
    image: '/archetypes/sage.png',
    color: '#2E7D32',
  },
  {
    id: 'detective',
    name: 'The Detective',
    description: 'Uncovers hidden truths. Combines keen observation with relentless curiosity.',
    traits: ['observant', 'analytical', 'persistent', 'clever', 'curious'],
    image: '/archetypes/detective.png',
    color: '#5C4033',
  },
  {
    id: 'mentor',
    name: 'The Mentor',
    description: 'Guides others on their journey. Shares experience to help others grow.',
    traits: ['wise', 'patient', 'supportive', 'experienced', 'encouraging'],
    image: '/archetypes/mentor.png',
    color: '#8B4513',
  },
  {
    id: 'shaman',
    name: 'The Shaman',
    description: 'Bridges the spiritual and material worlds. Offers deep wisdom and transformation.',
    traits: ['mystical', 'wise', 'transformative', 'intuitive', 'healing'],
    image: '/archetypes/shaman.png',
    color: '#6B8E23',
  },
  {
    id: 'translator',
    name: 'The Translator',
    description: 'Makes the complex simple. Bridges understanding between different worlds.',
    traits: ['clear', 'patient', 'knowledgeable', 'empathetic', 'articulate'],
    image: '/archetypes/translator.png',
    color: '#5F9EA0',
  },
  // Row 7 - Entertainment & Joy
  {
    id: 'jester',
    name: 'The Jester',
    description: 'Brings joy through humor. Uses wit to speak truth and lighten heavy moments.',
    traits: ['funny', 'witty', 'joyful', 'irreverent', 'clever'],
    image: '/archetypes/jester.png',
    color: '#F57F17',
  },
  {
    id: 'provocateur',
    name: 'The Provocateur',
    description: 'Challenges comfortable thinking. Uses shock and surprise to spark change.',
    traits: ['bold', 'challenging', 'creative', 'unconventional', 'thought-provoking'],
    image: '/archetypes/provocateur.png',
    color: '#C2185B',
  },
  {
    id: 'shapeshifter',
    name: 'The Shapeshifter',
    description: 'Adapts and transforms. Embraces change and shows many faces to the world.',
    traits: ['adaptable', 'mysterious', 'versatile', 'unpredictable', 'fluid'],
    image: '/archetypes/shapeshifter.png',
    color: '#00897B',
  },
  {
    id: 'entertainer',
    name: 'The Entertainer',
    description: 'Captivates and delights audiences. Lives to bring joy and excitement.',
    traits: ['charismatic', 'energetic', 'talented', 'engaging', 'joyful'],
    image: '/archetypes/entertainer.png',
    color: '#FF4500',
  },
  {
    id: 'clown',
    name: 'The Clown',
    description: "Brings laughter through absurdity. Reminds us not to take life too seriously.",
    traits: ['playful', 'absurd', 'joyful', 'spontaneous', 'liberating'],
    image: '/archetypes/clown.png',
    color: '#FF6347',
  },
  // Row 8 - Exploration & Discovery
  {
    id: 'explorer',
    name: 'The Explorer',
    description: 'Seeks new frontiers and experiences. Driven by curiosity and desire for freedom.',
    traits: ['adventurous', 'curious', 'independent', 'brave', 'restless'],
    image: '/archetypes/explorer.png',
    color: '#228B22',
  },
  {
    id: 'adventurer',
    name: 'The Adventurer',
    description: 'Thrives on excitement and new experiences. Embraces risk for the thrill of discovery.',
    traits: ['daring', 'energetic', 'spontaneous', 'bold', 'free-spirited'],
    image: '/archetypes/adventurer.png',
    color: '#FF8C00',
  },
  {
    id: 'pioneer',
    name: 'The Pioneer',
    description: 'Charts new territory. First to venture into the unknown and pave the way.',
    traits: ['innovative', 'brave', 'determined', 'visionary', 'resilient'],
    image: '/archetypes/pioneer.png',
    color: '#CD853F',
  },
  {
    id: 'generalist',
    name: 'The Generalist',
    description: 'Master of many trades. Connects diverse skills and knowledge in unique ways.',
    traits: ['versatile', 'curious', 'adaptable', 'creative', 'broad-minded'],
    image: '/archetypes/generalist.png',
    color: '#FF6B35',
  },
  {
    id: 'seeker',
    name: 'The Seeker',
    description: 'On a quest for deeper meaning. Searches for truth and authentic experience.',
    traits: ['searching', 'curious', 'spiritual', 'restless', 'authentic'],
    image: '/archetypes/seeker.png',
    color: '#6A0572',
  },
  // Row 9 - Creation & Innovation
  {
    id: 'creator',
    name: 'The Creator',
    description: 'Brings new things into existence. Driven by imagination and desire to express.',
    traits: ['creative', 'imaginative', 'expressive', 'visionary', 'innovative'],
    image: '/archetypes/creator.png',
    color: '#D84315',
  },
  {
    id: 'entrepreneur',
    name: 'The Entrepreneur',
    description: 'Builds something from nothing. Combines vision with action to create value.',
    traits: ['driven', 'innovative', 'risk-taking', 'ambitious', 'resourceful'],
    image: '/archetypes/entrepreneur.png',
    color: '#00897B',
  },
  {
    id: 'storyteller',
    name: 'The Storyteller',
    description: 'Weaves narratives that captivate and inspire. Shares meaning through story.',
    traits: ['articulate', 'imaginative', 'engaging', 'empathetic', 'memorable'],
    image: '/archetypes/storyteller.png',
    color: '#7B3F00',
  },
  {
    id: 'artist',
    name: 'The Artist',
    description: 'Expresses inner vision through creative works. Sees beauty others miss.',
    traits: ['creative', 'expressive', 'sensitive', 'visionary', 'original'],
    image: '/archetypes/artist.png',
    color: '#AD1457',
  },
  {
    id: 'visionary',
    name: 'The Visionary',
    description: "Sees possibilities others can't. Inspires others with compelling futures.",
    traits: ['forward-thinking', 'inspiring', 'innovative', 'bold', 'idealistic'],
    image: '/archetypes/visionary.png',
    color: '#00838F',
  },
  // Row 10 - Magic & Transformation
  {
    id: 'magician',
    name: 'The Magician',
    description: 'Transforms reality and makes dreams come true. Masters the art of change.',
    traits: ['transformative', 'visionary', 'charismatic', 'intuitive', 'powerful'],
    image: '/archetypes/magician.png',
    color: '#558B2F',
  },
  {
    id: 'alchemist',
    name: 'The Alchemist',
    description: 'Transforms the ordinary into extraordinary. Finds gold in unexpected places.',
    traits: ['transformative', 'patient', 'mysterious', 'wise', 'experimental'],
    image: '/archetypes/alchemist.png',
    color: '#B8860B',
  },
  {
    id: 'engineer',
    name: 'The Engineer',
    description: 'Designs systems that work. Combines creativity with precision to solve problems.',
    traits: ['analytical', 'precise', 'innovative', 'systematic', 'practical'],
    image: '/archetypes/engineer.png',
    color: '#1565C0',
  },
  {
    id: 'scientist',
    name: 'The Scientist',
    description: 'Discovers truth through observation and experiment. Pushes boundaries of knowledge.',
    traits: ['curious', 'methodical', 'analytical', 'skeptical', 'innovative'],
    image: '/archetypes/scientist.png',
    color: '#00838F',
  },
  {
    id: 'innovator',
    name: 'The Innovator',
    description: 'Creates breakthrough solutions. Combines vision with execution to change the game.',
    traits: ['inventive', 'bold', 'persistent', 'visionary', 'disruptive'],
    image: '/archetypes/innovator.png',
    color: '#2E7D32',
  },
  // Row 11 - Love & Connection
  {
    id: 'lover',
    name: 'The Lover',
    description: 'Values intimacy, passion, and beauty. Creates deep emotional connections.',
    traits: ['passionate', 'sensual', 'devoted', 'appreciative', 'warm'],
    image: '/archetypes/lover.png',
    color: '#C62828',
  },
  {
    id: 'romantic',
    name: 'The Romantic',
    description: 'Sees magic in love and life. Creates beauty through passion and imagination.',
    traits: ['passionate', 'idealistic', 'expressive', 'devoted', 'dreamy'],
    image: '/archetypes/romantic.png',
    color: '#E91E8C',
  },
  {
    id: 'matchmaker',
    name: 'The Matchmaker',
    description: 'Brings people together. Sees connections others miss and creates lasting bonds.',
    traits: ['perceptive', 'social', 'caring', 'strategic', 'generous'],
    image: '/archetypes/matchmaker.png',
    color: '#AD1457',
  },
  {
    id: 'companion',
    name: 'The Companion',
    description: "Loyal friend who's always there. Values deep, lasting relationships.",
    traits: ['loyal', 'supportive', 'reliable', 'empathetic', 'trustworthy'],
    image: '/archetypes/companion.png',
    color: '#827717',
  },
  {
    id: 'hedonist',
    name: 'The Hedonist',
    description: 'Celebrates pleasure and sensory experience. Lives life to the fullest.',
    traits: ['pleasure-seeking', 'sensual', 'joyful', 'indulgent', 'present'],
    image: '/archetypes/hedonist.png',
    color: '#BF360C',
  },
  // Row 12 - Authority & Leadership
  {
    id: 'ruler',
    name: 'The Ruler',
    description: 'Takes charge and creates order. Exercises power responsibly for the greater good.',
    traits: ['authoritative', 'responsible', 'strategic', 'confident', 'decisive'],
    image: '/archetypes/ruler.png',
    color: '#1A237E',
  },
  {
    id: 'judge',
    name: 'The Judge',
    description: 'Weighs evidence and delivers fair verdicts. Values justice and truth above all.',
    traits: ['fair', 'wise', 'authoritative', 'principled', 'impartial'],
    image: '/archetypes/judge.png',
    color: '#37474F',
  },
  {
    id: 'sovereign',
    name: 'The Sovereign',
    description: 'Rules with grace and wisdom. Embodies nobility and responsible power.',
    traits: ['noble', 'wise', 'dignified', 'responsible', 'commanding'],
    image: '/archetypes/sovereign.png',
    color: '#7B1FA2',
  },
  {
    id: 'patriarch',
    name: 'The Patriarch',
    description: 'Heads the family with wisdom and protection. Guides with experience and authority.',
    traits: ['protective', 'wise', 'traditional', 'authoritative', 'providing'],
    image: '/archetypes/patriarch.png',
    color: '#33691E',
  },
  {
    id: 'ambassador',
    name: 'The Ambassador',
    description: 'Represents and bridges different worlds. Builds understanding across boundaries.',
    traits: ['diplomatic', 'articulate', 'cultural', 'persuasive', 'trustworthy'],
    image: '/archetypes/ambassador.png',
    color: '#1565C0',
  },
];

// Merge base archetypes with emoji, category, and strategy data
export const ARCHETYPES: Archetype[] = baseArchetypes.map(archetype => ({
  ...archetype,
  emoji: ARCHETYPE_EMOJIS[archetype.id] || '🔷',
  category: ARCHETYPE_CATEGORIES[archetype.id] || 'Other',
  strategy: archetypeStrategies[archetype.id],
}));

// Category order for display
export const CATEGORY_ORDER = [
  'Connection & Service',
  'Strength & Action',
  'Disruption & Change',
  'Care & Nurturing',
  'Innocence & Vision',
  'Wisdom & Knowledge',
  'Entertainment & Joy',
  'Exploration & Discovery',
  'Creation & Innovation',
  'Magic & Transformation',
  'Love & Connection',
  'Authority & Leadership',
];

// Get archetype by ID
export function getArchetypeById(id: string): Archetype | undefined {
  return ARCHETYPES.find(a => a.id === id);
}

// Get random archetypes for display
export function getRandomArchetypes(count: number): Archetype[] {
  const shuffled = [...ARCHETYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Get archetypes grouped by category
export function getArchetypesByCategory(): Record<string, Archetype[]> {
  return ARCHETYPES.reduce<Record<string, Archetype[]>>((acc, a) => {
    if (!acc[a.category]) acc[a.category] = [];
    acc[a.category].push(a);
    return acc;
  }, {});
}

// Legacy category grouping (IDs only)
export const archetypeCategories = {
  connection: ['everyman', 'citizen', 'advocate', 'networker', 'servant'],
  strength: ['hero', 'athlete', 'warrior', 'liberator', 'rescuer'],
  disruption: ['outlaw', 'activist', 'gambler', 'reformer', 'maverick'],
  care: ['caregiver', 'angel', 'guardian', 'samaritan', 'healer'],
  innocence: ['innocent', 'muse', 'dreamer', 'idealist', 'child'],
  wisdom: ['sage', 'detective', 'mentor', 'shaman', 'translator'],
  entertainment: ['jester', 'provocateur', 'shapeshifter', 'entertainer', 'clown'],
  exploration: ['explorer', 'adventurer', 'pioneer', 'generalist', 'seeker'],
  creation: ['creator', 'entrepreneur', 'storyteller', 'artist', 'visionary'],
  transformation: ['magician', 'alchemist', 'engineer', 'scientist', 'innovator'],
  love: ['lover', 'romantic', 'matchmaker', 'companion', 'hedonist'],
  authority: ['ruler', 'judge', 'sovereign', 'patriarch', 'ambassador'],
};
