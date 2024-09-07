import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#A83766] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-4">
          <a href="#home" className="text-blue-200 hover:underline">LinkedIn</a>
          <span className="mx-2">|</span>
          <a href="#contact" className="text-blue-200 hover:underline">GitHub</a>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} SehatSutra AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
