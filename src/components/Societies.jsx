import React, { useState } from 'react';
import { FaGoogle, FaRobot, FaBrain, FaLightbulb } from 'react-icons/fa';
import { SiIeee } from 'react-icons/si';

const Societies = () => {
  const [activeCard, setActiveCard] = useState(null);

  const societies = [
    {
      id: 1,
      name: 'GDG',
      fullName: "Google Developer's Group",
      icon: FaGoogle,
      description: 'Developer community focused on Google technologies and innovation',
      color: 'orange'
    },
    {
      id: 2,
      name: 'IEEE Student Branch',
      fullName: 'IEEE Student Branch',
      icon: SiIeee,
      description: 'Professional association for electrical and electronics engineering',
      color: 'green'
    },
    {
      id: 3,
      name: 'AI/ML Hub',
      fullName: 'AI/ML Hub',
      icon: FaBrain,
      description: 'Exploring artificial intelligence and machine learning technologies',
      color: 'orange'
    },
    {
      id: 4,
      name: 'CICR',
      fullName: 'Centre for Innovation & Creativity in Robotics',
      icon: FaRobot,
      description: 'Innovation center for robotics research and development',
      color: 'green'
    }
  ];

  const getCardTransform = (index, isActive) => {
    const baseTransform = `perspective(1000px) rotateX(${isActive ? '0deg' : '5deg'}) rotateY(${isActive ? '0deg' : index % 2 === 0 ? '-5deg' : '5deg'})`;
    return isActive ? `${baseTransform} scale(1.05)` : baseTransform;
  };

  return (
    <section 
      id="societies" 
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Background particles similar to other sections */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ 
          zIndex: 0, 
          isolation: 'isolate'
        }}
      >
        {[...Array(15)].map((_, i) => {
          const size = i % 3 === 0 ? 'w-3 h-3' : i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1';
          return (
            <div
              key={i}
              className={`absolute ${size} bg-orange-400 rounded-full opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-smooth ${8 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
                willChange: 'transform',
                pointerEvents: 'none'
              }}
            />
          );
        })}
        {[...Array(12)].map((_, i) => {
          const size = i % 3 === 0 ? 'w-3 h-3' : i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1';
          return (
            <div
              key={`green-${i}`}
              className={`absolute ${size} bg-green-400 rounded-full opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-smooth ${10 + (i % 3)}s ease-in-out ${i * 0.5}s infinite`,
                willChange: 'transform',
                pointerEvents: 'none'
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10" style={{ isolation: 'isolate' }}>
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform -rotate-2"></div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Hubs & Societies
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Active participation in college technical communities and professional organizations
          </p>
        </div>

        {/* Societies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {societies.map((society, index) => {
            const Icon = society.icon;
            const isActive = activeCard === society.id;

            return (
              <div
                key={society.id}
                className="relative"
                onMouseEnter={() => setActiveCard(society.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div 
                  className={`group relative transition-all duration-700 ease-out ${
                    isActive ? 'z-30' : 'z-20'
                  }`}
                  style={{
                    transform: getCardTransform(index, isActive),
                    transformStyle: 'preserve-3d',
                    isolation: 'isolate'
                  }}
                >
                  {/* Card glow effect */}
                  <div className={`absolute inset-0 rounded-2xl ${
                    society.color === 'orange' 
                      ? 'bg-gradient-to-br from-orange-400/20 to-orange-600/20' 
                      : 'bg-gradient-to-br from-green-400/20 to-green-600/20'
                  } blur-xl transition-all duration-500 ${
                    isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                  }`}></div>
                  
                  {/* Main card */}
                  <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                    society.color === 'orange' 
                      ? 'border-orange-500/30 hover:border-orange-400/60' 
                      : 'border-green-500/30 hover:border-green-400/60'
                  } ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}>

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`p-6 rounded-full ${
                        society.color === 'orange' 
                          ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40' 
                          : 'bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40'
                      }`}>
                        <Icon className={`text-4xl ${
                          society.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                        } ${isActive ? 'animate-pulse' : ''}`} />
                      </div>
                    </div>

                    {/* Society Name */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 text-center transition-all duration-300 ${
                      society.color === 'orange' 
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                        : 'bg-gradient-to-r from-green-400 to-green-600'
                    } bg-clip-text text-transparent ${
                      isActive ? 'scale-105' : ''
                    }`}>
                      {society.name}
                    </h3>

                    {/* Full Name */}
                    <p className="text-gray-400 text-center mb-4 font-medium">
                      {society.fullName}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-center">
                      {society.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Societies;