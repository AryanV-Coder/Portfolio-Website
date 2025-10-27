import React, { useState, useRef, useEffect } from 'react';
import { FaGraduationCap, FaSchool, FaUniversity, FaTrophy, FaCode, FaRocket } from 'react-icons/fa';
import './Journey.css';

const Journey = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const milestones = [
    {
      id: 1,
      year: '2021-22',
      period: 'Class 10th',
      title: 'Seth Anandram Jaipuria School',
      percentage: '98.8%',
      achievement: 'Outstanding Academic Excellence',
      description: 'Achieved exceptional academic performance with 98.8% marks, establishing a strong foundation in mathematics and science.',
      icon: FaSchool,
      color: 'saffron',
      level: 'foundation',
      stats: {
        rank: '1st',
        subjects: 5,
        awards: 3
      }
    },
    {
      id: 2,
      year: '2023-24',
      period: 'Class 12th',
      title: 'Ahlcon Public School',
      percentage: '91.4%',
      achievement: 'Science Excellence Award',
      description: 'Specialized in PCM (Physics, Chemistry, Mathematics) stream with excellent performance in competitive preparation.',
      icon: FaGraduationCap,
      color: 'green',
      level: 'specialization',
      stats: {
        stream: 'PCM',
        percentile: '95+',
        competitions: 4
      }
    },
    {
      id: 3,
      year: '2024-28',
      period: 'B.Tech CSE',
      title: 'JIIT Noida',
      percentage: 'In Progress',
      achievement: 'Future Tech Innovator',
      description: 'Currently pursuing Computer Science Engineering with focus on AI, ML, and Full-Stack Development.',
      icon: FaUniversity,
      color: 'saffron',
      level: 'transformation',
      stats: {
        cgpa: 'Pursuing',
        projects: '10+',
        skills: '25+'
      }
    }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getCardTransform = (index, isActive) => {
    const baseTransform = `perspective(1000px) rotateX(${isActive ? '0deg' : '5deg'}) rotateY(${isActive ? '0deg' : index % 2 === 0 ? '-5deg' : '5deg'})`;
    return isActive ? `${baseTransform} scale(1.05)` : baseTransform;
  };

  return (
    <section 
      id="journey" 
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header with 3D effects */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10 blur-3xl transform -rotate-2"></div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">
            My{' '}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-green-400 bg-clip-text text-transparent animate-gradient-shift">
              Academic Journey
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From academic excellence to technical mastery – a path of continuous learning and achievement 🎯
          </p>
        </div>

        {/* Revolutionary Timeline Design */}
        <div className="relative">
          {/* Animated central spine */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 transform md:-translate-x-1/2 z-0">
            <div className="h-full bg-gradient-to-b from-orange-400 via-green-400 to-orange-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-green-400 to-orange-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
              {/* Flowing energy effect */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="w-full h-8 bg-gradient-to-b from-white/30 to-transparent rounded-full animate-flow"></div>
              </div>
            </div>
          </div>

          {/* Timeline Items with 3D Floating Cards */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeCard === milestone.id;
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveCard(milestone.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Floating Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-20">
                    <div 
                      className={`relative w-20 h-20 rounded-full transition-all duration-500 ${
                        isActive ? 'scale-125' : 'scale-100'
                      }`}
                      style={{ 
                        transform: `translate(-50%, 0) ${isActive ? 'scale(1.25)' : 'scale(1)'} rotateY(${isActive ? '360deg' : '0deg'})`,
                        transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                    >
                      {/* Glowing ring */}
                      <div className={`absolute inset-0 rounded-full border-4 ${
                        milestone.color === 'saffron' ? 'border-orange-400' : 'border-green-400'
                      } ${isActive ? 'animate-spin-slow' : ''}`}>
                        <div className={`absolute inset-0 rounded-full ${
                          milestone.color === 'saffron' 
                            ? 'shadow-lg shadow-orange-400/50' 
                            : 'shadow-lg shadow-green-400/50'
                        } ${isActive ? 'shadow-2xl' : ''} transition-all duration-500`}></div>
                      </div>
                      
                      {/* Icon container */}
                      <div className={`absolute inset-1 rounded-full flex items-center justify-center ${
                        milestone.color === 'saffron' 
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                          : 'bg-gradient-to-br from-green-500 to-green-600'
                      }`}>
                        <Icon className={`text-2xl text-white ${isActive ? 'animate-bounce' : ''}`} />
                      </div>
                      
                      {/* Particle effect for active state */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute w-1 h-1 ${
                                milestone.color === 'saffron' ? 'bg-orange-300' : 'bg-green-300'
                              } rounded-full animate-particle-burst`}
                              style={{
                                left: '50%',
                                top: '50%',
                                animationDelay: `${i * 0.1}s`,
                                transform: `rotate(${i * 45}deg) translateY(-30px)`
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3D Floating Card */}
                  <div className={`w-full md:w-5/12 ml-28 md:ml-0 ${
                    isLeft ? 'md:text-right md:pr-20' : 'md:pl-20'
                  }`}>
                    <div 
                      className={`group relative transition-all duration-700 ease-out ${
                        isActive ? 'z-30' : 'z-10'
                      }`}
                      style={{
                        transform: getCardTransform(index, isActive),
                        transformStyle: 'preserve-3d'
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
                      <div className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 p-8 rounded-2xl border-2 transition-all duration-500 backdrop-blur-lg ${
                        milestone.color === 'saffron' 
                          ? 'border-orange-500/30 hover:border-orange-400/60' 
                          : 'border-green-500/30 hover:border-green-400/60'
                      } ${
                        isActive ? 'shadow-2xl' : 'shadow-lg'
                      }`}>
                        
                        {/* Header with enhanced styling */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                            milestone.color === 'saffron' 
                              ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 border border-orange-500/40' 
                              : 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/40'
                          }`}>
                            {milestone.year}
                          </div>
                          <div className={`text-2xl font-black ${
                            milestone.color === 'saffron' ? 'text-orange-400' : 'text-green-400'
                          } ${isActive ? 'animate-pulse' : ''}`}>
                            {milestone.percentage}
                          </div>
                        </div>

                        {/* Period badge */}
                        <div className="mb-3">
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            milestone.color === 'saffron'
                              ? 'bg-orange-500/10 text-orange-200 border border-orange-500/20'
                              : 'bg-green-500/10 text-green-200 border border-green-500/20'
                          }`}>
                            {milestone.period}
                          </span>
                        </div>

                        {/* Title with gradient text */}
                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                          milestone.color === 'saffron' 
                            ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                            : 'bg-gradient-to-r from-green-400 to-green-600'
                        } bg-clip-text text-transparent ${
                          isActive ? 'scale-105' : ''
                        }`}>
                          {milestone.title}
                        </h3>

                        {/* Achievement badge */}
                        <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg ${
                          milestone.color === 'saffron'
                            ? 'bg-orange-500/10 text-orange-300'
                            : 'bg-green-500/10 text-green-300'
                        }`}>
                          <FaTrophy className="text-sm" />
                          <span className="text-sm font-semibold">{milestone.achievement}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {milestone.description}
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(milestone.stats).map(([key, value]) => (
                            <div 
                              key={key}
                              className={`text-center p-3 rounded-lg ${
                                milestone.color === 'saffron'
                                  ? 'bg-orange-500/5 border border-orange-500/20'
                                  : 'bg-green-500/5 border border-green-500/20'
                              }`}
                            >
                              <div className={`text-lg font-bold ${
                                milestone.color === 'saffron' ? 'text-orange-400' : 'text-green-400'
                              }`}>
                                {value}
                              </div>
                              <div className="text-xs text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Future Section */}
          <div className="relative flex items-center justify-center mt-20">
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center shadow-2xl shadow-orange-500/50">
                <FaRocket className="text-3xl text-white animate-bounce" />
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping"></div>
              </div>
            </div>
            <div className="ml-32 md:ml-0 md:mt-20 text-center md:text-left">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-2">
                The Journey Continues...
              </h3>
              <p className="text-gray-300 text-lg">
                Building tomorrow's technology, creating infinite possibilities ∞
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-orange-500/5 blur-3xl rounded-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
            <p className="text-gray-300 mb-6 text-xl">
              Ready to be part of my next chapter? Let's build something amazing together! 🚀
            </p>
            <a 
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-2xl font-bold text-lg hover:from-orange-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
            >
              <span>Connect With Me</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
