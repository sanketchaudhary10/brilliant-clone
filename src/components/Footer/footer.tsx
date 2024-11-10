import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
       
        <Link to="/">
            <div className="text-3xl font-bold">
                Brilliant
            </div>
        </Link>
        
        <div className="flex items-center space-x-2 text-gray-400">
          <span>curated by Mobbin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
