import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-primary-darker to-primary-dark"
    >
      <div className="max-w-5xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent-teal rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-text-secondary text-lg leading-relaxed">
          <p className="animate-fade-in-up">
            My journey into software development started not with a keyboard, but with curiosity. 
            As a kid, I was fascinated by how things worked—taking apart gadgets, sketching 
            impossible inventions, and wondering what made the digital world tick. That curiosity 
            evolved into a passion when I wrote my first line of code and watched it come to life 
            on the screen. It was magic, and I was hooked.
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Over the years, I've discovered that great software isn't just about solving problems—it's 
            about crafting experiences that feel natural, intuitive, and delightful. I believe in the 
            power of clean, maintainable code that tells a story. Every function has a purpose, every 
            component serves a vision, and every line matters.
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            What drives me? It's the challenge of turning complex problems into elegant solutions. 
            Whether I'm building responsive web applications, architecting scalable systems, or 
            diving into the latest technologies, I approach each project with the same mindset: 
            attention to detail, empathy for the end user, and a commitment to excellence.
          </p>

          {/* Core Philosophies */}
          <div className="mt-12 pt-8 border-t border-primary-light">
            <h3 className="text-2xl font-semibold text-text-primary mb-6 gradient-text">
              My Core Philosophies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-light p-6 rounded-lg border border-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-accent-teal text-3xl">💡</div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      Simplicity Over Complexity
                    </h4>
                    <p className="text-base">
                      The best solutions are often the simplest. I strive to write code that's 
                      easy to understand, maintain, and scale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light p-6 rounded-lg border border-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-accent-teal text-3xl">🎨</div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      Design Meets Functionality
                    </h4>
                    <p className="text-base">
                      Beautiful interfaces and robust backends aren't mutually exclusive. 
                      I believe in the harmony of aesthetics and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light p-6 rounded-lg border border-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-accent-teal text-3xl">🚀</div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      Continuous Learning
                    </h4>
                    <p className="text-base">
                      Technology evolves rapidly, and so do I. I'm always exploring new tools, 
                      frameworks, and methodologies to stay ahead of the curve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light p-6 rounded-lg border border-accent-teal/20 hover:border-accent-teal/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-accent-teal text-3xl">🤝</div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary mb-2">
                      User-Centric Approach
                    </h4>
                    <p className="text-base">
                      Every feature I build starts with a simple question: "How will this 
                      improve the user's experience?" Empathy drives innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 
                'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker',
                'REST APIs', 'GraphQL', 'AWS', 'Next.js', 'Express.js'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary-light border border-accent-teal/30 rounded-full text-accent-teal-light hover:bg-accent-teal/10 hover:border-accent-teal transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
