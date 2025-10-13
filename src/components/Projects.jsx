import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'AryanV-Coder';
  // GitHub Personal Access Token from environment variable
  // Add your token to the .env file: REACT_APP_GITHUB_TOKEN=your_token_here
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '';

  // Function to fetch README content for a repository
  const fetchReadmeContent = async (repoName) => {
    try {
      const headers = {
        Accept: 'application/vnd.github.v3.raw'
      };
      
      // Add authorization header if token is provided
      if (GITHUB_TOKEN) {
        headers.Authorization = `token ${GITHUB_TOKEN}`;
      }

      const response = await axios.get(
        `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/readme`,
        { headers }
      );
      return response.data;
    } catch (err) {
      console.log(`No README found for ${repoName}`);
      return null;
    }
  };

  // Function to generate a concise summary from README content
  const generateSummaryFromReadme = (readmeContent, repoName) => {
    if (!readmeContent) return null;

    // Remove markdown formatting and extract meaningful content
    let text = readmeContent
      .replace(/#{1,6}\s/g, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
      .replace(/[*_`]/g, '') // Remove formatting
      .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // Remove images
      .split('\n')
      .filter(line => line.trim().length > 20) // Keep only substantial lines
      .slice(0, 5) // Take first 5 meaningful lines
      .join(' ');

    // Extract first 2-3 sentences or about 200 characters
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    let summary = sentences.slice(0, 2).join(' ').trim();
    
    if (summary.length > 200) {
      summary = summary.substring(0, 200) + '...';
    } else if (summary.length < 50 && text.length > 0) {
      summary = text.substring(0, 200) + '...';
    }

    return summary || null;
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch repositories from GitHub API
        const headers = {};
        if (GITHUB_TOKEN) {
          headers.Authorization = `token ${GITHUB_TOKEN}`;
        }

        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            headers,
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

        // Fetch README for each repository and generate summaries
        const reposWithReadme = await Promise.all(
          filteredRepos.map(async (repo) => {
            const readmeContent = await fetchReadmeContent(repo.name);
            const readmeSummary = generateSummaryFromReadme(readmeContent, repo.name);
            
            return {
              ...repo,
              readmeSummary: readmeSummary
            };
          })
        );

        setRepos(reposWithReadme);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [GITHUB_USERNAME]);

  // Generate description with priority: README summary > repo description > catchy fallback
  const generateDescription = (repo) => {
    // First priority: README summary
    if (repo.readmeSummary && repo.readmeSummary.length > 10) {
      return repo.readmeSummary;
    }

    // Second priority: Repository description
    if (repo.description && repo.description.length > 10) {
      return repo.description;
    }

    // Fallback: Generate catchy rhyming descriptions based on language
    const language = repo.language || 'Code';

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
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-primary"
    >
      <div className="max-w-7xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of AI-powered tools and intelligent systems that automate, interact, 
            and improve lives. Each project represents innovation with purpose. 🚀
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-dark-card border-2 border-saffron text-saffron font-semibold rounded-lg hover:bg-saffron hover:text-text-dark transition-all duration-300 shadow-lg btn-glow"
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
