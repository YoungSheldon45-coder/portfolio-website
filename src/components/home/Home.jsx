import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import Counter from '../pages/Counter';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <div
        className="light"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
