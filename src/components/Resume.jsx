import React, { useState } from 'react';
import { FaDownload, FaEye, FaExpand, FaTimes } from 'react-icons/fa';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
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
      <div className="max-w-4xl mx-auto w-full fade-in-section">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Preview, view, or download my professional resume 📄
          </p>
        </div>

        {/* Compact Resume Card with PDF Preview */}
        <div className="bg-dark-card border-2 border-saffron/30 rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-saffron/10 transition-all duration-500">

          {/* Resume Preview & Info */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">

            {/* Interactive PDF Preview */}
            <div className="flex-shrink-0">
              <div
                className="relative group cursor-pointer"
                onClick={openPreviewModal}
              >
                {/* Mini PDF Viewer */}
                <div className="w-40 h-56 bg-white rounded-xl border-2 border-saffron/40 overflow-hidden shadow-lg hover:border-saffron transition-all duration-300">
                  <iframe
                    src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
                    className="w-full h-full pointer-events-none"
                    title="Resume Preview"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 rounded-xl transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <FaExpand className="text-3xl text-saffron" />
                    <p className="text-white text-sm font-semibold">Click to Expand</p>
                  </div>
                </div>

                {/* PDF Badge */}
                <div className="absolute -top-2 -right-2 bg-saffron text-text-dark px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
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
              <p className="text-text-secondary text-sm mb-4">
                B.Tech CSE @ JIIT Noida (2024-28)
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-saffron/10 border border-saffron/30 rounded-full text-saffron text-xs font-semibold">
                  8+ Projects
                </span>
                <span className="px-3 py-1 bg-green/10 border border-green/30 rounded-full text-green text-xs font-semibold">
                  3 Certifications
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-white text-xs font-semibold">
                  Multiple Skills
                </span>
              </div>
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
              📄 PDF • 📏 ~1MB • 🔄 Dec 2024 • 🖱️ Click preview to expand
            </p>
          </div>
        </div>

      </div>

      {/* Full-Screen Preview Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl h-[90vh] bg-dark-card rounded-2xl overflow-hidden border-2 border-saffron/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-dark-tertiary border-b-2 border-saffron/30 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                  <FaEye className="text-text-dark" />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold">Resume Preview</h3>
                  <p className="text-text-secondary text-sm">Aryan Varshney</p>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-10 h-10 bg-saffron/20 hover:bg-saffron rounded-full flex items-center justify-center text-saffron hover:text-text-dark transition-all duration-300"
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
    </section>
  );
};

export default Resume;
