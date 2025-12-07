import React, { useState, useEffect, useMemo } from 'react';
import { FaCertificate, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import getCertificateImages from '../assets/certificates/certificateLoader';
import certificateMetadata from '../assets/certificates/certificateData';
import './Certifications.css';

const Certifications = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    // Automatically load certificates from assets folder
    const certificates = useMemo(() => {
        const certificateImages = getCertificateImages();

        return certificateImages.map(cert => {
            const metadata = certificateMetadata[cert.id] || {
                title: `Certificate ${cert.id}`,
                issuer: 'Organization',
                date: 'Year',
                description: 'Certificate details to be added.',
                credentialUrl: '#',
                skills: []
            };

            return {
                id: cert.id,
                image: cert.image,
                ...metadata
            };
        });
    }, []);

    // Auto-advance carousel every 2 seconds
    useEffect(() => {
        if (isPaused || certificates.length <= 1) return;

        const intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % certificates.length);
        }, 2000); // Change certificate every 2 seconds

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

    const handleImageClick = (image) => {
        setModalImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage(null);
    };

    return (
        <section
            id="certifications"
            className="min-h-screen py-16 px-6 md:px-12 bg-dark-secondary flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full fade-in-section">
                {/* Section Header */}
                <div className="text-center mb-10">
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
                                                <div
                                                    className="cert-image-container cursor-pointer relative group"
                                                    onClick={() => handleImageClick(cert.image)}
                                                >
                                                    {cert.image ? (
                                                        <>
                                                            <img
                                                                src={cert.image}
                                                                alt={cert.title}
                                                                className="w-full h-full object-cover rounded-lg"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center rounded-lg">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-saffron text-text-dark px-4 py-2 rounded-lg font-semibold">
                                                                    🔍 View Certificate
                                                                </div>
                                                            </div>
                                                        </>
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
                                                        <div className="flex flex-wrap gap-2">
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
                    <div className="cert-indicators" style={{ marginTop: '1.5rem' }}>
                        {certificates.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`cert-indicator ${index === activeIndex ? 'active' : ''}`}
                                aria-label={`Go to certificate ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Enhanced Certificate Counter Card */}
                    <div className="flex justify-center mt-4">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-dark-card to-dark-tertiary border-2 border-saffron/30 rounded-full shadow-lg hover:border-saffron transition-all duration-300">
                            <span className="text-text-secondary text-sm font-medium">Certifications</span>
                            <div className="w-px h-6 bg-saffron/30"></div>
                            <div className="text-2xl font-bold gradient-text">
                                {certificates.length}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Certificate Modal Lightbox */}
            {modalOpen && modalImage && (
                <div
                    className="cert-modal-overlay"
                    onClick={closeModal}
                >
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="cert-modal-close"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            <FaTimes />
                        </button>
                        <img
                            src={modalImage}
                            alt="Certificate enlarged view"
                            className="cert-modal-image"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
