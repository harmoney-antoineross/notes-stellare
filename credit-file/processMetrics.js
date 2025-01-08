const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

const ACTUAL_METRICS = [
    'CX0240_RS0_24M',
    'NX8002_ENQ_6M',
    'NA8920_EM_TIME_1',
    'CX0234_RS1_12M',
    'NA8904_AGE_FLE',
    'CX0352_WRS_CLOSURE_24M',
    'NX8063_ENQ_AMT_60M',
    'NA8921_AD_TIME_1',
    'NX8006_ENQ_60M',
    'NX8001_ENQ_3M',
    'CX0044_GCC_AC_OP_LMT_S_0M',
    'NX8003_ENQ_12M',
    'CX0067_NSEC_AC_OP_LMT_S_0M',
    'NA8902_AGE_FLE_MAX',
    'NX8056_ENQ_AMT_1',
    'CX0213_OP_AC_YGEST_0M',
    'NX8060_ENQ_TIME_2',
    'NX8057_ENQ_AMT_2',
    'NA8908_AGE_IND',
    'NX8049_ENQ_OWN_3M',
    'NX8062_ENQ_AMT_3M',
    'CX0207_OP_AC_OLDEST_0M',
    'CX0216_GCC_OP_AC_YGEST_0M',
    'CX2239_RS1_6M',
    'NX8059_ENQ_TIME_1',
    'CX0041_AC_OP_LMT_S_0M',
    'CX0047_AC_OP_LMT_MXS_24M',
    'CX0270_GCC_RS0_24M',
    'CX0348_TIME_LMT_INC_24M',
    'NX8000_ENQ_1M',
    'CX0059_AC_OP_LMT_MNS_12M',
    'CX0239_RS1_24M',
    'CX0052_NSEC_AC_OP_LMT_MNS_24M',
    'CX0064_NSEC_AC_OP_LMT_AVS_12M',
    'CX0045_GPL_AC_OP_LMT_S_0M',
    'CX0086_LMT_RS1_RATE_24M',
    'CX0056_AC_OP_LMT_MXS_12M',
    'CX0058_NSEC_AC_OP_LMT_MXS_12M',
    'CX0208_TC_OP_AC_OLDEST_0M',
    'CX0049_NSEC_AC_OP_LMT_MXS_24M',
    'CX0029_GPL_AC_OP_AL6M_0M',
    'CX0389_NSEC_TIME_LMT_INC_24M',
    'CX0339_TIME_WORST_DLQ_24M',
    'CX0090_NRM_LMT_RS1_RATE_24M',
    'CX0395_SEC_LMT_RATE_6M',
    'CX0100_AC_RS1_24M',
    'CX0217_GPL_OP_AC_YGEST_0M',
    'CX0144_RM_AC_RS0_0M',
    'CX0291_AC_24M',
    'CX0280_GPL_RS0_24M',
    'CX0350_MONTHS_LMT_INC_24M',
    'CX0211_GPL_OP_AC_OLDEST_0M',
    'NX8050_ENQ_OWN_12M',
    'CX0048_SEC_AC_OP_LMT_MXS_24M',
    'CX0349_GCC_TIME_LMT_DEC_24M',
    'CX0023_AC_OP_AL6M_0M',
    'CX0186_WRS_24M',
    'NY8002_ENQ_6M',
    'CX0101_AC_RS2_24M',
    'NX8045_ENQ_TCUT_12M',
    'CX0092_NRM_LMT_RS2_RATE_24M',
    'CX0399_WRS_AL6M_6M',
    'CX0134_GPL_AC_RS0_0M',
    'CX0066_SEC_AC_OP_LMT_S_0M',
    'NX7999_ENQ_7D',
    'NY8056_ENQ_AMT_1',
    'NY8003_ENQ_12M',
    'CX0218_RM_OP_AC_YGEST_0M',
    'CX0406_AL_AC_OP_LMT_S_0M',
    'CX0169_GCC_AC_OP_MTH_RS2_24M',
    'NP8509_DR_PREV_120M_EVER',
    'CX0233_RS2_12M',
    'CX0026_GCC_AC_OP_AL6M_0M',
    'CX2290_RM_RS0_6M',
    'CX0238_RS2_24M',
    'CX0344_RM_TIME_WORST_DLQ_24M',
    'CX0020_GCC_AC_CLS_24M',
    'CX0199_RM_WRS_0M',
    'CX0436_AL_RS0_24M',
    'CX0147_RM_AC_RS3_0M',
    'CX0022_RM_AC_CLS_24M',
    'CX0146_RM_AC_RS2_0M',
    'CX0355_GCC_WRS_CLOSURE_24M',
    'CX0145_RM_AC_RS1_0M',
    'CX0164_GPL_AC_OP_MTH_RS1_24M',
    'CX0150_RM_AC_RS1_24M',
    'CX2201_RM_WRS_6M',
    'NA8905_NTB_FLG',
    'NY7591_DF_S_1_60_84M',
    'CX2286_RM_RS4_6M',
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

    return `        <vs:characteristic id="${id}" key-characteristic="${keyCharacteristic}">\n` +
           `          <vs:variable-name>${variableName}</vs:variable-name>\n` +
           `          <vs:description>${description}</vs:description>\n` +
           `          <vs:value unit="${unit}">${value}</vs:value>\n` +
           `          <vs:data-level code="${dataLevelCode}">${dataLevelText}</vs:data-level>\n` +
           `        </vs:characteristic>\n`;
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
                if (ACTUAL_METRICS.includes(metric.toUpperCase())) {
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
                           `  '<vs:response xmlns:vs="http://vedaxml.com/vxml2/vedascore-apply-v2-0.xsd" response-type="report">\\n' +\n` +
                           `  '  <vs:product-data>\\n' +\n` +
                           `  '    <vs:summary-data>\\n' +\n` +
                           `  '      <vs:data-block name="genesis" type="standard">\\n' +\n` +
                           `${XML_TEST_INPUT.map(xmlString => 
                               xmlString.split('\n')
                                        .filter(line => line.trim() !== '')
                                        .map(line => `  '${line}\\n' +\n`)
                                        .join('')
                           ).join('')}` +
                           `  '      </vs:data-block>\\n' +\n` +
                           `  '    </vs:summary-data>\\n' +\n` +
                           `  '  </vs:product-data>\\n' +\n` +
                           `  '</vs:response>';`;

        fs.writeFileSync('creditReportResult.ts', xmlContent);
        console.log('XML content saved to creditReportResult.ts');

    } catch (error) {
        console.error('Error processing metrics:', error);
    }
}

processMetrics();
