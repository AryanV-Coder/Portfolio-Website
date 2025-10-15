import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showChakra, setShowChakra] = useState(true);

  useEffect(() => {
    // Chakra rotates for 2 seconds
    const rotationTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 2000);

    // After transition animation (1 second), hide splash completely
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Keep mini chakra visible for a bit longer, then fade it out
    const chakraTimer = setTimeout(() => {
      setShowChakra(false);
    }, 5000);

    return () => {
      clearTimeout(rotationTimer);
      clearTimeout(hideTimer);
      clearTimeout(chakraTimer);
    };
  }, []);

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
      {showChakra && <SplashScreen isLoading={isLoading} isTransitioning={isTransitioning} />}
      <div className={`min-h-screen bg-dark-primary transition-opacity duration-1000 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
