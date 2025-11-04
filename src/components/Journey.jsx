import React, { useState, useRef } from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaRocket, FaPen, FaGuitar, FaFistRaised, FaMedal, FaGoogle, FaRobot, FaBrain, FaLightbulb, FaUsers } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';
import { SiIeee } from 'react-icons/si';
import './Journey.css';

const Journey = () => {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  const milestones = [
    {
      id: 1,
      year: '2021-22',
      period: 'Class 10th',
      title: 'Seth Anandram Jaipuria School',
      percentage: '98.8%',
      description: 'Achieved exceptional academic performance with strong foundation in mathematics and science, developing analytical thinking and problem-solving skills.',
      icon: FaSchool,
      color: 'saffron',
    },
    {
      id: 2,
      year: '2023-24',
      period: 'Class 12th',
      title: 'Ahlcon Public School',
      percentage: '91.4%',
      description: 'Specialized in PCM (Physics, Chemistry, Mathematics) stream, building strong technical fundamentals and preparing for engineering studies.',
      icon: FaGraduationCap,
      color: 'green',
    },
    {
      id: 3,
      year: '2024-28',
      period: 'B.Tech CSE',
      title: 'JIIT Noida',
      percentage: 'Pursuing',
      description: 'Currently pursuing Computer Science Engineering with focus on AI, ML, and Full-Stack Development, exploring cutting-edge technologies.',
      icon: FaUniversity,
      color: 'saffron',
    }
  ];



  const getCardTransform = (index, isActive) => {
    const baseTransform = `perspective(1000px) rotateX(${isActive ? '0deg' : '5deg'}) rotateY(${isActive ? '0deg' : index % 2 === 0 ? '-5deg' : '5deg'})`;
    return isActive ? `${baseTransform} scale(1.05)` : baseTransform;
  };

  return (
    <section 
      id="journey" 
      className="min-h-screen pt-20 pb-0 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      ref={containerRef}
      style={{ isolation: 'isolate' }}
    >
      {/* Background particles contained within education section */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ 
          zIndex: 0, 
          isolation: 'isolate'
        }}
      >
        {[...Array(25)].map((_, i) => {
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
        {[...Array(20)].map((_, i) => {
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
        {/* Enhanced Header with 3D effects */}
        <div className="text-center mb-12 md:mb-20 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform -rotate-2"></div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 relative z-10">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Education Journey
            </span>
          </h2>
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            From academic excellence to technical mastery – a path of continuous learning and achievement
          </p>
        </div>

        {/* Revolutionary Timeline Design */}
        <div className="relative z-10">
          {/* Animated central spine */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-2 transform md:-translate-x-1/2 z-5">
            <div className="h-full bg-gradient-to-b from-orange-400 via-green-400 to-orange-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-green-400 to-orange-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
              {/* Flowing energy effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="w-full h-8 bg-gradient-to-b from-white/30 to-transparent rounded-full animate-flow"></div>
              </div>
            </div>
          </div>

          {/* Timeline Items with 3D Floating Cards */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const isActive = activeCard === milestone.id;
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveCard(milestone.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >


                  {/* 3D Floating Card */}
                  <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${
                    isLeft ? 'md:text-right md:pr-20' : 'md:pl-20'
                  }`}>
                    <div 
                      className={`group relative transition-all duration-700 ease-out ${
                        isActive ? 'z-30' : 'z-20'
                      }`}
                      style={{
                        transform: window.innerWidth < 768 ? 'none' : getCardTransform(index, isActive),
                        transformStyle: 'preserve-3d',
                        isolation: 'isolate'
                      }}
                    >
                      {/* Card glow effect */}
                      <div className={`absolute inset-0 rounded-2xl ${
                        milestone.color === 'saffron' 
                          ? 'bg-gradient-to-br from-orange-400/20 to-orange-600/20' 
                          : 'bg-gradient-to-br from-green-400/20 to-green-600/20'
                      } blur-xl transition-all duration-500 ${
                        isActive ? 'scale-110 opacity-100' : 'scale-100 opacity-60'
                      }`}></div>
                      
                      {/* Main card */}
                      <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 p-5 md:p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                        milestone.color === 'saffron' 
                          ? 'border-orange-500/30 hover:border-orange-400/60' 
                          : 'border-green-500/30 hover:border-green-400/60'
                      } ${
                        isActive ? 'shadow-2xl' : 'shadow-lg'
                      }`}>
                        
                        {/* Header with enhanced styling */}
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold ${
                            milestone.color === 'saffron' 
                              ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 border border-orange-500/40' 
                              : 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/40'
                          }`}>
                            {milestone.year}
                          </div>
                          <div className={`text-xl md:text-2xl font-black ${
                            milestone.color === 'saffron' ? 'text-orange-400' : 'text-green-400'
                          } ${isActive ? 'animate-pulse' : ''}`}>
                            {milestone.percentage}
                          </div>
                        </div>

                        {/* Period badge */}
                        <div className="mb-2 md:mb-3">
                          <span className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full ${
                            milestone.color === 'saffron'
                              ? 'bg-orange-500/10 text-orange-200 border border-orange-500/20'
                              : 'bg-green-500/10 text-green-200 border border-green-500/20'
                          }`}>
                            {milestone.period}
                          </span>
                        </div>

                        {/* Title with gradient text */}
                        <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 transition-all duration-300 ${
                          milestone.color === 'saffron' 
                            ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                            : 'bg-gradient-to-r from-green-400 to-green-600'
                        } bg-clip-text text-transparent ${
                          isActive ? 'scale-105' : ''
                        }`}>
                          {milestone.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Beyond Code Section - Part 2 */}
        <div className="pt-16 md:pt-20" id="extracurricular">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 relative px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform -rotate-2"></div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 relative z-10">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
                Beyond Code
              </span>
            </h2>
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm opacity-50"></div>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Exploring diverse interests and personal passions outside the world of technology
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 px-4 md:px-0">
            {[
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
            ].map((activity, index) => {
              const Icon = activity.icon;
              const isActive = activeCard === `beyond-${activity.id}`;

              return (
                <div
                  key={activity.id}
                  className="relative"
                  onMouseEnter={() => setActiveCard(`beyond-${activity.id}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div 
                    className={`group relative transition-all duration-700 ease-out ${
                      isActive ? 'z-30' : 'z-20'
                    }`}
                    style={{
                      transform: window.innerWidth < 768 ? 'none' : getCardTransform(index, isActive),
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
                    <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 p-6 md:p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
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
                      <div className="flex items-center justify-center mb-4 md:mb-6">
                        <div className={`p-4 md:p-6 rounded-full ${
                          activity.color === 'orange' 
                            ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40' 
                            : 'bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40'
                        }`}>
                          <Icon className={`text-3xl md:text-4xl ${
                            activity.color === 'orange' ? 'text-orange-400' : 'text-green-400'
                          } ${isActive ? 'animate-pulse' : ''}`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-center transition-all duration-300 ${
                        activity.color === 'orange' 
                          ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                          : 'bg-gradient-to-r from-green-400 to-green-600'
                      } bg-clip-text text-transparent ${
                        isActive ? 'scale-105' : ''
                      }`}>
                        {activity.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievement Highlight */}
          <div className="text-center relative px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-orange-500/5 blur-3xl rounded-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaMedal className="text-xl md:text-2xl text-yellow-400" />
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  Achievement Highlight
                </h3>
                <FaMedal className="text-xl md:text-2xl text-yellow-400" />
              </div>
              <p className="text-base md:text-lg text-yellow-300 mb-2 font-semibold">
                🥈 All India Karate Championship Silver Medalist
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                A testament to years of dedicated training, discipline, and competitive spirit in martial arts
              </p>
            </div>
          </div>
        </div>

        {/* Hubs & Societies Section - Part 3 with Compact Design */}
        <div className="pt-16 md:pt-20" id="societies">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 relative px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform rotate-2"></div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 relative z-10">
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-orange-400 bg-clip-text text-transparent animate-gradient-shift">
                Hubs & Societies
              </span>
            </h2>
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-24 md:w-32 h-2 bg-gradient-to-r from-green-400 to-orange-400 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-400 rounded-full blur-sm opacity-50"></div>
              </div>
            </div>
            <p className="text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Active participation in college technical communities and professional organizations
            </p>
          </div>

          {/* Compact Society Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 px-4 md:px-0">
            {[
              {
                name: 'GDG',
                fullName: "Google Developer's Group",
                icon: FaGoogle,
                description: 'Building with cutting-edge Google technologies',
                color: 'from-blue-500 via-red-500 to-yellow-500',
                bgColor: 'from-blue-500/10 to-red-500/10',
                iconColor: 'text-blue-400'
              },
              {
                name: 'IEEE',
                fullName: 'IEEE Student Branch',
                icon: SiIeee,
                description: 'Advancing technology for humanity',
                color: 'from-blue-600 via-cyan-500 to-blue-400',
                bgColor: 'from-blue-600/10 to-cyan-500/10',
                iconColor: 'text-cyan-400'
              },
              {
                name: 'AI/ML Hub',
                fullName: 'AI/ML Innovation Hub',
                icon: FaBrain,
                description: 'Exploring artificial intelligence frontiers',
                color: 'from-purple-500 via-pink-500 to-purple-400',
                bgColor: 'from-purple-500/10 to-pink-500/10',
                iconColor: 'text-purple-400'
              },
              {
                name: 'CICR',
                fullName: 'Centre for Innovation & Creativity in Robotics',
                icon: FaRobot,
                description: 'Innovating in robotics and automation',
                color: 'from-green-500 via-emerald-500 to-green-400',
                bgColor: 'from-green-500/10 to-emerald-500/10',
                iconColor: 'text-green-400'
              }
            ].map((society, index) => {
              const Icon = society.icon;
              const isActive = activeCard === `society-${index}`;

              return (
                <div
                  key={society.name}
                  className="group relative"
                  onMouseEnter={() => setActiveCard(`society-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div 
                    className={`relative bg-gradient-to-br ${society.bgColor} backdrop-blur-lg border border-white/10 rounded-2xl p-5 md:p-6 transition-all duration-500 ease-out transform ${
                      isActive ? 'scale-105 shadow-2xl border-white/30' : 'hover:scale-102'
                    }`}
                    style={{
                      transform: window.innerWidth < 768 ? 'none' : (isActive ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'),
                    }}
                  >
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${society.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Name Header */}
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className={`relative p-2.5 md:p-3 bg-gradient-to-br ${society.color} rounded-xl shadow-lg flex-shrink-0`}>
                          <Icon className="text-xl md:text-2xl text-white" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${society.color} rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
                        </div>
                        <div className="min-w-0">
                          <h3 className={`text-lg md:text-xl font-bold ${society.iconColor} group-hover:scale-105 transition-transform duration-300 truncate`}>
                            {society.name}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-400 leading-tight truncate">
                            {society.fullName}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-sm leading-relaxed">
                        {society.description}
                      </p>

                      {/* Active Indicator */}
                      <div className={`mt-3 md:mt-4 h-1 bg-gradient-to-r ${society.color} rounded-full transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}></div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 ${society.iconColor} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Journey;
