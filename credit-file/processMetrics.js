const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

const DEFAULT_METRICS = [
    'NX8049_ENQ_OWN_3M',
    'NA8920_EM_TIME_1',
    'NX8056_ENQ_AMT_1',
    'NX8001_ENQ_3M',
    'CX0029_GPL_AC_OP_AL6M_0M',
    'NX8006_ENQ_60M',
    'NX8003_ENQ_12M',
    'NX8057_ENQ_AMT_2',
    'NX8002_ENQ_6M',
    'NA8904_AGE_FLE',
    'NX8050_ENQ_OWN_12M',
    'CX0067_NSEC_AC_OP_LMT_S_0M',
    'CX0234_RS1_12M',
    'CX0352_WRS_CLOSURE_24M',
    'NX8062_ENQ_AMT_3M',
    'CX0240_RS0_24M',
    'CX0041_AC_OP_LMT_S_0M',
    'NX8048_ENQ_TCUT_60M',
    'CX0406_AL_AC_OP_LMT_S_0M',
    'NA8908_AGE_IND',
    'CX0208_TC_OP_AC_OLDEST_0M',
    'NX8060_ENQ_TIME_2',
    'CX0047_AC_OP_LMT_MXS_24M',
    'CX0044_GCC_AC_OP_LMT_S_0M',
    'NY8006_ENQ_60M',
    'CX0350_MONTHS_LMT_INC_24M',
    'NX7999_ENQ_7D',
    'CX0169_GCC_AC_OP_MTH_RS2_24M',
    'NA8902_AGE_FLE_MAX',
    'CX0348_TIME_LMT_INC_24M',
    'CX0071_AC_OP_LMT_MNS_6M',
    'CX0270_GCC_RS0_24M',
    'CX0045_GPL_AC_OP_LMT_S_0M',
    'CX0068_AC_OP_LMT_MXS_6M',
    'CX0213_OP_AC_YGEST_0M',
    'NX8063_ENQ_AMT_60M',
    'NA8921_AD_TIME_1',
    'CX0211_GPL_OP_AC_OLDEST_0M',
    'NX8000_ENQ_1M',
    'CX0059_AC_OP_LMT_MNS_12M',
    'CX0048_SEC_AC_OP_LMT_MXS_24M',
    'CX0100_AC_RS1_24M',
    'CX0023_AC_OP_AL6M_0M',
    'NX8059_ENQ_TIME_1',
    'CX2239_RS1_6M',
    'CX0056_AC_OP_LMT_MXS_12M',
    'CX0099_AC_RS0_24M',
    'CX0076_NSEC_AC_OP_LMT_AVS_6M',
    'CX0349_GCC_TIME_LMT_DEC_24M',
    'CX0345_TIME_CLOSURE_24M',
    'CX0391_NRM_LMT_RS1_S_0M',
    'CX0203_LMT_RS1_S_0M',
    'CX0207_OP_AC_OLDEST_0M',
    'CX0061_NSEC_AC_OP_LMT_MNS_12M',
    'CX0073_NSEC_AC_OP_LMT_MNS_6M',
    'CX0238_RS2_24M',
    'CX0070_NSEC_AC_OP_LMT_MXS_6M',
    'CX0400_WRS_AGT6L12M_12M',
    'CX0343_GPL_TIME_WORST_DLQ_24M',
    'NY8002_ENQ_6M',
    'CX0389_NSEC_TIME_LMT_INC_24M',
    'CX0055_NSEC_AC_OP_LMT_AVS_24M',
    'CX0166_AC_OP_MTH_RS2_24M',
    'CX0280_GPL_RS0_24M',
    'NY8003_ENQ_12M',
    'CX0160_AC_OP_MTH_RS1_24M',
    'CX0217_GPL_OP_AC_YGEST_0M',
    'CX0050_AC_OP_LMT_MNS_24M',
    'CX0052_NSEC_AC_OP_LMT_MNS_24M',
    'CX0058_NSEC_AC_OP_LMT_MXS_12M',
    'CX0049_NSEC_AC_OP_LMT_MXS_24M',
    'CX0399_WRS_AL6M_6M',
    'CX2280_GPL_RS0_6M',
    'CX0275_GPL_RS0_12M',
    'CX0210_GCC_OP_AC_OLDEST_0M',
    'CX0339_TIME_WORST_DLQ_24M',
    'CX0235_RS0_12M',
    'CX2186_WRS_6M',
    'CX0101_AC_RS2_24M',
    'NX8045_ENQ_TCUT_12M',
    'CX0163_GCC_AC_OP_MTH_RS1_24M',
    'CX0194_GCC_WRS_12M',
    'CX0356_GPL_WRS_CLOSURE_24M',
    'CX0064_NSEC_AC_OP_LMT_AVS_12M',
    'NX8043_ENQ_TCUT_3M',
];

