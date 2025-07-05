
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  title: string;
  image: string;
  year?: string;
  duration?: string;
  genre?: string;
  rating?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
  title, 
  image, 
  year = "2023", 
  duration = "2h 15m", 
  genre = "Action",
  rating = "98% Match"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hover Card */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-80 bg-zinc-900 rounded-lg shadow-2xl border border-gray-700 p-4 transform -translate-y-16 animate-fade-in">
          {/* Image */}
          <div className="aspect-video bg-gray-800 rounded-md overflow-hidden mb-3">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Play size={16} fill="black" />
              </button>
              <button className="border border-gray-400 text-white p-2 rounded-full hover:border-white transition-colors">
                <Plus size={16} />
              </button>
              <button className="border border-gray-400 text-white p-2 rounded-full hover:border-white transition-colors">
                <ThumbsUp size={16} />
              </button>
            </div>
            <button className="border border-gray-400 text-white p-2 rounded-full hover:border-white transition-colors">
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>

          {/* Meta Info */}
          <div className="flex items-center space-x-2 text-sm mb-2">
            <span className="text-green-500 font-bold">{rating}</span>
            <span className="text-gray-400">{year}</span>
            <span className="border border-gray-400 px-1 text-gray-400 text-xs">HD</span>
            <span className="text-gray-400">{duration}</span>
          </div>

          {/* Genres */}
          <div className="text-gray-400 text-sm">
            {genre}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
