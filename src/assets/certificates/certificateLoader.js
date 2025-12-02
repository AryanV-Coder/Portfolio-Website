/**
 * Certificate Auto-Loader
 * 
 * This file automatically loads all certificate images from the certificates folder.
 * Simply add your certificate images with names like:
 * - Certificate_1.jpg (or .png, .jpeg, .webp)
 * - Certificate_2.jpg
 * - Certificate_3.jpg
 * etc.
 * 
 * The system will automatically detect and load them!
 */

// Dynamically import all certificate images from this folder
const certificateContext = require.context('./', false, /^\.\/Certificate_\d+\.(jpg|jpeg|png|webp)$/i);

// Get all certificate images and sort them by number
const getCertificateImages = () => {
    const certificates = [];

    certificateContext.keys().forEach((key) => {
        // Extract the number from the filename
        const match = key.match(/Certificate_(\d+)/i);
        if (match) {
            const number = parseInt(match[1], 10);
            certificates.push({
                id: number,
                image: certificateContext(key),
                filename: key
            });
        }
    });

    // Sort by certificate number
    return certificates.sort((a, b) => a.id - b.id);
};

export default getCertificateImages;
