import React from 'react';
import { FaHome, FaBolt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../../pages/Authentication/logout';

const DashboardNavbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        // Redirect to LandingPage after successful logout
        navigate('/LandingPage');
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white shadow-md z-10">
      
      <div className="flex items-center space-x-6">
       
        <Link to="/LandingPage">
          <span className="text-2xl font-bold text-black">Brilliant</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-gray-600">
          <Link to="/Dashboard">
            <div className="flex items-center space-x-1 text-black hover:text-gray-800">
              <FaHome className="text-lg" />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/DashboardCourses">
            <div className="flex items-center space-x-1 hover:text-gray-800">
              <FaBolt className="text-lg" />
              <span>Courses</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white text-black"
        />
      </div>

    
      <div className="flex items-center space-x-4">
        <button className="px-4 py-1 text-green-600 border border-green-600 rounded-full hover:bg-green-50 bg-white">
          Gift Premium
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-2 py-1 text-green-600 border border-green-600 rounded-full hover:bg-green-50 bg-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
