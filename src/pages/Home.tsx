import React from 'react';
import SakuraAnimation from '../components/SakuraAnimation';

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <SakuraAnimation />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wide font-serif">
            Explore Japan
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-2xl mx-auto px-4 font-light">
            Discover the beauty of Japanese culture, cuisine, and traditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
