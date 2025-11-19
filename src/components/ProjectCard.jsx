import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ name, description, language, stars, forks, url, homepage, topics, index }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  // Handle card click - flip only if not clicking on buttons or links
  const handleCardClick = (e) => {
    // Don't flip if clicking on buttons or links
    if (e.target.closest('button, a')) {
      return;
    }
    handleFlip();
  };

  // Diverse color palette for random assignment
  const colorPalettes = [
    { gradient: 'from-purple-500/20 via-purple-600/10 to-purple-700/5', border: 'border-purple-500/30 hover:border-purple-400/50', accent: '#8B5CF6' },
    { gradient: 'from-emerald-500/20 via-emerald-600/10 to-emerald-700/5', border: 'border-emerald-500/30 hover:border-emerald-400/50', accent: '#10B981' },
    { gradient: 'from-rose-500/20 via-rose-600/10 to-rose-700/5', border: 'border-rose-500/30 hover:border-rose-400/50', accent: '#F43F5E' },
    { gradient: 'from-indigo-500/20 via-indigo-600/10 to-indigo-700/5', border: 'border-indigo-500/30 hover:border-indigo-400/50', accent: '#6366F1' },
    { gradient: 'from-amber-500/20 via-amber-600/10 to-amber-700/5', border: 'border-amber-500/30 hover:border-amber-400/50', accent: '#F59E0B' },
    { gradient: 'from-teal-500/20 via-teal-600/10 to-teal-700/5', border: 'border-teal-500/30 hover:border-teal-400/50', accent: '#14B8A6' },
    { gradient: 'from-cyan-500/20 via-cyan-600/10 to-cyan-700/5', border: 'border-cyan-500/30 hover:border-cyan-400/50', accent: '#06B6D4' },
    { gradient: 'from-pink-500/20 via-pink-600/10 to-pink-700/5', border: 'border-pink-500/30 hover:border-pink-400/50', accent: '#EC4899' },
    { gradient: 'from-violet-500/20 via-violet-600/10 to-violet-700/5', border: 'border-violet-500/30 hover:border-violet-400/50', accent: '#8B5CF6' },
    { gradient: 'from-lime-500/20 via-lime-600/10 to-lime-700/5', border: 'border-lime-500/30 hover:border-lime-400/50', accent: '#84CC16' },
    { gradient: 'from-orange-500/20 via-orange-600/10 to-orange-700/5', border: 'border-orange-500/30 hover:border-orange-400/50', accent: '#F97316' },
    { gradient: 'from-sky-500/20 via-sky-600/10 to-sky-700/5', border: 'border-sky-500/30 hover:border-sky-400/50', accent: '#0EA5E9' }
  ];

  // Get project-specific emoji based on name
  const getProjectEmoji = (projectName) => {
    const lowerName = projectName.toLowerCase();
    
    // Web/Frontend projects
    if (lowerName.includes('portfolio') || lowerName.includes('website') || lowerName.includes('landing')) return '💼';
    if (lowerName.includes('blog') || lowerName.includes('cms')) return '📝';
    if (lowerName.includes('dashboard') || lowerName.includes('admin')) return '📊';
    if (lowerName.includes('shop') || lowerName.includes('store') || lowerName.includes('commerce')) return '🛍️';
    if (lowerName.includes('social') || lowerName.includes('chat') || lowerName.includes('messaging')) return '💬';
    
    // Games & Entertainment
    if (lowerName.includes('game') || lowerName.includes('play') || lowerName.includes('puzzle')) return '🎮';
    if (lowerName.includes('music') || lowerName.includes('audio') || lowerName.includes('sound')) return '🎵';
    if (lowerName.includes('video') || lowerName.includes('movie') || lowerName.includes('film')) return '🎬';
    if (lowerName.includes('photo') || lowerName.includes('image') || lowerName.includes('gallery')) return '📸';
    
    // Tools & Utilities
    if (lowerName.includes('calculator') || lowerName.includes('calc')) return '🧮';
    if (lowerName.includes('calendar') || lowerName.includes('scheduler')) return '📅';
    if (lowerName.includes('todo') || lowerName.includes('task') || lowerName.includes('list')) return '✅';
    if (lowerName.includes('note') || lowerName.includes('editor')) return '📋';
    if (lowerName.includes('weather')) return '🌤️';
    if (lowerName.includes('clock') || lowerName.includes('timer')) return '⏰';
    
    // Data & Analytics
    if (lowerName.includes('data') || lowerName.includes('analytics') || lowerName.includes('chart')) return '📈';
    if (lowerName.includes('api') || lowerName.includes('server') || lowerName.includes('backend')) return '⚙️';
    if (lowerName.includes('database') || lowerName.includes('db')) return '🗃️';
    if (lowerName.includes('search') || lowerName.includes('find')) return '🔍';
    
    // Learning & Education
    if (lowerName.includes('learn') || lowerName.includes('tutorial') || lowerName.includes('course')) return '📚';
    if (lowerName.includes('quiz') || lowerName.includes('test')) return '🧪';
    if (lowerName.includes('book') || lowerName.includes('library')) return '📖';
    
    // Finance & Business
    if (lowerName.includes('bank') || lowerName.includes('finance') || lowerName.includes('money')) return '💰';
    if (lowerName.includes('budget') || lowerName.includes('expense')) return '💳';
    
    // AI & Tech
    if (lowerName.includes('ai') || lowerName.includes('ml') || lowerName.includes('bot')) return '🤖';
    if (lowerName.includes('crypto') || lowerName.includes('blockchain')) return '⛓️';
    
    // Mobile & Apps
    if (lowerName.includes('mobile') || lowerName.includes('app') || lowerName.includes('android') || lowerName.includes('ios')) return '📱';
    
    // Default based on language or generic
    switch(language) {
      case 'Python': return '🐍';
      case 'JavaScript': return '⚡';
      case 'Java': return '☕';
      case 'TypeScript': return '📘';
      case 'C++': return '⚙️';
      case 'Go': return '🐹';
      case 'Rust': return '🦀';
      case 'Swift': return '🍎';
      case 'Kotlin': return '📱';
      case 'HTML': return '🌐';
      case 'CSS': return '🎨';
      case 'PHP': return '🐘';
      case 'Ruby': return '💎';
      default: return '🚀';
    }
  };

  // Get theme with no consecutive color repetition
  const getGradientTheme = () => {
    // Use index to ensure no consecutive cards have same color
    const colorIndex = index % colorPalettes.length;
    const selectedPalette = colorPalettes[colorIndex];
    
    return {
      gradient: selectedPalette.gradient,
      border: selectedPalette.border,
      icon: getProjectEmoji(name),
      accent: selectedPalette.accent
    };
  };

  const theme = getGradientTheme();

  // Auto-load GitHub Open Graph image
  const imagePath = `https://opengraph.githubassets.com/1/AryanV-Coder/${name}`;

  return (
    <div className="project-card-container group" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className={`project-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front of Card */}
        <div 
          className={`project-card-face project-card-front bg-gradient-to-br ${theme.gradient} border ${theme.border} cursor-pointer`}
          onClick={handleCardClick}
        >
          {/* Language Icon & Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${theme.accent}20` }}>
                {theme.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">
                  {name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </h3>
                {language && (
                  <div className="flex items-center gap-1 text-sm" style={{ color: theme.accent }}>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.accent }}></span>
                    {language}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Preview Image */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <img
              src={imagePath}
              alt={name}
              className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden w-full h-32 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center">
              <span className="text-4xl">{theme.icon}</span>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6 text-sm line-clamp-3 overflow-hidden">
            {description || "An innovative project showcasing modern development practices."}
          </p>

          {/* Stats Row */}
          {(stars > 0 || forks > 0) && (
            <div className="flex items-center gap-4 mb-6 text-sm">
              {stars > 0 && (
                <div className="flex items-center gap-1" style={{ color: theme.accent }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{stars}</span>
                </div>
              )}
              {forks > 0 && (
                <div className="flex items-center gap-1 text-green">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                  <span>{forks}</span>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={handleFlip}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium"
              style={{ 
                borderColor: `${theme.accent}40`, 
                color: theme.accent,
                backgroundColor: `${theme.accent}10`
              }}
            >
              <FaInfoCircle className="w-4 h-4" />
              Details
            </button>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-saffron text-dark-primary transition-all duration-300 text-sm font-medium hover:bg-saffron/90"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Demo
              </a>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-400 transition-all duration-300 text-sm font-medium hover:border-gray-500 hover:text-gray-300"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className={`project-card-face project-card-back bg-gradient-to-br ${theme.gradient} border ${theme.border} cursor-pointer`}
          onClick={handleCardClick}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: `${theme.accent}30` }}>
                {theme.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </h3>
            </div>
            <button 
              onClick={handleFlip}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Full Description */}
          <p className="text-text-secondary leading-relaxed mb-4 text-sm overflow-y-auto custom-scrollbar max-h-32">
            {description || "This project demonstrates advanced development skills and modern technology implementation."}
          </p>

          {/* Tech Stack */}
          {topics && topics.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-text-primary mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full border"
                    style={{ 
                      borderColor: `${theme.accent}40`,
                      backgroundColor: `${theme.accent}10`,
                      color: theme.accent
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Stats */}
          {(stars > 0 || forks > 0) && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-text-primary mb-2">Repository Stats:</h4>
              <div className="grid grid-cols-2 gap-2">
                {stars > 0 && (
                  <div className="flex items-center justify-center gap-2 p-2 rounded-lg" style={{ backgroundColor: `${theme.accent}10` }}>
                    <svg className="w-4 h-4" style={{ color: theme.accent }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium" style={{ color: theme.accent }}>{stars} Stars</span>
                  </div>
                )}
                {forks > 0 && (
                  <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-green/10">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                    </svg>
                    <span className="text-sm font-medium text-green">{forks} Forks</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium"
              style={{ 
                borderColor: `${theme.accent}40`, 
                color: theme.accent,
                backgroundColor: `${theme.accent}10`
              }}
            >
              <FaGithub className="w-4 h-4" />
              View Code
            </a>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-saffron text-dark-primary transition-all duration-300 text-sm font-medium hover:bg-saffron/90"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
