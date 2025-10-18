import React from 'react';

const Journey = () => {
  // You can add your journey milestones here
  const milestones = [
    {
      id: 1,
      year: '2024',
      title: 'Started B.Tech at JIIT Noida',
      description: 'Embarked on my Computer Science journey, focusing on AI and ML',
      icon: '🎓',
      color: 'saffron',
    },
    {
      id: 2,
      year: '2024',
      title: 'First AI Project',
      description: 'Built my first intelligent system using FastAPI and AI APIs',
      icon: '🤖',
      color: 'green',
    },
    {
      id: 3,
      year: '2025',
      title: 'Diving into Automation',
      description: 'Started creating automation tools and AI agents',
      icon: '⚡',
      color: 'saffron',
    },
    // Add more milestones here
  ];

  return (
    <section 
      id="journey" 
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-secondary"
    >
      <div className="max-w-6xl mx-auto fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From curiosity to creation – tracing my path in tech, innovation, and learning 🚀
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-saffron via-green to-saffron transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-dark-primary border-4 ${
                    milestone.color === 'saffron' ? 'border-saffron' : 'border-green'
                  } flex items-center justify-center shadow-lg ${
                    milestone.color === 'saffron' ? 'shadow-saffron/50' : 'shadow-green/50'
                  }`}>
                    <span className="text-3xl">{milestone.icon}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'
                }`}>
                  <div className={`group bg-dark-card p-6 rounded-xl border-2 ${
                    milestone.color === 'saffron' ? 'border-saffron/30 hover:border-saffron' : 'border-green/30 hover:border-green'
                  } hover:shadow-xl ${
                    milestone.color === 'saffron' ? 'hover:shadow-saffron/20' : 'hover:shadow-green/20'
                  } transition-all duration-300 hover:-translate-y-2`}>
                    
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 ${
                      milestone.color === 'saffron' 
                        ? 'bg-saffron/20 text-saffron border border-saffron/40' 
                        : 'bg-green/20 text-green border border-green/40'
                    }`}>
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                      milestone.color === 'saffron' ? 'text-saffron' : 'text-green'
                    } group-hover:scale-105 transition-transform duration-300`}>
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Future Dot */}
          <div className="relative flex items-center justify-center mt-12">
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-dark-primary border-4 border-saffron/50 flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
            <div className="ml-24 md:ml-0 md:mt-16">
              <p className="text-text-primary font-bold text-xl">
                To be continued...
              </p>
              <p className="text-text-secondary text-sm">
                Building the future, one line of code at a time 💻
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            Want to be part of my journey? Let's connect! 🤝
          </p>
          <a 
            href="#contact"
            className="inline-block px-6 py-2 border-2 border-saffron text-saffron rounded-lg hover:bg-saffron hover:text-text-dark transition-all duration-300"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Journey;
