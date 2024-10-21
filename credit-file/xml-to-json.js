const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

// Function to read and clean the XML file
const readAndCleanXmlFile = (filePath) => {
    let xmlData = fs.readFileSync(filePath, 'utf8');
    xmlData = xmlData.replace(/\\n/g, '').replace(/\n/g, '').trim();
    return xmlData;
};

// Function to parse the cleaned XML data
const parseXmlData = (xmlData) => {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
        parseTagValue: true,
    });
    return parser.parse(xmlData);
};

// Function to save the parsed data to a JSON file
const saveToJsonFile = (data, outputFilePath) => {
    fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
};

// Main function to execute the script
const main = () => {
    const inputFilePath = './temp.xml'; // Path to your input XML file
    const outputFilePath = './output.json'; // Path to save the output JSON file

    const cleanedXml = readAndCleanXmlFile(inputFilePath);
    const parsedData = parseXmlData(cleanedXml);
    saveToJsonFile(parsedData, outputFilePath); // Save the parsed data to output.json
};

// Run the main function
main();