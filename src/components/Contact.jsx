import React from 'react';

const Contact = () => {
  // TODO: Update these with your actual social media links and email
  const socialLinks = {
    github: 'https://github.com/AryanV-Coder',
    linkedin: 'https://linkedin.com/in/aryan-varshney', // Update with your LinkedIn username
    email: 'your.email@example.com', // Update with your email
    twitter: 'https://twitter.com/yourusername', // Optional: Update or remove
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-primary-darker to-primary-dark flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-accent-teal rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects, discuss new ideas, 
            or simply chat about technology. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <a 
            href={`mailto:${socialLinks.email}`}
            className="group bg-primary-light p-8 rounded-lg border border-accent-teal/20 hover:border-accent-teal/60 transition-all duration-300 hover:shadow-xl hover:shadow-accent-teal/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-teal/10 rounded-full flex items-center justify-center group-hover:bg-accent-teal/20 transition-all duration-300">
                <svg className="w-6 h-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-teal transition-colors duration-300">
                Email Me
              </h3>
            </div>
            <p className="text-text-secondary">
              Drop me a line and I'll get back to you as soon as possible.
            </p>
            <p className="text-accent-teal-light mt-2 font-mono text-sm">
              {socialLinks.email}
            </p>
          </a>

          {/* Location Card */}
          <div className="bg-primary-light p-8 rounded-lg border border-accent-teal/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-teal/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary">
                Location
              </h3>
            </div>
            <p className="text-text-secondary">
              Based in India, working globally with teams across time zones.
            </p>
            {/* TODO: Update with your actual location */}
            <p className="text-accent-teal-light mt-2">
              🌍 Available for remote opportunities
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-primary-light p-8 rounded-lg border border-accent-teal/20">
          <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent-teal/10 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-text-secondary text-sm group-hover:text-accent-teal transition-colors duration-300">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent-teal/10 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-text-secondary text-sm group-hover:text-accent-teal transition-colors duration-300">
                LinkedIn
              </span>
            </a>

            {/* Twitter/X */}
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent-teal/10 transition-all duration-300"
              aria-label="Twitter Profile"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <span className="text-text-secondary text-sm group-hover:text-accent-teal transition-colors duration-300">
                Twitter
              </span>
            </a>

            {/* Email Icon */}
            <a
              href={`mailto:${socialLinks.email}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent-teal/10 transition-all duration-300"
              aria-label="Send Email"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center group-hover:bg-accent-teal group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-text-secondary text-sm group-hover:text-accent-teal transition-colors duration-300">
                Email
              </span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">
            Interested in working together? Let's build something amazing!
          </p>
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-block px-8 py-3 bg-accent-teal text-primary-dark font-semibold rounded-lg hover:bg-accent-teal-light transition-all duration-300 btn-glow"
          >
            Start a Conversation
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary-light text-center">
          <p className="text-text-muted">
            © {new Date().getFullYear()} Aryan Varshney. Built with React & Tailwind CSS.
          </p>
          <p className="text-text-muted text-sm mt-2">
            Designed with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
