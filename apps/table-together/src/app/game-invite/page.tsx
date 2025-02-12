interface GameDetails {
  name: string;
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

const gameDetails: GameDetails = {
  name: "Brass: Birmingham",
  img: "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/7a0LOL48K-7JNIOYZKw1pvKFFVc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg",
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
};

export default function GameInvite() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* 遊戲基本資訊 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64">
            <img 
              src={gameDetails.img} 
              alt={gameDetails.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{gameDetails.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {gameDetails.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 活動詳細資訊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左側：主辦資訊和細節 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">主辦者</h2>
              <div className="flex items-center">
                <img 
                  src={gameDetails.host.avatar} 
                  alt={gameDetails.host.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="text-lg">{gameDetails.host.name}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">活動資訊</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-600">地點</h3>
                  <p>{gameDetails.location}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">時間</h3>
                  <p>{gameDetails.datetime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：注意事項和獎勵 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">注意事項</h2>
              <ul className="list-disc list-inside space-y-2">
                {gameDetails.notes.map((note, index) => (
                  <li key={index} className="text-gray-700">{note}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">參與獎勵</h2>
              <div className="mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  {gameDetails.experience.points} XP
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {gameDetails.experience.rewards.map((reward, index) => (
                  <li key={index} className="text-gray-700">{reward}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}