import React, { useState, useEffect } from 'react';
import ashokaChakra from '../assets/ashok_chakra.png';

const SplashScreen = ({ isLoading, onComplete }) => {
  const [animationStage, setAnimationStage] = useState('initial'); // 'initial', 'growing', 'rotating', 'shrinking', 'complete'

  useEffect(() => {
    if (!isLoading) return;

    // Start the growing animation immediately
    const startGrow = setTimeout(() => {
      setAnimationStage('growing');
    }, 100);

    // Stage 1: Growing phase (1 second for visible scaling)
    const growTimer = setTimeout(() => {
      setAnimationStage('rotating');
    }, 1100);

    // Stage 2: Stable rotation for 1.5 seconds (starts at 1.1s, ends at 2.6s)
    const rotationTimer = setTimeout(() => {
      setAnimationStage('shrinking');
    }, 2600);

    // Stage 3: Shrinking phase (1 second for visible scaling, ends at 3.6s)
    const shrinkTimer = setTimeout(() => {
      setAnimationStage('complete');
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(startGrow);
      clearTimeout(growTimer);
      clearTimeout(rotationTimer);
      clearTimeout(shrinkTimer);
    };
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <>
      {/* Main Splash Screen */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
          animationStage === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          background: 'radial-gradient(circle at center, #1a1a2e 0%, #0f0f1a 50%, #000000 100%)',
        }}
      >
        {/* Ashoka Chakra with Minimal White Background */}
        <div 
          className={`relative animate-spin-slower transition-all ${
            animationStage === 'initial' 
              ? 'scale-0 opacity-100' 
              : animationStage === 'growing'
              ? 'scale-100 opacity-100 duration-1000 ease-out'
              : animationStage === 'rotating'
              ? 'scale-100 opacity-100 duration-300'
              : animationStage === 'shrinking'
              ? 'scale-0 opacity-100 duration-1000 ease-in'
              : 'scale-0 opacity-0'
          }`}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Subtle White Background Circle - Smaller to stay within chakra */}
            <div className="absolute inset-2 rounded-full bg-white/85"></div>
            
            {/* Strong White Glow for Clear Visibility */}
            <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-full bg-white/40 blur-2xl"></div>
            
            {/* Main Chakra Image */}
            <img
              src={ashokaChakra}
              alt="Ashoka Chakra"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Content Fade-In Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          animationStage === 'complete' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'transparent',
        }}
      />
    </>
  );
};

export default SplashScreen;
