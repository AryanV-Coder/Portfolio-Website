import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleSplashComplete = () => {
    setIsLoading(false);
    // Delay showing main content for smooth fade-in
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  useEffect(() => {
    // Fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all sections with fade-in-section class
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <SplashScreen isLoading={isLoading} onComplete={handleSplashComplete} />
      {showMainContent && <Navbar />}
      <div className={`min-h-screen bg-dark-primary transition-opacity duration-500 ${showMainContent ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
