// cleanup-xml.js
const fs = require('fs');
const path = require('path');

const htmlEntities = {
    '&gt;': '>',
    '&lt;': '<',
    '&amp;': '&',
    '&quot;': '"',
    '&apos;': "'",
    '&#x2F;': '/',
    '&#x3D;': '=',
};

function cleanupXml(inputPath, outputDir, outputFilename) {
    try {
        // Create outputs directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Read the file
        let content = fs.readFileSync(inputPath, 'utf8');

        // Replace all HTML entities
        Object.entries(htmlEntities).forEach(([entity, char]) => {
            content = content.replace(new RegExp(entity, 'g'), char);
        });

        // Construct output path
        const outputPath = path.join(outputDir, outputFilename);

        // Write cleaned content
        fs.writeFileSync(outputPath, content, 'utf8');
        console.log(`XML cleanup completed successfully! Output saved to: ${outputPath}`);
        
    } catch (error) {
        console.error('Error during XML cleanup:', error);
    }
}

// Usage
cleanupXml('Centrix_Happy.xml', 'outputs', 'centrix_happy_cleaned.xml');