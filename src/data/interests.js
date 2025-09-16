// src/data/interests.js
export const interestCategories = [
  {
    id: 'technology',
    name: 'Technology',
    icon: '💻',
    color: '#00D9FF',
    topics: ['Programming', 'AI/ML', 'Cybersecurity', 'Web Development', 'Mobile Apps', 'Gaming Tech']
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: '🎮',
    color: '#7289DA',
    topics: ['PC Gaming', 'Console Gaming', 'Mobile Gaming', 'Esports', 'Game Development', 'VR Gaming']
  },
  {
    id: 'creative',
    name: 'Creative Arts',
    icon: '🎨',
    color: '#FF6B6B',
    topics: ['Digital Art', 'Photography', 'Music Production', 'Video Editing', 'Graphic Design', 'Animation']
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: '#4ECDC4',
    topics: ['Physics', 'Chemistry', 'Biology', 'Space', 'Mathematics', 'Environmental Science']
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    icon: '🌟',
    color: '#FFE66D',
    topics: ['Fitness', 'Cooking', 'Travel', 'Fashion', 'Wellness', 'Personal Development']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    color: '#FF8B94',
    topics: ['Movies', 'TV Shows', 'Anime', 'Books', 'Podcasts', 'Streaming']
  },
  {
    id: 'business',
    name: 'Business',
    icon: '💼',
    color: '#95E1D3',
    topics: ['Entrepreneurship', 'Investing', 'Marketing', 'Startups', 'Finance', 'Leadership']
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    color: '#A8E6CF',
    topics: ['Football', 'Basketball', 'Cricket', 'Tennis', 'Swimming', 'Martial Arts']
  }
];

// Username generation based on interests
export const usernameGenerators = {
  technology: [
    'CodeNinja', 'ByteMaster', 'PixelWizard', 'DataHunter', 'CyberSage', 'TechPhantom',
    'AlgoKnight', 'BugSlayer', 'CloudRider', 'QuantumCoder', 'CryptoGhost', 'DevSorcerer'
  ],
  gaming: [
    'ShadowGamer', 'PixelHero', 'GameMaster', 'QuestSeeker', 'BossHunter', 'LootFinder',
    'RaidLeader', 'SkillShot', 'PowerPlayer', 'GameChanger', 'LevelUp', 'CriticalHit'
  ],
  creative: [
    'ArtVision', 'ColorDreamer', 'PixelArtist', 'CreativeFlow', 'DesignGuru', 'ArtisticSoul',
    'VisualPoet', 'ColorMage', 'SketchWizard', 'ArtisticMind', 'CreativeSpark', 'DesignPhantom'
  ],
  science: [
    'QuantumMind', 'AtomicBrain', 'ScienceSeeker', 'LabExplorer', 'TheoryMaster', 'DataScientist',
    'CosmicThinker', 'MoleculeHunter', 'EquationSolver', 'ResearchNinja', 'ScienceWiz', 'LabGenius'
  ],
  lifestyle: [
    'LifeExplorer', 'WellnessGuru', 'LifeHacker', 'ZenMaster', 'LifeCoach', 'WellnessWarrior',
    'LifeOptimizer', 'MindfulSoul', 'LifeBalance', 'WellnessSeeker', 'LifeChampion', 'ZenWarrior'
  ],
  entertainment: [
    'ShowBinger', 'FilmBuff', 'StorySeekerr', 'EntertainmentPro', 'MediaMaster', 'ShowHunter',
    'CinemaLover', 'SeriesAddict', 'MovieMagic', 'ShowStopper', 'FilmFanatic', 'StoryTeller'
  ],
  business: [
    'BusinessMind', 'StartupNinja', 'InvestorPro', 'BusinessHacker', 'MarketMaster', 'BusinessGuru',
    'StartupHero', 'BusinessWiz', 'MarketHunter', 'BusinessPhantom', 'StartupSage', 'BusinessGenius'
  ],
  sports: [
    'SportsMaster', 'AthleteSpirit', 'GameChanger', 'SportsHero', 'FitnessWarrior', 'SportsStar',
    'AthleteLife', 'SportsLegend', 'GameWinner', 'SportsPhantom', 'FitnessGuru', 'SportsSage'
  ]
};

export const generateUsername = (selectedInterests) => {
  if (selectedInterests.length === 0) {
    return 'Anonymous' + Math.floor(Math.random() * 9999);
  }
  
  // Pick a random interest from selected ones
  const randomInterest = selectedInterests[Math.floor(Math.random() * selectedInterests.length)];
  const possibleNames = usernameGenerators[randomInterest.id] || usernameGenerators.technology;
  const baseName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  
  // Add random number for uniqueness
  const randomNumber = Math.floor(Math.random() * 999) + 1;
  
  return `${baseName}${randomNumber}`;
};
