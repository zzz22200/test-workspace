const boardGames = [
  {
    name: "Brass: Birmingham",
    url: "https://boardgamegeek.com/boardgame/224517/brass-birmingham",
    img: "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/7a0LOL48K-7JNIOYZKw1pvKFFVc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg",
    tags: ["Economic", "Industrial", "Strategy"]
  },
  {
    name: "Ark Nova",
    url: "https://boardgamegeek.com/boardgame/342942/ark-nova",
    img: "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__imagepage/img/qR1EvTSNPjDa-pNPGxU9HY2oKfs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6293412.jpg",
    tags: ["Animals", "Card Game", "Zoo"]
  },
  {
    name: "Spirit Island",
    url: "https://boardgamegeek.com/boardgame/162886/spirit-island",
    img: "https://cf.geekdo-images.com/kjCm4ZvHcXZy3pKtKUwvtw__imagepage/img/JGD3K8FjUPif8DM5rGQWtPLIVvY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3615739.png",
    tags: ["Fantasy", "Cooperative", "Strategy"]
  },
  {
    name: "Gloomhaven",
    url: "https://boardgamegeek.com/boardgame/174430/gloomhaven",
    img: "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__imagepage/img/pBaOL7vV402nn1I5dHsdSKsFHqA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2437871.jpg",
    tags: ["Adventure", "Campaign", "Fantasy"]
  },
  {
    name: "Dune: Imperium",
    url: "https://boardgamegeek.com/boardgame/316554/dune-imperium",
    img: "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ_VD_eEjBGlqGOYd5zs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
    tags: ["Sci-Fi", "Deck Building", "Worker Placement"]
  }
];

export default function TableList() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Popular Board Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardGames.map((game, index) => (
            <a 
              key={index} 
              href={game.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={game.img} 
                  alt={game.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
