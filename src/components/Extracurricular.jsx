import React, { useState } from 'react';
import { FaPen, FaGuitar, FaFistRaised, FaMedal } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';

const Extracurricular = () => {
  const [activeCard, setActiveCard] = useState(null);

  const activities = [
    {
      id: 1,
      title: 'Writing',
      icon: FaPen,
      description: 'Expressing thoughts and ideas through creative writing',
      color: 'orange'
    },
    {
      id: 2,
      title: 'Guitar',
      icon: FaGuitar,
      description: 'Playing melodies and exploring musical creativity',
      color: 'green'
    },
    {
      id: 3,
      title: 'Cricket',
      icon: GiCricketBat,
      description: 'Team sports and strategic gameplay',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Karate',
      icon: FaFistRaised,
      description: 'All India Championship Silver Medalist',
      color: 'green',
      special: true
    }
  ];

  const getCardTransform = (index, isActive) => {
    const baseTransform = `perspective(1000px) rotateX(${isActive ? '0deg' : '5deg'}) rotateY(${isActive ? '0deg' : index % 2 === 0 ? '-5deg' : '5deg'})`;
    return isActive ? `${baseTransform} scale(1.05)` : baseTransform;
  };

  return (
    <section 
      id="extracurricular" 
      className="min-h-screen pt-0 pb-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Background particles similar to Journey section */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ 
          zIndex: 0, 
          isolation: 'isolate'
        }}
      >
        {[...Array(20)].map((_, i) => {
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
        {[...Array(15)].map((_, i) => {
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
        <div className="text-center mb-16 relative pt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform -rotate-2"></div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Beyond Code
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Exploring diverse interests and personal passions outside the world of technology
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const isActive = activeCard === activity.id;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={activity.id}
                className="relative"
                onMouseEnter={() => setActiveCard(activity.id)}
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
                    activity.color === 'orange' 
                      ? 'bg-gradient-to-br from-orange-400/20 to-orange-600/20' 
                      : 'bg-gradient-to-br from-green-400/20 to-green-600/20'
                  } blur-xl transition-all duration-500 ${
                    isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                  }`}></div>
                  
                  {/* Main card */}
                  <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                    activity.color === 'orange' 
                      ? 'border-orange-500/30 hover:border-orange-400/60' 
                      : 'border-green-500/30 hover:border-green-400/60'
                  } ${
                    isActive ? 'shadow-2xl' : 'shadow-lg'
                  }`}>
                    
                    {/* Special Badge for Karate */}
                    {activity.special && (
                      <div className="absolute -top-3 -right-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <FaMedal className="text-white text-sm" />
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className={`p-6 rounded-full ${
                        activity.color === 'orange' 
                          ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40' 
                          : 'bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40'
                      }`}>
                        <Icon className={`text-4xl ${
                          activity.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                        } ${isActive ? 'animate-pulse' : ''}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-center transition-all duration-300 ${
                      activity.color === 'orange' 
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                        : 'bg-gradient-to-r from-green-400 to-green-600'
                    } bg-clip-text text-transparent ${
                      isActive ? 'scale-105' : ''
                    }`}>
                      {activity.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-center">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Highlight */}
        {activities.find(activity => activity.special) && (
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-orange-500/5 blur-3xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaMedal className="text-2xl text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">
                  Achievement Highlight
                </h3>
                <FaMedal className="text-2xl text-yellow-400" />
              </div>
              <p className="text-lg text-yellow-300 mb-2 font-semibold">
                🥈 All India Karate Championship Silver Medalist
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                A testament to years of dedicated training, discipline, and competitive spirit in martial arts
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Extracurricular;