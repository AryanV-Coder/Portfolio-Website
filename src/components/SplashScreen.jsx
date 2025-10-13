import React from 'react';

const SplashScreen = ({ isLoading, isTransitioning }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        !isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      <div 
        className={`relative transition-all duration-1000 ease-in-out ${
          isTransitioning 
            ? 'scale-[0.15] translate-x-[calc(50vw-120px)] translate-y-[calc(-50vh+120px)]' 
            : 'scale-100'
        }`}
      >
        {/* Ashoka Chakra - Larger Size */}
        <div className={`${!isTransitioning ? 'animate-spin-slow' : ''}`}>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_50px_rgba(255,153,51,0.5)]"
          >
            {/* Outer glow circle */}
            <circle
              cx="200"
              cy="200"
              r="195"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              opacity="0.3"
            />
            
            {/* Outer circle */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#FF9933"
              strokeWidth="6"
            />
            
            {/* Inner circle */}
            <circle
              cx="200"
              cy="200"
              r="30"
              fill="#FF9933"
            />

            {/* 24 spokes */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              const x1 = 200 + 30 * Math.cos(rad);
              const y1 = 200 + 30 * Math.sin(rad);
              const x2 = 200 + 180 * Math.cos(rad);
              const y2 = 200 + 180 * Math.sin(rad);
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FF9933"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Gradient definitions */}
            <defs>
              <radialGradient id="gradient1">
                <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#138808" stopOpacity="0.2" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
