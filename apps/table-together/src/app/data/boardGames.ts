export interface BoardGame {
  id: string;
  name: string;
  url: string;
  img: string;
  tags: string[];
  host: {
    name: string;
    avatar: string;
  };
  location: string;
  datetime: string;
  notes: string[];
  experience: {
    points: number;
    rewards: string[];
  };
}

export const boardGames: BoardGame[] = [
  {
    id: "bg001",
    name: "Brass: Birmingham",
    url: "https://boardgamegeek.com/boardgame/224517/brass-birmingham",
    img: "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?auto=format&fit=crop&w=800&q=80",
    tags: ["Economic", "Industrial", "Strategy"],
    host: {
      name: "Alex Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    location: "Board Game Cafe, 台北市大安區復興南路一段",
    datetime: "2024-02-18 14:00-18:00",
    notes: [
      "新手友善，會詳細講解規則",
      "建議提前 10 分鐘到場",
      "費用分攤：場地費 NT$250/人",
      "人數上限：4人"
    ],
    experience: {
      points: 150,
      rewards: [
        "完成第一次重工業遊戲",
        "組織者經驗值加成",
        "新手指導獎勵"
      ]
    }
  },
  {
    id: "bg002",
    name: "Ark Nova",
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova",
    img: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
    tags: ["Animals", "Card Game", "Zoo"],
    host: {
      name: "Emma Wang",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    location: "微風松高店 4F",
    datetime: "2024-02-20 19:00-22:00",
    notes: [
      "適合動物愛好者",
      "遊戲時間約 2-3 小時",
      "場地費 NT$300/人",
      "人數：2-4人"
    ],
    experience: {
      points: 120,
      rewards: [
        "動物園經營者成就",
        "晚間聚會達人",
        "策略遊戲初體驗"
      ]
    }
  },
  {
    id: "bg003",
    name: "Spirit Island",
    url: "https://boardgamegeek.com/boardgame/162886/spirit-island",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    tags: ["Fantasy", "Cooperative", "Strategy"],
    host: {
      name: "David Lin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    location: "大安區桌遊店",
    datetime: "2024-02-25 13:00-17:00",
    notes: [
      "合作遊戲，一起保衛島嶼",
      "需要較長時間，請預留充足時間",
      "場地費 NT$200/人",
      "建議 3-4 人"
    ],
    experience: {
      points: 180,
      rewards: [
        "合作精神獎勵",
        "策略大師進階",
        "島嶼守護者稱號"
      ]
    }
  },
  {
    id: "bg004",
    name: "Gloomhaven",
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven",
    img: "https://images.unsplash.com/photo-1614032686163-bdc24c13d0b6?auto=format&fit=crop&w=800&q=80",
    tags: ["Adventure", "Campaign", "Fantasy"],
    host: {
      name: "Mike Chang",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    location: "信義區桌遊俱樂部",
    datetime: "2024-02-24 14:00-18:00",
    notes: [
      "長期團，需要持續參與",
      "新手可加入，有專人指導",
      "費用：NT$350/人（含飲料）",
      "固定 4 人小隊"
    ],
    experience: {
      points: 200,
      rewards: [
        "冒險家稱號",
        "團隊合作獎章",
        "地下城探索者"
      ]
    }
  },
  {
    id: "bg005",
    name: "Dune: Imperium",
    url: "https://boardgamegeek.com/boardgame/316554/dune-imperium",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    tags: ["Sci-Fi", "Deck Building", "Worker Placement"],
    host: {
      name: "Sarah Liu",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    location: "中山區桌遊咖啡廳",
    datetime: "2024-02-19 18:30-22:30",
    notes: [
      "歡迎沙丘迷加入",
      "deck-building 經驗者優先",
      "場地費 NT$280/人",
      "建議 3-4 人"
    ],
    experience: {
      points: 160,
      rewards: [
        "沙丘征服者",
        "策略家勳章",
        "星際外交官"
      ]
    }
  }
];