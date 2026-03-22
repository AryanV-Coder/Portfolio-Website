import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { FaGithub, FaInfoCircle } from 'react-icons/fa';
import './Projects.css';

// Static metadata for the Vayu spotlight card
const VAYU_META = {
  displayName: 'Vayu',
  tagline: 'Interactive Face Recognition Bot',
  catchyDescription: 'Vayu, an interactive face recognition bot that recognizes faces via FAISS embeddings and runs a personalized, streaming voice conversation pipeline (STT → LLM → TTS)',
  highlights: [
    'Built a live multi-threaded pipeline with VAD-based listening, personalized prompting for known identities, and ultra-low-latency streaming audio playback.',
    'Implemented a full face database workflow (embedding extraction → FAISS index → SQLite metadata) with similarity-threshold based recognition + “Unknown” handling.'
  ],
  techStack: ['Python', 'OpenCV', 'DeepFace (Facenet512)', 'FAISS', 'SQLite', 'Silero VAD', 'Groq LLaMA', 'Sarvam STT/TTS'],
  demoVideos: [
    { label: 'Calm Environment Test', url: 'https://drive.google.com/file/d/1dT3Uq6kF0FoOJfOEcv2FhiLX71rFM6U5/view?usp=sharing' },
    { label: 'Fest Chaos Environment Test', url: 'https://drive.google.com/file/d/1HBoQsEX2dF1HfN66-JeAyLnEpBiZ2EtA/view' },
  ],
  linkedIn: 'https://www.linkedin.com/posts/aryan-varshney-392446310_sarvamai-deeplearning-computervision-activity-7440742289041203200-P_xU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8WXp4BgI2VsM4AocmLbTP2t3RwvE585ao',
  liveDemo: null,
};

