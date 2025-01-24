const fs = require('fs').promises;
const path = require('path');
const { Parser } = require('xml2js');

async function transformXmlToJson() {
  try {
    // Setup directories
    const inputDir = './responses/vedaNz';
    const outputDir = './vedaNz';
    const inputFile = 'multiple-defaults.xml';

    await fs.mkdir(outputDir, { recursive: true });

    // Read XML file
    const xmlContent = await fs.readFile(
      path.join(inputDir, inputFile), 
      'utf8'
    );

    // Use exact same parser config as service
    const parser = new Parser({ ignoreAttrs: false, explicitArray: false });
    const result = await parser.parseStringPromise(xmlContent);

    if (!result) {
      return;
    }

    // Extract using same path as service
    const transformedData = result?.BCAmessage?.BCAservices?.BCAservice?.['BCAservice-data'].response?.['enquiry-report'];

    // Create output filename by replacing extension
    const outputFile = inputFile.replace('.xml', '.json');
    const outputPath = path.join(outputDir, outputFile);
    
    await fs.writeFile(outputPath, JSON.stringify(transformedData, null, 2));
    
    console.log(`✅ Successfully transformed XML to JSON: ${outputPath}`);
    return transformedData;

  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

transformXmlToJson();