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

const METRIC_TEST_DATA = {
  NX8049_ENQ_OWN_3M: 0,
  NA8920_EM_TIME_1: 1.98,
  NX8056_ENQ_AMT_1: 400000,
  NX8001_ENQ_3M: 1,
  CX0029_GPL_AC_OP_AL6M_0M: 0,
  NX8006_ENQ_60M: 11,
  NX8003_ENQ_12M: 4,
  NX8057_ENQ_AMT_2: 399648,
  NX8002_ENQ_6M: 3,
  NA8904_AGE_FLE: 90.82,
  NX8050_ENQ_OWN_12M: 0,
  CX0067_NSEC_AC_OP_LMT_S_0M: 1000,
  CX0234_RS1_12M: 0,
  CX0352_WRS_CLOSURE_24M: 0,
  NX8062_ENQ_AMT_3M: 400000,
  CX0240_RS0_24M: 24,
  CX0041_AC_OP_LMT_S_0M: 401246,
  NX8048_ENQ_TCUT_60M: 1,
  CX0406_AL_AC_OP_LMT_S_0M: -991,
  NA8908_AGE_IND: 336.74,
  CX0208_TC_OP_AC_OLDEST_0M: -991,
  NX8060_ENQ_TIME_2: 4.87,
};

const METRIC_TEST_DATA_GENERATED = {
  NX8049_ENQ_OWN_3M: 0,
  NA8920_EM_TIME_1: 1.98,
  NX8056_ENQ_AMT_1: 400000,
  NX8001_ENQ_3M: 1,
  CX0029_GPL_AC_OP_AL6M_0M: 0,
  NX8006_ENQ_60M: 11,
  NX8003_ENQ_12M: 4,
  NX8057_ENQ_AMT_2: 399648,
  NX8002_ENQ_6M: 3,
  NA8904_AGE_FLE: 90.82,
  NX8050_ENQ_OWN_12M: 0,
  CX0067_NSEC_AC_OP_LMT_S_0M: 1000,
  CX0234_RS1_12M: 0,
  CX0352_WRS_CLOSURE_24M: 0,
  NX8062_ENQ_AMT_3M: 400000,
  CX0240_RS0_24M: 24,
  CX0041_AC_OP_LMT_S_0M: 401246,
  NX8048_ENQ_TCUT_60M: 1,
  CX0406_AL_AC_OP_LMT_S_0M: -991,
  NA8908_AGE_IND: 336.74,
  CX0208_TC_OP_AC_OLDEST_0M: -991,
  NX8060_ENQ_TIME_2: 4.87,
  CX0047_AC_OP_LMT_MXS_24M: 796043,
  CX0044_GCC_AC_OP_LMT_S_0M: 1000,
  NY8006_ENQ_60M: 1,
  CX0350_MONTHS_LMT_INC_24M: 1,
  NX7999_ENQ_7D: 0,
  CX0169_GCC_AC_OP_MTH_RS2_24M: -991,
  NA8902_AGE_FLE_MAX: 90.82,
  CX0348_TIME_LMT_INC_24M: 7,
  CX0071_AC_OP_LMT_MNS_6M: 396308,
  CX0270_GCC_RS0_24M: 23,
  CX0045_GPL_AC_OP_LMT_S_0M: -991,
  CX0068_AC_OP_LMT_MXS_6M: 796043,
  CX0213_OP_AC_YGEST_0M: 3.83,
  NX8063_ENQ_AMT_60M: 3142573,
  NA8921_AD_TIME_1: 52.97,
  CX0211_GPL_OP_AC_OLDEST_0M: -991,
  NX8000_ENQ_1M: 0,
  CX0059_AC_OP_LMT_MNS_12M: 396308,
  CX0048_SEC_AC_OP_LMT_MXS_24M: 793043,
  CX0100_AC_RS1_24M: 0,
  CX0023_AC_OP_AL6M_0M: 1,
  NX8059_ENQ_TIME_1: 1.98,
  CX2239_RS1_6M: 0,
  CX0056_AC_OP_LMT_MXS_12M: 796043,
  CX0099_AC_RS0_24M: 3,
  CX0076_NSEC_AC_OP_LMT_AVS_6M: 1000,
  CX0349_GCC_TIME_LMT_DEC_24M: -991,
  CX0345_TIME_CLOSURE_24M: 3,
  CX0391_NRM_LMT_RS1_S_0M: -991,
  CX0203_LMT_RS1_S_0M: -991,
  CX0207_OP_AC_OLDEST_0M: 39.75,
  CX0061_NSEC_AC_OP_LMT_MNS_12M: 1000,
  CX0073_NSEC_AC_OP_LMT_MNS_6M: 1000,
  CX0238_RS2_24M: 0,
  CX0070_NSEC_AC_OP_LMT_MXS_6M: 1000,
  CX0400_WRS_AGT6L12M_12M: -991,
  CX0343_GPL_TIME_WORST_DLQ_24M: -991,
  NY8002_ENQ_6M: 1,
  CX0389_NSEC_TIME_LMT_INC_24M: -991,
  CX0055_NSEC_AC_OP_LMT_AVS_24M: 1000,
  CX0166_AC_OP_MTH_RS2_24M: -991,
  CX0280_GPL_RS0_24M: -991,
  NY8003_ENQ_12M: 1,
  CX0160_AC_OP_MTH_RS1_24M: -991,
  CX0217_GPL_OP_AC_YGEST_0M: -991,
  CX0050_AC_OP_LMT_MNS_24M: 396308,
  CX0052_NSEC_AC_OP_LMT_MNS_24M: 1000,
  CX0058_NSEC_AC_OP_LMT_MXS_12M: 1000,
  CX0049_NSEC_AC_OP_LMT_MXS_24M: 1000,
  CX0399_WRS_AL6M_6M: -991,
  CX2280_GPL_RS0_6M: -991,
  CX0275_GPL_RS0_12M: -991,
  CX0210_GCC_OP_AC_OLDEST_0M: 39.75,
  CX0339_TIME_WORST_DLQ_24M: 0,
  CX0235_RS0_12M: 12,
  CX2186_WRS_6M: 0,
  CX0101_AC_RS2_24M: 0,
  NX8045_ENQ_TCUT_12M: 0,
  CX0163_GCC_AC_OP_MTH_RS1_24M: -991,
  CX0194_GCC_WRS_12M: 0,
  CX0356_GPL_WRS_CLOSURE_24M: -991,
  CX0064_NSEC_AC_OP_LMT_AVS_12M: 1000,
  NX8043_ENQ_TCUT_3M: 0,
};

module.exports = {
  DEFAULT_METRICS,
  METRIC_TEST_DATA,
  METRIC_TEST_DATA_GENERATED
};

