import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO: Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
  // Example: const GITHUB_USERNAME = 'AryanV-Coder';
  const GITHUB_USERNAME = 'AryanV-Coder';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch repositories from GitHub API
        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            params: {
              sort: 'updated',
              per_page: 100,
              type: 'owner'
            }
          }
        );

        // Filter out forked repos and sort by stars
        const filteredRepos = response.data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filteredRepos);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [GITHUB_USERNAME]);

  // Catchy descriptions generator based on repo characteristics
  const generateDescription = (repo) => {
    // If repo has a description, use it; otherwise generate a catchy one
    if (repo.description && repo.description.length > 10) {
      return repo.description;
    }

    // Generate catchy rhyming descriptions based on language or name
    const language = repo.language || 'Code';
    const name = repo.name.toLowerCase();

    const catchyDescriptions = [
      `${language} magic that's pure delight, turning complex problems into solutions bright! ✨`,
      `Built with ${language} and innovative flair, solving real-world problems with code to spare! 🚀`,
      `Where ${language} meets creativity sublime, crafting elegant solutions one commit at a time! 💎`,
      `Innovation and ${language} in perfect harmony, building the future with technological symphony! 🎵`,
      `${language} powered, community inspired, features that keep developers forever admired! ⭐`,
      `Elegant ${language} architecture that scales with ease, designed to impress and absolutely please! 🎯`,
      `From concept to code with ${language} pride, a project where quality and passion collide! 💪`,
      `${language} brilliance in every single line, transforming ideas into products that shine! ✨`,
    ];

    // Use repo characteristics to pick a description
    const index = (repo.id + repo.stargazers_count) % catchyDescriptions.length;
    return catchyDescriptions[index];
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-primary-dark to-primary-darker"
    >
      <div className="max-w-7xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-teal rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills, creativity, and passion for 
            building meaningful solutions. Each one tells a unique story.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-teal"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center">
            <p className="text-red-400 text-lg">{error}</p>
            <p className="text-text-muted mt-2">
              Make sure to update the GITHUB_USERNAME in Projects.jsx
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.length > 0 ? (
              repos.map((repo, index) => (
                <ProjectCard 
                  key={repo.id}
                  name={repo.name}
                  description={generateDescription(repo)}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  url={repo.html_url}
                  homepage={repo.homepage}
                  topics={repo.topics || []}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-text-secondary text-xl">
                  No public repositories found. Start building something amazing! 🚀
                </p>
              </div>
            )}
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="mt-16 text-center">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-light border-2 border-accent-teal text-accent-teal font-semibold rounded-lg hover:bg-accent-teal hover:text-primary-dark transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
