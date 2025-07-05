
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Array<{
    id: number;
    title: string;
    image: string;
    year?: string;
    duration?: string;
    genre?: string;
    rating?: string;
  }>;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = 400;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8 group">
      {/* Row Title */}
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-12">
        {title}
      </h2>

      {/* Movies Container */}
      <div className="relative">
        {/* Left Arrow */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Movies Row */}
        <div 
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide px-4 md:px-12 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-64">
              <MovieCard 
                title={movie.title}
                image={movie.image}
                year={movie.year}
                duration={movie.duration}
                genre={movie.genre}
                rating={movie.rating}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
