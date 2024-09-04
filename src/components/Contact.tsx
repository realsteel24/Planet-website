import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
      {/* Add contact form, address, phone number, and email */}
      <p className="text-gray-300">Contact information and form will be displayed here.</p>
    </div>
  );
};

export default Contact;