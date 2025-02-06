import React from 'react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export function GameCard({ id, title, description, image, icon }: GameCardProps) {
  return (
    <Link 
      to={`/game/${id}`}
      className="relative group"
    >
      <img 
        src={icon} 
        alt={title} 
        className="w-full aspect-square object-cover rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-white font-bold text-lg text-center px-4">{title}</p>
      </div>
    </Link>
  );
}