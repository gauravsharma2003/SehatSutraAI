import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#A83766] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Brand Logo" 
            className="w-56 h-auto"
          />
        </div>


        <nav>
          <ul className="flex space-x-10 text-xl">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/smart-assistant" 
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Smart Assistant
              </Link>
            </li>
            <li>
              <Link 
                to="/appointment-booking" 
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Appointment Booking
              </Link>
            </li>
            
          </ul>
        </nav>


        <div className="flex space-x-4">
          <Link 
            to="/sign-in" 
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-all duration-300"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
