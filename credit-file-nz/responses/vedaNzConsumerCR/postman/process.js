const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const { Parser } = require('xml2js');

async function processPostmanCollection() {
  try {
    // Load the Postman collection
    const collectionPath = './Equifax.generated.postman_collection.json';
    const collectionData = await fs.readFile(collectionPath, 'utf8');
    const collection = JSON.parse(collectionData);

    const totalRequests = collection.item.length;
    let processedCount = 0;
    let errorCount = 0;

    // Create results directory
    const outputDir = './results';
    await fs.mkdir(outputDir, { recursive: true });

    // Process each item in the collection
    for (const item of collection.item) {
      const { name, request } = item;
      const xmlContent = request.body.raw;

      // Generate a filename from the request name
      const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const responseFile = `${safeName}_response.xml`;

      // Make the API call
      try {
        const response = await axios({
          method: request.method,
          url: request.url.raw,
          headers: {
            'Content-Type': 'text/xml',
            Authorization: `Basic ${Buffer.from(
              `${request.auth.basic[1].value}:${request.auth.basic[0].value}`
            ).toString('base64')}`
          },
          data: xmlContent
        });

        // Save the raw XML response temporarily
        const responsePath = path.join(outputDir, responseFile);
        await fs.writeFile(responsePath, response.data);

        // Transform the XML response to JSON
        const jsonData = await transformXmlToJson({
          inputDir: outputDir,
          outputDir,
          inputFile: responseFile
        });

        if (jsonData) {
          console.log(`✅ Successfully processed ${name}`);
        }

        // Clean up: delete the temporary XML file
        await fs.unlink(responsePath);

        processedCount++;
      } catch (error) {
        console.error(`❌ Error processing ${name}:`, error);
        errorCount++;
      }
    }

    console.log(`\n🎉 Processing complete!`);
    console.log(`Total requests: ${totalRequests}`);
    console.log(`Successfully processed: ${processedCount}`);
    console.log(`Failed requests: ${errorCount}`);

  } catch (error) {
    console.error('❌ Error processing collection:', error);
  }
}

// Modified transformXmlToJson function
async function transformXmlToJson({ inputDir, outputDir, inputFile }) {
  try {
    const inputPath = path.join(inputDir, inputFile);
    
    // Check if file exists
    try {
      await fs.access(inputPath);
    } catch {
      console.error(`❌ File not found: ${inputPath}`);
      return;
    }

    // Read XML file
    const xmlContent = await fs.readFile(inputPath, 'utf8');

    // Use exact same parser config as service but add trim and normalize
    const parser = new Parser({ 
      ignoreAttrs: false, 
      explicitArray: false,
      trim: true,
      normalize: true,
      valueProcessor: (value) => {
        if (typeof value === 'string') {
          return value.trim();
        }
        return value;
      }
    });

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
    
    return transformedData;

  } catch (error) {
    console.error(`❌ Error processing ${inputFile}:`, error instanceof Error ? error.message : String(error));
    return null;
  }
}

processPostmanCollection();