import React, { useState } from 'react';
import { FaDownload, FaEye, FaTimes } from 'react-icons/fa';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const openPreviewModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="resume"
      className="min-h-screen py-20 px-6 md:px-12 bg-dark-primary flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto"></div>
        </div>

        {/* Innovative Split-Panel Resume Card */}
        <div
          className="relative bg-dark-card border-2 border-saffron/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-saffron/20 transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid md:grid-cols-2 gap-0">

            {/* Left Panel - Interactive PDF Preview */}
            <div
              className="relative bg-gradient-to-br from-saffron/5 to-green/5 p-8 flex items-center justify-center cursor-pointer group"
              onClick={openPreviewModal}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className={`absolute top-10 left-10 w-32 h-32 border-4 border-saffron rounded-full transition-transform duration-700 ${isHovered ? 'scale-110 rotate-45' : 'scale-100'}`}></div>
                <div className={`absolute bottom-10 right-10 w-24 h-24 border-4 border-green rounded-full transition-transform duration-700 ${isHovered ? 'scale-110 -rotate-45' : 'scale-100'}`}></div>
              </div>

              {/* PDF Preview Card */}
              <div className="relative z-10">
                <div className={`transition-all duration-500 ${isHovered ? 'scale-105 -rotate-2' : 'scale-100'}`}>
                  {/* PDF Document Preview */}
                  <div className="w-64 h-80 bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-saffron/50 relative">
                    <iframe
                      src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                      className="w-full h-full pointer-events-none"
                      title="Resume Preview"
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Floating PDF Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-saffron to-saffron-light text-text-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 animate-bounce">
                    📄 PDF
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-saffron/20 border-2 border-saffron/50 rounded-full text-saffron font-semibold backdrop-blur-sm group-hover:bg-saffron group-hover:text-text-dark transition-all duration-300">
                    <span>🔍</span>
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Name & Actions */}
            <div className="bg-dark-card p-8 flex flex-col justify-center">

              {/* Name with Gradient Animation */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-saffron via-saffron-light to-green bg-clip-text text-transparent animate-gradient">
                  Aryan Varshney
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-saffron to-green rounded-full"></div>
              </div>

              {/* Action Buttons Stack */}
              <div className="space-y-3">
                <button
                  onClick={handleView}
                  className="w-full group relative px-6 py-3 bg-dark-secondary border-2 border-saffron text-saffron font-semibold rounded-xl hover:bg-saffron hover:text-text-dark transition-all duration-300 shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-saffron/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <FaEye className="w-5 h-5" />
                    <span>View Resume</span>
                  </div>
                </button>

                <button
                  onClick={handleDownload}
                  className="w-full group relative px-6 py-3 bg-gradient-to-r from-saffron to-saffron-light text-text-dark font-semibold rounded-xl hover:from-green hover:to-green-light transition-all duration-300 btn-glow shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <FaDownload className="w-5 h-5" />
                    <span>Download PDF</span>
                  </div>
                </button>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 flex items-center justify-center gap-2 text-text-secondary text-sm">
                <div className="w-2 h-2 rounded-full bg-saffron animate-pulse"></div>
                <span>Updated Dec 2025</span>
                <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Preview Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-dark-card rounded-2xl overflow-hidden border-2 border-saffron/50 shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-dark-tertiary to-dark-secondary border-b-2 border-saffron/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-saffron to-saffron-light rounded-full flex items-center justify-center">
                  <FaEye className="text-text-dark" />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold">Resume Preview</h3>
                  <p className="text-text-secondary text-sm">Full View</p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-10 h-10 bg-saffron/20 hover:bg-saffron rounded-full flex items-center justify-center text-saffron hover:text-text-dark transition-all duration-300 hover:rotate-90"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Full PDF Viewer */}
            <div className="h-[calc(100%-80px)]">
              <iframe
                src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-full"
                title="Resume Full View"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Resume;
