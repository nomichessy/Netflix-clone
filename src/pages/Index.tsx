
import React from 'react';
import NetflixHeader from '../components/NetflixHeader';
import NetflixHero from '../components/NetflixHero';
import MovieRow from '../components/MovieRow';
import NetflixFooter from '../components/NetflixFooter';

const Index = () => {
  // Sample movie data - in a real app, this would come from an API
  const trendingMovies = [
    {
      id: 1,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1489599440020-c84fe9e1c5f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "3 Seasons",
      genre: "Drama • Historical",
      rating: "97% Match"
    },
    {
      id: 2,
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "5 Seasons",
      genre: "Crime • Thriller",
      rating: "95% Match"
    },
    {
      id: 3,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1578662015964-119cd4c51def?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "3 Seasons",
      genre: "Fantasy • Adventure",
      rating: "92% Match"
    },
    {
      id: 4,
      title: "Bridgerton",
      image: "https://images.unsplash.com/photo-1594736797933-d0c8b2e56b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "2 Seasons",
      genre: "Romance • Drama",
      rating: "89% Match"
    },
    {
      id: 5,
      title: "Ozark",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "4 Seasons",
      genre: "Crime • Drama",
      rating: "94% Match"
    },
    {
      id: 6,
      title: "The Queen's Gambit",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2020",
      duration: "1 Season",
      genre: "Drama • Sports",
      rating: "96% Match"
    }
  ];

  const actionMovies = [
    {
      id: 7,
      title: "Extraction",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "2h 15m",
      genre: "Action • Thriller",
      rating: "91% Match"
    },
    {
      id: 8,
      title: "6 Underground",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "2h 8m",
      genre: "Action • Adventure",
      rating: "88% Match"
    },
    {
      id: 9,
      title: "The Old Guard",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "2h 5m",
      genre: "Action • Fantasy",
      rating: "93% Match"
    },
    {
      id: 10,
      title: "Bird Box",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2021",
      duration: "2h 4m",
      genre: "Horror • Thriller",
      rating: "90% Match"
    },
    {
      id: 11,
      title: "Triple Frontier",
      image: "https://images.unsplash.com/photo-1586953983028-6ad13f230138?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "2h 5m",
      genre: "Action • Adventure",
      rating: "87% Match"
    },
    {
      id: 12,
      title: "Bright",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "1h 57m",
      genre: "Action • Fantasy",
      rating: "85% Match"
    }
  ];

  const comedyMovies = [
    {
      id: 13,
      title: "The Kissing Booth",
      image: "https://images.unsplash.com/photo-1489599440020-c84fe9e1c5f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "1h 45m",
      genre: "Comedy • Romance",
      rating: "82% Match"
    },
    {
      id: 14,
      title: "To All the Boys",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "1h 40m",
      genre: "Comedy • Romance",
      rating: "86% Match"
    },
    {
      id: 15,
      title: "The Perfect Date",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "1h 29m",
      genre: "Comedy • Romance",
      rating: "79% Match"
    },
    {
      id: 16,
      title: "Set It Up",
      image: "https://images.unsplash.com/photo-1594736797933-d0c8b2e56b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2021",
      duration: "1h 45m",
      genre: "Comedy • Romance",
      rating: "88% Match"
    },
    {
      id: 17,
      title: "Always Be My Maybe",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "1h 41m",
      genre: "Comedy • Romance",
      rating: "84% Match"
    },
    {
      id: 18,
      title: "The Half of It",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "1h 44m",
      genre: "Comedy • Drama",
      rating: "91% Match"
    }
  ];

  const documentaries = [
    {
      id: 19,
      title: "Our Planet",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "8 Episodes",
      genre: "Documentary • Nature",
      rating: "98% Match"
    },
    {
      id: 20,
      title: "Tiger King",
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "7 Episodes",
      genre: "Documentary • Crime",
      rating: "89% Match"
    },
    {
      id: 21,
      title: "My Octopus Teacher",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2021",
      duration: "1h 25m",
      genre: "Documentary • Nature",
      rating: "95% Match"
    },
    {
      id: 22,
      title: "The Social Dilemma",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2023",
      duration: "1h 34m",
      genre: "Documentary • Technology",
      rating: "92% Match"
    },
    {
      id: 23,
      title: "Seaspiracy",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2022",
      duration: "1h 30m",
      genre: "Documentary • Environmental",
      rating: "87% Match"
    },
    {
      id: 24,
      title: "The Game Changers",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      year: "2021",
      duration: "1h 48m",
      genre: "Documentary • Health",
      rating: "83% Match"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <NetflixHeader />
      <NetflixHero />
      
      <div className="pb-16">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Action & Adventure" movies={actionMovies} />
        <MovieRow title="Comedies" movies={comedyMovies} />
        <MovieRow title="Documentaries" movies={documentaries} />
      </div>

      <NetflixFooter />
    </div>
  );
};

export default Index;
