import React, { useState, useEffect } from 'react';
import { FaCertificate, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Placeholder certificates - will be replaced with actual data
    const certificates = [
        {
            id: 1,
            title: 'Certificate Name 1',
            issuer: 'Issuing Organization',
            date: 'Month Year',
            description: 'Brief description of the certification and what skills it validates.',
            image: null, // Will be replaced with actual certificate image
            credentialUrl: '#',
            skills: ['Skill 1', 'Skill 2', 'Skill 3']
        },
        {
            id: 2,
            title: 'Certificate Name 2',
            issuer: 'Issuing Organization',
            date: 'Month Year',
            description: 'Brief description of the certification and what skills it validates.',
            image: null,
            credentialUrl: '#',
            skills: ['Skill 1', 'Skill 2']
        },
        {
            id: 3,
            title: 'Certificate Name 3',
            issuer: 'Issuing Organization',
            date: 'Month Year',
            description: 'Brief description of the certification and what skills it validates.',
            image: null,
            credentialUrl: '#',
            skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']
        },
    ];

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        if (isPaused || certificates.length <= 1) return;

        const intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % certificates.length);
        }, 5000); // Change certificate every 5 seconds

        return () => clearInterval(intervalId);
    }, [isPaused, certificates.length]);

    const nextCertificate = () => {
        setActiveIndex((prev) => (prev + 1) % certificates.length);
    };

    const prevCertificate = () => {
        setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    const getCardPosition = (index) => {
        const diff = index - activeIndex;
        if (diff === 0) return 'active';
        if (diff === 1 || diff === -(certificates.length - 1)) return 'next';
        if (diff === -1 || diff === certificates.length - 1) return 'prev';
        return 'hidden';
    };

    return (
        <section
            id="certifications"
            className="min-h-screen py-20 px-6 md:px-12 bg-dark-secondary flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full fade-in-section">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                        Certifications & <span className="gradient-text">Credentials</span>
                    </h2>
                    <div className="w-24 h-1 bg-saffron rounded-full mx-auto mb-6"></div>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Professional certifications validating expertise and continuous learning journey 📜
                    </p>
                </div>

                {/* 3D Carousel Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Carousel Stage */}
                    <div className="cert-carousel-stage">
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-96 h-96 bg-gradient-to-r from-saffron/5 via-green/5 to-saffron/5 rounded-full blur-3xl"></div>
                        </div>

                        {/* Certificate Cards */}
                        <div className="cert-carousel-container">
                            {certificates.map((cert, index) => {
                                const position = getCardPosition(index);

                                return (
                                    <div
                                        key={cert.id}
                                        className={`cert-card-wrapper ${position}`}
                                        onClick={() => {
                                            if (position === 'next') nextCertificate();
                                            if (position === 'prev') prevCertificate();
                                        }}
                                    >
                                        <div className="cert-card">
                                            {/* Card Front */}
                                            <div className="cert-card-content">
                                                {/* Certificate Icon/Image */}
                                                <div className="cert-image-container">
                                                    {cert.image ? (
                                                        <img
                                                            src={cert.image}
                                                            alt={cert.title}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="cert-placeholder">
                                                            <FaCertificate className="text-6xl text-saffron mb-4" />
                                                            <p className="text-text-secondary text-sm">Certificate Preview</p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Certificate Details */}
                                                <div className="cert-details">
                                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                                                        {cert.title}
                                                    </h3>

                                                    <div className="flex items-center gap-2 mb-3">
                                                        <span className="px-3 py-1 bg-saffron/10 border border-saffron/30 rounded-full text-saffron text-sm font-semibold">
                                                            {cert.issuer}
                                                        </span>
                                                        <span className="text-text-secondary text-sm">
                                                            • {cert.date}
                                                        </span>
                                                    </div>

                                                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                        {cert.description}
                                                    </p>

                                                    {/* Skills Tags */}
                                                    {cert.skills && cert.skills.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {cert.skills.map((skill, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-2 py-1 text-xs bg-green/10 border border-green/30 rounded text-green font-medium"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {/* View Credential Button */}
                                                    <a
                                                        href={cert.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-6 py-2 bg-saffron text-text-dark font-semibold rounded-lg hover:bg-saffron/90 transition-all duration-300 btn-glow"
                                                    >
                                                        <span>View Credential</span>
                                                        <FaExternalLinkAlt className="w-3 h-3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="cert-carousel-controls">
                        <button
                            onClick={prevCertificate}
                            className="cert-nav-btn prev"
                            aria-label="Previous certificate"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={nextCertificate}
                            className="cert-nav-btn next"
                            aria-label="Next certificate"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="cert-indicators">
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`cert-indicator ${index === activeIndex ? 'active' : ''}`}
                                aria-label={`Go to certificate ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="bg-dark-card border-2 border-saffron/30 rounded-xl p-6 text-center hover:border-saffron transition-all duration-300">
                        <div className="text-4xl font-bold gradient-text mb-2">{certificates.length}</div>
                        <div className="text-sm text-text-secondary">Certifications</div>
                    </div>
                    <div className="bg-dark-card border-2 border-green/30 rounded-xl p-6 text-center hover:border-green transition-all duration-300">
                        <div className="text-4xl font-bold text-green mb-2">∞</div>
                        <div className="text-sm text-text-secondary">Learning</div>
                    </div>
                    <div className="bg-dark-card border-2 border-white/30 rounded-xl p-6 text-center hover:border-white transition-all duration-300">
                        <div className="text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-sm text-text-secondary">Verified</div>
                    </div>
                    <div className="bg-dark-card border-2 border-saffron/30 rounded-xl p-6 text-center hover:border-saffron transition-all duration-300">
                        <div className="text-4xl font-bold gradient-text mb-2">🎯</div>
                        <div className="text-sm text-text-secondary">Goal-Driven</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
