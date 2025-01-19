const fs = require('fs').promises;
const path = require('path');
const { Parser } = require('xml2js');

async function transformXmlToJson() {
  try {
    // Setup directories
    const inputDir = './inputs/vedaNz';
    const outputDir = './outputs/vedaNz';

    await fs.mkdir(outputDir, { recursive: true });

    // Read XML file
    const xmlContent = await fs.readFile(
      path.join(inputDir, 'defaults-judgement.xml'), 
      'utf8'
    );

    // Use exact same parser config as service
    const parser = new Parser({ ignoreAttrs: true, explicitArray: false });
    const result = await parser.parseStringPromise(xmlContent);

    if (!result) {
      return;
    }

    // Extract using same path as service
    const transformedData = result?.BCAmessage?.BCAservices?.BCAservice?.['BCAservice-data'].response?.['enquiry-report'];

    // Write output
    const outputPath = path.join(outputDir, 'transformed-credit-file.json');
    await fs.writeFile(outputPath, JSON.stringify(transformedData, null, 2));
    
    console.log(`✅ Successfully transformed XML to JSON: ${outputPath}`);
    return transformedData;

  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

transformXmlToJson();