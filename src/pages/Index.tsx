
import React from 'react';
import UpdatedNetflixHeader from '@/components/UpdatedNetflixHeader';
import NetflixHero from '@/components/NetflixHero';
import UpdatedMovieRow from '@/components/UpdatedMovieRow';
import NetflixFooter from '@/components/NetflixFooter';
import { useContent } from '@/hooks/useContent';

const Index = () => {
  const { data: content, isLoading, error } = useContent();

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Error loading content</div>
      </div>
    );
  }

  const movies = content?.filter(item => item.content_type === 'movie') || [];
  const tvSeries = content?.filter(item => item.content_type === 'tv_series') || [];
  const featured = content?.filter(item => item.featured) || [];
  const trending = content?.slice(0, 10) || [];

  const formatMovieData = (items: any[]) => {
    return items.map(item => ({
      id: item.id,
      title: item.title,
      image: item.image_url || '',
      year: item.release_year?.toString() || '',
      duration: item.duration || '',
      genre: item.genre || '',
      rating: item.rating || ''
    }));
  };

  return (
    <div className="bg-black min-h-screen">
      <UpdatedNetflixHeader />
      <NetflixHero />
      
      <div className="pb-16">
        {trending.length > 0 && (
          <UpdatedMovieRow title="Trending Now" movies={formatMovieData(trending)} />
        )}
        
        {featured.length > 0 && (
          <UpdatedMovieRow title="Featured" movies={formatMovieData(featured)} />
        )}
        
        {movies.length > 0 && (
          <UpdatedMovieRow title="Movies" movies={formatMovieData(movies)} />
        )}
        
        {tvSeries.length > 0 && (
          <UpdatedMovieRow title="TV Series" movies={formatMovieData(tvSeries)} />
        )}
      </div>

      <NetflixFooter />
    </div>
  );
};

export default Index;
