import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'AryanV-Coder';
  // GitHub Personal Access Token from environment variable
  // Add your token to the .env file: REACT_APP_GITHUB_TOKEN=your_token_here
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '';

  // Function to fetch README content for a repository
  const fetchReadmeContent = React.useCallback(async (repoName) => {
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
  }, [GITHUB_TOKEN, GITHUB_USERNAME]);

  // Function to generate catchy rhyming description from README content
  const generateCatchyDescription = (readmeContent, repoName, language) => {
    if (!readmeContent) return null;

    // Extract key information from README
    let text = readmeContent.toLowerCase();
    
    // Detect project type and purpose based on README content
    const isAPI = text.includes('api') || text.includes('backend') || text.includes('fastapi') || text.includes('rest');
    const isApp = text.includes('app') || text.includes('application') || text.includes('flutter') || text.includes('mobile');
    const isAI = text.includes('ai') || text.includes('machine learning') || text.includes('ml') || text.includes('gemini') || text.includes('openai') || text.includes('intelligent');
    const isAutomation = text.includes('automat') || text.includes('bot') || text.includes('agent') || text.includes('schedule');
    const isWeb = text.includes('web') || text.includes('website') || text.includes('react') || text.includes('frontend');
    const isData = text.includes('data') || text.includes('database') || text.includes('analytics') || text.includes('visualization');
    const isTool = text.includes('tool') || text.includes('utility') || text.includes('helper') || text.includes('generator');
    const isChat = text.includes('chat') || text.includes('conversation') || text.includes('message');
    const isGame = text.includes('game') || text.includes('play') || text.includes('puzzle');
    const isSecurity = text.includes('security') || text.includes('encrypt') || text.includes('auth') || text.includes('secure');
    const isEducation = text.includes('learn') || text.includes('tutorial') || text.includes('education') || text.includes('teach');
    const isHealth = text.includes('health') || text.includes('fitness') || text.includes('medical') || text.includes('wellness');
    const isFinance = text.includes('finance') || text.includes('money') || text.includes('payment') || text.includes('banking');
    const isProductivity = text.includes('productivity') || text.includes('organize') || text.includes('manage') || text.includes('tracker');
    
    // Generate creative rhyming descriptions based on project purpose
    if (isAI && isChat) {
      return `Talk to AI that understands your need, intelligent conversations at lightning speed! 💬🤖`;
    } else if (isAI && isData) {
      return `Turning data into wisdom profound, where artificial intelligence and insights are found! 📊🧠`;
    } else if (isAI && isAutomation) {
      return `Smart automation that thinks and acts, handling complex workflows—those are the facts! 🤖⚡`;
    } else if (isAI) {
      return `Intelligence that learns and grows each day, solving problems in an innovative way! 🧠✨`;
    } else if (isAutomation && isProductivity) {
      return `Streamline your workflow, save precious time, efficiency and automation in perfect rhyme! ⏰🚀`;
    } else if (isAutomation) {
      return `Repetitive tasks? Consider them done, automation magic—now work is fun! 🔄⚡`;
    } else if (isChat || (isWeb && text.includes('social'))) {
      return `Connect and communicate with ease and grace, bringing people together in one special place! 💬🌐`;
    } else if (isGame) {
      return `Fun and challenges that make you think, entertainment and gaming in perfect sync! 🎮🎯`;
    } else if (isHealth || (isWeb && text.includes('wellness'))) {
      return `Your health companion, always by your side, tracking wellness with digital pride! 💪❤️`;
    } else if (isEducation) {
      return `Knowledge shared and skills you gain, learning made easy—that's the main aim! 📚🎓`;
    } else if (isSecurity) {
      return `Keeping your data safe and sound, where security and peace of mind are found! 🔒🛡️`;
    } else if (isFinance || text.includes('expense')) {
      return `Managing money smart and wise, financial clarity before your eyes! ��`;
    } else if (isProductivity && isTool) {
      return `Boost your output, work with flair, productivity tools beyond compare! 📋⚡`;
    } else if (isData && text.includes('visual')) {
      return `Complex data made simple and clear, insights you need are always near! ��️`;
    } else if (isAPI && text.includes('service')) {
      return `Connecting systems far and wide, seamless integration with tech as guide! 🔌🌐`;
    } else if (isAPI) {
      return `Services that power apps you love, delivering data from the cloud above! ☁️⚡`;
    } else if (isApp && text.includes('social')) {
      return `Community building at its best, connecting hearts from east to west! 👥💙`;
    } else if (isApp && text.includes('shopping')) {
      return `Shop with ease, find what you seek, great deals and treasures every week! 🛍️✨`;
    } else if (isApp) {
      return `Experience crafted with care and thought, solutions for problems you've long sought! 📱💫`;
    } else if (isWeb && text.includes('portfolio')) {
      return `Showcase your talent, let your work shine bright, a digital stage set just right! �💼`;
    } else if (isWeb && text.includes('blog')) {
      return `Share your stories, thoughts, and views, a platform where ideas you can choose! ✍️📰`;
    } else if (isWeb) {
      return `Browse and explore with speed and style, digital experiences that make you smile! 🌐😊`;
    } else if (isTool && text.includes('convert')) {
      return `Transform your files with just one click, conversion made simple, easy, and quick! ��`;
    } else if (isTool) {
      return `Solving problems both big and small, handy utilities that do it all! 🛠️🎯`;
    } else if (text.includes('dashboard')) {
      return `All your metrics in one view, insights and analytics just for you! 📈👀`;
    } else if (text.includes('search')) {
      return `Find what you need in record time, search made powerful and sublime! �⚡`;
    } else if (text.includes('real-time') || text.includes('live')) {
      return `Updates streaming live and fast, real-time magic unsurpassed! ⚡🔴`;
    } else if (text.includes('collaborate')) {
      return `Work together, create as one, collaboration where great things get done! 🤝🚀`;
    } else {
      return `Innovation meets purpose true, solving challenges just for you! �🎯`;
    }
  };

  // Define featured projects with custom descriptions and live demo links
  const FEATURED_PROJECTS = {
    'SpyAI': {
      description: 'Intelligent surveillance system capturing and transcribing audio with AI-powered multi-language analysis and natural language querying! 🕵️‍♂️🤖',
      liveDemo: null
    },
    'AICalling': {
      description: 'AI phone bot that talks to you over calls using Twilio and Gemini - make instant voice calls, get AI responses, and have continuous conversations! 📞🤖',
      liveDemo: null
    },
    'Moodify-1.0': {
      description: 'AI-powered mood-based music recommendation system that analyzes your facial expressions and recommends personalized songs matching your emotional state! 🎧😊',
      liveDemo: 'https://moodify-aat.vercel.app/'
    },
    'AI-Powered-Commenter': {
      description: 'Select your mood, upload a photo, and get AI-generated witty comments instantly - built with Streamlit and Gemini API for fun social interactions! 💬📸',
      liveDemo: 'https://ai-powered-commenter.streamlit.app/'
    },
    'MoodGenie': {
      description: 'Your emotional AI companion Flutter app with AI-generated mood responses, auto-generated summaries, and local Hive storage for private journaling! 🌈💭',
      liveDemo: 'https://drive.google.com/file/d/1bS43TN5nnJhanVEdiFTTMrBMrcnqcFUS/view?usp=sharing'
    },
    'FlavorMatch': {
      description: 'Family food recommendation system tracking preferences and suggesting personalized dishes - solving "What\'s for dinner?" with smart database insights! 🍽️👨‍👩‍👧‍👦',
      liveDemo: 'https://flavor-match-aat.vercel.app'
    },
    'SleepDebtPredictor': {
      description: 'Web system using Linear Regression and Gemini AI to analyze facial fatigue indicators and predict sleep hours needed to recover from sleep debt! 😴📊',
      liveDemo: 'https://sleep-debt-predictor.vercel.app/'
    }
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

        // Filter to show only featured projects in the specified order
        const featuredProjectNames = Object.keys(FEATURED_PROJECTS);
        const filteredRepos = response.data
          .filter(repo => featuredProjectNames.includes(repo.name))
          .sort((a, b) => featuredProjectNames.indexOf(a.name) - featuredProjectNames.indexOf(b.name));

        // Enhance repos with custom descriptions and live demo links
        const reposWithCustomData = filteredRepos.map((repo) => {
          const projectData = FEATURED_PROJECTS[repo.name];
          return {
            ...repo,
            catchyDescription: projectData.description,
            homepage: projectData.liveDemo || repo.homepage
          };
        });

        setRepos(reposWithCustomData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchRepos();
  }, [GITHUB_USERNAME, GITHUB_TOKEN]);

  // Generate description with priority: catchy description from README > repo description > generic fallback
  const generateDescription = (repo) => {
    // First priority: Catchy description based on README analysis
    if (repo.catchyDescription) {
      return repo.catchyDescription;
    }

    // Second priority: Repository description from GitHub
    if (repo.description && repo.description.length > 10) {
      return repo.description;
    }

    // Fallback: Generate generic catchy rhyming descriptions based on language
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
          <div className="projects-grid">
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
