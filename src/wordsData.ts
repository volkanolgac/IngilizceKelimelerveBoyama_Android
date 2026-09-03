// ==========================================
// 50 KELİMELİK İNGİLİZCE GELİŞİM LİSTESİ
// Basitten zora (3 harften 10 harfe doğru)
// ==========================================

export interface WordItem {
  id: string;
  english: string;
  turkish: string;
  gameType: 'coloring' | 'puzzle';
  emoji: string;
  color: string;
  category: 'animals' | 'fruits' | 'vehicles' | 'nature' | 'objects';
  difficulty: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  difficultyLabel: string;
  funFactEn: string;
  funFactTr: string;
  defaultParts: Record<string, string>;
}

export const WORDS_DATA: WordItem[] = [
  // ==========================================
  // ⭐ SEVİYE 1: BAŞLANGIÇ (3 Harfli Kelimeler - 10 Adet)
  // ==========================================
  {
    id: 'cat',
    english: 'CAT',
    turkish: 'Kedi',
    gameType: 'coloring',
    emoji: '🐱',
    color: '#FF6B6B',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Cats can jump up to 6 times their height and purr when happy!',
    funFactTr: 'Kediler boylarının 6 katı kadar yükseğe zıplayabilir!',
    defaultParts: {
      head: '#FBBF24',
      ears: '#D97706',
      earsInner: '#FEF3C7',
      nose: '#FB7185',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'dog',
    english: 'DOG',
    turkish: 'Köpek',
    gameType: 'puzzle',
    emoji: '🐶',
    color: '#35A7FF',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: "A dog's sense of smell is 10,000 times stronger than humans!",
    funFactTr: 'Köpeklerin koku alma duyusu çok güçlüdür ve harika birer dostturlar!',
    defaultParts: {
      head: '#FBBF24',
      ears: '#D97706',
      patch: '#D97706',
      snout: '#FEF3C7',
      nose: '#1E293B',
      tongue: '#FB7185',
      cheeks: '#FDA4AF',
      collar: '#EF4444',
      body: '#FBBF24',
      paws: '#FEF3C7'
    }
  },
  {
    id: 'sun',
    english: 'SUN',
    turkish: 'Güneş',
    gameType: 'coloring',
    emoji: '☀️',
    color: '#FBBF24',
    category: 'nature',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'The Sun is a giant glowing star that gives us warmth and light.',
    funFactTr: 'Güneş bize ısı ve ışık veren sıcacık bir yıldızdır.',
    defaultParts: {
      rays: '#F59E0B',
      body: '#FBBF24',
      cheeks: '#F43F5E',
      eyes: '#1E293B'
    }
  },
  {
    id: 'car',
    english: 'CAR',
    turkish: 'Araba',
    gameType: 'puzzle',
    emoji: '🚗',
    color: '#06D6A0',
    category: 'vehicles',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Cars have thousands of parts working together to drive smoothly.',
    funFactTr: 'Bir arabada birlikte çalışan binlerce parça vardır.',
    defaultParts: {
      body: '#3B82F6',
      windows: '#BAE6FD',
      wheels: '#334155',
      hubcaps: '#94A3B8',
      lights: '#FDE047'
    }
  },
  {
    id: 'bus',
    english: 'BUS',
    turkish: 'Otobüs',
    gameType: 'puzzle',
    emoji: '🚌',
    color: '#F59E0B',
    category: 'vehicles',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Buses can carry many passengers together comfortably and safely.',
    funFactTr: 'Otobüsler birçok insanı birlikte taşır ve şehirde gezdirir.',
    defaultParts: {
      body: '#FBBF24',
      windows: '#BAE6FD',
      wheels: '#334155',
      lights: '#EF4444',
      stripe: '#F59E0B'
    }
  },
  {
    id: 'fox',
    english: 'FOX',
    turkish: 'Tilki',
    gameType: 'coloring',
    emoji: '🦊',
    color: '#EA580C',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Foxes use their bushy tails to stay warm in cold weather!',
    funFactTr: 'Tilkiler kurnaz ve sevimli, tüylü kuyruklu hayvanlardır.',
    defaultParts: {
      head: '#EA580C',
      ears: '#C2410C',
      cheeks: '#FFFFFF',
      nose: '#1E293B',
      blush: '#FDA4AF'
    }
  },
  {
    id: 'owl',
    english: 'OWL',
    turkish: 'Baykuş',
    gameType: 'coloring',
    emoji: '🦉',
    color: '#854D0E',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Owls can turn their heads almost all the way around!',
    funFactTr: 'Baykuşlar geceleri görür ve kafalarını neredeyse tam tur döndürebilir.',
    defaultParts: {
      body: '#854D0E',
      belly: '#FEF3C7',
      eyes: '#FDE047',
      beak: '#F97316',
      wings: '#A16207'
    }
  },
  {
    id: 'pig',
    english: 'PIG',
    turkish: 'Domuzcuk',
    gameType: 'coloring',
    emoji: '🐷',
    color: '#FB7185',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Pigs are super smart animals that love playing and splashing in water.',
    funFactTr: 'Domuzcuklar çok zeki ve sevimli pembe burunlu hayvanlardır.',
    defaultParts: {
      head: '#FDA4AF',
      snout: '#FB7185',
      ears: '#F43F5E',
      cheeks: '#FB7185',
      eyes: '#1E293B'
    }
  },
  {
    id: 'bat',
    english: 'BAT',
    turkish: 'Yarasa',
    gameType: 'puzzle',
    emoji: '🦇',
    color: '#64748B',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Bats are the only mammals capable of true, sustained flight!',
    funFactTr: 'Yarasalar geceleri ses dalgalarıyla yollarını bulan uçan memelilerdir.',
    defaultParts: {
      body: '#475569',
      wings: '#334155',
      ears: '#64748B',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'cup',
    english: 'CUP',
    turkish: 'Fincan',
    gameType: 'coloring',
    emoji: '☕',
    color: '#06B6D4',
    category: 'objects',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Cups and mugs keep our milk, hot cocoa, and warm tea yummy!',
    funFactTr: 'Kupalar süt, meyve suyu ve sıcak çikolata içmek için harikadır.',
    defaultParts: {
      cup: '#06B6D4',
      handle: '#0891B2',
      steam: '#94A3B8',
      pattern: '#FDE047',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // ⭐⭐ SEVİYE 2: KOLAY (4 Harfli Kelimeler - 10 Adet)
  // ==========================================
  {
    id: 'fish',
    english: 'FISH',
    turkish: 'Balık',
    gameType: 'puzzle',
    emoji: '🐟',
    color: '#38BDF8',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Fish breathe underwater using their gills and swim with fins!',
    funFactTr: 'Balıklar solungaçlarıyla suyun altında yüzer ve nefes alır!',
    defaultParts: {
      body: '#0EA5E9',
      fins: '#0284C7',
      tail: '#38BDF8',
      stripes: '#7DD3FC',
      eyes: '#1E293B',
      cheeks: '#F43F5E'
    }
  },
  {
    id: 'duck',
    english: 'DUCK',
    turkish: 'Ördek',
    gameType: 'coloring',
    emoji: '🦆',
    color: '#34D399',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Ducks have waterproof feathers that keep them dry and warm!',
    funFactTr: 'Ördeklerin tüyleri su tutmaz ve göllerde vak vak diye yüzerler.',
    defaultParts: {
      body: '#FBBF24',
      head: '#FDE047',
      beak: '#F97316',
      wing: '#F59E0B',
      eyes: '#1E293B',
      cheeks: '#F43F5E'
    }
  },
  {
    id: 'star',
    english: 'STAR',
    turkish: 'Yıldız',
    gameType: 'coloring',
    emoji: '⭐',
    color: '#FACC15',
    category: 'nature',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Stars twinkle because their light travels through Earth’s atmosphere!',
    funFactTr: 'Yıldızlar gece gökyüzünde ışıl ışıl parıldayan gök cisimleridir.',
    defaultParts: {
      body: '#FACC15',
      glow: '#FEF08A',
      eyes: '#1E293B',
      cheeks: '#FB7185'
    }
  },
  {
    id: 'tree',
    english: 'TREE',
    turkish: 'Ağaç',
    gameType: 'puzzle',
    emoji: '🌳',
    color: '#22C55E',
    category: 'nature',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Trees clean our air and give us fresh oxygen to breathe!',
    funFactTr: 'Ağaçlar havayı temizler ve bize taze oksijen verir!',
    defaultParts: {
      leavesTop: '#22C55E',
      leavesBottom: '#16A34A',
      trunk: '#854D0E',
      fruits: '#EF4444',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'frog',
    english: 'FROG',
    turkish: 'Kurbağa',
    gameType: 'coloring',
    emoji: '🐸',
    color: '#4ADE80',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Frogs can leap over 20 times their body length!',
    funFactTr: 'Kurbağalar vıraklar ve çok yükseğe zıplayabilir!',
    defaultParts: {
      head: '#4ADE80',
      belly: '#BBF7D0',
      eyesOuter: '#22C55E',
      pupils: '#1E293B',
      cheeks: '#FB7185',
      legs: '#16A34A'
    }
  },
  {
    id: 'ship',
    english: 'SHIP',
    turkish: 'Gemi',
    gameType: 'puzzle',
    emoji: '🚢',
    color: '#3B82F6',
    category: 'vehicles',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Ships float on the ocean and travel across continents!',
    funFactTr: 'Büyük gemiler masmavi denizlerde seyahat eder!',
    defaultParts: {
      hull: '#3B82F6',
      deck: '#FFFFFF',
      funnel: '#EF4444',
      waves: '#0284C7',
      portholes: '#FDE047'
    }
  },
  {
    id: 'moon',
    english: 'MOON',
    turkish: 'Ay',
    gameType: 'coloring',
    emoji: '🌙',
    color: '#FACC15',
    category: 'nature',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'The Moon orbits around our Earth in the night sky.',
    funFactTr: 'Ay geceleri gökyüzünde parıldayan uydumuzdur.',
    defaultParts: {
      body: '#FACC15',
      stars: '#FDE047',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'lion',
    english: 'LION',
    turkish: 'Aslan',
    gameType: 'coloring',
    emoji: '🦁',
    color: '#F97316',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Lions are known as the brave kings of the savannas!',
    funFactTr: 'Aslanlar güçlü yeleleriyle hayvanlar aleminin kralıdır.',
    defaultParts: {
      mane: '#F97316',
      face: '#FDE047',
      ears: '#FBBF24',
      earsInner: '#FDA4AF',
      snout: '#FFFFFF',
      nose: '#78350F',
      cheeks: '#FB7185'
    }
  },
  {
    id: 'bear',
    english: 'BEAR',
    turkish: 'Ayı',
    gameType: 'coloring',
    emoji: '🐻',
    color: '#92400E',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Bears love sweet wild honey and are great swimmers!',
    funFactTr: 'Ayılar tatlı balları çok sever ve kış uykusuna yatarlar.',
    defaultParts: {
      head: '#92400E',
      snout: '#FDE68A',
      ears: '#78350F',
      earsInner: '#FDA4AF',
      cheeks: '#FDA4AF',
      nose: '#1E293B'
    }
  },
  {
    id: 'bird',
    english: 'BIRD',
    turkish: 'Kuş',
    gameType: 'coloring',
    emoji: '🐦',
    color: '#0284C7',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Birds can sing lovely songs and soar high into the blue sky.',
    funFactTr: 'Kuşlar neşeli şarkılar söyler ve kanatlarıyla göklerde uçar.',
    defaultParts: {
      body: '#38BDF8',
      wings: '#0284C7',
      tail: '#0284C7',
      belly: '#BAE6FD',
      beak: '#F97316',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // ⭐⭐⭐ SEVİYE 3: ORTA (5 Harfli Kelimeler - 10 Adet)
  // ==========================================
  {
    id: 'apple',
    english: 'APPLE',
    turkish: 'Elma',
    gameType: 'puzzle',
    emoji: '🍎',
    color: '#FF5964',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Apples float in water because 25% of their volume is air!',
    funFactTr: 'Elmaların %25’i hava olduğu için suda yüzerler!',
    defaultParts: {
      body: '#EF4444',
      leaf: '#22C55E',
      stem: '#78350F',
      cheeks: '#FDA4AF',
      eyes: '#1E293B',
      highlight: '#FCA5A5'
    }
  },
  {
    id: 'train',
    english: 'TRAIN',
    turkish: 'Tren',
    gameType: 'puzzle',
    emoji: '🚂',
    color: '#3B82F6',
    category: 'vehicles',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Trains run on steel tracks across beautiful mountains and cities!',
    funFactTr: 'Trenler rayların üzerinde çuf çuf diye ilerler!',
    defaultParts: {
      body: '#F59E0B',
      cabin: '#3B82F6',
      window: '#BAE6FD',
      chimney: '#EF4444',
      smoke: '#E2E8F0',
      wheels: '#334155',
      headlight: '#FDE047'
    }
  },
  {
    id: 'horse',
    english: 'HORSE',
    turkish: 'At',
    gameType: 'coloring',
    emoji: '🐴',
    color: '#D97706',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Horses can sleep both lying down and standing up!',
    funFactTr: 'Atlar çok hızlı koşabilen asil ve sevimli dostlarımızdır.',
    defaultParts: {
      head: '#D97706',
      body: '#D97706',
      ears: '#D97706',
      earsInner: '#FDA4AF',
      mane: '#78350F',
      snout: '#FEF3C7',
      blaze: '#FFFFFF',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'cloud',
    english: 'CLOUD',
    turkish: 'Bulut',
    gameType: 'coloring',
    emoji: '☁️',
    color: '#38BDF8',
    category: 'nature',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Clouds are made of billions of tiny water droplets floating together.',
    funFactTr: 'Bulutlar gökyüzünde pamuk gibi süzülür ve yağmur getirir.',
    defaultParts: {
      cloud: '#E0F2FE',
      rainbow: '#FB7185',
      drops: '#38BDF8',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'house',
    english: 'HOUSE',
    turkish: 'Ev',
    gameType: 'puzzle',
    emoji: '🏠',
    color: '#EC4899',
    category: 'objects',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Houses are cozy warm places where families live happily together!',
    funFactTr: 'Evimiz ailemizle birlikte sıcacık vakit geçirdiğimiz yuvamızdır.',
    defaultParts: {
      roof: '#EF4444',
      walls: '#FEF08A',
      door: '#854D0E',
      windows: '#BAE6FD',
      chimney: '#94A3B8'
    }
  },
  {
    id: 'shark',
    english: 'SHARK',
    turkish: 'Köpekbalığı',
    gameType: 'coloring',
    emoji: '🦈',
    color: '#475569',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Sharks have multiple rows of teeth and have lived for millions of years!',
    funFactTr: 'Köpekbalıkları okyanusların hızlı ve muazzam yüzücüleridir.',
    defaultParts: {
      body: '#64748B',
      fin: '#334155',
      belly: '#F1F5F9',
      teeth: '#FFFFFF',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'whale',
    english: 'WHALE',
    turkish: 'Balina',
    gameType: 'coloring',
    emoji: '🐋',
    color: '#0284C7',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Blue whales are the largest animals to ever exist on our planet!',
    funFactTr: 'Balinalar dünyanın en devasa ve sevimli deniz canlılarıdır.',
    defaultParts: {
      body: '#0284C7',
      belly: '#E0F2FE',
      spout: '#38BDF8',
      flippers: '#0369A1',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'panda',
    english: 'PANDA',
    turkish: 'Panda',
    gameType: 'coloring',
    emoji: '🐼',
    color: '#1E293B',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Pandas spend up to 12 hours a day munching on fresh green bamboo!',
    funFactTr: 'Pandalar bambu yemeyi ve neşeyle yuvarlanmayı çok sever.',
    defaultParts: {
      face: '#FFFFFF',
      ears: '#1E293B',
      eyePatches: '#1E293B',
      eyes: '#FFFFFF',
      nose: '#1E293B',
      cheeks: '#FDA4AF',
      bamboo: '#22C55E'
    }
  },
  {
    id: 'tiger',
    english: 'TIGER',
    turkish: 'Kaplan',
    gameType: 'puzzle',
    emoji: '🐯',
    color: '#F97316',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Every tiger has a completely unique pattern of black stripes!',
    funFactTr: 'Kaplanların çizgileri tıpkı parmak izi gibi birbirine benzemez.',
    defaultParts: {
      head: '#F97316',
      stripes: '#1E293B',
      snout: '#FEF3C7',
      ears: '#EA580C',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'zebra',
    english: 'ZEBRA',
    turkish: 'Zebra',
    gameType: 'puzzle',
    emoji: '🦓',
    color: '#0F172A',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Zebras run in zigzag patterns to escape from predators!',
    funFactTr: 'Zebraların siyah beyaz çizgileri onları çok özel kılar.',
    defaultParts: {
      head: '#F8FAFC',
      stripes: '#0F172A',
      snout: '#1E293B',
      mane: '#334155',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // ⭐⭐⭐⭐ SEVİYE 4: USTA (6 Harfli Kelimeler - 10 Adet)
  // ==========================================
  {
    id: 'banana',
    english: 'BANANA',
    turkish: 'Muz',
    gameType: 'coloring',
    emoji: '🍌',
    color: '#FFD166',
    category: 'fruits',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Bananas are naturally curved because they reach towards the sun!',
    funFactTr: 'Muzlar yukarıya, güneşe doğru uzayarak büyür!',
    defaultParts: {
      peelBody: '#FACC15',
      peelHighlight: '#FEF08A',
      peelSide: '#F59E0B',
      stem: '#84CC16',
      tip: '#78350F'
    }
  },
  {
    id: 'flower',
    english: 'FLOWER',
    turkish: 'Çiçek',
    gameType: 'coloring',
    emoji: '🌸',
    color: '#EC4899',
    category: 'nature',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Flowers come in many colors to attract butterflies and bees!',
    funFactTr: 'Çiçekler mis gibi kokar ve kelebekleri davet eder!',
    defaultParts: {
      petals: '#EC4899',
      center: '#FACC15',
      stem: '#22C55E',
      leaves: '#16A34A',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'rocket',
    english: 'ROCKET',
    turkish: 'Roket',
    gameType: 'puzzle',
    emoji: '🚀',
    color: '#EF4444',
    category: 'vehicles',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Rockets travel super fast to take astronauts to space and the Moon!',
    funFactTr: 'Roketler uzaya, yıldızlara ve gezegenlere doğru uçar!',
    defaultParts: {
      body: '#F1F5F9',
      cone: '#EF4444',
      fins: '#EF4444',
      window: '#38BDF8',
      fire: '#F97316'
    }
  },
  {
    id: 'monkey',
    english: 'MONKEY',
    turkish: 'Maymun',
    gameType: 'coloring',
    emoji: '🐵',
    color: '#A16207',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Monkeys use their clever hands and tails to swing between trees!',
    funFactTr: 'Maymunlar ağaçtan ağaca neşeyle sallanır ve muz sever!',
    defaultParts: {
      head: '#A16207',
      face: '#FED7AA',
      ears: '#854D0E',
      earsInner: '#FED7AA',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'rabbit',
    english: 'RABBIT',
    turkish: 'Tavşan',
    gameType: 'coloring',
    emoji: '🐰',
    color: '#EC4899',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Rabbits can jump very high and wiggle their cute little noses!',
    funFactTr: 'Tavşanlar havuç yemeyi sever ve uzun kulaklarıyla her sesi duyar.',
    defaultParts: {
      head: '#F8FAFC',
      ears: '#FFFFFF',
      earsInner: '#FDA4AF',
      cheeks: '#FDA4AF',
      nose: '#FB7185'
    }
  },
  {
    id: 'turtle',
    english: 'TURTLE',
    turkish: 'Kaplumbağa',
    gameType: 'coloring',
    emoji: '🐢',
    color: '#16A34A',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Turtles carry their protective shell homes wherever they go!',
    funFactTr: 'Kaplumbağalar kabuklarını sırtlarında taşır ve çok uzun yaşarlar.',
    defaultParts: {
      shell: '#16A34A',
      shellHex: '#22C55E',
      head: '#86EFAC',
      legs: '#4ADE80',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'guitar',
    english: 'GUITAR',
    turkish: 'Gitar',
    gameType: 'puzzle',
    emoji: '🎸',
    color: '#D97706',
    category: 'objects',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Guitars have 6 strings that make sweet music when plucked!',
    funFactTr: 'Gitarlar telleriyle harika melodiler ve neşeli şarkılar çalar.',
    defaultParts: {
      body: '#F59E0B',
      neck: '#854D0E',
      soundhole: '#1E293B',
      pickguard: '#EF4444',
      headstock: '#78350F'
    }
  },
  {
    id: 'castle',
    english: 'CASTLE',
    turkish: 'Şato / Kale',
    gameType: 'puzzle',
    emoji: '🏰',
    color: '#8B5CF6',
    category: 'objects',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Castles were grand stone fortresses built for kings, queens, and knights!',
    funFactTr: 'Kaleler ve şatolar masallardaki krallar ve prensesler için yapılmıştır.',
    defaultParts: {
      towers: '#A78BFA',
      roofs: '#EF4444',
      walls: '#C4B5FD',
      door: '#854D0E',
      flags: '#FACC15'
    }
  },
  {
    id: 'orange',
    english: 'ORANGE',
    turkish: 'Portakal',
    gameType: 'coloring',
    emoji: '🍊',
    color: '#EA580C',
    category: 'fruits',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Oranges are packed with healthy Vitamin C to keep us strong and fit!',
    funFactTr: 'Portakallar bizi hastalıklardan koruyan bol bol C vitamini içerir.',
    defaultParts: {
      body: '#F97316',
      leaf: '#22C55E',
      stem: '#854D0E',
      slice: '#FED7AA',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'cherry',
    english: 'CHERRY',
    turkish: 'Kiraz',
    gameType: 'coloring',
    emoji: '🍒',
    color: '#E11D48',
    category: 'fruits',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Cherries often grow in pairs and taste wonderfully sweet!',
    funFactTr: 'Kirazlar genellikle ikili olarak büyür ve çok lezzetlidir.',
    defaultParts: {
      cherry1: '#E11D48',
      cherry2: '#BE123C',
      stems: '#65A30D',
      leaf: '#22C55E',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // ⭐⭐⭐⭐⭐ SEVİYE 5: İLERİ SEVİYE (7 Harfli Kelimeler)
  // ==========================================
  {
    id: 'penguin',
    english: 'PENGUIN',
    turkish: 'Penguen',
    gameType: 'coloring',
    emoji: '🐧',
    color: '#0F172A',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Penguins are amazing underwater swimmers and slide on their bellies in snow!',
    funFactTr: 'Penguenler buzların üzerinde kayarak eğlenir ve harika yüzerler.',
    defaultParts: {
      body: '#0F172A',
      belly: '#FFFFFF',
      wings: '#1E293B',
      beak: '#F59E0B',
      feet: '#F97316',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'dolphin',
    english: 'DOLPHIN',
    turkish: 'Yunus',
    gameType: 'puzzle',
    emoji: '🐬',
    color: '#0284C7',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Dolphins are super smart and communicate using clicks and whistles!',
    funFactTr: 'Yunuslar ıslık çalarak haberleşen çok zeki ve oyuncu canlılardır.',
    defaultParts: {
      body: '#38BDF8',
      belly: '#E0F2FE',
      fin: '#0284C7',
      waves: '#0EA5E9',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'rainbow',
    english: 'RAINBOW',
    turkish: 'Gökkuşağı',
    gameType: 'coloring',
    emoji: '🌈',
    color: '#8B5CF6',
    category: 'nature',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Rainbows appear when sunlight shines through raindrops in the sky!',
    funFactTr: 'Güneş ışığı yağmur damlalarına vurduğunda 7 renkli gökkuşağı oluşur.',
    defaultParts: {
      redArc: '#EF4444',
      orangeArc: '#F97316',
      yellowArc: '#FACC15',
      greenArc: '#22C55E',
      blueArc: '#3B82F6',
      purpleArc: '#8B5CF6',
      clouds: '#E0F2FE'
    }
  },
  {
    id: 'giraffe',
    english: 'GIRAFFE',
    turkish: 'Zürafa',
    gameType: 'puzzle',
    emoji: '🦒',
    color: '#D97706',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Giraffes are the tallest mammals in the world with super long necks!',
    funFactTr: 'Zürafalar upuzun boyunlarıyla yüksek ağaçların taze yapraklarını yerler.',
    defaultParts: {
      body: '#FDE047',
      spots: '#B45309',
      horns: '#92400E',
      snout: '#FEF3C7',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // 🚀 SEVİYE 6: UZMAN (8 Harfli Kelimeler)
  // ==========================================
  {
    id: 'airplane',
    english: 'AIRPLANE',
    turkish: 'Uçak',
    gameType: 'puzzle',
    emoji: '✈️',
    color: '#0284C7',
    category: 'vehicles',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Airplanes fly above the clouds to take people across oceans and continents!',
    funFactTr: 'Uçaklar bulutların üstünde uçarak uzak ülkelere hızla ulaşır.',
    defaultParts: {
      body: '#F8FAFC',
      wings: '#0284C7',
      tail: '#EF4444',
      windows: '#BAE6FD',
      turbines: '#94A3B8'
    }
  },
  {
    id: 'elephant',
    english: 'ELEPHANT',
    turkish: 'Fil',
    gameType: 'coloring',
    emoji: '🐘',
    color: '#64748B',
    category: 'animals',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Elephants have fantastic memories and use their trunks like super hands!',
    funFactTr: 'Filler hortumlarıyla su püskürtür ve harika bir hafızaya sahiptir.',
    defaultParts: {
      body: '#94A3B8',
      ears: '#64748B',
      earsInner: '#FDA4AF',
      trunk: '#94A3B8',
      tusks: '#FFFFFF',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'dinosaur',
    english: 'DINOSAUR',
    turkish: 'Dinozor',
    gameType: 'puzzle',
    emoji: '🦖',
    color: '#15803D',
    category: 'animals',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Dinosaurs ruled our planet millions of years ago in prehistoric times!',
    funFactTr: 'Dinozorlar milyonlarca yıl önce dünyamızda yaşamış efsanevi dev canlılardır.',
    defaultParts: {
      body: '#22C55E',
      belly: '#86EFAC',
      spikes: '#F59E0B',
      legs: '#16A34A',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // 👑 SEVİYE 7: EFSANE (9 Harfli Kelimeler)
  // ==========================================
  {
    id: 'butterfly',
    english: 'BUTTERFLY',
    turkish: 'Kelebek',
    gameType: 'coloring',
    emoji: '🦋',
    color: '#A855F7',
    category: 'nature',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Butterflies taste with their tiny feet and have gorgeous colorful wings!',
    funFactTr: 'Kelebekler çiçekten çiçeğe konarak kanatlarıyla gökkuşağı saçar.',
    defaultParts: {
      topWings: '#C084FC',
      bottomWings: '#F472B6',
      wingSpots: '#FDE047',
      body: '#581C87',
      antenna: '#1E293B',
      cheeks: '#FDA4AF'
    }
  },
  {
    id: 'astronaut',
    english: 'ASTRONAUT',
    turkish: 'Astronot',
    gameType: 'puzzle',
    emoji: '👨‍🚀',
    color: '#3B82F6',
    category: 'nature',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Astronauts float weightlessly in zero gravity and explore outer space!',
    funFactTr: 'Astronotlar uzay kıyafetleriyle uzayda yürür ve yıldızları inceler.',
    defaultParts: {
      helmet: '#F1F5F9',
      visor: '#38BDF8',
      suit: '#FFFFFF',
      badge: '#EF4444',
      gloves: '#F59E0B',
      cheeks: '#FDA4AF'
    }
  },

  // ==========================================
  // 🏆 SEVİYE 8: ŞAMPİYON (10 Harfli Kelimeler)
  // ==========================================
  {
    id: 'watermelon',
    english: 'WATERMELON',
    turkish: 'Karpuz',
    gameType: 'coloring',
    emoji: '🍉',
    color: '#EF4444',
    category: 'fruits',
    difficulty: 8,
    difficultyLabel: '8. Seviye • 10 Harf',
    funFactEn: 'Watermelon is 92% refreshing water and delicious on hot summer days!',
    funFactTr: 'Karpuzun %92’si sudur ve yazın sıcağında buz gibi ferahlatır.',
    defaultParts: {
      flesh: '#EF4444',
      rindWhite: '#FEF08A',
      rindGreen: '#16A34A',
      seeds: '#1E293B',
      cheeks: '#FDA4AF'
    }
  },

  // =========================================================================
  // 🌟 EK KELİMELER: 51 - 100 (Her Zorluk Seviyesinde Dengeli & Zengin İçerik)
  // =========================================================================

  // --- SEVİYE 1: 3 Harfli Ek Kelimeler (51 - 60) ---
  {
    id: 'ant',
    english: 'ANT',
    turkish: 'Karınca',
    gameType: 'puzzle',
    emoji: '🐜',
    color: '#DC2626',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Ants are super strong and can carry objects 50 times heavier than themselves!',
    funFactTr: 'Karıncalar kendi ağırlıklarının 50 katını kaldırabilen süper güçlü miniklerdir.',
    defaultParts: { head: '#DC2626', thorax: '#991B1B', abdomen: '#DC2626', cheeks: '#FDA4AF' }
  },
  {
    id: 'bee',
    english: 'BEE',
    turkish: 'Arı',
    gameType: 'coloring',
    emoji: '🐝',
    color: '#FBBF24',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Bees make delicious sweet honey and dance to communicate with friends!',
    funFactTr: 'Arılar tatlı bal üretir ve birbirleriyle dans ederek haberleşirler.',
    defaultParts: { body: '#FBBF24', wings: '#BAE6FD', stripes: '#1E293B', cheeks: '#FDA4AF' }
  },
  {
    id: 'cow',
    english: 'COW',
    turkish: 'İnek',
    gameType: 'puzzle',
    emoji: '🐮',
    color: '#1E293B',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Cows give us healthy fresh milk and love chewing green pasture grass!',
    funFactTr: 'İnekler bize taptaze süt verir ve otlaklarda keyifle otlarlar.',
    defaultParts: { head: '#FFFFFF', spots: '#1E293B', snout: '#FDA4AF', horns: '#F59E0B' }
  },
  {
    id: 'cap',
    english: 'CAP',
    turkish: 'Şapka',
    gameType: 'coloring',
    emoji: '🧢',
    color: '#3B82F6',
    category: 'objects',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'A cool baseball cap protects our eyes and head from the bright sunshine!',
    funFactTr: 'Şapkalar güneşli günlerde bizi güneşten koruyan havalı aksesuarlardır.',
    defaultParts: { dome: '#3B82F6', visor: '#1D4ED8', button: '#FBBF24', logo: '#FBBF24' }
  },
  {
    id: 'egg',
    english: 'EGG',
    turkish: 'Yumurta',
    gameType: 'puzzle',
    emoji: '🥚',
    color: '#F59E0B',
    category: 'fruits',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Eggs are full of healthy vitamins that help our bones and muscles grow strong!',
    funFactTr: 'Yumurta, boyumuzun uzamasına ve güçlü kaslara sahip olmamıza yardımcı olur.',
    defaultParts: { shell: '#FEF3C7', ribbon: '#FB7185', cheeks: '#FDA4AF' }
  },
  {
    id: 'cub',
    english: 'CUB',
    turkish: 'Yavru Ayı/Aslan',
    gameType: 'coloring',
    emoji: '🦁',
    color: '#F59E0B',
    category: 'animals',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Lion and bear babies are called cubs and they love to play all day!',
    funFactTr: 'Aslan ve ayı yavrularına "cub" denir ve gün boyu oyun oynamaya bayılırlar.',
    defaultParts: { head: '#FBBF24', earsInner: '#FDA4AF', snout: '#FFFFFF', cheeks: '#FB7185' }
  },
  {
    id: 'box',
    english: 'BOX',
    turkish: 'Kutu',
    gameType: 'puzzle',
    emoji: '📦',
    color: '#D97706',
    category: 'objects',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Gift boxes carry exciting surprises for birthdays and happy celebrations!',
    funFactTr: 'Hediye kutuları doğum günlerinde içlerinde harika sürprizler saklar!',
    defaultParts: { top: '#FBBF24', leftSide: '#D97706', rightSide: '#B45309', ribbon: '#EF4444' }
  },
  {
    id: 'bed',
    english: 'BED',
    turkish: 'Yatak',
    gameType: 'coloring',
    emoji: '🛏️',
    color: '#EC4899',
    category: 'objects',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'A cozy bed gives us magical colorful dreams and deep restful sleep!',
    funFactTr: 'Yumuşacık yatağımızda uyurken rengarenk rüyalar görürüz.',
    defaultParts: { frame: '#78350F', sheet: '#38BDF8', blanket: '#EC4899', pillow: '#FFFFFF' }
  },
  {
    id: 'key',
    english: 'KEY',
    turkish: 'Anahtar',
    gameType: 'puzzle',
    emoji: '🔑',
    color: '#FBBF24',
    category: 'objects',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Keys open secret treasure chests and unlock doors to cozy houses!',
    funFactTr: 'Anahtarlar gizemli hazine sandıklarını ve evimizin kapısını açar.',
    defaultParts: { keyHead: '#FBBF24', keyShaft: '#F59E0B' }
  },
  {
    id: 'nut',
    english: 'NUT',
    turkish: 'Fındık / Meşe Palamudu',
    gameType: 'coloring',
    emoji: '🌰',
    color: '#B45309',
    category: 'fruits',
    difficulty: 1,
    difficultyLabel: '1. Seviye • 3 Harf',
    funFactEn: 'Squirrels collect nuts in autumn and hide them to eat during winter!',
    funFactTr: 'Sincaplar fındıkları ve palamutları toplayıp kış için saklarlar.',
    defaultParts: { cap: '#78350F', body: '#D97706', cheeks: '#FDA4AF' }
  },

  // --- SEVİYE 2: 4 Harfli Ek Kelimeler (61 - 70) ---
  {
    id: 'deer',
    english: 'DEER',
    turkish: 'Geyik',
    gameType: 'puzzle',
    emoji: '🦌',
    color: '#D97706',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Deer can leap gracefully across forest streams and run very fast!',
    funFactTr: 'Geyikler ormanda nehirlerin üzerinden zarafetle atlayabilen sevimli hayvanlardır.',
    defaultParts: { head: '#D97706', snout: '#FEF3C7', cheeks: '#FDA4AF' }
  },
  {
    id: 'crab',
    english: 'CRAB',
    turkish: 'Yengeç',
    gameType: 'coloring',
    emoji: '🦀',
    color: '#EF4444',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Crabs walk sideways along the sandy seashore and have cool pinchers!',
    funFactTr: 'Yengeçler kumsalda yan yan yürür ve güçlü kıskaçlarıyla dikkat çeker.',
    defaultParts: { body: '#EF4444', claws: '#DC2626', cheeks: '#FDA4AF' }
  },
  {
    id: 'wolf',
    english: 'WOLF',
    turkish: 'Kurt',
    gameType: 'puzzle',
    emoji: '🐺',
    color: '#64748B',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Wolves howl at the moon to talk with their friendly wolf pack!',
    funFactTr: 'Kurtlar aya karşı uluyarak aileleriyle ve sürüleriyle haberleşir.',
    defaultParts: { head: '#64748B', snout: '#E2E8F0', earsInner: '#CBD5E1' }
  },
  {
    id: 'goat',
    english: 'GOAT',
    turkish: 'Keçi',
    gameType: 'coloring',
    emoji: '🐐',
    color: '#F1F5F9',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Goats are expert climbers who can walk on steep mountain cliffs!',
    funFactTr: 'Keçiler dik dağ kayalıklarına ustalıkla tırmanan akrobatik dostlardır.',
    defaultParts: { head: '#F1F5F9', beard: '#E2E8F0', snout: '#FDA4AF' }
  },
  {
    id: 'seal',
    english: 'SEAL',
    turkish: 'Fok Balığı',
    gameType: 'puzzle',
    emoji: '🦭',
    color: '#38BDF8',
    category: 'animals',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Seals clap their flippers and slide playfully across icy glaciers!',
    funFactTr: 'Fok balıkları buzların üzerinde kaymaya ve yüzgeçlerini çırpmaya bayılır.',
    defaultParts: { body: '#38BDF8', flippers: '#0284C7', snout: '#FFFFFF' }
  },
  {
    id: 'pear',
    english: 'PEAR',
    turkish: 'Armut',
    gameType: 'coloring',
    emoji: '🍐',
    color: '#84CC16',
    category: 'fruits',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Pears are juicy sweet fruits shaped like pretty green bells!',
    funFactTr: 'Armutlar sulu, tatlı ve yeşil bir çıngırağa benzeyen harika meyvelerdir.',
    defaultParts: { body: '#A3E635', leaf: '#22C55E', cheeks: '#FB7185' }
  },
  {
    id: 'kiwi',
    english: 'KIWI',
    turkish: 'Kivi',
    gameType: 'puzzle',
    emoji: '🥝',
    color: '#65A30D',
    category: 'fruits',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Kiwis are fuzzy on the outside and bright emerald green inside!',
    funFactTr: 'Kivilerin dışı tüylü, içi ise parlak yeşil ve C vitamini doludur.',
    defaultParts: { skin: '#78350F', flesh: '#84CC16', core: '#ECFCCB' }
  },
  {
    id: 'rose',
    english: 'ROSE',
    turkish: 'Gül',
    gameType: 'coloring',
    emoji: '🌹',
    color: '#E11D48',
    category: 'nature',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Roses have velvety petals with a wonderfully sweet perfumed scent!',
    funFactTr: 'Güller kadife gibi yaprakları ve mis gibi kokularıyla çiçeklerin kraliçesidir.',
    defaultParts: { petals: '#E11D48', center: '#BE123C', leaves: '#22C55E' }
  },
  {
    id: 'boat',
    english: 'BOAT',
    turkish: 'Tekne',
    gameType: 'puzzle',
    emoji: '⛵',
    color: '#0284C7',
    category: 'vehicles',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Sailboats use the invisible power of the wind to glide across the blue sea!',
    funFactTr: 'Yelkenli tekneler rüzgarın gücüyle masmavi denizlerde kayarcasına ilerler.',
    defaultParts: { hull: '#F97316', sail: '#38BDF8' }
  },
  {
    id: 'bell',
    english: 'BELL',
    turkish: 'Zil / Çan',
    gameType: 'coloring',
    emoji: '🔔',
    color: '#FBBF24',
    category: 'objects',
    difficulty: 2,
    difficultyLabel: '2. Seviye • 4 Harf',
    funFactEn: 'Golden bells make a lovely cheerful ring to tell us recess time has started!',
    funFactTr: 'Altın çanlar neşeyle çalarak teneffüs vaktinin geldiğini haber verir!',
    defaultParts: { body: '#FBBF24', rim: '#F59E0B', clapper: '#D97706' }
  },

  // --- SEVİYE 3: 5 Harfli Ek Kelimeler (71 - 80) ---
  {
    id: 'lemon',
    english: 'LEMON',
    turkish: 'Limon',
    gameType: 'puzzle',
    emoji: '🍋',
    color: '#EAB308',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Lemons make refreshing tangy lemonade on warm sunny afternoons!',
    funFactTr: 'Limonlar mis kokulu limonatalar yapmak için en sevilen meyvelerdendir.',
    defaultParts: { body: '#FDE047', leaf: '#22C55E', cheeks: '#FB7185' }
  },
  {
    id: 'melon',
    english: 'MELON',
    turkish: 'Kavun',
    gameType: 'coloring',
    emoji: '🍈',
    color: '#86EFAC',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Sweet melons grow on leafy vines and smell delicious when fully ripe!',
    funFactTr: 'Tatlı kavunlar yaz aylarında sofralarımızı tatlandıran nefis meyvelerdir.',
    defaultParts: { rind: '#86EFAC', stripes: '#16A34A', cheeks: '#FDA4AF' }
  },
  {
    id: 'crown',
    english: 'CROWN',
    turkish: 'Taç',
    gameType: 'puzzle',
    emoji: '👑',
    color: '#F59E0B',
    category: 'objects',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Kings and queens wear sparkling golden crowns studded with colorful gems!',
    funFactTr: 'Kral ve kraliçeler başlarına pırıl pırıl parlayan taşlı taçlar takarlar.',
    defaultParts: { gold: '#FBBF24', band: '#F59E0B', ruby: '#EF4444', diamond: '#38BDF8', emerald: '#22C55E' }
  },
  {
    id: 'sheep',
    english: 'SHEEP',
    turkish: 'Koyun',
    gameType: 'coloring',
    emoji: '🐑',
    color: '#F8FAFC',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Sheep have warm fluffy wool coats that keep them cozy in winter!',
    funFactTr: 'Koyunların yumuşacık yünleri bizi kışın sıcacık tutan kazaklara dönüşür.',
    defaultParts: { wool: '#FFFFFF', face: '#334155' }
  },
  {
    id: 'snake',
    english: 'SNAKE',
    turkish: 'Yılan',
    gameType: 'puzzle',
    emoji: '🐍',
    color: '#22C55E',
    category: 'animals',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Snakes slither smoothly without legs and use their tongues to smell!',
    funFactTr: 'Yılanlar ayaksız olarak kıvrıla kıvrıla ilerler ve dilleriyle koku alırlar.',
    defaultParts: { body: '#22C55E' }
  },
  {
    id: 'truck',
    english: 'TRUCK',
    turkish: 'Kamyon',
    gameType: 'coloring',
    emoji: '🚚',
    color: '#3B82F6',
    category: 'vehicles',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Big powerful trucks transport toys and food to stores across the country!',
    funFactTr: 'Büyük kamyonlar oyuncakları ve yiyecekleri şehirden şehre taşırlar.',
    defaultParts: { cargo: '#3B82F6', cab: '#EF4444', window: '#BAE6FD' }
  },
  {
    id: 'bread',
    english: 'BREAD',
    turkish: 'Ekmek',
    gameType: 'puzzle',
    emoji: '🍞',
    color: '#D97706',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Warm oven-baked bread smells so heavenly with creamy butter!',
    funFactTr: 'Fırından yeni çıkmış sıcacık ekmeğin kokusu tüm evi sarar.',
    defaultParts: { crust: '#B45309', crumb: '#FEF3C7', cheeks: '#FDA4AF' }
  },
  {
    id: 'pizza',
    english: 'PIZZA',
    turkish: 'Pizza',
    gameType: 'coloring',
    emoji: '🍕',
    color: '#EF4444',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Pizza was invented in Italy and is topped with stretchy melted cheese!',
    funFactTr: 'Pizza İtalya’da doğmuş ve tüm dünyada çocukların en sevdiği lezzet olmuştur.',
    defaultParts: { crust: '#D97706', cheese: '#FBBF24', pepperoni: '#EF4444' }
  },
  {
    id: 'grape',
    english: 'GRAPE',
    turkish: 'Üzüm',
    gameType: 'puzzle',
    emoji: '🍇',
    color: '#8B5CF6',
    category: 'fruits',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Juicy grapes grow in bountiful clusters and can be dried into sweet raisins!',
    funFactTr: 'Üzümler salkım salkım büyür, kurutulunca da tatlı kuru üzüm olur.',
    defaultParts: { grapes: '#8B5CF6', leaf: '#22C55E' }
  },
  {
    id: 'chair',
    english: 'CHAIR',
    turkish: 'Sandalye',
    gameType: 'coloring',
    emoji: '🪑',
    color: '#D97706',
    category: 'objects',
    difficulty: 3,
    difficultyLabel: '3. Seviye • 5 Harf',
    funFactEn: 'Comfortable chairs give us a nice relaxing place to read storybooks!',
    funFactTr: 'Sandalyeler kitap okurken ve ders çalışırken rahatça oturmamızı sağlar.',
    defaultParts: { wood: '#D97706', cushion: '#EF4444' }
  },

  // --- SEVİYE 4: 6 Harfli Ek Kelimeler (81 - 85) ---
  {
    id: 'parrot',
    english: 'PARROT',
    turkish: 'Papağan',
    gameType: 'puzzle',
    emoji: '🦜',
    color: '#EF4444',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Parrots can mimic human words and have stunning rainbow-colored feathers!',
    funFactTr: 'Papağanlar insan seslerini taklit edebilir ve rengarenk tüylere sahiptir.',
    defaultParts: { body: '#EF4444', wing: '#FBBF24', tail: '#3B82F6', beak: '#F97316' }
  },
  {
    id: 'tomato',
    english: 'TOMATO',
    turkish: 'Domates',
    gameType: 'coloring',
    emoji: '🍅',
    color: '#EF4444',
    category: 'fruits',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Tomatoes are juicy red fruits that make yummy pizza and pasta sauce!',
    funFactTr: 'Kıpkırmızı sulu domatesler lezzetli sosların ve salataların vazgeçilmezidir.',
    defaultParts: { body: '#EF4444', calyx: '#22C55E', cheeks: '#FDA4AF' }
  },
  {
    id: 'carrot',
    english: 'CARROT',
    turkish: 'Havuç',
    gameType: 'puzzle',
    emoji: '🥕',
    color: '#F97316',
    category: 'fruits',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Carrots are crunchy orange root vegetables that keep our eyesight sharp!',
    funFactTr: 'Havuçlar çıtır çıtır ve turuncu olup gözlerimizin iyi görmesine yardım eder.',
    defaultParts: { root: '#F97316', leaves: '#22C55E' }
  },
  {
    id: 'lizard',
    english: 'LIZARD',
    turkish: 'Kertenkele',
    gameType: 'coloring',
    emoji: '🦎',
    color: '#22C55E',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Some lizards can change colors to camouflage and blend in with leaves!',
    funFactTr: 'Kertenkeleler yaprakların arasında gizlenmek için harika kamuflaj yaparlar.',
    defaultParts: { body: '#22C55E', head: '#16A34A' }
  },
  {
    id: 'pigeon',
    english: 'PIGEON',
    turkish: 'Güvercin',
    gameType: 'puzzle',
    emoji: '🐦',
    color: '#64748B',
    category: 'animals',
    difficulty: 4,
    difficultyLabel: '4. Seviye • 6 Harf',
    funFactEn: 'Pigeons have an amazing built-in compass that helps them fly back home!',
    funFactTr: 'Güvercinler kilometrelerce uzaktan bile evlerinin yolunu kolayca bulabilir.',
    defaultParts: { body: '#94A3B8', head: '#64748B', neck: '#10B981', wing: '#475569', beak: '#FBBF24' }
  },

  // --- SEVİYE 5: 7 Harfli Ek Kelimeler (86 - 88) ---
  {
    id: 'octopus',
    english: 'OCTOPUS',
    turkish: 'Ahtapot',
    gameType: 'coloring',
    emoji: '🐙',
    color: '#A855F7',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'An octopus has 8 flexible tentacles and 3 hearts beating inside!',
    funFactTr: 'Ahtapotların tam 8 adet kolu ve vücutlarında 3 tane kalbi vardır!',
    defaultParts: { body: '#A855F7' }
  },
  {
    id: 'avocado',
    english: 'AVOCADO',
    turkish: 'Avokado',
    gameType: 'puzzle',
    emoji: '🥑',
    color: '#15803D',
    category: 'fruits',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Avocados are creamy green fruits with a big round wooden seed inside!',
    funFactTr: 'Avokado krema kıvamında yumuşacık ve sağlıklı yağlar içeren bir meyvedir.',
    defaultParts: { skin: '#14532D', flesh: '#BEF264', pit: '#78350F' }
  },
  {
    id: 'gorilla',
    english: 'GORILLA',
    turkish: 'Goril',
    gameType: 'coloring',
    emoji: '🦍',
    color: '#334155',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Gorillas are gentle jungle giants who make cozy leafy nests to sleep every night!',
    funFactTr: 'Goriller ormanların nazik devleridir ve her gece yapraklardan yatak yaparlar.',
    defaultParts: { body: '#334155', face: '#64748B' }
  },

  // --- SEVİYE 6: 8 Harfli Ek Kelimeler (89 - 91, 93, 94) ---
  {
    id: 'hedgehog',
    english: 'HEDGEHOG',
    turkish: 'Kirpi',
    gameType: 'puzzle',
    emoji: '🦔',
    color: '#78350F',
    category: 'animals',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Hedgehogs roll into a cute spiky ball to protect themselves from danger!',
    funFactTr: 'Kirpiler tehlike hissettiklerinde top gibi yuvarlanıp dikenli bir kalkan olurlar.',
    defaultParts: { quills: '#78350F', face: '#FEF3C7' }
  },
  {
    id: 'flamingo',
    english: 'FLAMINGO',
    turkish: 'Flamingo',
    gameType: 'coloring',
    emoji: '🦩',
    color: '#FB7185',
    category: 'animals',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Flamingos can stand effortlessly on one single leg for hours while resting!',
    funFactTr: 'Flamingolar tek ayakları üzerinde saatlerce dengede durarak dinlenebilirler.',
    defaultParts: { body: '#FB7185', wing: '#F43F5E', beak: '#FDE047' }
  },
  {
    id: 'sandwich',
    english: 'SANDWICH',
    turkish: 'Sandviç',
    gameType: 'puzzle',
    emoji: '🥪',
    color: '#F59E0B',
    category: 'fruits',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Sandwiches are delicious picnic snacks layered with crispy veggies and cheese!',
    funFactTr: 'Sandviçler pikniklerin en pratik ve lezzetli atıştırmalığıdır.',
    defaultParts: { bread: '#FBBF24', lettuce: '#22C55E', tomato: '#EF4444', cheese: '#FDE047' }
  },
  {
    id: 'umbrella',
    english: 'UMBRELLA',
    turkish: 'Şemsiye',
    gameType: 'coloring',
    emoji: '☂️',
    color: '#EC4899',
    category: 'objects',
    difficulty: 6,
    difficultyLabel: '6. Seviye • 8 Harf',
    funFactEn: 'Colorful umbrellas open up like a canopy to keep us dry in rainy weather!',
    funFactTr: 'Şemsiyeler yağmurlu günlerde bizi ıslanmaktan koruyan renkli kubbelerdir.',
    defaultParts: { canopy: '#EC4899', handle: '#F59E0B' }
  },
  {
    id: 'peacock',
    english: 'PEACOCK',
    turkish: 'Tavus Kuşu',
    gameType: 'puzzle',
    emoji: '🦚',
    color: '#059669',
    category: 'animals',
    difficulty: 5,
    difficultyLabel: '5. Seviye • 7 Harf',
    funFactEn: 'Peacocks fan out their breathtaking tail feathers like a giant glittering fan!',
    funFactTr: 'Tavus kuşları muhteşem kuyruklarını dev bir yelpaze gibi açıp sergilerler.',
    defaultParts: { tail: '#059669', body: '#1D4ED8' }
  },

  // --- SEVİYE 7: 9 Harfli Ek Kelimeler (92, 95, 98, 100) ---
  {
    id: 'crocodile',
    english: 'CROCODILE',
    turkish: 'Timsah',
    gameType: 'coloring',
    emoji: '🐊',
    color: '#15803D',
    category: 'animals',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Crocodiles can see underwater and have lived on Earth since the dinosaur age!',
    funFactTr: 'Timsahlar su altında harika görür ve dinozorlar çağından beri dünyadadır.',
    defaultParts: { body: '#16A34A' }
  },
  {
    id: 'submarine',
    english: 'SUBMARINE',
    turkish: 'Denizaltı',
    gameType: 'puzzle',
    emoji: '🤿',
    color: '#FBBF24',
    category: 'vehicles',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Submarines dive deep below ocean waves to discover hidden coral reefs!',
    funFactTr: 'Denizaltılar okyanusun en derin noktalarına dalarak batıkları ve mercanları keşfeder.',
    defaultParts: { hull: '#FBBF24', windows: '#38BDF8' }
  },
  {
    id: 'pineapple',
    english: 'PINEAPPLE',
    turkish: 'Ananas',
    gameType: 'coloring',
    emoji: '🍍',
    color: '#F59E0B',
    category: 'fruits',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Pineapples wear a royal green crown and are bursting with tropical sweetness!',
    funFactTr: 'Ananas başında yeşil bir taç taşıyan tropik ve çok lezzetli bir meyvedir.',
    defaultParts: { fruit: '#FBBF24', crown: '#16A34A' }
  },
  {
    id: 'fireworks',
    english: 'FIREWORKS',
    turkish: 'Havai Fişek',
    gameType: 'puzzle',
    emoji: '🎆',
    color: '#EC4899',
    category: 'nature',
    difficulty: 7,
    difficultyLabel: '7. Seviye • 9 Harf',
    funFactEn: 'Fireworks light up midnight skies with sparkling colors and loud joyful cheers!',
    funFactTr: 'Havai fişekler kutlamalarda gökyüzünü rengarenk ışıklarla aydınlatır.',
    defaultParts: { core: '#FBBF24', sparks: '#EC4899' }
  },

  // --- SEVİYE 8: 10 Harfli Ek Kelimeler (96, 97, 99) ---
  {
    id: 'helicopter',
    english: 'HELICOPTER',
    turkish: 'Helikopter',
    gameType: 'coloring',
    emoji: '🚁',
    color: '#3B82F6',
    category: 'vehicles',
    difficulty: 8,
    difficultyLabel: '8. Seviye • 10 Harf',
    funFactEn: 'Helicopters can hover perfectly in one spot in midair and fly backwards!',
    funFactTr: 'Helikopterler havada tek bir noktada sabit durabilir ve geri geri uçabilir.',
    defaultParts: { cabin: '#3B82F6', window: '#BAE6FD' }
  },
  {
    id: 'strawberry',
    english: 'STRAWBERRY',
    turkish: 'Çilek',
    gameType: 'puzzle',
    emoji: '🍓',
    color: '#EF4444',
    category: 'fruits',
    difficulty: 8,
    difficultyLabel: '8. Seviye • 10 Harf',
    funFactEn: 'Strawberries are the only fruit that wear their tiny yellow seeds on the outside!',
    funFactTr: 'Çilek, çekirdeklerini dış kabuğunda taşıyan tek ve en tatlı meyvedir.',
    defaultParts: { berry: '#EF4444', leaves: '#22C55E' }
  },
  {
    id: 'locomotive',
    english: 'LOCOMOTIVE',
    turkish: 'Lokomotif',
    gameType: 'coloring',
    emoji: '🚂',
    color: '#EF4444',
    category: 'vehicles',
    difficulty: 8,
    difficultyLabel: '8. Seviye • 10 Harf',
    funFactEn: 'Steam locomotives chug along iron rails with powerful steam and loud whistles!',
    funFactTr: 'Buharlı lokomotifler raylar üzerinde düdüklerini çalarak vagonları çeker.',
    defaultParts: { body: '#EF4444', boiler: '#1D4ED8' }
  }
];

