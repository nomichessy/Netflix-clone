
import React from 'react';
import { Play, Info, VolumeX, Volume2 } from 'lucide-react';
import { useState } from 'react';

const NetflixHero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), 
                           linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.1) 100%), 
                           url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2125&q=80')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="px-4 md:px-12 max-w-2xl">
          {/* Netflix Series Badge */}
          <div className="flex items-center mb-4">
            <span className="text-red-600 font-bold text-sm md:text-base mr-2">N</span>
            <span className="text-white text-sm md:text-base tracking-wider">SERIES</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Stranger Things
          </h1>

          {/* Description */}
          <p className="text-white text-base md:text-lg mb-6 leading-relaxed max-w-lg">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>

          {/* Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
              <Play className="mr-2" size={20} fill="black" />
              Play
            </button>
            <button className="flex items-center bg-gray-500 bg-opacity-70 text-white px-6 py-3 rounded font-bold hover:bg-opacity-50 transition-colors">
              <Info className="mr-2" size={20} />
              More Info
            </button>
          </div>

          {/* Age Rating */}
          <div className="flex items-center space-x-4 text-white">
            <div className="border border-gray-400 px-2 py-1 text-sm">TV-14</div>
            <div className="text-sm">2016</div>
            <div className="text-sm">4 Seasons</div>
            <div className="text-sm">Sci-Fi • Horror • Drama</div>
          </div>
        </div>
      </div>

      {/* Volume Control */}
      <button 
        className="absolute bottom-24 right-4 md:right-12 bg-black bg-opacity-50 p-3 rounded-full border border-gray-500 hover:bg-opacity-70 transition-colors"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? (
          <VolumeX className="text-white" size={20} />
        ) : (
          <Volume2 className="text-white" size={20} />
        )}
      </button>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default NetflixHero;
