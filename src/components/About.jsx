import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-6 md:px-12 bg-white"
    >
      <div className="max-w-5xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full"></div>
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-text-primary text-lg leading-relaxed">
          <p className="animate-fade-in-up">
            My journey into software development started with a fascination for technology and its power 
            to transform lives. As a Computer Science student at <strong className="text-navy">JIIT Noida</strong> (2024–28), 
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

          {/* Core Philosophies */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-navy mb-6">
              My Core <span className="gradient-text">Philosophies</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-saffron/10 to-white p-6 rounded-lg border-2 border-saffron/30 hover:border-saffron transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🧠</div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      AI-First Thinking
                    </h4>
                    <p className="text-base text-text-primary">
                      Every problem is an opportunity to leverage AI. I build systems that learn, 
                      adapt, and make intelligent decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green/10 to-white p-6 rounded-lg border-2 border-green/30 hover:border-green transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">�🇳</div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      Code for the Nation
                    </h4>
                    <p className="text-base text-text-primary">
                      Technology for India's advancement. Building solutions that strengthen 
                      defense capabilities and improve public wellness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy/10 to-white p-6 rounded-lg border-2 border-navy/30 hover:border-navy transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      Automation First
                    </h4>
                    <p className="text-base text-text-primary">
                      Why do manually what can be automated? I create systems that work 
                      smarter, not harder—freeing humans for creative work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-saffron/10 to-green/10 p-6 rounded-lg border-2 border-saffron/30 hover:border-green transition-all duration-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🔬</div>
                  <div>
                    <h4 className="text-xl font-semibold text-navy mb-2">
                      Experiment & Innovate
                    </h4>
                    <p className="text-base text-text-primary">
                      Constantly experimenting with new technologies, APIs, and hardware 
                      integrations to push the boundaries of what's possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-navy mb-6">
              🛠️ Tech Stack
            </h3>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-saffron mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'Java', 'Dart', 'C', 'C++'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-saffron/10 border-2 border-saffron/50 rounded-full text-navy font-semibold hover:bg-saffron hover:text-white transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-green mb-3">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'FastAPI', 'Flutter', 'Spring Boot', 'Streamlit', 'MySQL'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-green/10 border-2 border-green/50 rounded-full text-navy font-semibold hover:bg-green hover:text-white transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & APIs */}
            <div>
              <h4 className="text-lg font-semibold text-navy mb-3">AI & APIs</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Google Gemini API', 'OpenAI API', 'AI Agents', 'ML Models'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-navy/10 border-2 border-navy/50 rounded-full text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
