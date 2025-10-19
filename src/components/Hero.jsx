import React from 'react';
import profileImage from '../assets/profile_pic.jpg';

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
              <img 
                src={profileImage} 
                alt="Aryan Varshney" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          {/* Greeting & Name */}
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-3 bg-dark-card border border-saffron/20 rounded-full px-5 py-2 shadow-lg">
                <span className="text-3xl animate-bounce">👋</span>
                <span className="text-text-secondary text-base font-medium">Hey, myself</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Aryan</span>
              <br />
              <span className="text-green">Varshney</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start mt-4">
              <span className="px-4 py-2 bg-saffron/10 border border-saffron/30 rounded-lg text-saffron font-semibold text-lg">
                AI/ML Engineer
              </span>
              <span className="text-text-muted text-lg">•</span>
              <span className="px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white font-semibold text-lg">
                AI Generalist
              </span>
              <span className="text-text-muted text-lg">•</span>
              <span className="px-4 py-2 bg-green/10 border border-green/30 rounded-lg text-green font-semibold text-lg">
                Full Stack Mobile App Developer
              </span>
              <span className="text-text-muted text-lg hidden sm:inline">•</span>
              <span className="text-text-secondary text-lg">
                B.Tech CSE @ <span className="text-green font-semibold">JIIT Noida</span> 🇮🇳
              </span>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8 space-y-4 text-text-secondary">
            <p className="text-lg leading-relaxed max-w-2xl">
              I'm a <span className="text-saffron font-semibold">tech enthusiast</span> who believes AI isn't just about algorithms—
              it's about <span className="text-green font-semibold">solving real problems</span> and making life easier! 🎯
            </p>
            
            <p className="text-lg leading-relaxed max-w-2xl">
              When I'm not coding intelligent systems, you'll find me experimenting with new APIs, 
              automating everything that moves, or dreaming up ways to use technology for 
              <span className="text-saffron font-semibold"> India's growth</span> 🇮🇳. 
            </p>
            
            <p className="text-base leading-relaxed max-w-2xl italic">
              <span className="text-text-primary">"Why do it manually when you can automate it?"</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-saffron text-text-dark font-semibold rounded-lg hover:bg-saffron/90 transition-all duration-300 btn-glow shadow-lg"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
