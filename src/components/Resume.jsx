import React, { useState } from 'react';

const Resume = () => {
  const [isHovering, setIsHovering] = useState(false);

  // You'll add your resume PDF to /public/resume.pdf
  const resumePath = '/resume.pdf';

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Aryan_Varshney_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open resume in new tab
    window.open(resumePath, '_blank');
  };

  return (
    <section 
      id="resume" 
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-primary flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my skills, experience, and journey in tech! 📄
          </p>
        </div>

        {/* Interactive Resume Card */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Resume Display */}
          <div className="bg-dark-card border-2 border-saffron/30 rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-saffron/20 transition-all duration-500 transform hover:-translate-y-2">
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-saffron rounded-tl-2xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-green rounded-br-2xl opacity-50"></div>

            {/* Resume Icon with Animation */}
            <div className="flex justify-center mb-8">
              <div className={`relative transition-all duration-500 ${isHovering ? 'scale-110 rotate-3' : 'scale-100'}`}>
                <div className="w-32 h-40 bg-gradient-to-br from-saffron/20 to-green/20 rounded-lg border-2 border-saffron/50 flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-16 h-16 text-saffron" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-saffron text-text-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                  PDF
                </div>
              </div>
            </div>

            {/* Resume Details */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Aryan Varshney
              </h3>
              <p className="text-saffron font-semibold mb-4">
                AI Tools Creator | FastAPI & Flutter Developer
              </p>
              <p className="text-text-secondary max-w-xl mx-auto">
                B.Tech CSE @ JIIT Noida | Building intelligent systems for India's advancement 🇮🇳
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-dark-secondary border border-saffron/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-text-primary font-semibold">Education</p>
                <p className="text-text-secondary text-sm">JIIT Noida</p>
              </div>
              <div className="bg-dark-secondary border border-saffron/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">💼</div>
                <p className="text-text-primary font-semibold">Experience</p>
                <p className="text-text-secondary text-sm">Multiple Projects</p>
              </div>
              <div className="bg-dark-secondary border border-saffron/30 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🛠️</div>
                <p className="text-text-primary font-semibold">Skills</p>
                <p className="text-text-secondary text-sm">AI, FastAPI, Flutter</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleView}
                className="group px-8 py-4 bg-dark-secondary border-2 border-saffron text-saffron font-semibold rounded-lg hover:bg-saffron hover:text-text-dark transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Resume
              </button>
              
              <button
                onClick={handleDownload}
                className="group px-8 py-4 bg-saffron text-text-dark font-semibold rounded-lg hover:bg-green transition-all duration-300 btn-glow shadow-lg flex items-center justify-center gap-3"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>

            {/* File Info */}
            <div className="mt-6 text-center text-text-secondary text-sm">
              <p>📄 Format: PDF | 📏 Size: ~1MB | 🔄 Last Updated: October 2025</p>
            </div>
          </div>

          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute top-1/4 left-10 w-32 h-32 border-4 border-saffron rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-10 w-24 h-24 border-4 border-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Want to know more? Let's connect! 🤝
          </p>
          <a 
            href="#contact"
            className="inline-block px-6 py-2 border-2 border-saffron/50 text-saffron rounded-lg hover:bg-saffron/10 transition-all duration-300"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
