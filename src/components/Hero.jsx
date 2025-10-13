import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-dark-primary px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 animate-fade-in">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-saffron via-green to-saffron p-1 shadow-2xl shadow-saffron/20">
            <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center overflow-hidden border-4 border-saffron/50">
              {/* 
                TODO: Replace this placeholder with your actual photo
                Add your image to /src/assets/profile.jpg and import it at the top:
                import profileImage from '../assets/profile.jpg';
                Then replace the div below with: <img src={profileImage} alt="Aryan Varshney" className="w-full h-full object-cover" />
              */}
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text">
                AV
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-text-primary">
            Hi 👋, I'm <span className="gradient-text">Aryan Varshney</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-saffron font-semibold mb-6">
            🚀 AI Tools Creator | FastAPI & Flutter Dev | B.Tech CSE @ JIIT 🇮🇳
          </p>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
            I love building intelligent systems that <strong className="text-text-primary">interact, automate, and improve lives</strong>. 
            Currently exploring <strong className="text-text-primary">AI agents, automation, FastAPI, Flutter</strong>, and <strong className="text-text-primary">AI APIs</strong>. 
            Mission-driven to use tech for <strong className="text-saffron">India's advancement</strong> in defense and wellness. 
            Constantly experimenting with <strong className="text-text-primary">AI, ML, automation, and hardware integration</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-saffron text-text-dark font-semibold rounded-lg hover:bg-green hover:text-text-primary transition-all duration-300 btn-glow shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-saffron text-saffron font-semibold rounded-lg hover:bg-saffron hover:text-text-dark transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce hidden md:block">
            <svg 
              className="w-6 h-6 mx-auto md:mx-0 text-saffron" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
