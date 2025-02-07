export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  gameUrl: string;
  category: 'puzzle' | 'arcade' | 'action' | 'strategy';
  icon: string;
}

export const games: Game[] = [
  {
    id: 'planet-life-idle',
    title: 'Planet Life Idle',
    description: 'Merge tiles to reach 2048 in this addictive puzzle game',
    image: 'https://i.imgur.com/bVKMke4.png',
    gameUrl: 'https://games.crazygames.com/en_US/planet-life-idle/index.html?skipPrerollExp25=true&v=1.320',
    category: 'puzzle',
    icon: 'https://i.imgur.com/bVKMke4.png'
  },
  {
    id: 'space-waves',
    title: 'Space Waves',
    description: 'Classic block-stacking puzzle game',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&q=80&w=800',
    gameUrl: 'https://space-waves.game-files.crazygames.com/unity/unity2020/space-waves.html?skipPrerollExp25=true&v=1.320',
    category: 'puzzle',
    icon: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    title: 'Snake',
    description: 'Guide the snake to eat food and grow longer',
    image: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&q=80&w=800',
    gameUrl: 'https://playsnake.org/',
    category: 'arcade',
    icon: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '4',
    title: 'Pac-Man',
    description: 'Navigate through the maze eating dots and avoiding ghosts',
    image: 'https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?auto=format&fit=crop&q=80&w=800',
    gameUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: 'arcade',
    icon: 'https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?auto=format&fit=crop&q=80&w=200'
  }
];