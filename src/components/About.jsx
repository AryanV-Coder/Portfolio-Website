import React from 'react';
import SkillsOrbit from './SkillsOrbit';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-secondary"
    >
      <div className="max-w-7xl mx-auto fade-in-section">
        {/* About Me Enhanced Design */}
        <div className="relative max-w-6xl mx-auto mb-16">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-saffron/5 via-green/5 to-saffron/5 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-dark-card via-dark-secondary to-dark-card rounded-2xl p-8 border border-saffron/30 backdrop-blur-sm">
            {/* Section Header with Enhanced Styling */}
            <div className="text-center mb-10 mt-4">
              <div className="inline-block relative">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-3">
                  About <span className="gradient-text">Me</span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-saffron to-green rounded-full"></div>
              </div>
            </div>

            {/* Story Content with Cards */}
            <div className="grid gap-6 max-w-4xl mx-auto mt-12 mb-10">
              {/* Journey Card */}
              <div className="group relative overflow-hidden bg-gradient-to-r from-saffron/10 to-transparent p-6 rounded-xl border-l-4 border-saffron hover:from-saffron/20 transition-all duration-300">
                <p className="text-text-secondary leading-relaxed animate-fade-in-up">
                  My journey into software development started with a fascination for technology and its power
                  to transform lives. As a Computer Science student at <strong className="text-saffron">Jaypee Institute of Information Technology (JIIT), Noida</strong> (2024–28),
                  I'm not just learning to code, I'm learning to create systems that think, automate, and make a difference.
                </p>
              </div>

              {/* Passion Card */}
              <div className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-transparent p-6 rounded-xl border-l-4 border-blue-500 hover:from-blue-500/20 transition-all duration-300">
                <p className="text-text-secondary leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  What drives me? <strong className="text-saffron">Building intelligent systems that interact, automate, and improve lives. </strong>
                  I'm constantly experimenting with AI agents, automation frameworks, and cutting-edge APIs. From FastAPI backends
                  to Flutter mobile apps, I love crafting solutions that are both powerful and user-friendly.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group relative overflow-hidden bg-gradient-to-r from-green/10 to-transparent p-6 rounded-xl border-l-4 border-green hover:from-green/20 transition-all duration-300">
                <p className="text-text-secondary leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  I'm on a mission to leverage technology for <strong className="text-green">India's advancement</strong>, particularly
                  in defense and wellness sectors. Every project I build is a step toward that vision: code that serves the nation,
                  innovations that empower people, and systems that make the future brighter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-dark-tertiary mb-16 max-w-5xl mx-auto"></div>

        {/* Core Philosophies */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              My Core <span className="gradient-text">Philosophies</span>
            </h3>
            <div className="w-24 h-1 bg-saffron rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-saffron/10 via-transparent to-saffron/5 p-6 hover:from-saffron/20 hover:to-saffron/10 transition-all duration-300 border border-saffron/20 hover:border-saffron/40">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-saffron/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">🧠</div>
                <h4 className="text-lg font-bold text-text-primary">AI-First Thinking</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every problem is an opportunity to leverage AI. I build systems that learn, adapt, and make intelligent decisions.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green/10 via-transparent to-green/5 p-6 hover:from-green/20 hover:to-green/10 transition-all duration-300 border border-green/20 hover:border-green/40">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">🇮🇳</div>
                <h4 className="text-lg font-bold text-text-primary">Code for the Nation</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Technology for India's advancement. Building solutions that strengthen defense capabilities and improve public wellness.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5 p-6 hover:from-yellow-500/20 hover:to-yellow-500/10 transition-all duration-300 border border-yellow-500/20 hover:border-yellow-500/40">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h4 className="text-lg font-bold text-text-primary">Automation First</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Why do manually what can be automated? I create systems that work smarter, not harder—freeing humans for creative work.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 p-6 hover:from-blue-500/20 hover:to-blue-500/10 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">🔬</div>
                <h4 className="text-lg font-bold text-text-primary">Experiment & Innovate</h4>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Constantly experimenting with new technologies, APIs, and hardware integrations to push the boundaries of what's possible.
              </p>
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
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-saffron/20 to-saffron/5 border border-saffron/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-saffron tracking-wide">LANGUAGES</h4>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-saffron/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Python' },
                      { name: 'Java' },
                      { name: 'Dart' },
                      { name: 'C' },
                      { name: 'C++' }
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="group/card relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-saffron via-saffron-light to-saffron opacity-0 group-hover/card:opacity-20 rounded-lg blur transition-opacity duration-300"></div>
                        <span className="relative block px-5 py-2.5 bg-dark-card border border-saffron/30 rounded-lg text-text-primary font-medium hover:border-saffron hover:text-saffron hover:shadow-lg hover:shadow-saffron/10 transition-all duration-300 cursor-default hover:-translate-y-1">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-wide">FRAMEWORKS</h4>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Django' },
                      { name: 'FastAPI' },
                      { name: 'Flask' },
                      { name: 'Flutter' },
                      { name: 'Spring Boot' }
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="group/card relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/card:opacity-100 rounded-lg blur transition-opacity duration-300"></div>
                        <span className="relative block px-5 py-2.5 bg-dark-card border border-white/30 rounded-lg text-text-primary font-medium hover:border-white hover:text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-default hover:-translate-y-1">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-400/5 border border-blue-400/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-blue-400 tracking-wide">DATABASES</h4>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-400/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'PostgreSQL' },
                      { name: 'MongoDB' },
                      { name: 'MySQL' }
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="group/card relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-400/10 opacity-0 group-hover/card:opacity-100 rounded-lg blur transition-opacity duration-300"></div>
                        <span className="relative block px-5 py-2.5 bg-dark-card border border-blue-400/30 rounded-lg text-text-primary font-medium hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 cursor-default hover:-translate-y-1">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-wide">AI</h4>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Machine Learning' },
                      { name: 'LangChain' },
                      { name: 'LangSmith' },
                      { name: 'LangGraph' },
                      { name: 'CrewAI' },
                      { name: 'RAG' }
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="group/card relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/card:opacity-100 rounded-lg blur transition-opacity duration-300"></div>
                        <span className="relative block px-5 py-2.5 bg-dark-card border border-white/30 rounded-lg text-text-primary font-medium hover:border-white hover:text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-default hover:-translate-y-1">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green/20 to-green/5 border border-green/40 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-green tracking-wide">TOOLS</h4>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-green/30 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'GitHub' },
                      { name: 'n8n' }
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="group/card relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green/20 to-green/10 opacity-0 group-hover/card:opacity-100 rounded-lg blur transition-opacity duration-300"></div>
                        <span className="relative block px-5 py-2.5 bg-dark-card border border-green/30 rounded-lg text-text-primary font-medium hover:border-green hover:text-green hover:shadow-lg hover:shadow-green/10 transition-all duration-300 cursor-default hover:-translate-y-1">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
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
