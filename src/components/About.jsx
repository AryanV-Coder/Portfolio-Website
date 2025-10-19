import React from 'react';
import SkillsOrbit from './SkillsOrbit';

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-secondary"
    >
      <div className="max-w-7xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-text-secondary text-lg leading-relaxed max-w-5xl">
          <p className="animate-fade-in-up">
            My journey into software development started with a fascination for technology and its power 
            to transform lives. As a Computer Science student at <strong className="text-saffron">JIIT Noida</strong> (2024–28), 
            I'm not just learning to code—I'm learning to create systems that think, automate, and make a difference.
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            What drives me? <strong className="text-saffron">Building intelligent systems that interact, automate, and improve lives.</strong> 
            I'm constantly experimenting with AI agents, automation frameworks, and cutting-edge APIs. From FastAPI backends 
            to Flutter mobile apps, I love crafting solutions that are both powerful and user-friendly.
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm on a mission to leverage technology for <strong className="text-green">India's advancement</strong>—particularly 
            in defense and wellness sectors. Every project I build is a step toward that vision: code that serves the nation, 
            innovations that empower people, and systems that make the future brighter. 🇮🇳
          </p>
        </div>

        {/* Core Philosophies */}
        <div className="mt-16 pt-8 border-t border-dark-tertiary max-w-5xl">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">
            My Core <span className="gradient-text">Philosophies</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-card p-6 rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    AI-First Thinking
                  </h4>
                  <p className="text-base text-text-secondary">
                    Every problem is an opportunity to leverage AI. I build systems that learn, 
                    adapt, and make intelligent decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🇮🇳</div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Code for the Nation
                  </h4>
                  <p className="text-base text-text-secondary">
                    Technology for India's advancement. Building solutions that strengthen 
                    defense capabilities and improve public wellness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Automation First
                  </h4>
                  <p className="text-base text-text-secondary">
                    Why do manually what can be automated? I create systems that work 
                    smarter, not harder—freeing humans for creative work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card p-6 rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔬</div>
                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Experiment & Innovate
                  </h4>
                  <p className="text-base text-text-secondary">
                    Constantly experimenting with new technologies, APIs, and hardware 
                    integrations to push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section with Rotating Orbit */}
        <div className="mt-16 pt-8 border-t border-dark-tertiary">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h3>
            <p className="text-text-secondary text-lg">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
            {/* Left - Rotating Skills Orbit */}
            <div className="flex-shrink-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-saffron/20 via-green/20 to-saffron/20 rounded-full blur-2xl opacity-50"></div>
              <SkillsOrbit />
            </div>

            {/* Right - Skills Categories */}
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                {/* Languages */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-saffron to-saffron/50 rounded-full"></div>
                    <h4 className="text-xl font-bold text-saffron">Languages</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-saffron/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Python', icon: '🐍' },
                      { name: 'Java', icon: '☕' },
                      { name: 'Dart', icon: '🎯' },
                      { name: 'C', icon: '©️' },
                      { name: 'C++', icon: '⚡' }
                    ].map((skill, index) => (
                      <div 
                        key={index}
                        className="group/card relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative px-5 py-2.5 bg-dark-card border-2 border-saffron/40 rounded-xl text-saffron font-semibold hover:border-saffron hover:shadow-lg hover:shadow-saffron/20 transition-all duration-300 cursor-default flex items-center gap-2 hover:-translate-y-1">
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Tools */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-white to-white/50 rounded-full"></div>
                    <h4 className="text-xl font-bold text-white">Frameworks & Tools</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'FastAPI', icon: '⚡' },
                      { name: 'Flutter', icon: '📱' },
                      { name: 'Spring Boot', icon: '🍃' },
                      { name: 'Streamlit', icon: '🎨' },
                      { name: 'MySQL', icon: '🐬' }
                    ].map((skill, index) => (
                      <div 
                        key={index}
                        className="group/card relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative px-5 py-2.5 bg-dark-card border-2 border-white/40 rounded-xl text-white font-semibold hover:border-white hover:shadow-lg hover:shadow-white/20 transition-all duration-300 cursor-default flex items-center gap-2 hover:-translate-y-1">
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI & APIs */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-green to-green/50 rounded-full"></div>
                    <h4 className="text-xl font-bold text-green">AI & APIs</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-green/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Google Gemini API', icon: '✨' },
                      { name: 'OpenAI API', icon: '🤖' },
                      { name: 'AI Agents', icon: '🧠' },
                      { name: 'ML Models', icon: '🎯' }
                    ].map((skill, index) => (
                      <div 
                        key={index}
                        className="group/card relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative px-5 py-2.5 bg-dark-card border-2 border-green/40 rounded-xl text-green font-semibold hover:border-green hover:shadow-lg hover:shadow-green/20 transition-all duration-300 cursor-default flex items-center gap-2 hover:-translate-y-1">
                          <span>{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-dark-card border-2 border-saffron/30 rounded-xl p-4 text-center hover:border-saffron transition-all duration-300 group">
                  <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Languages</div>
                </div>
                <div className="bg-dark-card border-2 border-white/30 rounded-xl p-4 text-center hover:border-white transition-all duration-300 group">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Frameworks</div>
                </div>
                <div className="bg-dark-card border-2 border-green/30 rounded-xl p-4 text-center hover:border-green transition-all duration-300 group">
                  <div className="text-3xl font-bold text-green mb-1">4+</div>
                  <div className="text-sm text-text-secondary">AI Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
