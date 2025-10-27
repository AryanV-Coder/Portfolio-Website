import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ name, description, language, stars, forks, url, homepage, topics, index }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

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

  // Auto-load GitHub Open Graph image
  const imagePath = `https://opengraph.githubassets.com/1/AryanV-Coder/${name}`;

  return (
    <div className={`project-card-container ${flipped ? 'flipped' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front">
          <h3 className="project-card-title">
            {name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h3>

          {/* Project Preview Image */}
          <img
            src={imagePath}
            alt={name}
            className="project-preview-image"
            onError={(e) => (e.target.style.display = "none")}
          />

          <p className="project-description">
            {description
              ? description.length > 100
                ? `${description.substring(0, 100)}...`
                : description
              : "An innovative project showcasing modern development practices."}
          </p>

          {/* Language Badge */}
          {language && (
            <div className="project-language">
              <span className="flex items-center gap-2">
                🖥️ 
                <span 
                  className="w-3 h-3 rounded-full inline-block" 
                  style={{ backgroundColor: languageColor }}
                ></span>
                {language}
              </span>
            </div>
          )}

          <br />
          <div className="project-card-actions">
            <button className="info-button" onClick={handleFlip}>
              <FaInfoCircle /> More Info
            </button>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="info-button live-button"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card-back">
          <h3 className="project-card-title">
            {name.replace(/-/g, ' ').replace(/_/g, ' ').split(' ').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h3>

          <p className="project-description-full">
            {description || "This project demonstrates advanced development skills and modern technology implementation."}
          </p>

          {/* Tech Stack Section */}
          <div className="tech-stack">
            <h4>Tech Stack:</h4>
            <div className="tech-tags">
              {topics && topics.length > 0 ? (
                topics.map((topic, index) => (
                  <span key={index} className="tech-tag">
                    {topic}
                  </span>
                ))
              ) : (
                <span className="tech-tag">{language || "Multi-tech"}</span>
              )}
            </div>
          </div>

          {/* Stats Section */}
          {(stars > 0 || forks > 0) && (
            <div className="project-stats">
              <h4>Project Stats:</h4>
              <div className="stats-container">
                {stars > 0 && (
                  <div className="stat-item">
                    <svg className="w-4 h-4 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{stars} Stars</span>
                  </div>
                )}
                {forks > 0 && (
                  <div className="stat-item">
                    <svg className="w-4 h-4 text-green" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                    </svg>
                    <span>{forks} Forks</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Project Links */}
          <div className="project-links">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
            >
              <FaGithub /> GitHub
            </a>
            {homepage && (
              <a
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link demo"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>

          <button className="back-button" onClick={handleFlip}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
