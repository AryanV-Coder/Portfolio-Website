import React from 'react';

const ProjectCard = ({ name, description, language, stars, forks, url, homepage, topics, index }) => {
  // Language colors mapping
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Default: '#8b949e'
  };

  const languageColor = languageColors[language] || languageColors.Default;

  return (
    <div 
      className="group bg-dark-card rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-saffron/30 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Project Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-primary group-hover:text-saffron transition-colors duration-300 mb-2">
                {name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </h3>
            </div>
            <a
              href={homepage || url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-2 cursor-pointer hover:scale-110 transition-transform duration-300"
              title={homepage ? "Open Live Demo" : "View on GitHub"}
            >
              <svg 
                className="w-6 h-6 text-text-muted group-hover:text-saffron hover:text-saffron transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Topics/Tags */}
        {topics && topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.slice(0, 3).map((topic, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 text-xs bg-green/10 text-green font-semibold rounded border border-green/50"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Project Footer */}
        <div className="mt-auto pt-4 border-t border-dark-tertiary">
          <div className="flex items-center justify-between mb-4">
            {/* Language */}
            {language && (
              <div className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: languageColor }}
                ></span>
                <span className="text-text-primary text-sm font-semibold">{language}</span>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 text-text-primary text-sm font-semibold">
              {stars > 0 && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{stars}</span>
                </div>
              )}
              {forks > 0 && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                  <span>{forks}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-saffron/10 text-saffron text-center rounded border-2 border-saffron/50 hover:bg-saffron hover:text-text-dark transition-all duration-300 font-semibold text-sm shadow-md"
            >
              View Code
            </a>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-green/10 text-green text-center rounded border-2 border-green/50 hover:bg-green hover:text-text-dark transition-all duration-300 font-semibold text-sm shadow-md"
              >
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
