import React, { useState } from 'react';
import { Maximize, Home } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { games } from '../data/games';
import { GameCard } from './GameCard';

export function GameView() {
  const { id } = useParams();
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const game = games.find(g => g.id === id);
  if (!game) return null;

  const recommendedGames = games
    .filter(g => g.id !== game.id && g.category === game.category)
    .slice(0, 6);

  const toggleFullscreen = () => {
    const elem = document.getElementById('game-frame');
    if (!elem) return;

    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Home className="w-6 h-6" />
            <span>Back to Home</span>
          </Link>
          <button 
            onClick={toggleFullscreen}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            <Maximize className="w-5 h-5" />
            <span>Fullscreen</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <img 
                src={game.icon} 
                alt={`${game.title} icon`} 
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{game.title}</h1>
            </div>
          </div>
          <div className="aspect-video bg-gray-900">
            <iframe
              id="game-frame"
              src={game.gameUrl}
              className="w-full h-full border-0"
              title={game.title}
              allow="accelerometer; gyroscope; gamepad; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write"
              sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox"
              style={{ backgroundColor: 'rgb(255, 255, 255)', minWidth: '100%', minHeight: '100%' }}
            />
          </div>
        </div>

        {/* Recommended Games */}
        {recommendedGames.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recommended Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {recommendedGames.map(game => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  icon={game.icon}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}