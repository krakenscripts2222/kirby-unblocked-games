export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  gameUrl: string;
  category: 'cars' | 'adventure' | 'action' | 'sports' | 'casual';
  icon: string;
}

export const games: Game[] = [
  {
    id: 'planet-life-idle',
    title: 'Planet Life Idle',
    description: '',
    image: 'https://i.imgur.com/bVKMke4.png',
    gameUrl: 'https://games.crazygames.com/en_US/planet-life-idle/index.html?skipPrerollExp25=true&v=1.320',
    category: 'adventure',
    icon: 'https://i.imgur.com/bVKMke4.png'
  },
  {
    id: 'space-waves',
    title: 'Space Waves',
    description: '',
    image: 'https://i.imgur.com/7lLhsqk.png',
    gameUrl: 'https://games.crazygames.com/en_US/space-waves/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/7lLhsqk.png'
  },
  {
    id: 'raft-wars',
    title: 'Raft Wars',
    description: '',
    image: 'https://i.imgur.com/al6IOJS.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/raft-wars',
    category: 'action',
    icon: 'https://i.imgur.com/al6IOJS.jpeg'
  },
  {
    id: 'dreadhead-parkour',
    title: 'Dreadhead Parkour',
    description: '',
    image: 'https://i.imgur.com/nAQOaxE.jpeg',
    gameUrl: 'https://htmlxm.github.io/h7/dreadhead-parkour/',
    category: 'sports',
    icon: 'https://i.imgur.com/nAQOaxE.jpeg'
  },
    {
    id: 'moto-x3m-winter',
    title: 'Moto X3m Winter',
    description: '',
    image: 'https://i.imgur.com/zS8DyHN.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/moto-x3m-winter/',
    category: 'cars',
    icon: 'https://i.imgur.com/zS8DyHN.jpeg'
  },
    {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    description: '',
    image: 'https://i.imgur.com/slHbZJq.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/retro-bowl/',
    category: 'sports',
    icon: 'https://i.imgur.com/slHbZJq.jpeg'
  },
  {
    id: 'rooftop-snipers',
    title: 'Rooftop Snipers',
    description: '',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?auto=format&fit=crop&q=80&w=800',
    gameUrl: 'https://i.imgur.com/WJ0U8y4.jpeg',
    category: 'action',
    icon: 'https://i.imgur.com/WJ0U8y4.jpeg'
  },
  {
    id: 'tag',
    title: 'Tag',
    description: '',
    image: 'https://i.imgur.com/z4AEXBx.jpeg',
    gameUrl: 'https://htmlxm.github.io/h3/tag',
    category: 'casual',
    icon: 'https://i.imgur.com/z4AEXBx.jpeg'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3m',
    description: '',
    image: 'https://i.imgur.com/hlCgFFx.jpeg',
    gameUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    category: 'cars',
    icon: 'https://i.imgur.com/hlCgFFx.jpeg'
  },
    {
    id: 'worldguessr',
    title: 'WorldGuessr',
    description: '',
    image: 'https://i.imgur.com/KVdOB13.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/worldguessr/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/KVdOB13.jpeg'
  },
    {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    description: '',
    image: 'https://i.imgur.com/WjyCEas.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/basketball-stars',
    category: 'sports',
    icon: 'https://i.imgur.com/WjyCEas.jpeg'
  },
  {
    id: 'capybara-clicker-2',
    title: 'Capybara Clicker 2',
    description: '',
    image: 'https://i.imgur.com/gBjBsiP.png',
    gameUrl: 'https://games.crazygames.com/en_US/capybara-clicker-2/index.html?skipPrerollExp25=true&v=1.320',
    category: 'adventure',
    icon: 'https://i.imgur.com/gBjBsiP.png'
  },
  {
    id: 'stick-merge',
    title: 'Stick Merge',
    description: '',
    image: 'https://i.imgur.com/hwr4gX2.png',
    gameUrl: 'https://htmlxm.github.io/h3/stick-merge',
    category: 'action',
    icon: 'https://i.imgur.com/hwr4gX2.png'
  },
  {
    id: 'mergest-kingdom',
    title: 'Mergest Kingdom',
    description: '',
    image: 'https://i.imgur.com/y8mFHkx.png',
    gameUrl: 'https://mergecraft.cleverappssg.com/publish/html5/?source=crazy&skipPrerollExp25=true',
    category: 'adventure',
    icon: 'https://i.imgur.com/y8mFHkx.png'
  },
    {
    id: 'smash-karts',
    title: 'Smash Karts',
    description: '',
    image: 'https://i.imgur.com/no9CE5k.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/smash-karts',
    category: 'action',
    icon: 'https://i.imgur.com/no9CE5k.jpeg'
  },
    {
    id: 'basketball-superstars',
    title: 'Basketball Superstars',
    description: '',
    image: 'https://i.imgur.com/Ea0VL0H.png',
    gameUrl: 'https://games.crazygames.com/en_US/basketball-superstars/index.html?skipPrerollExp25=true&v=1.320',
    category: 'sports',
    icon: 'https://i.imgur.com/Ea0VL0H.png'
  },
  {
    id: 'stack',
    title: 'Stack',
    description: '',
    image: 'https://i.imgur.com/Ia2MfV5.jpeg',
    gameUrl: 'https://htmlxm.github.io/h2/stack',
    category: 'casual',
    icon: 'https://i.imgur.com/Ia2MfV5.jpeg'
  },
  {
    id: 'bloxd-io',
    title: 'Bloxd.io',
    description: '',
    image: 'https://i.imgur.com/HE4ttlm.png',
    gameUrl: 'https://games.crazygames.com/en_US/bloxdhop-io/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/HE4ttlm.png'
  },
  {
    id: '1v1-lol',
    title: '1v1.lol',
    description: '',
    image: 'https://i.imgur.com/O3iyrzW.jpeg',
    gameUrl: 'https://htmlxm.github.io/h8/1v1lol',
    category: 'action',
    icon: 'https://i.imgur.com/O3iyrzW.jpeg'
  },
    {
    id: 'slice-master',
    title: 'Slice Master',
    description: '',
    image: 'https://i.imgur.com/9dtjlL7.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/slice-master/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/9dtjlL7.jpeg'
  },
  {
    id: 'crazy-cars',
    title: 'Crazy Cars',
    description: '',
    image: 'https://i.imgur.com/aiEPQ2U.png',
    gameUrl: 'https://htmlxm.github.io/h4/crazy-cars',
    category: 'cars',
    icon: 'https://i.imgur.com/aiEPQ2U.png'
  },
  {
    id: 'jamjam',
    title: 'JamJam',
    description: '',
    image: 'https://i.imgur.com/ZP80PFl.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/jamjam/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/ZP80PFl.jpeg'
  },
  {
    id: 'moto-x3m-2',
    title: 'Moto X3m 2',
    description: '',
    image: 'https://i.imgur.com/rsWEkOk.jpeg',
    gameUrl: 'https://htmlxm.github.io/h8/moto-x3m-2',
    category: 'cars',
    icon: 'https://i.imgur.com/rsWEkOk.jpeg'
  },
  {
    id: 'planet-smash-destruction',
    title: 'Planet Smash Destruction',
    description: '',
    image: 'https://i.imgur.com/3DOh9U2.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/solar-smash/index.html?skipPrerollExp25=true&v=1.320',
    category: 'casual',
    icon: 'https://i.imgur.com/3DOh9U2.jpeg'
  },
    {
    id: 'rocket-soccer-derby',
    title: 'Rocket Soccer Derby',
    description: '',
    image: 'https://i.imgur.com/5Z4WSsV.jpeg',
    gameUrl: 'https://htmlxm.github.io/h6/rocket-soccer-derby',
    category: 'cars',
    icon: 'https://i.imgur.com/5Z4WSsV.jpeg'
  },
  {
    id: 'demolition-derby-3',
    title: 'Demolition Derby 3',
    description: '',
    image: 'https://i.imgur.com/LvIoOZj.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/demolition-derby-3/index.html?skipPrerollExp25=true&v=1.320',
    category: 'cars',
    icon: 'https://i.imgur.com/LvIoOZj.jpeg'
  },
  {
    id: 'tunnel-rush',
    title: 'Tunnel Rush',
    description: '',
    image: 'https://i.imgur.com/Fl2mWgZ.jpeg',
    gameUrl: 'https://htmlxm.github.io/h/tunnel-rush',
    category: 'casual',
    icon: 'https://i.imgur.com/Fl2mWgZ.jpeg'
  },
  {
    id: 'stickman-destruction-3-heroes',
    title: 'Stickman Destruction 3 Heroes',
    description: '',
    image: 'https://i.imgur.com/tLlWDVR.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/stickman-destruction-3-heroes/index.html?skipPrerollExp25=true&v=1.320',
    category: 'action',
    icon: 'https://i.imgur.com/tLlWDVR.jpeg'
  },
  {
    id: 'idle-ants',
    title: 'Idle Ants',
    description: '',
    image: 'https://i.imgur.com/pr1AYPz.jpeg',
    gameUrl: 'https://htmlxm.github.io/h5/idle-ants',
    category: 'casual',
    icon: 'https://i.imgur.com/pr1AYPz.jpeg'
  },
    {
    id: 'dead-land-survival',
    title: 'Dead Land: Survival',
    description: '',
    image: 'https://i.imgur.com/xEBIzqi.jpeg',
    gameUrl: 'https://games.crazygames.com/en_US/dead-land-survival/index.html?skipPrerollExp25=true&v=1.320',
    category: 'action',
    icon: 'https://i.imgur.com/xEBIzqi.jpeg'
  }
];