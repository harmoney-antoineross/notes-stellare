const fs = require('fs');
const path = require('path');

try {
  // Setup directories
  const inputDir = './inputs/vedaNz';
  const outputDir = './outputs/vedaNz';

  // Create output directory if not exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all XML files
  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.xml'));
  console.log(`Found ${files.length} XML files to process...`);

  files.forEach(file => {
    try {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.json`);

      // Read XML file
      console.log(`\nProcessing ${file}...`);
      const xmlContent = fs.readFileSync(inputPath, 'utf8');

      // Basic XML validation
      if (!xmlContent.includes('<?xml')) {
        throw new Error('Invalid XML: Missing XML declaration');
      }

      // Flatten XML by removing newlines and extra spaces
      const flattenedXml = xmlContent
        .replace(/\n/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      // Create JSON structure
      const jsonPayload = {
        userId: "user_123456789",
        metricSourceFieldMap: {},
        source: "Equifax NZ",
        creditFile: {
          userId: "user_123456789",
          provider: "Equifax NZ",
          data: flattenedXml
        }
      };

      // Output formatted JSON
      fs.writeFileSync(outputPath, JSON.stringify(jsonPayload, null, 2));
      console.log(`✅ Created ${outputPath}`);
      console.log(`   Payload length: ${flattenedXml.length} characters`);

    } catch (fileError) {
      console.error(`❌ Error processing ${file}:`, fileError.message);
    }
  });

  console.log('\n✅ Processing complete!');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}