function generateXmlString(characteristic) {
    const id = characteristic['@_id'];
    const keyCharacteristic = characteristic['@_key-characteristic'];
    const variableName = characteristic['vs:variable-name'];
    const description = characteristic['vs:description'];
    const value = characteristic['vs:value']['#text'];
    const unit = characteristic['vs:value']['@_unit'];
    const dataLevelCode = characteristic['vs:data-level']['@_code'];
    const dataLevelText = characteristic['vs:data-level']['#text'];

    return `        <characteristic id="${id}" key-characteristic="${keyCharacteristic}">\n` +
           `          <variable-name>${variableName}</variable-name>\n` +
           `          <description>${description}</description>\n` +
           `          <value unit="${unit}">${value}</value>\n` +
           `          <data-level code="${dataLevelCode}">${dataLevelText}</data-level>\n` +
           `        </characteristic>\n`;
}

function processMetrics() {
    try {
        // Read the XML file
        const xmlData = fs.readFileSync('./temp.xml', 'utf8');

        // Configure parser options to handle namespaces and attributes
        const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
            allowBooleanAttributes: true,
            parseAttributeValue: true,
            ignoreNameSpace: false,
        };

        // Parse XML to object
        const parser = new XMLParser(options);
        const parsedResult = parser.parse(xmlData);

        const dataBlocks = parsedResult['vs:response']['vs:product-data']['vs:summary-data']['vs:data-block'];

        const genesisDataBlock = dataBlocks.find(block => block['@_name'] === 'genesis');

        fs.writeFileSync('genesis_data_block.json', JSON.stringify(genesisDataBlock, null, 2));

        const METRIC_TEST_DATA = {};
        const XML_TEST_INPUT = [];

        console.log('Processing metrics...');

        if (genesisDataBlock && Array.isArray(genesisDataBlock['vs:characteristic'])) {
            console.log(`Found ${genesisDataBlock['vs:characteristic'].length} characteristics in genesis data block`);

            genesisDataBlock['vs:characteristic'].forEach(characteristic => {
                const metric = characteristic['vs:variable-name'];
                if (DEFAULT_METRICS.includes(metric.toUpperCase())) {
                    console.log(`Processing metric: ${metric}`);

                    const value = characteristic['vs:value']['#text'];
                    const unit = characteristic['vs:value']['@_unit'];

                    console.log(`Found characteristic for ${metric}. Value: ${value}, Unit: ${unit}`);

                    // Parse the value based on the unit
                    let parsedValue;
                    if (unit === 'count' || unit === 'AUD' || unit === 'months') {
                        parsedValue = parseFloat(value);
                        console.log(`Parsed ${metric} as number: ${parsedValue}`);
                    } else {
                        parsedValue = value;
                        console.log(`Kept ${metric} as string: ${parsedValue}`);
                    }

                    // Append to METRIC_TEST_DATA
                    METRIC_TEST_DATA[metric] = parsedValue;
                    console.log(`Added ${metric} to METRIC_TEST_DATA`);

                    // Generate XML string and add to XML_TEST_INPUT
                    const xmlString = generateXmlString(characteristic);
                    XML_TEST_INPUT.push(xmlString);
                    console.log(`Added XML string for ${metric} to XML_TEST_INPUT`);
                }
            });
        } else {
            console.error('Genesis data block not found or has unexpected structure');
        }

        console.log('Finished processing metrics');
        
        // Format and output METRIC_TEST_DATA
        const formattedOutput = Object.entries(METRIC_TEST_DATA)
            .map(([key, value]) => `  ${key}: ${typeof value === 'number' ? value : `"${value}"`},`)
            .join('\n');

        console.log('const METRIC_TEST_DATA = {');
        console.log(formattedOutput);
        console.log('}');

        // Generate and save XML_TEST_INPUT to creditReportResult.ts
        const xmlContent = `const creditReportResult =\n` +
                           `  '<response xmlns:vs="http://vedaxml.com/vxml2/vedascore-apply-v2-0.xsd" response-type="report">\\n' +\n` +
                           `  '  <product-data>\\n' +\n` +
                           `  '    <summary-data>\\n' +\n` +
                           `  '      <data-block name="genesis" type="standard">\\n' +\n` +
                           `${XML_TEST_INPUT.map(xmlString => 
                               xmlString.split('\n')
                                        .filter(line => line.trim() !== '')
                                        .map(line => `  '${line}\\n' +\n`)
                                        .join('')
                           ).join('')}` +
                           `  '      </data-block>\\n' +\n` +
                           `  '    </summary-data>\\n' +\n` +
                           `  '  </product-data>\\n' +\n` +
                           `  '</response>';`;

        fs.writeFileSync('creditReportResult.ts', xmlContent);
        console.log('XML content saved to creditReportResult.ts');

    } catch (error) {
        console.error('Error processing metrics:', error);
    }
}

processMetrics();
