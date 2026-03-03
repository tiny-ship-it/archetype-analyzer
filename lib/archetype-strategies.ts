import type { ArchetypeStrategy } from './types';

// Strategy data for all 60 archetypes, organized by category
// Each archetype gets unique, actionable brand strategy guidance
export const archetypeStrategies: Record<string, ArchetypeStrategy> = {
  // ============================================
  // CATEGORY 1: CONNECTION & SERVICE
  // ============================================
  everyman: {
    tagline: "Real people. Real connections.",
    coreMotivation: "To belong and connect through shared human experience",
    deepestFear: "Being seen as elitist, fake, or out of touch",
    brandPromise: "We understand you because we are you",
    toneOfVoice: {
      summary: "Warm, unpretentious, and genuinely relatable. Speaks like a trusted friend who gets it.",
      keywords: ["authentic", "down-to-earth", "friendly", "honest", "approachable"],
      doThis: [
        "Use conversational, everyday language",
        "Share real stories from real people",
        "Acknowledge common struggles openly",
        "Celebrate ordinary moments"
      ],
      avoidThis: [
        "Jargon or insider language",
        "Aspirational luxury positioning",
        "Talking down to your audience",
        "Pretending to be something you're not"
      ]
    },
    brandPillars: [
      { pillar: "Authenticity", description: "Never pretend. Be genuinely who you are." },
      { pillar: "Accessibility", description: "Make everything approachable and welcoming." },
      { pillar: "Community", description: "Build spaces where everyone belongs." }
    ],
    contentHooks: [
      "Behind-the-scenes of your real process",
      "Customer stories that mirror audience experiences",
      "Common mistakes and how to avoid them",
      "Celebrating small wins together"
    ],
    storytellingStyle: "First-person plural ('we') narratives that include the audience as part of the journey",
    visualMood: ["warm", "casual", "natural lighting", "real people", "unpolished authenticity"],
    categoryId: "connection",
    differentiator: "The foundation archetype of belonging - while others in this category serve or advocate, the Everyman simply belongs alongside their audience"
  },
  citizen: {
    tagline: "Better together. Stronger as one.",
    coreMotivation: "To contribute meaningfully to something larger than oneself",
    deepestFear: "Being selfish, excluded, or failing the community",
    brandPromise: "Together, we build something that matters",
    toneOfVoice: {
      summary: "Civic-minded and inclusive. Speaks with collective responsibility and democratic values.",
      keywords: ["inclusive", "responsible", "fair", "community-focused", "democratic"],
      doThis: [
        "Use 'we' and 'together' language",
        "Highlight collective achievements",
        "Acknowledge diverse perspectives",
        "Invite participation and input"
      ],
      avoidThis: [
        "Individualistic hero narratives",
        "Exclusionary language",
        "Top-down mandates",
        "Ignoring minority voices"
      ]
    },
    brandPillars: [
      { pillar: "Participation", description: "Everyone has a voice and a role to play." },
      { pillar: "Fairness", description: "Equal treatment and opportunity for all." },
      { pillar: "Collective Good", description: "Decisions serve the many, not the few." }
    ],
    contentHooks: [
      "Community impact stories",
      "How collective action creates change",
      "Spotlighting community members",
      "Polls, votes, and collaborative decisions"
    ],
    storytellingStyle: "Ensemble narratives where multiple voices contribute to a shared outcome",
    visualMood: ["diverse groups", "public spaces", "collaborative settings", "civic imagery"],
    categoryId: "connection",
    differentiator: "Focuses on civic duty and collective responsibility - more formal and institutional than Everyman, more about systems than individual relationships"
  },
  advocate: {
    tagline: "Your voice, amplified.",
    coreMotivation: "To champion causes and speak for those who cannot",
    deepestFear: "Staying silent when action is needed",
    brandPromise: "We will fight for what you deserve",
    toneOfVoice: {
      summary: "Passionate and persuasive. Speaks with conviction and urgency about what matters.",
      keywords: ["passionate", "persuasive", "dedicated", "empathetic", "vocal"],
      doThis: [
        "Take clear positions on relevant issues",
        "Back claims with evidence and stories",
        "Show the human impact of problems",
        "Provide clear calls to action"
      ],
      avoidThis: [
        "Fence-sitting on core values",
        "Empty rhetoric without action",
        "Preaching without listening",
        "Performative activism"
      ]
    },
    brandPillars: [
      { pillar: "Conviction", description: "Stand firmly for what you believe." },
      { pillar: "Empowerment", description: "Give others the tools to speak up." },
      { pillar: "Action", description: "Words mean nothing without follow-through." }
    ],
    contentHooks: [
      "Case studies of advocacy wins",
      "Explainers on complex issues",
      "How-to guides for taking action",
      "Amplifying underrepresented voices"
    ],
    storytellingStyle: "David vs. Goliath narratives with clear stakes and transformative outcomes",
    visualMood: ["bold colors", "movement imagery", "protest energy", "powerful portraits"],
    categoryId: "connection",
    differentiator: "Champions external causes loudly - more outward-facing and political than Citizen, less about personal relationships than Networker"
  },
  networker: {
    tagline: "Connections that count.",
    coreMotivation: "To bring the right people together at the right time",
    deepestFear: "Being isolated or unable to make valuable introductions",
    brandPromise: "We connect you to opportunities you couldn't find alone",
    toneOfVoice: {
      summary: "Social, energetic, and connector-minded. Every interaction opens doors.",
      keywords: ["social", "connected", "resourceful", "charismatic", "collaborative"],
      doThis: [
        "Make introductions and connections explicit",
        "Highlight partnership opportunities",
        "Share your network's wins",
        "Create spaces for serendipity"
      ],
      avoidThis: [
        "Transactional relationship language",
        "Gatekeeping valuable connections",
        "Name-dropping without substance",
        "Exclusive insider vibes"
      ]
    },
    brandPillars: [
      { pillar: "Access", description: "Open doors that were previously closed." },
      { pillar: "Reciprocity", description: "Give as much as you receive." },
      { pillar: "Serendipity", description: "Create conditions for magic to happen." }
    ],
    contentHooks: [
      "Connection success stories",
      "Network-building tips and strategies",
      "Event and community roundups",
      "Introductions and spotlights"
    ],
    storytellingStyle: "Intersection narratives where separate paths cross to create unexpected value",
    visualMood: ["social gatherings", "connection lines", "diverse groups mingling", "energy and movement"],
    categoryId: "connection",
    differentiator: "Obsessed with connections between people - more strategic and social than Everyman, focused on relationships rather than causes like Advocate"
  },
  servant: {
    tagline: "In service of something greater.",
    coreMotivation: "To find meaning through selfless dedication to others",
    deepestFear: "Being useless or failing those who depend on you",
    brandPromise: "Your needs come first. Always.",
    toneOfVoice: {
      summary: "Humble, dedicated, and quietly devoted. Actions speak louder than words.",
      keywords: ["humble", "selfless", "dedicated", "caring", "patient"],
      doThis: [
        "Let customer success be your success",
        "Anticipate needs before they're expressed",
        "Downplay your own role in outcomes",
        "Show tireless commitment to quality"
      ],
      avoidThis: [
        "Self-promotion or chest-beating",
        "Setting boundaries publicly",
        "Complaining about the work",
        "Making it about you"
      ]
    },
    brandPillars: [
      { pillar: "Dedication", description: "Unwavering commitment to those we serve." },
      { pillar: "Humility", description: "The work matters more than recognition." },
      { pillar: "Excellence", description: "Serve with the highest standards." }
    ],
    contentHooks: [
      "Customer transformation stories",
      "Behind-the-scenes of your service",
      "Tips that make customers' lives easier",
      "Testimonials that highlight outcomes"
    ],
    storytellingStyle: "Supporting character narratives where the customer is the hero and you enable their journey",
    visualMood: ["behind the scenes", "hands at work", "quiet dedication", "service moments"],
    categoryId: "connection",
    differentiator: "Pure service orientation with humility - less visible than Advocate, more personal than Citizen, defined by self-effacement"
  },

  // ============================================
  // CATEGORY 2: STRENGTH & ACTION
  // ============================================
  hero: {
    tagline: "Rise to the challenge.",
    coreMotivation: "To prove worth through courageous action and mastery",
    deepestFear: "Weakness, vulnerability, or being seen as a coward",
    brandPromise: "We give you the strength to overcome any obstacle",
    toneOfVoice: {
      summary: "Bold, inspiring, and action-oriented. Speaks with confidence about overcoming challenges.",
      keywords: ["brave", "determined", "honorable", "strong", "inspiring"],
      doThis: [
        "Frame challenges as opportunities for growth",
        "Celebrate victories and comebacks",
        "Use active, powerful verbs",
        "Show the journey from struggle to triumph"
      ],
      avoidThis: [
        "Dwelling on problems without solutions",
        "Victim narratives",
        "Showing excessive vulnerability",
        "Backing down from challenges"
      ]
    },
    brandPillars: [
      { pillar: "Courage", description: "Face fears head-on, never retreat." },
      { pillar: "Mastery", description: "Constant improvement through discipline." },
      { pillar: "Honor", description: "Fight for what's right, not just what's easy." }
    ],
    contentHooks: [
      "Transformation and comeback stories",
      "Challenge-based content and competitions",
      "Training and preparation insights",
      "Overcoming-the-odds narratives"
    ],
    storytellingStyle: "Classic hero's journey with clear antagonists, struggles, and triumphant resolution",
    visualMood: ["dynamic action", "bold contrasts", "determined faces", "victory moments"],
    categoryId: "strength",
    differentiator: "The archetypal hero focused on proving worth - more individual glory than Warrior's protection, broader than Athlete's competition"
  },
  athlete: {
    tagline: "Train. Compete. Win.",
    coreMotivation: "To achieve excellence through discipline and competition",
    deepestFear: "Losing, being out of shape, or becoming complacent",
    brandPromise: "We push you to perform at your peak",
    toneOfVoice: {
      summary: "High-energy, competitive, and performance-focused. Every word drives action.",
      keywords: ["disciplined", "competitive", "resilient", "focused", "driven"],
      doThis: [
        "Use sports metaphors and competition framing",
        "Celebrate personal bests and records",
        "Share training regimens and routines",
        "Acknowledge the grind behind the glory"
      ],
      avoidThis: [
        "Shortcuts or hacks mentality",
        "Participation trophy energy",
        "Ignoring the work required",
        "Being casual about performance"
      ]
    },
    brandPillars: [
      { pillar: "Discipline", description: "Excellence comes from daily commitment." },
      { pillar: "Competition", description: "Measure yourself against the best." },
      { pillar: "Performance", description: "Results are the only metric that matters." }
    ],
    contentHooks: [
      "Training routines and regimens",
      "Competition recaps and analysis",
      "Personal records and milestones",
      "Athlete spotlights and interviews"
    ],
    storytellingStyle: "Training montage narratives building to competition climax and results",
    visualMood: ["athletic bodies in motion", "sweat and effort", "competition venues", "victory celebrations"],
    categoryId: "strength",
    differentiator: "Focused specifically on competition and physical/mental performance - more metrics-driven than Hero, less cause-driven than Warrior"
  },
  warrior: {
    tagline: "Fight for what matters.",
    coreMotivation: "To protect and fight for something greater than self",
    deepestFear: "Failing to protect those who depend on you",
    brandPromise: "We stand between you and whatever threatens you",
    toneOfVoice: {
      summary: "Fierce, protective, and purposeful. Every battle has meaning.",
      keywords: ["fierce", "protective", "strategic", "fearless", "loyal"],
      doThis: [
        "Name the enemy or threat clearly",
        "Show strategic thinking behind actions",
        "Emphasize protection and defense",
        "Honor fallen heroes and past battles"
      ],
      avoidThis: [
        "Fighting without purpose",
        "Aggression for its own sake",
        "Abandoning your post",
        "Dishonorable tactics"
      ]
    },
    brandPillars: [
      { pillar: "Protection", description: "Defend what cannot defend itself." },
      { pillar: "Strategy", description: "Win through intelligence, not just force." },
      { pillar: "Loyalty", description: "Never abandon your cause or your people." }
    ],
    contentHooks: [
      "Threat analysis and protection strategies",
      "Battle stories with clear stakes",
      "Honoring those who came before",
      "Training for the fight ahead"
    ],
    storytellingStyle: "Battle narratives with clear enemies, strategic moves, and meaningful stakes",
    visualMood: ["armor and shields", "defensive stances", "war imagery", "protective symbolism"],
    categoryId: "strength",
    differentiator: "Fights for a cause, not personal glory - more protective than Hero, more purpose-driven than Athlete, defined by loyalty"
  },
  liberator: {
    tagline: "Break every chain.",
    coreMotivation: "To free people from oppression, constraints, and limitations",
    deepestFear: "Being trapped, powerless, or complicit in oppression",
    brandPromise: "We set you free from whatever holds you back",
    toneOfVoice: {
      summary: "Revolutionary, bold, and uncompromising about freedom. Speaks truth to power.",
      keywords: ["revolutionary", "bold", "inspiring", "principled", "fearless"],
      doThis: [
        "Name the oppressors and constraints",
        "Paint vivid pictures of freedom",
        "Use language of breaking and releasing",
        "Celebrate moments of liberation"
      ],
      avoidThis: [
        "Accepting limitations as permanent",
        "Compromising with oppressors",
        "Incremental change messaging",
        "Playing it safe"
      ]
    },
    brandPillars: [
      { pillar: "Freedom", description: "Nothing matters more than liberty." },
      { pillar: "Revolution", description: "Systems of oppression must be dismantled." },
      { pillar: "Empowerment", description: "Give people the power to free themselves." }
    ],
    contentHooks: [
      "Stories of breaking free",
      "Exposing hidden constraints",
      "Tools for self-liberation",
      "Celebrating independence moments"
    ],
    storytellingStyle: "Captivity-to-freedom narratives with dramatic breaking-point moments",
    visualMood: ["broken chains", "open doors", "light breaking through", "liberation imagery"],
    categoryId: "strength",
    differentiator: "Focused on freedom from oppression - more systemic and political than Hero, more about release than protection like Warrior"
  },
  rescuer: {
    tagline: "Help is on the way.",
    coreMotivation: "To save those in immediate danger or distress",
    deepestFear: "Arriving too late or being unable to help",
    brandPromise: "When you need us most, we'll be there",
    toneOfVoice: {
      summary: "Urgent, compassionate, and action-ready. Every second counts.",
      keywords: ["heroic", "compassionate", "quick-thinking", "brave", "protective"],
      doThis: [
        "Create urgency without panic",
        "Show immediate, tangible action",
        "Highlight rescue success stories",
        "Provide emergency resources and guides"
      ],
      avoidThis: [
        "Slow, bureaucratic language",
        "Downplaying emergencies",
        "Abstract or theoretical content",
        "Being unavailable or unresponsive"
      ]
    },
    brandPillars: [
      { pillar: "Speed", description: "Act fast when it matters most." },
      { pillar: "Compassion", description: "Care deeply about those in need." },
      { pillar: "Reliability", description: "Always there when called upon." }
    ],
    contentHooks: [
      "Rescue stories with happy endings",
      "Emergency preparedness guides",
      "First responder spotlights",
      "Crisis intervention resources"
    ],
    storytellingStyle: "Crisis-rescue-relief narratives with clear danger, intervention, and salvation",
    visualMood: ["emergency response", "outstretched hands", "relief moments", "safety imagery"],
    categoryId: "strength",
    differentiator: "Focused on immediate crisis response - more urgent than Warrior's ongoing protection, more compassionate than Hero's glory-seeking"
  },

  // ============================================
  // CATEGORY 3: DISRUPTION & CHANGE
  // ============================================
  outlaw: {
    tagline: "Rules are made to be broken.",
    coreMotivation: "To disrupt the status quo and live outside conventions",
    deepestFear: "Being powerless, ordinary, or tamed by the system",
    brandPromise: "We reject the rules that hold you back",
    toneOfVoice: {
      summary: "Rebellious, provocative, and unapologetically defiant. Challenges everything.",
      keywords: ["rebellious", "disruptive", "bold", "unconventional", "fearless"],
      doThis: [
        "Question everything openly",
        "Use edgy, provocative language",
        "Celebrate rule-breakers and misfits",
        "Position against mainstream alternatives"
      ],
      avoidThis: [
        "Corporate speak or formality",
        "Playing it safe",
        "Seeking approval from authorities",
        "Following industry conventions"
      ]
    },
    brandPillars: [
      { pillar: "Rebellion", description: "The establishment exists to be challenged." },
      { pillar: "Authenticity", description: "True to yourself, never the crowd." },
      { pillar: "Freedom", description: "No rules, no masters, no limits." }
    ],
    contentHooks: [
      "Exposing industry BS",
      "Counter-cultural takes on trends",
      "Celebrating outsiders and rebels",
      "Breaking conventional wisdom"
    ],
    storytellingStyle: "Anti-establishment narratives where the protagonist rejects conformity and wins on their own terms",
    visualMood: ["dark and gritty", "street culture", "tattoos and leather", "raw and unpolished"],
    categoryId: "disruption",
    differentiator: "Pure rebellion against systems - more anarchic than Reformer, less cause-driven than Activist, defined by rejection"
  },
  activist: {
    tagline: "Change starts now.",
    coreMotivation: "To create meaningful social and political change",
    deepestFear: "Apathy, inaction, or being on the wrong side of history",
    brandPromise: "We turn outrage into action and action into change",
    toneOfVoice: {
      summary: "Urgent, mobilizing, and morally clear. Every message is a call to action.",
      keywords: ["passionate", "determined", "vocal", "committed", "inspiring"],
      doThis: [
        "Connect issues to urgent timelines",
        "Provide clear, actionable next steps",
        "Use moral clarity and conviction",
        "Mobilize community action"
      ],
      avoidThis: [
        "Both-sides-ism on moral issues",
        "Vague calls to 'raise awareness'",
        "Performative activism without action",
        "Burnout-inducing urgency"
      ]
    },
    brandPillars: [
      { pillar: "Justice", description: "Right the wrongs that systems create." },
      { pillar: "Mobilization", description: "Collective action creates change." },
      { pillar: "Urgency", description: "The time to act is always now." }
    ],
    contentHooks: [
      "Issue explainers with action steps",
      "Campaign updates and wins",
      "Organizing resources and toolkits",
      "Spotlighting movement leaders"
    ],
    storytellingStyle: "Movement narratives showing collective action creating measurable change",
    visualMood: ["protest imagery", "solidarity moments", "bold graphics", "people power"],
    categoryId: "disruption",
    differentiator: "Focused on organized social change - more constructive than Outlaw, more grassroots than Reformer, defined by mobilization"
  },
  gambler: {
    tagline: "Fortune favors the bold.",
    coreMotivation: "To embrace risk for the thrill and potential of big rewards",
    deepestFear: "Playing it safe and missing out on the big score",
    brandPromise: "We help you take the risks that pay off",
    toneOfVoice: {
      summary: "Confident, thrilling, and comfortable with uncertainty. Makes risk feel exciting.",
      keywords: ["risk-taking", "confident", "strategic", "daring", "lucky"],
      doThis: [
        "Celebrate bold moves and big bets",
        "Frame risk as opportunity",
        "Share high-stakes success stories",
        "Use language of chance and fortune"
      ],
      avoidThis: [
        "Guarantees or certainty",
        "Risk-averse messaging",
        "Over-analyzing decisions",
        "Boring, predictable content"
      ]
    },
    brandPillars: [
      { pillar: "Risk", description: "Nothing ventured, nothing gained." },
      { pillar: "Intuition", description: "Sometimes you just have to trust your gut." },
      { pillar: "Opportunity", description: "See chances others miss." }
    ],
    contentHooks: [
      "High-stakes decision stories",
      "Calculated risk frameworks",
      "Against-the-odds wins",
      "Opportunity spotting guides"
    ],
    storytellingStyle: "High-stakes narratives with tension, pivotal decisions, and dramatic payoffs",
    visualMood: ["casino aesthetics", "dice and cards", "neon lights", "high-roller energy"],
    categoryId: "disruption",
    differentiator: "Embraces uncertainty and chance - less ideological than Outlaw, more about personal risk than Maverick's independence"
  },
  reformer: {
    tagline: "Better systems, better outcomes.",
    coreMotivation: "To improve existing systems from within through principled change",
    deepestFear: "Corruption, inefficiency, or failing to make a difference",
    brandPromise: "We fix what's broken without burning it down",
    toneOfVoice: {
      summary: "Principled, methodical, and constructively critical. Change through improvement, not destruction.",
      keywords: ["principled", "methodical", "persistent", "ethical", "visionary"],
      doThis: [
        "Acknowledge what works before critiquing",
        "Propose specific, actionable improvements",
        "Use data and evidence to support change",
        "Show incremental progress and wins"
      ],
      avoidThis: [
        "Burning bridges unnecessarily",
        "Revolutionary rhetoric without plans",
        "Accepting the status quo",
        "Cynicism without solutions"
      ]
    },
    brandPillars: [
      { pillar: "Improvement", description: "Everything can be made better." },
      { pillar: "Integrity", description: "Change must be ethical to be lasting." },
      { pillar: "Persistence", description: "Real change takes sustained effort." }
    ],
    contentHooks: [
      "Before/after improvement stories",
      "System analysis and recommendations",
      "Policy proposals and frameworks",
      "Progress reports and metrics"
    ],
    storytellingStyle: "Evolution narratives showing steady improvement through persistent, principled effort",
    visualMood: ["clean and organized", "progress charts", "transformation imagery", "professional polish"],
    categoryId: "disruption",
    differentiator: "Works within systems to change them - more pragmatic than Activist, less destructive than Outlaw, defined by constructive critique"
  },
  maverick: {
    tagline: "My way or the highway.",
    coreMotivation: "To forge an independent path free from external expectations",
    deepestFear: "Conformity, losing independence, or being controlled",
    brandPromise: "We help you do things your own way",
    toneOfVoice: {
      summary: "Independent, unconventional, and confidently different. Marches to its own beat.",
      keywords: ["independent", "unconventional", "innovative", "bold", "original"],
      doThis: [
        "Challenge conventional wisdom openly",
        "Share your unique approach proudly",
        "Celebrate going against the grain",
        "Encourage audience independence"
      ],
      avoidThis: [
        "Following trends or competitors",
        "Seeking external validation",
        "Conforming to industry standards",
        "Apologizing for being different"
      ]
    },
    brandPillars: [
      { pillar: "Independence", description: "Answer to no one but yourself." },
      { pillar: "Originality", description: "Create your own path, don't follow others." },
      { pillar: "Confidence", description: "Trust your instincts over the crowd." }
    ],
    contentHooks: [
      "Contrarian takes on popular topics",
      "Behind-the-scenes of your unique process",
      "Why we do things differently",
      "Celebrating unconventional success"
    ],
    storytellingStyle: "Lone wolf narratives where success comes from rejecting conventional paths",
    visualMood: ["bold and distinctive", "standing apart", "unique aesthetic", "confident solitude"],
    categoryId: "disruption",
    differentiator: "Focused on personal independence - less political than Outlaw, less risky than Gambler, defined by doing things their own way"
  },

  // ============================================
  // CATEGORY 4: CARE & NURTURING
  // ============================================
  caregiver: {
    tagline: "We've got you.",
    coreMotivation: "To protect and nurture others through compassionate care",
    deepestFear: "Selfishness, helplessness, or failing those who need you",
    brandPromise: "We take care of you so you can focus on what matters",
    toneOfVoice: {
      summary: "Warm, reassuring, and deeply empathetic. Every word feels like a hug.",
      keywords: ["nurturing", "compassionate", "selfless", "protective", "generous"],
      doThis: [
        "Lead with empathy and understanding",
        "Anticipate needs and concerns",
        "Use warm, comforting language",
        "Show genuine care in every interaction"
      ],
      avoidThis: [
        "Cold or transactional communication",
        "Putting your needs first",
        "Dismissing concerns or feelings",
        "Setting harsh boundaries publicly"
      ]
    },
    brandPillars: [
      { pillar: "Compassion", description: "Feel what others feel, act accordingly." },
      { pillar: "Protection", description: "Keep those in your care safe from harm." },
      { pillar: "Generosity", description: "Give without expecting return." }
    ],
    contentHooks: [
      "Care tips and nurturing advice",
      "Customer comfort stories",
      "Self-care and wellness resources",
      "Community support initiatives"
    ],
    storytellingStyle: "Nurturing narratives where care and protection lead to safety, growth, and wellbeing",
    visualMood: ["soft and warm", "embracing imagery", "pastoral scenes", "gentle lighting"],
    categoryId: "care",
    differentiator: "The foundational nurturing archetype - more hands-on than Guardian, broader than Healer, defined by active care"
  },
  angel: {
    tagline: "Light in the darkness.",
    coreMotivation: "To bring hope, guidance, and divine inspiration to others",
    deepestFear: "Corruption, despair, or leading others astray",
    brandPromise: "We illuminate the path when you can't see the way",
    toneOfVoice: {
      summary: "Pure, hopeful, and gently inspiring. Speaks with quiet grace and light.",
      keywords: ["pure", "hopeful", "inspiring", "gentle", "guiding"],
      doThis: [
        "Offer hope in difficult times",
        "Speak with gentle authority",
        "Point toward higher purposes",
        "Acknowledge darkness while bringing light"
      ],
      avoidThis: [
        "Judgment or condemnation",
        "Losing hope or showing despair",
        "Harsh or punishing language",
        "Worldly or cynical messaging"
      ]
    },
    brandPillars: [
      { pillar: "Hope", description: "Light exists even in the darkest moments." },
      { pillar: "Guidance", description: "Show the way with gentle wisdom." },
      { pillar: "Purity", description: "Maintain integrity in all things." }
    ],
    contentHooks: [
      "Inspirational messages and quotes",
      "Stories of hope and transformation",
      "Gentle guidance for difficult times",
      "Celebrating moments of grace"
    ],
    storytellingStyle: "Redemption narratives where light overcomes darkness through grace and guidance",
    visualMood: ["ethereal", "light and white", "soft glow", "heavenly imagery"],
    categoryId: "care",
    differentiator: "Spiritual and transcendent care - more mystical than Caregiver, more hopeful than Guardian, defined by divine inspiration"
  },
  guardian: {
    tagline: "Always watching. Always ready.",
    coreMotivation: "To stand vigilant and protect against threats",
    deepestFear: "Failing to see danger or being caught unprepared",
    brandPromise: "We keep watch so you can rest easy",
    toneOfVoice: {
      summary: "Steady, vigilant, and reassuringly reliable. A constant presence of security.",
      keywords: ["protective", "vigilant", "reliable", "strong", "trustworthy"],
      doThis: [
        "Emphasize constant vigilance and readiness",
        "Communicate security and stability",
        "Show preparedness for any situation",
        "Build trust through reliability"
      ],
      avoidThis: [
        "Showing vulnerability or uncertainty",
        "Being caught off guard",
        "Alarmist fear-mongering",
        "Abandoning your post"
      ]
    },
    brandPillars: [
      { pillar: "Vigilance", description: "Never stop watching for threats." },
      { pillar: "Reliability", description: "Always there when needed." },
      { pillar: "Strength", description: "Capable of handling any challenge." }
    ],
    contentHooks: [
      "Security tips and best practices",
      "Threat awareness education",
      "Protection success stories",
      "Preparedness guides and checklists"
    ],
    storytellingStyle: "Sentinel narratives where constant vigilance prevents disaster and maintains peace",
    visualMood: ["fortress imagery", "watchful eyes", "solid and stable", "protective shields"],
    categoryId: "care",
    differentiator: "Focused on protection and vigilance - more defensive than Caregiver, less immediate than Rescuer, defined by constant watch"
  },
  samaritan: {
    tagline: "Kindness without conditions.",
    coreMotivation: "To help strangers and those in need without expectation",
    deepestFear: "Becoming callous, selfish, or passing by those in need",
    brandPromise: "We help simply because it's the right thing to do",
    toneOfVoice: {
      summary: "Kind, humble, and unconditionally generous. Help first, ask questions never.",
      keywords: ["kind", "generous", "humble", "compassionate", "selfless"],
      doThis: [
        "Give without strings attached",
        "Help unexpectedly and anonymously",
        "Focus on the recipient, not the giving",
        "Celebrate random acts of kindness"
      ],
      avoidThis: [
        "Publicizing your generosity",
        "Expecting reciprocity",
        "Judging worthiness of recipients",
        "Making giving transactional"
      ]
    },
    brandPillars: [
      { pillar: "Generosity", description: "Give freely without expectation." },
      { pillar: "Humility", description: "The gift matters, not the giver." },
      { pillar: "Compassion", description: "See the human in everyone." }
    ],
    contentHooks: [
      "Random acts of kindness stories",
      "Ways to help in your community",
      "Unsung hero spotlights",
      "Generosity without recognition"
    ],
    storytellingStyle: "Good Samaritan narratives where unexpected kindness transforms lives",
    visualMood: ["helping hands", "anonymous giving", "community moments", "simple kindness"],
    categoryId: "care",
    differentiator: "Unconditional generosity to strangers - more anonymous than Caregiver, less spiritual than Angel, defined by no-strings-attached help"
  },
  healer: {
    tagline: "Restoration begins here.",
    coreMotivation: "To restore wholeness and wellness to those who are broken",
    deepestFear: "Causing harm, being unable to heal, or making things worse",
    brandPromise: "We help you become whole again",
    toneOfVoice: {
      summary: "Calm, restorative, and deeply empathetic. Every word promotes healing.",
      keywords: ["restorative", "empathetic", "patient", "wise", "gentle"],
      doThis: [
        "Acknowledge pain before offering solutions",
        "Use calming, soothing language",
        "Focus on restoration and wholeness",
        "Take a holistic, patient approach"
      ],
      avoidThis: [
        "Rushing the healing process",
        "Dismissing symptoms or pain",
        "Quick-fix promises",
        "Clinical coldness"
      ]
    },
    brandPillars: [
      { pillar: "Restoration", description: "Return what was lost or broken." },
      { pillar: "Patience", description: "Healing takes the time it takes." },
      { pillar: "Wholeness", description: "Address the whole, not just symptoms." }
    ],
    contentHooks: [
      "Healing journey stories",
      "Wellness tips and practices",
      "Holistic health approaches",
      "Recovery milestones and celebrations"
    ],
    storytellingStyle: "Restoration narratives where brokenness is acknowledged and wholeness is gradually reclaimed",
    visualMood: ["nature and botanicals", "calm waters", "soft greens", "renewal imagery"],
    categoryId: "care",
    differentiator: "Focused specifically on healing and restoration - more therapeutic than Caregiver, more physical/emotional than Angel, defined by making whole"
  },

  // ============================================
  // CATEGORY 5: INNOCENCE & VISION
  // ============================================
  innocent: {
    tagline: "Simple. Pure. True.",
    coreMotivation: "To experience happiness and maintain faith in goodness",
    deepestFear: "Corruption, punishment, or losing innocence",
    brandPromise: "We keep things simple, honest, and good",
    toneOfVoice: {
      summary: "Optimistic, pure, and refreshingly simple. Sees the world with childlike wonder.",
      keywords: ["optimistic", "pure", "trusting", "hopeful", "simple"],
      doThis: [
        "Keep messaging simple and clear",
        "Focus on the positive and good",
        "Use imagery of purity and nature",
        "Trust your audience's good intentions"
      ],
      avoidThis: [
        "Cynicism or irony",
        "Complex or dark messaging",
        "Acknowledging evil or corruption",
        "Sophisticated wordplay"
      ]
    },
    brandPillars: [
      { pillar: "Simplicity", description: "Strip away complexity to reveal truth." },
      { pillar: "Optimism", description: "Believe in the good in everything." },
      { pillar: "Purity", description: "Remain uncorrupted and authentic." }
    ],
    contentHooks: [
      "Simple solutions to complex problems",
      "Celebrating pure moments",
      "Back-to-basics approaches",
      "Wholesome feel-good content"
    ],
    storytellingStyle: "Paradise narratives where simplicity and goodness triumph over complexity and corruption",
    visualMood: ["clean whites", "pastoral scenes", "natural light", "simple and uncluttered"],
    categoryId: "innocence",
    differentiator: "Pure optimism and simplicity - more naive than Dreamer, less mystical than Muse, defined by uncorrupted faith in goodness"
  },
  muse: {
    tagline: "Inspiration strikes.",
    coreMotivation: "To spark creativity and artistic expression in others",
    deepestFear: "Being uninspiring, ordinary, or forgotten",
    brandPromise: "We awaken the creativity you didn't know you had",
    toneOfVoice: {
      summary: "Enchanting, evocative, and mysteriously inspiring. Every word stirs something.",
      keywords: ["inspiring", "creative", "enchanting", "artistic", "mysterious"],
      doThis: [
        "Use evocative, sensory language",
        "Leave room for interpretation",
        "Spark curiosity and wonder",
        "Celebrate creative expression"
      ],
      avoidThis: [
        "Being too literal or prescriptive",
        "Explaining away the mystery",
        "Mundane or practical messaging",
        "Killing creative energy with rules"
      ]
    },
    brandPillars: [
      { pillar: "Inspiration", description: "Awaken dormant creative energy." },
      { pillar: "Mystery", description: "Leave space for wonder and interpretation." },
      { pillar: "Beauty", description: "Create and celebrate aesthetic experiences." }
    ],
    contentHooks: [
      "Creative prompts and sparks",
      "Artist spotlights and interviews",
      "Behind-the-scenes of creative process",
      "Celebrating unexpected inspiration"
    ],
    storytellingStyle: "Awakening narratives where encounter with the muse unlocks hidden creative potential",
    visualMood: ["artistic", "ethereal", "flowing", "dreamy colors"],
    categoryId: "innocence",
    differentiator: "Focused on inspiring others' creativity - more external than Artist, more mysterious than Dreamer, defined by sparking creative fire"
  },
  dreamer: {
    tagline: "Imagine what's possible.",
    coreMotivation: "To envision better futures and inspire others to dream",
    deepestFear: "Crushing realism, cynicism, or losing hope",
    brandPromise: "We help you see what could be, not just what is",
    toneOfVoice: {
      summary: "Hopeful, imaginative, and future-focused. Paints vivid pictures of possibility.",
      keywords: ["imaginative", "hopeful", "idealistic", "creative", "visionary"],
      doThis: [
        "Paint vivid pictures of better futures",
        "Use 'what if' and 'imagine' framing",
        "Celebrate dreams and aspirations",
        "Make the impossible feel possible"
      ],
      avoidThis: [
        "Harsh realism or cynicism",
        "Dwelling on current limitations",
        "Crushing dreams with practicality",
        "Pessimistic forecasting"
      ]
    },
    brandPillars: [
      { pillar: "Possibility", description: "What is possible matters more than what is." },
      { pillar: "Hope", description: "Better futures are always achievable." },
      { pillar: "Imagination", description: "Dreams are the blueprints of reality." }
    ],
    contentHooks: [
      "Future vision pieces",
      "Dream achievement stories",
      "Possibility exploration",
      "Aspirational content and visualization"
    ],
    storytellingStyle: "Vision quest narratives where dreams are pursued and possibility becomes reality",
    visualMood: ["clouds and sky", "soft focus", "dreamy atmospheres", "aspirational imagery"],
    categoryId: "innocence",
    differentiator: "Focused on envisioning futures - more hopeful than Visionary's execution, less mystical than Muse, defined by pure imagination"
  },
  idealist: {
    tagline: "Hold the line on what matters.",
    coreMotivation: "To uphold high principles and strive for perfection",
    deepestFear: "Compromise, corruption, or falling short of ideals",
    brandPromise: "We never compromise on what's right",
    toneOfVoice: {
      summary: "Principled, passionate, and uncompromising on values. Ethics above convenience.",
      keywords: ["principled", "optimistic", "passionate", "ethical", "dedicated"],
      doThis: [
        "Lead with values and principles",
        "Stand firm on important issues",
        "Celebrate ethical excellence",
        "Hold yourself to the highest standards"
      ],
      avoidThis: [
        "Compromising core values",
        "Cynical pragmatism",
        "Accepting 'good enough'",
        "Moral relativism"
      ]
    },
    brandPillars: [
      { pillar: "Principles", description: "Values guide every decision." },
      { pillar: "Excellence", description: "Strive for the highest standards." },
      { pillar: "Integrity", description: "Actions match beliefs, always." }
    ],
    contentHooks: [
      "Values-driven decision stories",
      "Ethical excellence spotlights",
      "Principle-based frameworks",
      "High-standards case studies"
    ],
    storytellingStyle: "Integrity narratives where staying true to principles leads to meaningful success",
    visualMood: ["clean and aspirational", "golden hour", "elevated aesthetics", "perfection imagery"],
    categoryId: "innocence",
    differentiator: "Focused on upholding high principles - more ethical than Dreamer, more values-driven than Innocent, defined by uncompromising standards"
  },
  child: {
    tagline: "Stay curious. Stay playful.",
    coreMotivation: "To experience joy, wonder, and spontaneous play",
    deepestFear: "Growing up, boredom, or losing the capacity for joy",
    brandPromise: "We bring back the wonder you forgot you had",
    toneOfVoice: {
      summary: "Playful, curious, and delightfully spontaneous. Everything is an adventure.",
      keywords: ["curious", "playful", "spontaneous", "joyful", "open"],
      doThis: [
        "Embrace play and experimentation",
        "Ask 'why?' like a child would",
        "Celebrate small wonders",
        "Keep energy light and fun"
      ],
      avoidThis: [
        "Being overly serious or adult",
        "Boring, predictable content",
        "Losing sense of wonder",
        "Over-explaining the obvious"
      ]
    },
    brandPillars: [
      { pillar: "Wonder", description: "Everything deserves curious attention." },
      { pillar: "Play", description: "Serious work can still be fun." },
      { pillar: "Joy", description: "Happiness is the goal, not just an outcome." }
    ],
    contentHooks: [
      "Playful experiments and discoveries",
      "Wonder-filled observations",
      "Fun challenges and games",
      "Celebrating curiosity and questions"
    ],
    storytellingStyle: "Discovery narratives where childlike curiosity leads to unexpected joy and learning",
    visualMood: ["bright colors", "playful illustrations", "wonder-filled", "energetic and fun"],
    categoryId: "innocence",
    differentiator: "Pure playfulness and wonder - more spontaneous than Innocent, less creative than Muse, defined by childlike joy"
  },

  // ============================================
  // CATEGORY 6: WISDOM & KNOWLEDGE
  // ============================================
  sage: {
    tagline: "Truth illuminates.",
    coreMotivation: "To understand the world and share wisdom with others",
    deepestFear: "Ignorance, deception, or misleading others",
    brandPromise: "We help you understand what really matters",
    toneOfVoice: {
      summary: "Thoughtful, knowledgeable, and calmly authoritative. Wisdom earned, not assumed.",
      keywords: ["wise", "knowledgeable", "thoughtful", "analytical", "guiding"],
      doThis: [
        "Back claims with evidence and research",
        "Explain complex topics clearly",
        "Acknowledge what you don't know",
        "Guide toward deeper understanding"
      ],
      avoidThis: [
        "Oversimplifying complex issues",
        "Claiming certainty without evidence",
        "Intellectual arrogance",
        "Information without insight"
      ]
    },
    brandPillars: [
      { pillar: "Truth", description: "Seek what is real, not what is convenient." },
      { pillar: "Understanding", description: "Go beyond facts to meaning." },
      { pillar: "Wisdom", description: "Apply knowledge for good." }
    ],
    contentHooks: [
      "Deep-dive explainers",
      "Research and analysis",
      "Expert interviews and perspectives",
      "Wisdom from experience"
    ],
    storytellingStyle: "Enlightenment narratives where understanding transforms confusion into clarity",
    visualMood: ["scholarly", "libraries and books", "contemplative", "timeless and classic"],
    categoryId: "wisdom",
    differentiator: "Foundational wisdom archetype - more philosophical than Detective, broader than Mentor, defined by pursuit of truth"
  },
  detective: {
    tagline: "The truth is out there.",
    coreMotivation: "To uncover hidden truths through investigation",
    deepestFear: "Being deceived, missing clues, or unsolved mysteries",
    brandPromise: "We find the truth that others miss",
    toneOfVoice: {
      summary: "Curious, analytical, and relentlessly investigative. Every detail matters.",
      keywords: ["observant", "analytical", "persistent", "clever", "curious"],
      doThis: [
        "Follow evidence wherever it leads",
        "Question assumptions and claims",
        "Reveal hidden connections",
        "Document your investigative process"
      ],
      avoidThis: [
        "Accepting surface explanations",
        "Rushing to conclusions",
        "Ignoring inconvenient evidence",
        "Sensationalizing findings"
      ]
    },
    brandPillars: [
      { pillar: "Investigation", description: "Dig deeper than anyone else." },
      { pillar: "Evidence", description: "Follow facts, not assumptions." },
      { pillar: "Revelation", description: "Bring hidden truths to light." }
    ],
    contentHooks: [
      "Investigative deep-dives",
      "Myth-busting and fact-checking",
      "Hidden pattern analysis",
      "Case study breakdowns"
    ],
    storytellingStyle: "Mystery narratives where persistent investigation reveals surprising truths",
    visualMood: ["noir aesthetics", "magnifying glasses", "evidence boards", "shadows and reveals"],
    categoryId: "wisdom",
    differentiator: "Focused on uncovering hidden truths - more investigative than Sage, less spiritual than Shaman, defined by revelation"
  },
  mentor: {
    tagline: "Learn from those who've walked the path.",
    coreMotivation: "To guide others' growth through shared experience",
    deepestFear: "Failing students, being irrelevant, or giving bad advice",
    brandPromise: "We share what we've learned so you can go further",
    toneOfVoice: {
      summary: "Wise, patient, and generously supportive. Teaching through experience, not lecture.",
      keywords: ["wise", "patient", "supportive", "experienced", "encouraging"],
      doThis: [
        "Share lessons from your own journey",
        "Guide rather than prescribe",
        "Celebrate student successes",
        "Admit your own past mistakes"
      ],
      avoidThis: [
        "Talking down to your audience",
        "Claiming you have all the answers",
        "Hoarding knowledge",
        "Taking credit for others' growth"
      ]
    },
    brandPillars: [
      { pillar: "Guidance", description: "Light the path without walking it for them." },
      { pillar: "Experience", description: "Wisdom comes from having been there." },
      { pillar: "Growth", description: "Help others surpass where you started." }
    ],
    contentHooks: [
      "Lessons learned the hard way",
      "Mentee success stories",
      "Frameworks from experience",
      "Common mistakes to avoid"
    ],
    storytellingStyle: "Passing-the-torch narratives where mentorship enables others to achieve greatness",
    visualMood: ["one-on-one moments", "passing knowledge", "generational imagery", "warm and trusted"],
    categoryId: "wisdom",
    differentiator: "Focused on developing others - more personal than Sage, more experienced than Translator, defined by growth guidance"
  },
  shaman: {
    tagline: "See beyond the visible.",
    coreMotivation: "To bridge material and spiritual worlds through deep wisdom",
    deepestFear: "Losing connection to deeper truths or spiritual corruption",
    brandPromise: "We reveal the invisible forces shaping your world",
    toneOfVoice: {
      summary: "Mystical, transformative, and deeply intuitive. Speaks from beyond ordinary perception.",
      keywords: ["mystical", "wise", "transformative", "intuitive", "healing"],
      doThis: [
        "Address deeper, spiritual dimensions",
        "Use metaphor and symbol liberally",
        "Honor ancient wisdom traditions",
        "Facilitate transformation journeys"
      ],
      avoidThis: [
        "Pure rationalism and materialism",
        "Dismissing intuition",
        "Surface-level analysis",
        "Rushing spiritual processes"
      ]
    },
    brandPillars: [
      { pillar: "Transformation", description: "Facilitate deep, lasting change." },
      { pillar: "Mystery", description: "Honor what cannot be explained." },
      { pillar: "Connection", description: "Bridge seen and unseen worlds." }
    ],
    contentHooks: [
      "Spiritual practice guides",
      "Transformation journey stories",
      "Ancient wisdom for modern times",
      "Invisible forces affecting outcomes"
    ],
    storytellingStyle: "Vision quest narratives where spiritual journey leads to profound transformation",
    visualMood: ["mystical", "natural elements", "smoke and fire", "ceremonial imagery"],
    categoryId: "wisdom",
    differentiator: "Bridges spiritual and material - more mystical than Sage, more transformative than Mentor, defined by spiritual wisdom"
  },
  translator: {
    tagline: "Clarity from complexity.",
    coreMotivation: "To make the complex accessible and bridge understanding gaps",
    deepestFear: "Miscommunication, confusion, or being misunderstood",
    brandPromise: "We make the complicated simple and the foreign familiar",
    toneOfVoice: {
      summary: "Clear, patient, and brilliantly accessible. Turns jargon into understanding.",
      keywords: ["clear", "patient", "knowledgeable", "empathetic", "articulate"],
      doThis: [
        "Explain complex topics in simple terms",
        "Use analogies and examples",
        "Bridge different audiences and worlds",
        "Check for understanding constantly"
      ],
      avoidThis: [
        "Jargon and insider language",
        "Assuming knowledge levels",
        "Oversimplifying to the point of error",
        "Impatience with beginners"
      ]
    },
    brandPillars: [
      { pillar: "Clarity", description: "Make everything understandable." },
      { pillar: "Accessibility", description: "No one should be excluded by complexity." },
      { pillar: "Bridge-building", description: "Connect different worlds and perspectives." }
    ],
    contentHooks: [
      "Jargon-free explainers",
      "Beginner guides to complex topics",
      "Translation between disciplines",
      "Analogies that click"
    ],
    storytellingStyle: "Understanding narratives where confusion transforms into 'aha!' moments",
    visualMood: ["clean diagrams", "visual explanations", "bridge imagery", "light and clarity"],
    categoryId: "wisdom",
    differentiator: "Focused on making complex accessible - more practical than Sage, more universal than Mentor, defined by translation and clarity"
  },

  // ============================================
  // CATEGORY 7: ENTERTAINMENT & JOY
  // ============================================
  jester: {
    tagline: "Life's too short to be serious.",
    coreMotivation: "To bring joy and use humor to speak truth",
    deepestFear: "Being boring, causing harm, or losing the ability to laugh",
    brandPromise: "We make you laugh while making you think",
    toneOfVoice: {
      summary: "Witty, irreverent, and delightfully unexpected. Humor with a purpose.",
      keywords: ["funny", "witty", "joyful", "irreverent", "clever"],
      doThis: [
        "Use humor to disarm and connect",
        "Find the absurd in the serious",
        "Speak truth through comedy",
        "Keep energy light even on heavy topics"
      ],
      avoidThis: [
        "Mean-spirited humor",
        "Being boring or predictable",
        "Taking yourself too seriously",
        "Humor that punches down"
      ]
    },
    brandPillars: [
      { pillar: "Joy", description: "Laughter is medicine for everything." },
      { pillar: "Truth", description: "Comedy reveals what seriousness hides." },
      { pillar: "Connection", description: "Shared laughter builds bonds." }
    ],
    contentHooks: [
      "Humorous takes on industry trends",
      "Satirical commentary",
      "Self-deprecating brand moments",
      "Joy-focused content and celebrations"
    ],
    storytellingStyle: "Comic narratives where humor and wit lead to unexpected wisdom and connection",
    visualMood: ["bright and playful", "unexpected juxtapositions", "cartoon elements", "visual puns"],
    categoryId: "entertainment",
    differentiator: "Uses humor as primary tool - more comedic than Entertainer, more purposeful than Clown, defined by wit and truth-telling"
  },
  provocateur: {
    tagline: "Comfort is the enemy.",
    coreMotivation: "To challenge comfortable thinking and spark change through shock",
    deepestFear: "Being ignored, becoming predictable, or losing edge",
    brandPromise: "We say what others won't and make you question everything",
    toneOfVoice: {
      summary: "Bold, challenging, and deliberately uncomfortable. Provokes thought through disruption.",
      keywords: ["bold", "challenging", "creative", "unconventional", "thought-provoking"],
      doThis: [
        "Challenge sacred cows directly",
        "Use shock and surprise strategically",
        "Question conventional wisdom loudly",
        "Embrace controversy with purpose"
      ],
      avoidThis: [
        "Being offensive without purpose",
        "Shock for shock's sake",
        "Becoming predictably provocative",
        "Backing down from positions"
      ]
    },
    brandPillars: [
      { pillar: "Challenge", description: "Comfortable ideas need disrupting." },
      { pillar: "Disruption", description: "Break patterns to create new ones." },
      { pillar: "Courage", description: "Say what needs to be said." }
    ],
    contentHooks: [
      "Hot takes and contrarian opinions",
      "Sacred cow slaughter",
      "Uncomfortable truths",
      "Pattern-breaking content"
    ],
    storytellingStyle: "Disruption narratives where challenging conventions leads to breakthrough thinking",
    visualMood: ["high contrast", "jarring juxtapositions", "bold typography", "attention-grabbing"],
    categoryId: "entertainment",
    differentiator: "Uses shock and challenge as tools - more confrontational than Jester, more strategic than Outlaw, defined by purposeful provocation"
  },
  shapeshifter: {
    tagline: "Expect the unexpected.",
    coreMotivation: "To embrace change and show many faces to the world",
    deepestFear: "Being trapped in one identity or becoming predictable",
    brandPromise: "We transform to meet you exactly where you are",
    toneOfVoice: {
      summary: "Fluid, adaptable, and mysteriously versatile. Never the same twice.",
      keywords: ["adaptable", "mysterious", "versatile", "unpredictable", "fluid"],
      doThis: [
        "Embrace contradictions and complexity",
        "Adapt voice to different contexts",
        "Surprise with unexpected pivots",
        "Celebrate transformation and change"
      ],
      avoidThis: [
        "Being too consistent or predictable",
        "Rigid brand guidelines",
        "Explaining all your changes",
        "Static identity"
      ]
    },
    brandPillars: [
      { pillar: "Adaptability", description: "Change is the only constant." },
      { pillar: "Mystery", description: "Keep them guessing." },
      { pillar: "Fluidity", description: "Identity is a spectrum, not a point." }
    ],
    contentHooks: [
      "Transformation reveals",
      "Multiple perspective pieces",
      "Before and after content",
      "Embracing contradictions"
    ],
    storytellingStyle: "Metamorphosis narratives where transformation reveals hidden truths and new possibilities",
    visualMood: ["morphing imagery", "liquid aesthetics", "multiple exposures", "transformation sequences"],
    categoryId: "entertainment",
    differentiator: "Defined by constant change - more mysterious than Jester, more fluid than Maverick, embraces multiple identities"
  },
  entertainer: {
    tagline: "The show must go on.",
    coreMotivation: "To captivate audiences and create memorable experiences",
    deepestFear: "Being boring, losing the audience, or an empty house",
    brandPromise: "We make every moment memorable and every experience unforgettable",
    toneOfVoice: {
      summary: "Charismatic, energetic, and showman-like. Everything is a performance.",
      keywords: ["charismatic", "energetic", "talented", "engaging", "joyful"],
      doThis: [
        "Create memorable moments and experiences",
        "Build anticipation and deliver spectacle",
        "Engage audiences actively",
        "Make everything feel like an event"
      ],
      avoidThis: [
        "Boring, dry content",
        "Under-delivering on hype",
        "Ignoring the audience",
        "Going through the motions"
      ]
    },
    brandPillars: [
      { pillar: "Spectacle", description: "Make every moment worth watching." },
      { pillar: "Engagement", description: "The audience is part of the show." },
      { pillar: "Energy", description: "Bring excitement to everything." }
    ],
    contentHooks: [
      "Event coverage and highlights",
      "Behind-the-scenes of the show",
      "Audience participation content",
      "Spectacular reveals and announcements"
    ],
    storytellingStyle: "Showtime narratives building to climactic performances and standing ovations",
    visualMood: ["stage lighting", "spotlight moments", "crowd energy", "performance imagery"],
    categoryId: "entertainment",
    differentiator: "Focused on performance and spectacle - broader than Jester, more polished than Clown, defined by captivating experience"
  },
  clown: {
    tagline: "Embrace the absurd.",
    coreMotivation: "To bring joy through absurdity and remind us not to take life seriously",
    deepestFear: "The world losing its sense of play and becoming too serious",
    brandPromise: "We remind you that life is meant to be fun",
    toneOfVoice: {
      summary: "Absurd, playful, and liberatingly silly. Permission to be ridiculous.",
      keywords: ["playful", "absurd", "joyful", "spontaneous", "liberating"],
      doThis: [
        "Embrace absurdity and silliness",
        "Give permission to be ridiculous",
        "Find joy in the mundane",
        "Break tension with levity"
      ],
      avoidThis: [
        "Being mean or cynical",
        "Taking yourself seriously",
        "Trying too hard to be funny",
        "Sophisticated humor"
      ]
    },
    brandPillars: [
      { pillar: "Absurdity", description: "Life makes more sense when you stop trying to make sense." },
      { pillar: "Liberation", description: "Freedom from seriousness is freedom indeed." },
      { pillar: "Joy", description: "Pure, uncomplicated happiness." }
    ],
    contentHooks: [
      "Absurdist humor and situations",
      "Permission-giving content",
      "Celebrating silliness",
      "Breaking serious moments with levity"
    ],
    storytellingStyle: "Absurdist narratives where embracing silliness leads to unexpected joy and freedom",
    visualMood: ["circus aesthetics", "bold silly imagery", "physical comedy", "bright and absurd"],
    categoryId: "entertainment",
    differentiator: "Pure absurdity and silliness - less sophisticated than Jester, more physical than Provocateur, defined by liberating ridiculousness"
  },

  // ============================================
  // CATEGORY 8: EXPLORATION & DISCOVERY
  // ============================================
  explorer: {
    tagline: "The journey is the destination.",
    coreMotivation: "To discover new frontiers and experience authentic freedom",
    deepestFear: "Being trapped, conforming, or missing out on experiences",
    brandPromise: "We take you places you've never been and experiences you've never had",
    toneOfVoice: {
      summary: "Adventurous, curious, and freedom-loving. Always looking toward the horizon.",
      keywords: ["adventurous", "curious", "independent", "brave", "restless"],
      doThis: [
        "Celebrate discovery and new experiences",
        "Use journey and exploration metaphors",
        "Share stories from the frontier",
        "Inspire wanderlust and curiosity"
      ],
      avoidThis: [
        "Routine or predictable content",
        "Fear of the unknown",
        "Staying in comfort zones",
        "Excessive planning and structure"
      ]
    },
    brandPillars: [
      { pillar: "Discovery", description: "There's always more to find." },
      { pillar: "Freedom", description: "No boundaries, no limits." },
      { pillar: "Authenticity", description: "True experiences over curated ones." }
    ],
    contentHooks: [
      "Discovery stories and travel logs",
      "Frontier and boundary-pushing content",
      "New experience guides",
      "Off-the-beaten-path finds"
    ],
    storytellingStyle: "Journey narratives where the voyage of discovery is as valuable as any destination",
    visualMood: ["vast landscapes", "open roads", "horizon shots", "adventure photography"],
    categoryId: "exploration",
    differentiator: "The foundational explorer - broader than Adventurer, less targeted than Pioneer, defined by pure discovery drive"
  },
  adventurer: {
    tagline: "Feel alive.",
    coreMotivation: "To experience thrills and embrace risk for the rush of being alive",
    deepestFear: "A boring, safe, predictable life",
    brandPromise: "We deliver experiences that make you feel truly alive",
    toneOfVoice: {
      summary: "High-energy, thrill-seeking, and boldly spontaneous. Every moment is an opportunity.",
      keywords: ["daring", "energetic", "spontaneous", "bold", "free-spirited"],
      doThis: [
        "Celebrate adrenaline and excitement",
        "Encourage spontaneous action",
        "Share thrilling experiences",
        "Make risk feel exciting, not scary"
      ],
      avoidThis: [
        "Safety-first messaging",
        "Excessive planning or caution",
        "Boring, routine content",
        "Risk avoidance"
      ]
    },
    brandPillars: [
      { pillar: "Thrill", description: "Life is meant to be exciting." },
      { pillar: "Spontaneity", description: "The best experiences are unplanned." },
      { pillar: "Boldness", description: "Fortune favors the daring." }
    ],
    contentHooks: [
      "Extreme experience stories",
      "Spontaneous adventure content",
      "Adrenaline-pumping challenges",
      "Living on the edge features"
    ],
    storytellingStyle: "Adrenaline narratives where taking risks leads to peak life experiences",
    visualMood: ["action shots", "extreme sports", "adrenaline moments", "GoPro aesthetics"],
    categoryId: "exploration",
    differentiator: "Focused on thrill and adrenaline - more extreme than Explorer, less systematic than Pioneer, defined by excitement-seeking"
  },
  pioneer: {
    tagline: "First to the frontier.",
    coreMotivation: "To be first into uncharted territory and blaze trails for others",
    deepestFear: "Following instead of leading, or arriving too late",
    brandPromise: "We go first so you can follow with confidence",
    toneOfVoice: {
      summary: "Bold, determined, and trail-blazing. First in, lessons shared.",
      keywords: ["innovative", "brave", "determined", "visionary", "resilient"],
      doThis: [
        "Share first-mover insights",
        "Document your trail-blazing journey",
        "Build bridges for those who follow",
        "Celebrate being first"
      ],
      avoidThis: [
        "Following established paths",
        "Waiting for others to go first",
        "Playing it safe",
        "Hoarding pioneer knowledge"
      ]
    },
    brandPillars: [
      { pillar: "First-Mover", description: "Lead into new territory." },
      { pillar: "Trail-Blazing", description: "Create paths where none exist." },
      { pillar: "Resilience", description: "Pioneers face the hardest conditions." }
    ],
    contentHooks: [
      "First-mover case studies",
      "Trail-blazing journey documentation",
      "Lessons from the frontier",
      "New territory guides"
    ],
    storytellingStyle: "Frontier narratives where being first enables others and creates new possibilities",
    visualMood: ["frontier imagery", "first footsteps", "uncharted maps", "rugged determination"],
    categoryId: "exploration",
    differentiator: "Focused on being first - more purposeful than Explorer, more serious than Adventurer, defined by trail-blazing"
  },
  generalist: {
    tagline: "Master of many.",
    coreMotivation: "To connect diverse knowledge and see patterns others miss",
    deepestFear: "Overspecialization, narrow thinking, or missing the big picture",
    brandPromise: "We connect dots that specialists can't see",
    toneOfVoice: {
      summary: "Curious, connecting, and refreshingly broad. Expert in synthesis.",
      keywords: ["versatile", "curious", "adaptable", "creative", "broad-minded"],
      doThis: [
        "Connect ideas across disciplines",
        "Celebrate breadth of knowledge",
        "Find patterns across domains",
        "Synthesize diverse perspectives"
      ],
      avoidThis: [
        "Narrow, siloed thinking",
        "Dismissing adjacent fields",
        "Going too deep at expense of breadth",
        "Specialist arrogance"
      ]
    },
    brandPillars: [
      { pillar: "Synthesis", description: "The whole is greater than the parts." },
      { pillar: "Connection", description: "Ideas from one domain unlock another." },
      { pillar: "Breadth", description: "Wide knowledge enables unique insights." }
    ],
    contentHooks: [
      "Cross-disciplinary insights",
      "Pattern recognition across fields",
      "Unusual connections and analogies",
      "Renaissance thinking content"
    ],
    storytellingStyle: "Synthesis narratives where connecting diverse ideas creates breakthrough understanding",
    visualMood: ["network imagery", "interconnected nodes", "diverse elements unified", "mind-map aesthetics"],
    categoryId: "exploration",
    differentiator: "Explores across domains - more intellectual than Explorer, more connecting than Seeker, defined by synthesis of diverse knowledge"
  },
  seeker: {
    tagline: "The search for meaning.",
    coreMotivation: "To find deeper truth and authentic experience beyond the surface",
    deepestFear: "Superficiality, false answers, or never finding what you seek",
    brandPromise: "We help you find what you're really looking for",
    toneOfVoice: {
      summary: "Searching, philosophical, and authenticity-obsessed. The journey toward truth.",
      keywords: ["searching", "curious", "spiritual", "restless", "authentic"],
      doThis: [
        "Ask deep, meaningful questions",
        "Honor the search itself",
        "Celebrate authentic discovery",
        "Reject easy answers"
      ],
      avoidThis: [
        "Superficial or glib content",
        "Claiming to have all answers",
        "Rushing to conclusions",
        "Fake authenticity"
      ]
    },
    brandPillars: [
      { pillar: "Authenticity", description: "Only the real thing will do." },
      { pillar: "Meaning", description: "Surface answers aren't enough." },
      { pillar: "Journey", description: "The search itself has value." }
    ],
    contentHooks: [
      "Deep questioning content",
      "Authenticity explorations",
      "Meaning-making frameworks",
      "Honest search documentation"
    ],
    storytellingStyle: "Quest narratives where the search for deeper meaning leads to authentic discovery",
    visualMood: ["contemplative", "journey imagery", "sunrise/sunset", "solitary searching"],
    categoryId: "exploration",
    differentiator: "Explores inward for meaning - more spiritual than Explorer, more questioning than Pioneer, defined by authenticity-seeking"
  },

  // ============================================
  // CATEGORY 9: CREATION & INNOVATION
  // ============================================
  creator: {
    tagline: "Make something new.",
    coreMotivation: "To bring new things into existence through imagination and skill",
    deepestFear: "Mediocrity, stagnation, or failing to express your vision",
    brandPromise: "We help you create what didn't exist before",
    toneOfVoice: {
      summary: "Imaginative, expressive, and possibility-focused. Everything starts as an idea.",
      keywords: ["creative", "imaginative", "expressive", "visionary", "innovative"],
      doThis: [
        "Celebrate the creative process",
        "Share behind-the-scenes creation",
        "Inspire imagination in others",
        "Make space for experimentation"
      ],
      avoidThis: [
        "Copying or imitating others",
        "Playing it safe creatively",
        "Prioritizing efficiency over expression",
        "Stifling creative exploration"
      ]
    },
    brandPillars: [
      { pillar: "Originality", description: "Make what hasn't been made." },
      { pillar: "Expression", description: "Bring inner vision to outer reality." },
      { pillar: "Craft", description: "Skill serves imagination." }
    ],
    contentHooks: [
      "Creative process deep-dives",
      "Making-of and creation stories",
      "Inspiration and ideation content",
      "Celebrating creative expression"
    ],
    storytellingStyle: "Creation narratives where vision becomes reality through imagination and craft",
    visualMood: ["workshop aesthetics", "tools and materials", "work in progress", "creative chaos"],
    categoryId: "creation",
    differentiator: "Foundational creative archetype - broader than Artist, less commercial than Entrepreneur, defined by bringing new things to life"
  },
  entrepreneur: {
    tagline: "Build something that matters.",
    coreMotivation: "To create value and build something from nothing",
    deepestFear: "Failure, missed opportunities, or building something worthless",
    brandPromise: "We help you turn ideas into thriving ventures",
    toneOfVoice: {
      summary: "Driven, resourceful, and relentlessly action-oriented. Ideas without execution are nothing.",
      keywords: ["driven", "innovative", "risk-taking", "ambitious", "resourceful"],
      doThis: [
        "Focus on execution and results",
        "Share lessons from building",
        "Celebrate entrepreneurial wins",
        "Encourage bold action"
      ],
      avoidThis: [
        "All theory, no action",
        "Risk aversion",
        "Waiting for perfect conditions",
        "Giving up at obstacles"
      ]
    },
    brandPillars: [
      { pillar: "Execution", description: "Ideas are worthless without action." },
      { pillar: "Value", description: "Build things people actually need." },
      { pillar: "Resourcefulness", description: "Make it work with what you have." }
    ],
    contentHooks: [
      "Building and startup stories",
      "Lessons from failure and success",
      "Resourcefulness hacks",
      "Market opportunity analysis"
    ],
    storytellingStyle: "Building narratives where vision, hustle, and resourcefulness create something from nothing",
    visualMood: ["startup energy", "building and growth", "hustle imagery", "before/after business"],
    categoryId: "creation",
    differentiator: "Focused on building ventures - more commercial than Creator, more execution-focused than Visionary, defined by entrepreneurial action"
  },
  storyteller: {
    tagline: "Every story matters.",
    coreMotivation: "To create meaning and connection through narrative",
    deepestFear: "Being forgotten, failing to connect, or telling stories that don't matter",
    brandPromise: "We craft narratives that move and stay with you",
    toneOfVoice: {
      summary: "Engaging, empathetic, and masterfully narrative. Every message is a story.",
      keywords: ["articulate", "imaginative", "engaging", "empathetic", "memorable"],
      doThis: [
        "Structure everything as narrative",
        "Find the human story in every topic",
        "Use vivid, sensory language",
        "Create emotional connection through story"
      ],
      avoidThis: [
        "Dry, factual content without story",
        "Forgetting the human element",
        "Boring, linear presentations",
        "Stories without meaning"
      ]
    },
    brandPillars: [
      { pillar: "Narrative", description: "Everything is a story waiting to be told." },
      { pillar: "Connection", description: "Stories create understanding between people." },
      { pillar: "Meaning", description: "Good stories illuminate truth." }
    ],
    contentHooks: [
      "Customer success stories",
      "Origin and journey narratives",
      "Day-in-the-life content",
      "Behind-the-story content"
    ],
    storytellingStyle: "Meta-storytelling where the power of narrative itself creates connection and meaning",
    visualMood: ["narrative imagery", "book and film references", "story arc visuals", "character-focused"],
    categoryId: "creation",
    differentiator: "Focused on narrative craft - more structural than Artist, more emotional than Creator, defined by story-making"
  },
  artist: {
    tagline: "See what others miss.",
    coreMotivation: "To express unique inner vision through creative works",
    deepestFear: "Compromise, commercial pressure, or losing artistic integrity",
    brandPromise: "We create beauty that reveals truth",
    toneOfVoice: {
      summary: "Expressive, sensitive, and uncompromisingly original. Vision above all.",
      keywords: ["creative", "expressive", "sensitive", "visionary", "original"],
      doThis: [
        "Lead with aesthetic vision",
        "Prioritize beauty and expression",
        "Stay true to artistic integrity",
        "Create work that challenges"
      ],
      avoidThis: [
        "Compromising vision for commerce",
        "Following trends",
        "Explaining away the art",
        "Creating by committee"
      ]
    },
    brandPillars: [
      { pillar: "Vision", description: "Inner truth expressed outward." },
      { pillar: "Beauty", description: "Aesthetic experience matters deeply." },
      { pillar: "Integrity", description: "Never compromise the work." }
    ],
    contentHooks: [
      "Artistic process reveals",
      "Vision and inspiration sources",
      "Work-focused showcases",
      "Artistic philosophy content"
    ],
    storytellingStyle: "Artistic vision narratives where inner truth finds expression in creative work",
    visualMood: ["gallery aesthetics", "artistic composition", "expressive imagery", "curated beauty"],
    categoryId: "creation",
    differentiator: "Focused on pure artistic expression - more personal than Creator, more aesthetic than Storyteller, defined by uncompromising vision"
  },
  visionary: {
    tagline: "See tomorrow, build it today.",
    coreMotivation: "To envision and inspire others toward transformative futures",
    deepestFear: "Small thinking, missed potential, or a future that falls short",
    brandPromise: "We show you what's possible and help you get there",
    toneOfVoice: {
      summary: "Bold, inspiring, and future-focused. Paints compelling pictures of what could be.",
      keywords: ["forward-thinking", "inspiring", "innovative", "bold", "idealistic"],
      doThis: [
        "Paint vivid pictures of the future",
        "Connect today's actions to tomorrow's outcomes",
        "Inspire with ambitious possibilities",
        "Challenge limited thinking"
      ],
      avoidThis: [
        "Getting stuck in the present",
        "Small, incremental thinking",
        "Pessimistic forecasting",
        "Vision without action paths"
      ]
    },
    brandPillars: [
      { pillar: "Foresight", description: "See what others can't see yet." },
      { pillar: "Inspiration", description: "Make people believe in better futures." },
      { pillar: "Ambition", description: "Think bigger than what seems possible." }
    ],
    contentHooks: [
      "Future trend analysis",
      "Vision pieces and manifestos",
      "Roadmaps to transformation",
      "Inspiring possibility content"
    ],
    storytellingStyle: "Vision quest narratives where compelling futures inspire present-day transformation",
    visualMood: ["futuristic", "horizon imagery", "transformation visualization", "possibility aesthetics"],
    categoryId: "creation",
    differentiator: "Focused on inspiring futures - more strategic than Dreamer, more ambitious than Creator, defined by compelling vision"
  },

  // ============================================
  // CATEGORY 10: MAGIC & TRANSFORMATION
  // ============================================
  magician: {
    tagline: "Make the impossible possible.",
    coreMotivation: "To transform reality and make dreams manifest",
    deepestFear: "Unintended consequences or using power for harm",
    brandPromise: "We turn what is into what could be",
    toneOfVoice: {
      summary: "Transformative, charismatic, and mysteriously powerful. Reality is malleable.",
      keywords: ["transformative", "visionary", "charismatic", "intuitive", "powerful"],
      doThis: [
        "Promise and deliver transformation",
        "Use the language of magic and possibility",
        "Show dramatic before/after results",
        "Maintain an air of mystery"
      ],
      avoidThis: [
        "Over-explaining the method",
        "Promising without delivering",
        "Being mundane or ordinary",
        "Revealing all secrets"
      ]
    },
    brandPillars: [
      { pillar: "Transformation", description: "Change what was into what should be." },
      { pillar: "Power", description: "Wield influence responsibly." },
      { pillar: "Mystery", description: "Not everything needs to be explained." }
    ],
    contentHooks: [
      "Transformation case studies",
      "Magical moment reveals",
      "Behind the curtain glimpses",
      "Possibility-expanding content"
    ],
    storytellingStyle: "Transformation narratives where seemingly impossible change becomes reality",
    visualMood: ["mystical", "dramatic lighting", "transformation sequences", "powerful imagery"],
    categoryId: "transformation",
    differentiator: "Foundational transformation archetype - more mystical than Engineer, more powerful than Alchemist, defined by reality-shaping"
  },
  alchemist: {
    tagline: "Gold from the ordinary.",
    coreMotivation: "To discover hidden value and transmute the mundane into the precious",
    deepestFear: "Missing the gold, failing to see potential, or shallow transformation",
    brandPromise: "We find extraordinary value where others see nothing",
    toneOfVoice: {
      summary: "Patient, experimental, and value-focused. The ordinary hides treasures.",
      keywords: ["transformative", "patient", "mysterious", "wise", "experimental"],
      doThis: [
        "Reveal hidden value in the ordinary",
        "Use transformation language",
        "Show patient, iterative processes",
        "Celebrate unexpected discoveries"
      ],
      avoidThis: [
        "Seeking obvious opportunities",
        "Rushing transformation",
        "Missing hidden potential",
        "Surface-level analysis"
      ]
    },
    brandPillars: [
      { pillar: "Transmutation", description: "Change the nature of things." },
      { pillar: "Discovery", description: "Value hides in plain sight." },
      { pillar: "Patience", description: "True transformation takes time." }
    ],
    contentHooks: [
      "Hidden value reveals",
      "Transformation experiments",
      "Finding gold in unlikely places",
      "Patient process documentation"
    ],
    storytellingStyle: "Discovery narratives where patient experimentation reveals hidden value and transforms the ordinary",
    visualMood: ["laboratory aesthetics", "gold and transmutation", "scientific mysticism", "hidden treasures"],
    categoryId: "transformation",
    differentiator: "Finds hidden value - more patient than Magician, more value-focused than Innovator, defined by transmutation of the ordinary"
  },
  engineer: {
    tagline: "Design. Build. Perfect.",
    coreMotivation: "To design elegant systems that solve real problems",
    deepestFear: "Chaos, inefficiency, or building something that breaks",
    brandPromise: "We build solutions that actually work",
    toneOfVoice: {
      summary: "Precise, systematic, and elegantly practical. Form follows function.",
      keywords: ["analytical", "precise", "innovative", "systematic", "practical"],
      doThis: [
        "Explain how things work",
        "Show elegant solutions to problems",
        "Use precision and clarity",
        "Document and share learnings"
      ],
      avoidThis: [
        "Vague or imprecise claims",
        "Style over substance",
        "Ignoring how things work",
        "Over-complicating solutions"
      ]
    },
    brandPillars: [
      { pillar: "Precision", description: "Details matter at every level." },
      { pillar: "Elegance", description: "The best solution is the simplest that works." },
      { pillar: "Function", description: "If it doesn't work, it doesn't matter." }
    ],
    contentHooks: [
      "How-it-works deep-dives",
      "System design case studies",
      "Engineering challenges and solutions",
      "Precision and quality content"
    ],
    storytellingStyle: "Design narratives where systematic thinking creates elegant, functional solutions",
    visualMood: ["technical diagrams", "clean systems", "precision imagery", "blueprint aesthetics"],
    categoryId: "transformation",
    differentiator: "Focused on systematic design - more practical than Magician, more structural than Scientist, defined by elegant solutions"
  },
  scientist: {
    tagline: "Question everything. Test it.",
    coreMotivation: "To discover truth through rigorous inquiry and experimentation",
    deepestFear: "Bias, error, or believing something false",
    brandPromise: "We find out what's actually true, not just what seems true",
    toneOfVoice: {
      summary: "Curious, methodical, and rigorously evidence-based. Hypotheses are for testing.",
      keywords: ["curious", "methodical", "analytical", "skeptical", "innovative"],
      doThis: [
        "Lead with evidence and data",
        "Question assumptions openly",
        "Share methodology and process",
        "Acknowledge uncertainty honestly"
      ],
      avoidThis: [
        "Claims without evidence",
        "Ignoring contradictory data",
        "Certainty without testing",
        "Confirmation bias"
      ]
    },
    brandPillars: [
      { pillar: "Evidence", description: "Data beats opinion, always." },
      { pillar: "Inquiry", description: "Every claim deserves investigation." },
      { pillar: "Honesty", description: "Report what you find, not what you hoped." }
    ],
    contentHooks: [
      "Research findings and analysis",
      "Experiment results",
      "Myth-busting with data",
      "Methodology transparency"
    ],
    storytellingStyle: "Discovery narratives where rigorous investigation reveals unexpected truths",
    visualMood: ["laboratory", "data visualization", "research aesthetics", "clean and clinical"],
    categoryId: "transformation",
    differentiator: "Focused on rigorous inquiry - more methodical than Magician, more theoretical than Engineer, defined by evidence-based discovery"
  },
  innovator: {
    tagline: "Change the game.",
    coreMotivation: "To create breakthrough solutions that disrupt the status quo",
    deepestFear: "Incrementalism, being copied, or failing to change anything",
    brandPromise: "We don't improve the game - we change it entirely",
    toneOfVoice: {
      summary: "Bold, disruptive, and relentlessly forward-looking. Incremental is for others.",
      keywords: ["inventive", "bold", "persistent", "visionary", "disruptive"],
      doThis: [
        "Challenge category conventions",
        "Introduce breakthrough thinking",
        "Show how you're different, not better",
        "Lead with what's new and next"
      ],
      avoidThis: [
        "Incremental improvements",
        "Following industry trends",
        "Comparing to competitors",
        "Playing by existing rules"
      ]
    },
    brandPillars: [
      { pillar: "Disruption", description: "Better isn't enough - different is everything." },
      { pillar: "Breakthrough", description: "Solve problems no one else can solve." },
      { pillar: "Vision", description: "See possibilities others can't imagine." }
    ],
    contentHooks: [
      "Breakthrough announcements",
      "Industry disruption analysis",
      "First-principles thinking",
      "Innovation methodology"
    ],
    storytellingStyle: "Breakthrough narratives where unconventional thinking creates category-defining change",
    visualMood: ["cutting-edge", "futuristic technology", "disruption imagery", "bold and modern"],
    categoryId: "transformation",
    differentiator: "Focused on breakthrough change - more commercial than Scientist, more disruptive than Engineer, defined by game-changing innovation"
  },

  // ============================================
  // CATEGORY 11: LOVE & CONNECTION
  // ============================================
  lover: {
    tagline: "Feel everything.",
    coreMotivation: "To experience and create deep intimacy, passion, and connection",
    deepestFear: "Rejection, being unloved, or a passionless existence",
    brandPromise: "We help you experience deeper connection and beauty",
    toneOfVoice: {
      summary: "Passionate, sensual, and emotionally rich. Every interaction is intimate.",
      keywords: ["passionate", "sensual", "devoted", "appreciative", "warm"],
      doThis: [
        "Lead with emotion and feeling",
        "Create sensory-rich experiences",
        "Celebrate beauty and pleasure",
        "Make customers feel desired"
      ],
      avoidThis: [
        "Cold or transactional language",
        "Purely rational messaging",
        "Ignoring aesthetics and beauty",
        "Making anyone feel unwanted"
      ]
    },
    brandPillars: [
      { pillar: "Passion", description: "Feel deeply, express fully." },
      { pillar: "Beauty", description: "Aesthetic experience is essential." },
      { pillar: "Intimacy", description: "Connection at the deepest level." }
    ],
    contentHooks: [
      "Sensory and aesthetic content",
      "Passion and desire themes",
      "Beauty appreciation",
      "Deep connection stories"
    ],
    storytellingStyle: "Romance narratives where passion and beauty create profound connection and fulfillment",
    visualMood: ["sensual", "warm and intimate", "beauty-focused", "rich textures and colors"],
    categoryId: "love",
    differentiator: "Foundational love archetype - more passionate than Companion, more sensual than Romantic, defined by intimate connection"
  },
  romantic: {
    tagline: "Love is everything.",
    coreMotivation: "To find and celebrate transcendent, idealized love",
    deepestFear: "Settling, cynicism about love, or ordinary relationships",
    brandPromise: "We help you believe in and find extraordinary love",
    toneOfVoice: {
      summary: "Dreamy, passionate, and beautifully idealistic. Love as the highest experience.",
      keywords: ["passionate", "idealistic", "expressive", "devoted", "dreamy"],
      doThis: [
        "Celebrate idealized love",
        "Use poetic, expressive language",
        "Create magical moments",
        "Honor romance and devotion"
      ],
      avoidThis: [
        "Cynicism about love",
        "Practical or mundane framing",
        "Settling for ordinary",
        "Reducing love to transaction"
      ]
    },
    brandPillars: [
      { pillar: "Devotion", description: "Love that transcends the everyday." },
      { pillar: "Magic", description: "Romance creates its own reality." },
      { pillar: "Beauty", description: "Love makes everything beautiful." }
    ],
    contentHooks: [
      "Love stories and romances",
      "Romantic gesture ideas",
      "Celebrating devotion",
      "Creating magical moments"
    ],
    storytellingStyle: "Love story narratives where romance elevates ordinary life into something magical",
    visualMood: ["soft and dreamy", "romantic lighting", "flowers and beauty", "couple imagery"],
    categoryId: "love",
    differentiator: "Focused on idealized romance - more dreamy than Lover, more relationship-focused than Hedonist, defined by transcendent love"
  },
  matchmaker: {
    tagline: "Better together.",
    coreMotivation: "To create perfect pairings and bring compatible people together",
    deepestFear: "Bad matches, missed connections, or being wrong about compatibility",
    brandPromise: "We find connections you never knew you needed",
    toneOfVoice: {
      summary: "Perceptive, social, and delightfully strategic about connections. Sees what fits.",
      keywords: ["perceptive", "social", "caring", "strategic", "generous"],
      doThis: [
        "Highlight perfect matches and pairings",
        "Show understanding of compatibility",
        "Create connection opportunities",
        "Celebrate successful matches"
      ],
      avoidThis: [
        "Forcing incompatible connections",
        "Being prescriptive about relationships",
        "Ignoring chemistry and fit",
        "Transactional matching"
      ]
    },
    brandPillars: [
      { pillar: "Compatibility", description: "The right match changes everything." },
      { pillar: "Perception", description: "See what others miss about fit." },
      { pillar: "Connection", description: "Bring together what belongs together." }
    ],
    contentHooks: [
      "Match success stories",
      "Compatibility insights",
      "Connection-making content",
      "Finding your perfect fit"
    ],
    storytellingStyle: "Meeting narratives where unexpected connections create lasting bonds",
    visualMood: ["pairing imagery", "two becoming one", "social settings", "happy matches"],
    categoryId: "love",
    differentiator: "Focused on creating matches - more strategic than Lover, more external than Romantic, defined by bringing compatible people together"
  },
  companion: {
    tagline: "Always by your side.",
    coreMotivation: "To be a loyal, supportive presence through life's journey",
    deepestFear: "Abandonment, betrayal, or being left alone",
    brandPromise: "We're with you, no matter what",
    toneOfVoice: {
      summary: "Loyal, supportive, and warmly reliable. The friend who's always there.",
      keywords: ["loyal", "supportive", "reliable", "empathetic", "trustworthy"],
      doThis: [
        "Emphasize consistency and presence",
        "Show up in hard times",
        "Celebrate long-term relationships",
        "Be reliably supportive"
      ],
      avoidThis: [
        "Fair-weather friendship",
        "Abandoning when things get hard",
        "Transactional relationships",
        "Breaking trust or promises"
      ]
    },
    brandPillars: [
      { pillar: "Loyalty", description: "Stick together through everything." },
      { pillar: "Support", description: "Be there when it matters most." },
      { pillar: "Presence", description: "Showing up is half the battle." }
    ],
    contentHooks: [
      "Long-term relationship stories",
      "Through-thick-and-thin content",
      "Customer journey celebrations",
      "Loyalty and appreciation"
    ],
    storytellingStyle: "Friendship narratives where steadfast support creates deep, lasting bonds",
    visualMood: ["side-by-side imagery", "journey together", "supportive moments", "warm and reliable"],
    categoryId: "love",
    differentiator: "Focused on loyal friendship - less passionate than Lover, more equal than Romantic, defined by steadfast presence"
  },
  hedonist: {
    tagline: "Pleasure is the point.",
    coreMotivation: "To experience maximum pleasure and sensory delight",
    deepestFear: "Deprivation, austerity, or missing out on enjoyment",
    brandPromise: "We help you experience life's greatest pleasures",
    toneOfVoice: {
      summary: "Indulgent, sensory, and unapologetically pleasure-focused. Life is meant to be enjoyed.",
      keywords: ["pleasure-seeking", "sensual", "joyful", "indulgent", "present"],
      doThis: [
        "Celebrate indulgence without guilt",
        "Use rich, sensory language",
        "Focus on present enjoyment",
        "Make pleasure feel deserved"
      ],
      avoidThis: [
        "Guilt or shame about pleasure",
        "Delayed gratification messaging",
        "Austerity or sacrifice themes",
        "Denying enjoyment"
      ]
    },
    brandPillars: [
      { pillar: "Pleasure", description: "Joy is its own justification." },
      { pillar: "Presence", description: "Enjoy now, not later." },
      { pillar: "Indulgence", description: "You deserve to feel good." }
    ],
    contentHooks: [
      "Sensory experience content",
      "Guilt-free indulgence",
      "Pleasure recommendations",
      "Living your best life now"
    ],
    storytellingStyle: "Indulgence narratives where embracing pleasure leads to a more fulfilling life",
    visualMood: ["luxurious", "rich textures", "sensory imagery", "indulgent moments"],
    categoryId: "love",
    differentiator: "Focused on pure pleasure - more physical than Lover, more self-focused than Romantic, defined by guilt-free enjoyment"
  },

  // ============================================
  // CATEGORY 12: AUTHORITY & LEADERSHIP
  // ============================================
  ruler: {
    tagline: "Lead with purpose.",
    coreMotivation: "To create order and exercise power responsibly for the greater good",
    deepestFear: "Chaos, being overthrown, or misusing power",
    brandPromise: "We take responsibility so you can trust the outcome",
    toneOfVoice: {
      summary: "Authoritative, confident, and responsibly powerful. Leadership that serves.",
      keywords: ["authoritative", "responsible", "strategic", "confident", "decisive"],
      doThis: [
        "Speak with confident authority",
        "Take clear, decisive positions",
        "Show responsible use of power",
        "Create order and structure"
      ],
      avoidThis: [
        "Weakness or indecision",
        "Chaos or disorganization",
        "Tyrannical messaging",
        "Abdicating responsibility"
      ]
    },
    brandPillars: [
      { pillar: "Authority", description: "Lead with confidence and competence." },
      { pillar: "Responsibility", description: "Power comes with duty." },
      { pillar: "Order", description: "Create structure that serves all." }
    ],
    contentHooks: [
      "Leadership perspectives",
      "Strategic direction content",
      "Responsible power case studies",
      "Creating order from chaos"
    ],
    storytellingStyle: "Leadership narratives where responsible authority creates order and prosperity",
    visualMood: ["regal and commanding", "structured and ordered", "powerful imagery", "leadership symbols"],
    categoryId: "authority",
    differentiator: "Foundational authority archetype - more administrative than Sovereign, broader than Judge, defined by responsible power"
  },
  judge: {
    tagline: "Truth and justice prevail.",
    coreMotivation: "To weigh evidence fairly and deliver righteous judgment",
    deepestFear: "Making wrong judgments, corruption, or injustice",
    brandPromise: "We ensure fairness and deliver justice",
    toneOfVoice: {
      summary: "Fair, authoritative, and rigorously impartial. Every case deserves careful consideration.",
      keywords: ["fair", "wise", "authoritative", "principled", "impartial"],
      doThis: [
        "Weigh all sides carefully",
        "Make clear, reasoned judgments",
        "Stand firm on fairness",
        "Explain your reasoning"
      ],
      avoidThis: [
        "Bias or favoritism",
        "Hasty judgments",
        "Harsh without reason",
        "Inconsistent standards"
      ]
    },
    brandPillars: [
      { pillar: "Justice", description: "Right and wrong matter." },
      { pillar: "Fairness", description: "Equal treatment under the rules." },
      { pillar: "Wisdom", description: "Good judgment requires deep understanding." }
    ],
    contentHooks: [
      "Fair evaluation content",
      "Reasoned judgment pieces",
      "Standards and criteria",
      "Justice and fairness themes"
    ],
    storytellingStyle: "Justice narratives where careful judgment leads to fair and righteous outcomes",
    visualMood: ["scales and balance", "courtroom dignity", "black and white clarity", "authoritative symbols"],
    categoryId: "authority",
    differentiator: "Focused on fair judgment - more evaluative than Ruler, more impartial than Sovereign, defined by righteous judgment"
  },
  sovereign: {
    tagline: "Rule with grace.",
    coreMotivation: "To embody noble leadership and inspire through dignified power",
    deepestFear: "Losing dignity, failing your realm, or being unworthy of the crown",
    brandPromise: "We lead with the dignity and grace your trust deserves",
    toneOfVoice: {
      summary: "Noble, dignified, and gracefully powerful. Leadership as sacred duty.",
      keywords: ["noble", "wise", "dignified", "responsible", "commanding"],
      doThis: [
        "Speak with grace and dignity",
        "Lead by example",
        "Honor tradition while evolving",
        "Inspire rather than command"
      ],
      avoidThis: [
        "Undignified behavior",
        "Ruling through fear",
        "Forgetting duty to subjects",
        "Petty concerns"
      ]
    },
    brandPillars: [
      { pillar: "Dignity", description: "Command respect through nobility." },
      { pillar: "Wisdom", description: "Rule with earned understanding." },
      { pillar: "Grace", description: "Power exercised beautifully." }
    ],
    contentHooks: [
      "Noble leadership examples",
      "Dignified brand moments",
      "Legacy and tradition content",
      "Graceful power demonstrations"
    ],
    storytellingStyle: "Royal narratives where dignified leadership earns loyalty and creates lasting legacy",
    visualMood: ["regal", "crown imagery", "noble aesthetics", "timeless elegance"],
    categoryId: "authority",
    differentiator: "Focused on noble dignity - more refined than Ruler, more inspiring than Judge, defined by graceful power"
  },
  patriarch: {
    tagline: "Wisdom through generations.",
    coreMotivation: "To guide and protect family through wisdom and provision",
    deepestFear: "Failing to provide, legacy dying, or family falling apart",
    brandPromise: "We protect and provide for what matters most",
    toneOfVoice: {
      summary: "Protective, traditional, and wisely authoritative. The family's rock.",
      keywords: ["protective", "wise", "traditional", "authoritative", "providing"],
      doThis: [
        "Emphasize protection and provision",
        "Honor tradition and legacy",
        "Speak with earned authority",
        "Focus on family and generational value"
      ],
      avoidThis: [
        "Abandoning responsibilities",
        "Dismissing tradition carelessly",
        "Authoritarian demands",
        "Ignoring family needs"
      ]
    },
    brandPillars: [
      { pillar: "Protection", description: "Keep the family safe." },
      { pillar: "Provision", description: "Ensure everyone has what they need." },
      { pillar: "Legacy", description: "Build for generations." }
    ],
    contentHooks: [
      "Family legacy stories",
      "Generational wisdom content",
      "Protection and provision themes",
      "Tradition and heritage"
    ],
    storytellingStyle: "Family narratives where patriarchal wisdom and protection create lasting legacy",
    visualMood: ["family gatherings", "generational imagery", "traditional settings", "protective symbols"],
    categoryId: "authority",
    differentiator: "Focused on family leadership - more personal than Ruler, more traditional than Sovereign, defined by generational protection"
  },
  ambassador: {
    tagline: "Bridge worlds with grace.",
    coreMotivation: "To represent, connect, and build understanding across boundaries",
    deepestFear: "Diplomatic failure, misrepresentation, or broken bridges",
    brandPromise: "We represent you with excellence and build bridges to new worlds",
    toneOfVoice: {
      summary: "Diplomatic, articulate, and culturally fluent. Every interaction builds bridges.",
      keywords: ["diplomatic", "articulate", "cultural", "persuasive", "trustworthy"],
      doThis: [
        "Speak for others with care",
        "Build bridges between different groups",
        "Show cultural fluency",
        "Represent with excellence"
      ],
      avoidThis: [
        "Taking sides in conflicts",
        "Misrepresenting those you serve",
        "Cultural insensitivity",
        "Burning bridges"
      ]
    },
    brandPillars: [
      { pillar: "Representation", description: "Speak for others with integrity." },
      { pillar: "Connection", description: "Build bridges between different worlds." },
      { pillar: "Diplomacy", description: "Navigate differences with grace." }
    ],
    contentHooks: [
      "Cross-cultural insights",
      "Bridge-building stories",
      "Diplomatic success cases",
      "Representing diverse perspectives"
    ],
    storytellingStyle: "Diplomatic narratives where skillful representation creates understanding and connection",
    visualMood: ["international", "handshake moments", "bridge imagery", "cultural exchange"],
    categoryId: "authority",
    differentiator: "Focused on representation and connection - more diplomatic than Ruler, more external than Sovereign, defined by bridge-building"
  }
};
