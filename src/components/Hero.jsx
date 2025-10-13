import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 animate-fade-in">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-teal to-accent-teal-dark p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Aryan Varshney</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-accent-teal-light font-medium mb-6">
            Software Engineer & Creative Coder
          </p>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
            I transform ideas into elegant digital experiences. With a passion for clean code 
            and intuitive design, I build applications that don't just work—they inspire. 
            From crafting seamless user interfaces to architecting robust backend systems, 
            I thrive at the intersection of creativity and technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-accent-teal text-primary-dark font-semibold rounded-lg hover:bg-accent-teal-light transition-all duration-300 btn-glow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-accent-teal text-accent-teal font-semibold rounded-lg hover:bg-accent-teal hover:text-primary-dark transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce hidden md:block">
            <svg 
              className="w-6 h-6 mx-auto md:mx-0 text-accent-teal" 
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
