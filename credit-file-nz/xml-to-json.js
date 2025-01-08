const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const getParserOptions = () => ({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  parseAttributeValue: true,
  trimValues: true,
  parseTrueNumberOnly: true,
  removeNSPrefix: true,
  textNodeName: '#text',
  isArray: (name) => [
    'StatusMessage',
    'ServiceProduct',
    'NameValuePair',
    'Address',
    'KnownAddress'
  ].includes(name)
});

const cleanValue = (value) => {
  if (typeof value !== 'string') return value;
  
  // Clean Name prefix
  if (value.startsWith('Name')) {
    return value.replace(/^Name/, '');
  }
  
  // Clean Value prefix and convert types
  if (value.startsWith('Value')) {
    const cleanedValue = value.replace(/^Value/, '');
    
    // Convert to number if possible
    if (/^\d+(\.\d+)?$/.test(cleanedValue)) {
      return Number(cleanedValue);
    }
    
    // Convert boolean strings
    if (cleanedValue.toLowerCase() === 'true') return true;
    if (cleanedValue.toLowerCase() === 'false') return false;
    
    return cleanedValue;
  }
  
  return value;
};

const cleanupJSON = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(cleanupJSON).filter(Boolean);
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      if (!/^(w:|wx:|o:|rPr|font|sz)/.test(key)) {
        const cleanedValue = cleanupJSON(value);
        if (cleanedValue !== undefined && cleanedValue !== null && cleanedValue !== '') {
          if (key === 'Name' || key === 'Value') {
            cleaned[key] = cleanValue(cleanedValue);
          } else if (key === 't' && typeof cleanedValue === 'string') {
            const match = cleanedValue.match(/^(.*?)\/(Name|Value)$/);
            if (match) {
              cleaned[match[2]] = cleanValue(match[1]);
              continue;
            }
          } else {
            cleaned[key] = cleanedValue;
          }
        }
      }
    }
    return Object.keys(cleaned).length ? cleaned : undefined;
  }
  
  return obj;
};

const convertXMLToJSON = (inputPath, outputPath) => {
  try {
    const xmlData = fs.readFileSync(inputPath, 'utf8')
      .replace(/\\n/g, '')
      .replace(/\n/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const parser = new XMLParser(getParserOptions());
    const parsedData = parser.parse(xmlData);
    const cleanedData = cleanupJSON(parsedData);

    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(cleanedData, null, 2));
    console.log(`Successfully converted XML to JSON: ${outputPath}`);

  } catch (error) {
    console.error('Error converting XML to JSON:', error);
    throw error;
  }
};

const inputPath = './inputs/Centrix_Happy.xml';
const outputPath = './outputs/centrix_happy.json';

convertXMLToJSON(inputPath, outputPath);