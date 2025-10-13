import React from 'react';

const SplashScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-saffron via-white to-green">
      <div className="relative">
        {/* Ashoka Chakra */}
        <div className="animate-spin-slow">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Outer circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#000080"
              strokeWidth="3"
            />
            
            {/* Inner circle */}
            <circle
              cx="100"
              cy="100"
              r="15"
              fill="#000080"
            />

            {/* 24 spokes */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + 15 * Math.cos(rad);
              const y1 = 100 + 15 * Math.sin(rad);
              const x2 = 100 + 90 * Math.cos(rad);
              const y2 = 100 + 90 * Math.sin(rad);
              
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#000080"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold text-navy animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
