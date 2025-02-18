const fs = require('fs');
const csv = require('csv-parse/sync');
const baseCollection = require('./Equifax - NZ.postman_collection.json');

// Read and parse CSV 
try {
  const csvData = fs.readFileSync('CR_Consumer-Table 1.csv', 'utf-8');
  const records = csv.parse(csvData, {
    columns: true,
    skip_empty_lines: true,
    from_line: 7
  });

  // Filter consumer records
  const consumerRecords = records.filter(record => 
    record['First Name'] && 
    record['Surname'] && 
    !record['First Name'].includes('TEST DATA')
  );

  // Generate test items
  const testItems = consumerRecords.map(record => {
    const testCaseType = getTestCaseType(record);
    const name = `${testCaseType} - ${record['First Name']} ${record['Surname']}`;

    return {
      name,
      protocolProfileBehavior: {
        disabledSystemHeaders: {}
      },
      request: {
        auth: {
          type: "basic",
          basic: [
            {
              key: "password",
              value: "H67GWH3FrMib",
              type: "string"
            },
            {
              key: "username",
              value: "Gcik2C6x5Tz9",
              type: "string"
            }
          ]
        },
        method: "POST",
        header: [
          {
            key: "Content-Type",
            value: "text/xml",
            type: "text"
          }
        ],
        body: {
          mode: "raw",
          raw: generateXmlBody(record),
          options: {
            raw: {
              language: "xml"
            }
          }
        },
        url: {
          raw: "https://cta.vedaxml.com/sys1",
          protocol: "https",
          host: ["cta", "vedaxml", "com"],
          path: ["sys1"]
        }
      },
      response: []
    };
  });

  // Update collection
  const updatedCollection = {
    ...baseCollection,
    info: {
      ...baseCollection.info,
      name: "EquifaxNZAll"
    },
    item: testItems
  };

  fs.writeFileSync(
    'Equifax.generated.postman_collection.json',
    JSON.stringify(updatedCollection, null, 2)
  );

  console.log(`Generated ${testItems.length} test cases`);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  // Handle both formats DD-MM-YYYY and D/M/YY
  const parts = dateStr.includes('-') ? 
    dateStr.split('-') : dateStr.split('/');
  
  if (parts.length !== 3) return '';

  let [day, month, year] = parts;
  // Convert 2-digit year to 4-digit
  if (year.length === 2) {
    year = '19' + year;
  }
  
  return `${year}-${day.padStart(2,'0')}-${month.padStart(2,'0')}`;
}

function getTestCaseType(record) {
  if (record['Insolvencies or NAPs']) return 'Insolvency';
  if (record['Judgment']) return 'Judgment';
  if (record['Payment Default']) return 'Default';
  if (record['Collection Agency Default']) return 'Collection';
  return 'Standard';
}

function generateXmlBody(record) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<BCAmessage type="request" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <BCAaccess>
        <BCAaccess-code>Gcik2C6x5Tz9</BCAaccess-code>
        <BCAaccess-pwd>H67GWH3FrMib</BCAaccess-pwd>
    </BCAaccess>
    <BCAservice>
        <BCAservice-client-ref>Test001</BCAservice-client-ref>
        <BCAservice-code>BCA011</BCAservice-code>
        <BCAservice-code-version>V00</BCAservice-code-version>
        <BCAservice-data>
            <request mode="test" version="V2.0">
                <access-purpose code="C1"/>
                <client-details>
                    <client-identifier>031088</client-identifier>
                    <operator-id>xmlcta</operator-id>
                </client-details>
                <product driver-licence="no" name="consumer-enquiry-nz" score="yes" summary="no" moj-fines="no"/>
                <individual>
                    <individual-name>
                        <family-name>${record['Surname']}</family-name>
                        <first-given-name>${record['First Name']}</first-given-name>
                        ${record['Middle Name'] ? `<other-given-name>${record['Middle Name']}</other-given-name>` : ''}
                    </individual-name>
                    <date-of-birth>${formatDate(record['Date of Birth'])}</date-of-birth>
                    <address type="current">
                        <street-number>${record['Street Number']}</street-number>
                        <street-name>${record['Street Name']}</street-name>
                        ${record['Street Type'] ? `<street-type>${record['Street Type']}</street-type>` : ''}
                        ${record['Suburb'] ? `<suburb>${record['Suburb']}</suburb>` : ''}
                        <city>${record['City/Town']}</city>
                    </address>
                </individual>
                <enquiry consent="yes" guarantor="no" joint-account="no">
                    <account-type code="PL"/>
                    <enquiry-amount>2500</enquiry-amount>
                    <client-reference>Test001</client-reference>
                </enquiry>
            </request>
        </BCAservice-data>
    </BCAservice>
</BCAmessage>`;
}