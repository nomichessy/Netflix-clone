
import React from 'react';
import NetflixHeader from '@/components/NetflixHeader';
import NetflixFooter from '@/components/NetflixFooter';
import MovieCard from '@/components/MovieCard';
import { useAuth } from '@/contexts/AuthContext';
import { useWatchlist } from '@/hooks/useContent';

const MyList = () => {
  const { user } = useAuth();
  const { data: watchlist, isLoading } = useWatchlist(user?.id);

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen">
        <NetflixHeader />
        <div className="pt-20 px-4 md:px-12">
          <h1 className="text-white text-3xl font-bold mb-8">My List</h1>
          <div className="text-white">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <NetflixHeader />
      
      <div className="pt-20 px-4 md:px-12 pb-16">
        <h1 className="text-white text-3xl font-bold mb-8">My List</h1>
        
        {!watchlist || watchlist.length === 0 ? (
          <div className="text-white text-center py-20">
            <h2 className="text-xl mb-4">Your list is empty</h2>
            <p className="text-gray-400">Add movies and shows to your list to watch them later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {watchlist.map((item) => (
              <MovieCard
                key={item.id}
                movie={{
                  id: item.content.id,
                  title: item.content.title,
                  image: item.content.image_url || '',
                  year: item.content.release_year?.toString() || '',
                  duration: item.content.duration || '',
                  genre: item.content.genre || '',
                  rating: item.content.rating || ''
                }}
              />
            ))}
          </div>
        )}
      </div>

      <NetflixFooter />
    </div>
  );
};

export default MyList;
