import React from 'react';
import bgWallpaper from '../assets/bg-wallpaper.jpg';
import karateKidsImage from '../assets/karate-kids.jpg'; 
import karateAdultImage from '../assets/karate-adults.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-screen mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{backgroundImage: `url(${bgWallpaper})`}}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Build Your Mind and Self-Confidence</h1>
          <p className="text-xl mb-8">Martial Arts & Fitness Programs for Kids, Teens, and Adults</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-200">
            Start Your Free Trial
          </button>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our World Class Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg overflow-hidden">
            <img src={karateKidsImage} alt="Kids & Teen Karate" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Kids & Teen Karate</h3>
              <p className="text-gray-300 mb-4">Skills that will last a lifetime</p>
              <a href="#" className="text-blue-300 hover:text-blue-400 font-bold">Learn More</a>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl rounded-lg overflow-hidden">
            <img src={karateAdultImage} alt="Adult Karate" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Adult Karate</h3>
              <p className="text-gray-300 mb-4">Gain the tools to achieve your potential</p>
              <a href="#" className="text-blue-300 hover:text-blue-400 font-bold">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Transform into the best version of yourself</h2>
        <p className="text-xl text-gray-300 mb-8">We understand your desire to improve your conditioning, mental strength, and ability to defend yourself.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-200">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default Home;
