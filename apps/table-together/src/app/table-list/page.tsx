import Link from 'next/link';
import { boardGames } from '../data/boardGames';

export default function TableList() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Popular Board Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boardGames.map((game) => (
            <div 
              key={game.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View on BGG
                  </a>
                  <Link
                    href={`/game-invite/${game.id}`}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Join Game
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
