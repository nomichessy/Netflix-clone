
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useWatchlist, useWatchlistActions } from '@/hooks/useContent';

interface Movie {
  id: string;
  title: string;
  image: string;
  year: string;
  duration: string;
  genre: string;
  rating: string;
}

interface MovieCardProps {
  movie: Movie;
}

const UpdatedMovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();
  const { data: watchlist } = useWatchlist(user?.id);
  const { addToWatchlist, removeFromWatchlist } = useWatchlistActions();

  const isInWatchlist = watchlist?.some(item => item.content_id === movie.id);

  const handleWatchlistToggle = () => {
    if (!user) return;

    if (isInWatchlist) {
      removeFromWatchlist.mutate({ contentId: movie.id, userId: user.id });
    } else {
      addToWatchlist.mutate({ contentId: movie.id, userId: user.id });
    }
  };

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-800">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-black/70 flex items-end p-4 transition-opacity duration-300">
            <div className="w-full">
              <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                {movie.title}
              </h3>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-1">
                  <Button size="sm" className="bg-white text-black hover:bg-gray-200 p-1 h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-500 text-white hover:bg-gray-700 p-1 h-8 w-8"
                    onClick={handleWatchlistToggle}
                    disabled={!user}
                  >
                    {isInWatchlist ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                  
                  <Button size="sm" variant="outline" className="border-gray-500 text-white hover:bg-gray-700 p-1 h-8 w-8">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  
                  <Button size="sm" variant="outline" className="border-gray-500 text-white hover:bg-gray-700 p-1 h-8 w-8">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="text-green-400 text-xs font-semibold mb-1">
                {movie.rating}
              </div>
              
              <div className="text-gray-300 text-xs">
                {movie.year} • {movie.duration}
              </div>
              
              <div className="text-gray-400 text-xs mt-1">
                {movie.genre}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatedMovieCard;
