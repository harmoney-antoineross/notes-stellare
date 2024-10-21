// Import the data from the metrics.constant.ts file
const { DEFAULT_METRICS, METRIC_TEST_DATA, METRIC_TEST_DATA_GENERATED } = require('./metrics.constant.ts');

function compareMetrics(DEFAULT_METRICS, METRIC_TEST_DATA, METRIC_TEST_DATA_GENERATED) {
  // 1. Compare METRIC_TEST_DATA and METRIC_TEST_DATA_GENERATED
  const sameValues = {};
  const addedValues = {};

  for (const key in METRIC_TEST_DATA_GENERATED) {
    if (METRIC_TEST_DATA.hasOwnProperty(key)) {
      if (METRIC_TEST_DATA[key] === METRIC_TEST_DATA_GENERATED[key]) {
        sameValues[key] = METRIC_TEST_DATA[key];
      }
    } else {
      addedValues[key] = METRIC_TEST_DATA_GENERATED[key];
    }
  }

  console.log("1. Comparison between METRIC_TEST_DATA and METRIC_TEST_DATA_GENERATED:");
  console.log("Same values:", sameValues);
  console.log("Added values:", addedValues);

  // 2. Compare DEFAULT_METRICS and METRIC_TEST_DATA_GENERATED
  const missingMetrics = DEFAULT_METRICS.filter(metric => !METRIC_TEST_DATA_GENERATED.hasOwnProperty(metric));
  const extraMetrics = Object.keys(METRIC_TEST_DATA_GENERATED).filter(metric => !DEFAULT_METRICS.includes(metric));

  console.log("\n2. Comparison between DEFAULT_METRICS and METRIC_TEST_DATA_GENERATED:");
  console.log("Missing metrics:", missingMetrics);
  console.log("Extra metrics:", extraMetrics);
}

// Call the function with the imported data
compareMetrics(DEFAULT_METRICS, METRIC_TEST_DATA, METRIC_TEST_DATA_GENERATED);