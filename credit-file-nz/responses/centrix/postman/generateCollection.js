const fs = require('fs');
const csv = require('csv-parse/sync');
const baseCollection = require('./Centrix.postman_collection.json');

// Read and parse CSV file with more specific options
try {
  const csvData = fs.readFileSync('Centrix Test Cases.csv', 'utf-8');
  const records = csv.parse(csvData, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ',',
    from_line: 3, // Skip the first two header rows
    trim: true,
    relax_column_count: true // Handle inconsistent column counts
  });

  // Filter only consumer records (not company records) and validate required fields
  const consumerRecords = records.filter(record => {
    return record['First Name'] && 
           record['Surname'] && 
           !record['Company']; // Exclude company records
  });

  // Create collection items from test cases
  const testItems = consumerRecords.map(record => {
    // Validate address components
    const addressLine1 = [record['Street Number'], record['Street Name']]
      .filter(Boolean)
      .join(' ');

    return {
      name: `Test Case - ${record['First Name']} ${record['Surname']}`,
      request: {
        auth: {
          type: "basic",
          basic: [
            {
              key: "username",
              value: "{{username}}",
              type: "string"
            },
            {
              key: "password", 
              value: "{{password}}",
              type: "string"
            }
          ]
        },
        method: "POST",
        header: [],
        body: {
          mode: "raw",
          raw: JSON.stringify({
            ConsumerData: {
              Addresses: [
                {
                  AddressLine1: addressLine1,
                  AddressLine2: "",
                  AddressType: "C",
                  City: record['City/Town'] || "",
                  Country: "NZL",
                  Suburb: record['Suburb'] || "",
                  Postcode: record['Postcode'] || ""
                }
              ],
              Personal: {
                DateOfBirth: formatDate(record['Date of Birth']),
                FirstName: record['First Name'],
                Gender: record['Gender'] || "",
                MiddleName: record['Middle Name'] || "",
                Surname: record['Surname']
              }
            },
            Credentials: {
              SubscriberID: "MONY",
              UserID: "monyb2btest", 
              UserKey: "tMEtE9LvgUGV3JwOFLmafqVs"
            },
            RequestDetails: {
              AmountSought: 1000,
              ApplicantType: "SNGL",
              EnquiryReason: "CRDA",
              ProductType: "PSLN",
              SubscriberReference: record['Centrix Reference'] || "Harmoney"
            }
          }, null, 2),
          options: {
            raw: {
              language: "json"
            }
          }
        },
        url: {
          raw: "{{base_url}}/Consumer?products={{default_products}}",
          host: ["{{base_url}}"],
          path: ["Consumer"],
          query: [{
            key: "products",
            value: "{{default_products}}"
          }]
        }
      }
    };
  });

  // Update collection with new items
  const updatedCollection = {
    ...baseCollection,
    item: testItems
  };

  // Write updated collection to file
  fs.writeFileSync(
    'Centrix.generated.postman_collection.json',
    JSON.stringify(updatedCollection, null, 2)
  );

  console.log(`Generated ${testItems.length} test cases`);

} catch (error) {
  console.error('Error processing CSV file:', error.message);
  process.exit(1);
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [month, day, year] = dateStr.split('/');
    // Handle both 2-digit and 4-digit years
    const fullYear = year.length === 2 ? `19${year}` : year;
    return `${fullYear}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`;
  } catch (e) {
    console.warn(`Invalid date format: ${dateStr}`);
    return '';
  }
}