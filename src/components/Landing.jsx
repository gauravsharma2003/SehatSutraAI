import React from 'react';
import Header from './Header'; // Make sure this path is correct
import Footer from './Footer';
const Landing = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section >
        <img 
          src="/hero.png" 
          alt="Hero Background" 
          className="  w-full  object-cover"
        />
        
      </section>

      

      <Footer/>
    </div>
  );
};

export default Landing;
