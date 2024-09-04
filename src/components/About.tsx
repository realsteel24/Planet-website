import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">About Us</h1>
      <p className="mb-4 text-gray-300">Learn about our gym's history, mission, and instructors.</p>
      {/* Add more details about your gym, philosophy, and team */}
    </div>
  );
};

export default About;