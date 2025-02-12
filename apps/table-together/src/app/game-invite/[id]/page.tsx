'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { boardGames } from '../../data/boardGames';

export default function GameInvite() {
  const params = useParams();
  const gameId = params.id as string;
  
  const game = boardGames.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Game Not Found</h1>
          <p className="text-gray-600 mt-2">The game you're looking for doesn't exist.</p>
          <Link 
            href="/table-list"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/table-list"
          className="inline-block mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          ← Back to List
        </Link>

        {/* 遊戲基本資訊 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-64">
            <img 
              src={game.img} 
              alt={game.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map((tag, index) => (
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
                  src={game.host.avatar} 
                  alt={game.host.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="text-lg">{game.host.name}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">活動資訊</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-600">地點</h3>
                  <p>{game.location}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">時間</h3>
                  <p>{game.datetime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：注意事項和獎勵 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">注意事項</h2>
              <ul className="list-disc list-inside space-y-2">
                {game.notes.map((note, index) => (
                  <li key={index} className="text-gray-700">{note}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">參與獎勵</h2>
              <div className="mb-4">
                <span className="text-2xl font-bold text-indigo-600">
                  {game.experience.points} XP
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {game.experience.rewards.map((reward, index) => (
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