// ── Vayu Spotlight Card ─────────────────────────────────────────────────────
const VayuSpotlightCard = ({ repo, githubUsername }) => {
  const [flipped, setFlipped] = useState(false);
  const AMBER = '#F59E0B';

  const stopIfLink = (e) => {
    if (e.target.closest('button, a')) return;
    setFlipped(f => !f);
  };

  return (
    <div className="vayu-flip-wrap mb-10">
      <div className={`vayu-flip-inner ${flipped ? 'vayu-flipped' : ''}`}>

        {/* FRONT */}
        <div className="vayu-face vayu-front" onClick={stopIfLink}>
          {/* Badge row */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: `${AMBER}18`, border: `1px solid ${AMBER}60`, color: AMBER }}>
              ✶ Spotlight
            </span>
            <span className="text-sm font-semibold" style={{ color: AMBER }}>🌬️ Vayu</span>
          </div>

          {/* Image left + info right */}
          <div className="flex gap-4 mb-4">
            {/* OG image — h-32 matching other project cards */}
            <div className="flex-shrink-0 rounded-xl overflow-hidden" style={{ width: '192px', height: '128px', border: `1px solid ${AMBER}30`, background: `${AMBER}10` }}>
              <img
                src={`https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}`}
                alt="Vayu"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hidden w-full h-full items-center justify-center text-3xl">🌬️</div>
            </div>

            <div className="flex-1 min-w-0 text-left">
              <h3 className="text-lg font-bold text-white leading-tight mb-1">
                Vayu — Interactive Face Recognition Bot
              </h3>
              {repo.language && (
                <div className="flex items-center gap-1.5 text-sm mb-2" style={{ color: AMBER }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: AMBER }}></span>
                  {repo.language}
                </div>
              )}
              <p className="text-gray-400 text-sm leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {VAYU_META.catchyDescription}
              </p>
            </div>
          </div>

          {/* Stats + Demo links row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {repo.stargazers_count > 0 && (
              <span className="flex items-center gap-1 text-sm" style={{ color: AMBER }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {repo.stargazers_count}
              </span>
            )}
            {/* Demo video links */}
            {VAYU_META.demoVideos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs px-2 py-1 rounded-md transition-all duration-200"
                style={{ border: `1px solid ${AMBER}40`, color: AMBER, backgroundColor: `${AMBER}10` }}>
                ▶ {v.label}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => setFlipped(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              style={{ border: `1px solid ${AMBER}50`, color: AMBER, backgroundColor: `${AMBER}12` }}
            >
              <FaInfoCircle className="w-4 h-4" /> Details
            </button>
            <a
              href={repo.html_url} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 rounded-lg border border-gray-600 text-gray-400 text-sm hover:border-gray-400 hover:text-gray-200 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* BACK */}
        <div className="vayu-face vayu-back" onClick={stopIfLink}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-base" style={{ backgroundColor: `${AMBER}25` }}>🌬️</div>
              <h3 className="text-lg font-bold text-white">Vayu</h3>
            </div>
            <button onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
              className="p-1.5 rounded-full hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Highlights */}
          <div className="mb-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Key Highlights</h4>
            <ul className="space-y-1.5">
              {VAYU_META.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: AMBER }}>▸</span>{h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {VAYU_META.techStack.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 text-xs rounded-full"
                  style={{ border: `1px solid ${AMBER}40`, backgroundColor: `${AMBER}10`, color: AMBER }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Demo videos + LinkedIn */}
          <div className="mb-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Demo Videos</h4>
            <div className="flex flex-wrap gap-2">
              {VAYU_META.demoVideos.map((v, i) => (
                <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{ border: `1px solid ${AMBER}40`, color: AMBER, backgroundColor: `${AMBER}10` }}>
                  ▶ {v.label}
                </a>
              ))}
              <a href={VAYU_META.linkedIn} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-blue-400 transition-all duration-200"
                style={{ border: '1px solid rgba(96,165,250,0.4)', backgroundColor: 'rgba(96,165,250,0.08)' }}>
                in LinkedIn Post
              </a>
            </div>
          </div>

          {/* GitHub link */}
          <div className="flex gap-3 mt-auto">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              style={{ border: `1px solid ${AMBER}50`, color: AMBER, backgroundColor: `${AMBER}10` }}>
              <FaGithub className="w-4 h-4" /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// ───────────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [spotlightRepo, setSpotlightRepo] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'AryanV-Coder';
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '';

  // Vayu is first — fetched normally, then split off as spotlight
  const FEATURED_PROJECTS = useMemo(() => ({
    'Vayu-InteractiveFaceRecognitionBot': {
      description: VAYU_META.catchyDescription,
      liveDemo: VAYU_META.liveDemo,
    },
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
    'AI-Powered-Commentor': {
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
    },
    'SenaSuraksha': {
      description: 'Innovative security and safety solution empowering protection with smart technology for a safer tomorrow! 🛡️🚨',
      liveDemo: null
    }
  }), []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const headers = {};
        if (GITHUB_TOKEN) headers.Authorization = `token ${GITHUB_TOKEN}`;

        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          { headers, params: { sort: 'updated', per_page: 100, type: 'owner' } }
        );

        const featuredProjectNames = Object.keys(FEATURED_PROJECTS);
        const filtered = response.data
          .filter(r => featuredProjectNames.includes(r.name))
          .sort((a, b) => featuredProjectNames.indexOf(a.name) - featuredProjectNames.indexOf(b.name))
          .map(repo => ({
            ...repo,
            catchyDescription: FEATURED_PROJECTS[repo.name].description,
            homepage: FEATURED_PROJECTS[repo.name].liveDemo || repo.homepage
          }));

        if (filtered.length > 0 && filtered[0].name === 'Vayu-InteractiveFaceRecognitionBot') {
          setSpotlightRepo(filtered[0]);
          setRepos(filtered.slice(1));
        } else {
          setRepos(filtered);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
      }
    };
    fetchRepos();
  }, [GITHUB_USERNAME, GITHUB_TOKEN, FEATURED_PROJECTS]);

  const generateDescription = (repo) => {
    if (repo.catchyDescription) return repo.catchyDescription;
    if (repo.description && repo.description.length > 10) return repo.description;
    const language = repo.language || 'Code';
    const opts = [
      `${language} magic that's pure delight, turning complex problems into solutions bright! ✨`,
      `Built with ${language} and innovative flair, solving real-world problems with code to spare! 🚀`,
      `Where ${language} meets creativity sublime, crafting elegant solutions one commit at a time! 💎`,
    ];
    return opts[(repo.id + repo.stargazers_count) % opts.length];
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 bg-dark-primary">
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

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-teal"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 text-center mb-8">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        )}

        {/* Vayu Spotlight */}
        {!loading && spotlightRepo && (
          <VayuSpotlightCard repo={spotlightRepo} githubUsername={GITHUB_USERNAME} />
        )}

        {/* Regular Grid */}
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
                <p className="text-text-secondary text-xl">No public repositories found. 🚀</p>
              </div>
            )}
          </div>
        )}

        {/* GitHub Profile Link */}
        <div className="mt-16 text-center">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank" rel="noopener noreferrer"
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
