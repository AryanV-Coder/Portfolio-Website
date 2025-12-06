import React from 'react';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const resumePath = '/Aryan_Varshney_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Aryan_Varshney_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePath, '_blank');
  };

  return (
    <section
      id="resume"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-primary flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my professional journey 📄
          </p>
        </div>

        {/* Compact Resume Card */}
        <div className="bg-dark-card border-2 border-saffron/30 rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-saffron/10 transition-all duration-500">

          {/* Resume Preview & Info */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">

            {/* PDF Icon Preview */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-40 h-48 bg-gradient-to-br from-saffron/10 to-green/10 rounded-xl border-2 border-saffron/40 flex items-center justify-center shadow-lg">
                  <FaFilePdf className="text-7xl text-saffron" />
                </div>
                <div className="absolute -top-2 -right-2 bg-saffron text-text-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  PDF
                </div>
              </div>
            </div>

            {/* Resume Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Aryan Varshney
              </h3>
              <p className="text-saffron font-semibold mb-3 text-lg">
                Professional Resume
              </p>
              <p className="text-text-secondary mb-4">
                AI/ML Engineer | FastAPI & Flutter Developer
              </p>
              <p className="text-text-secondary text-sm">
                B.Tech CSE @ JIIT Noida (2024-28)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleView}
              className="group px-8 py-4 bg-dark-secondary border-2 border-saffron text-saffron font-semibold rounded-lg hover:bg-saffron hover:text-text-dark transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
            >
              <FaEye className="w-5 h-5" />
              View Resume
            </button>

            <button
              onClick={handleDownload}
              className="group px-8 py-4 bg-saffron text-text-dark font-semibold rounded-lg hover:bg-green transition-all duration-300 btn-glow shadow-lg flex items-center justify-center gap-3"
            >
              <FaDownload className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* File Info */}
          <div className="mt-6 text-center">
            <p className="text-text-secondary text-sm">
              📄 Format: PDF • 📏 Size: ~1MB • 🔄 Updated: December 2024
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
