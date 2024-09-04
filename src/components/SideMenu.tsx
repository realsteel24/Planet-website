import React from 'react';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile menu */}
      <div 
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden bg-gray-900 shadow-xl z-30 w-64 transition duration-300 ease-in-out`}
      >
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 left-4 text-gray-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-2 mt-8">
            <li><Link to="/" className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={onClose}>Home</Link></li>
            <li><Link to="/about" className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={onClose}>About Us</Link></li>
            <li><Link to="/schedule" className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={onClose}>Schedule</Link></li>
            <li><Link to="/contact" className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={onClose}>Contact Us</Link></li>
            <li><Link to="/login" className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors" onClick={onClose}>Member Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" 
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default SideMenu;