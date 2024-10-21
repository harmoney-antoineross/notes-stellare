const creditReportResult =
  '<response xmlns:vs="http://vedaxml.com/vxml2/vedascore-apply-v2-0.xsd" response-type="report">\n' +
  '  <product-data>\n' +
  '    <summary-data>\n' +
  '      <data-block name="genesis" type="standard">\n' +
  '        <characteristic id="CX0203" key-characteristic="false">\n' +
  '          <variable-name>CX0203_lmt_rs1_s_0m</variable-name>\n' +
  '          <description>Sum of open account limits where repayment status was 1+ (excl BT and BF)</description>\n' +
  '          <value unit="AUD">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0391" key-characteristic="false">\n' +
  '          <variable-name>CX0391_nrm_lmt_rs1_s_0m</variable-name>\n' +
  '          <description>Sum of open non-mortgage account limits where repayment status was 1+ (excl BT and BF)</description>\n' +
  '          <value unit="AUD">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0207" key-characteristic="false">\n' +
  '          <variable-name>CX0207_op_ac_oldest_0m</variable-name>\n' +
  '          <description>Age of oldest open account (excl BT and BF)</description>\n' +
  '          <value unit="months">39.75</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0208" key-characteristic="false">\n' +
  '          <variable-name>CX0208_tc_op_ac_oldest_0m</variable-name>\n' +
  '          <description>Age of oldest open telco account</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0210" key-characteristic="false">\n' +
  '          <variable-name>CX0210_gcc_op_ac_oldest_0m</variable-name>\n' +
  '          <description>Age of oldest open credit card account</description>\n' +
  '          <value unit="months">39.75</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0211" key-characteristic="false">\n' +
  '          <variable-name>CX0211_gpl_op_ac_oldest_0m</variable-name>\n' +
  '          <description>Age of oldest open personal loan account</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0213" key-characteristic="false">\n' +
  '          <variable-name>CX0213_op_ac_ygest_0m</variable-name>\n' +
  '          <description>Age of youngest open account (excl BT and BF)</description>\n' +
  '          <value unit="months">3.83</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0217" key-characteristic="false">\n' +
  '          <variable-name>CX0217_gpl_op_ac_ygest_0m</variable-name>\n' +
  '          <description>Age of youngest open personal loan account</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0234" key-characteristic="false">\n' +
  '          <variable-name>CX0234_rs1_12m</variable-name>\n' +
  '          <description>Months out of the last 12 where the worst open account repayment status was 1+ (excl BT and BF)</description>\n' +
  '          <value unit="months">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0235" key-characteristic="false">\n' +
  '          <variable-name>CX0235_rs0_12m</variable-name>\n' +
  '          <description>Months out of the last 12 where the worst open account repayment status was current (excl BT and BF)</description>\n' +
  '          <value unit="months">12</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0238" key-characteristic="false">\n' +
  '          <variable-name>CX0238_rs2_24m</variable-name>\n' +
  '          <description>Months out of the last 24 where the worst open account repayment status was 2+ (excl BT and BF)</description>\n' +
  '          <value unit="months">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0240" key-characteristic="false">\n' +
  '          <variable-name>CX0240_rs0_24m</variable-name>\n' +
  '          <description>Months out of the last 24 where the worst open account repayment status was current (excl BT and BF)</description>\n' +
  '          <value unit="months">24</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0270" key-characteristic="false">\n' +
  '          <variable-name>CX0270_gcc_rs0_24m</variable-name>\n' +
  '          <description>Months out of the last 24 where the worst open credit card account repayment status was current</description>\n' +
  '          <value unit="months">23</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0275" key-characteristic="false">\n' +
  '          <variable-name>CX0275_gpl_rs0_12m</variable-name>\n' +
  '          <description>Months out of the last 12 where the worst open personal loan account repayment status was current</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0280" key-characteristic="false">\n' +
  '          <variable-name>CX0280_gpl_rs0_24m</variable-name>\n' +
  '          <description>Months out of the last 24 where the worst open personal loan account repayment status was current</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX2239" key-characteristic="false">\n' +
  '          <variable-name>CX2239_rs1_6m</variable-name>\n' +
  '          <description>Months out of the last 6 where the worst open account repayment status was 1+ (excl BT and BF)</description>\n' +
  '          <value unit="months">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX2280" key-characteristic="false">\n' +
  '          <variable-name>CX2280_gpl_rs0_6m</variable-name>\n' +
  '          <description>Months out of the last 6 where the worst open personal loan account repayment status was current</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0339" key-characteristic="false">\n' +
  '          <variable-name>CX0339_time_worst_dlq_24m</variable-name>\n' +
  '          <description>Months since worst open account repayment status in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="months">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0343" key-characteristic="false">\n' +
  '          <variable-name>CX0343_gpl_time_worst_dlq_24m</variable-name>\n' +
  '          <description>Months since worst open personal loan account repayment status in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0345" key-characteristic="false">\n' +
  '          <variable-name>CX0345_time_closure_24m</variable-name>\n' +
  '          <description>Months since last closed account in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="months">3</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0047" key-characteristic="false">\n' +
  '          <variable-name>CX0047_ac_op_lmt_mxs_24m</variable-name>\n' +
  '          <description>Maximum sum of open account limits in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">796043</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0048" key-characteristic="false">\n' +
  '          <variable-name>CX0048_sec_ac_op_lmt_mxs_24m</variable-name>\n' +
  '          <description>Maximum sum of open secured account limits in the last 24 months</description>\n' +
  '          <value unit="AUD">793043</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0049" key-characteristic="false">\n' +
  '          <variable-name>CX0049_nsec_ac_op_lmt_mxs_24m</variable-name>\n' +
  '          <description>Maximum sum of open unsecured account limits in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0050" key-characteristic="false">\n' +
  '          <variable-name>CX0050_ac_op_lmt_mns_24m</variable-name>\n' +
  '          <description>Minimum sum of open account limits in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">396308</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0052" key-characteristic="false">\n' +
  '          <variable-name>CX0052_nsec_ac_op_lmt_mns_24m</variable-name>\n' +
  '          <description>Minimum sum of open unsecured account limits in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0055" key-characteristic="false">\n' +
  '          <variable-name>CX0055_nsec_ac_op_lmt_avs_24m</variable-name>\n' +
  '          <description>Average sum of open unsecured account limits in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0056" key-characteristic="false">\n' +
  '          <variable-name>CX0056_ac_op_lmt_mxs_12m</variable-name>\n' +
  '          <description>Maximum sum of open account limits in the last 12 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">796043</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0058" key-characteristic="false">\n' +
  '          <variable-name>CX0058_nsec_ac_op_lmt_mxs_12m</variable-name>\n' +
  '          <description>Maximum sum of open unsecured account limits in the last 12 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0059" key-characteristic="false">\n' +
  '          <variable-name>CX0059_ac_op_lmt_mns_12m</variable-name>\n' +
  '          <description>Minimum sum of open account limits in the last 12 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">396308</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0061" key-characteristic="false">\n' +
  '          <variable-name>CX0061_nsec_ac_op_lmt_mns_12m</variable-name>\n' +
  '          <description>Minimum sum of open unsecured account limits in the last 12 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0064" key-characteristic="false">\n' +
  '          <variable-name>CX0064_nsec_ac_op_lmt_avs_12m</variable-name>\n' +
  '          <description>Average sum of open unsecured account limits in the last 12 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0068" key-characteristic="false">\n' +
  '          <variable-name>CX0068_ac_op_lmt_mxs_6m</variable-name>\n' +
  '          <description>Maximum sum of open account limits in the last 6 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">796043</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0070" key-characteristic="false">\n' +
  '          <variable-name>CX0070_nsec_ac_op_lmt_mxs_6m</variable-name>\n' +
  '          <description>Maximum sum of open unsecured account limits in the last 6 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0071" key-characteristic="true">\n' +
  '          <variable-name>CX0071_ac_op_lmt_mns_6m</variable-name>\n' +
  '          <description>Minimum sum of open account limits in the last 6 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">396308</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0073" key-characteristic="true">\n' +
  '          <variable-name>CX0073_nsec_ac_op_lmt_mns_6m</variable-name>\n' +
  '          <description>Minimum sum of open unsecured account limits in the last 6 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0076" key-characteristic="false">\n' +
  '          <variable-name>CX0076_nsec_ac_op_lmt_avs_6m</variable-name>\n' +
  '          <description>Average sum of open unsecured account limits in the last 6 months (excl BT and BF)</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0348" key-characteristic="true">\n' +
  '          <variable-name>CX0348_time_lmt_inc_24m</variable-name>\n' +
  '          <description>Months since last open account limits increased in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="months">7</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0389" key-characteristic="false">\n' +
  '          <variable-name>CX0389_nsec_time_lmt_inc_24m</variable-name>\n' +
  '          <description>Months since last open unsecured account limits increased in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0349" key-characteristic="false">\n' +
  '          <variable-name>CX0349_gcc_time_lmt_dec_24m</variable-name>\n' +
  '          <description>Months since last open credit card account limits decreased in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0350" key-characteristic="false">\n' +
  '          <variable-name>CX0350_months_lmt_inc_24m</variable-name>\n' +
  '          <description>Months out of the last 24 where open account limits increased (excl BT and BF)</description>\n' +
  '          <value unit="months">1</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0023" key-characteristic="false">\n' +
  '          <variable-name>CX0023_ac_op_al6m_0m</variable-name>\n' +
  '          <description>Number of open accounts where age of account less than or equal to 6 months (excl BT and BF)</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0029" key-characteristic="true">\n' +
  '          <variable-name>CX0029_gpl_ac_op_al6m_0m</variable-name>\n' +
  '          <description>Number of open personal loan accounts where age of account less than or equal to 6 months</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0352" key-characteristic="false">\n' +
  '          <variable-name>CX0352_wrs_closure_24m</variable-name>\n' +
  '          <description>Worst repayment status at closure in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="char">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0356" key-characteristic="false">\n' +
  '          <variable-name>CX0356_gpl_wrs_closure_24m</variable-name>\n' +
  '          <description>Worst personal loan repayment status at closure in the last 24 months</description>\n' +
  '          <value unit="char">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0041" key-characteristic="true">\n' +
  '          <variable-name>CX0041_ac_op_lmt_s_0m</variable-name>\n' +
  '          <description>Sum of open account limits (excl BT and BF)</description>\n' +
  '          <value unit="AUD">401246</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0044" key-characteristic="false">\n' +
  '          <variable-name>CX0044_gcc_ac_op_lmt_s_0m</variable-name>\n' +
  '          <description>Sum of open credit card account limits</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0045" key-characteristic="false">\n' +
  '          <variable-name>CX0045_gpl_ac_op_lmt_s_0m</variable-name>\n' +
  '          <description>Sum of open personal loan account limits</description>\n' +
  '          <value unit="AUD">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0067" key-characteristic="true">\n' +
  '          <variable-name>CX0067_nsec_ac_op_lmt_s_0m</variable-name>\n' +
  '          <description>Sum of open unsecured account limits</description>\n' +
  '          <value unit="AUD">1000</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0406" key-characteristic="false">\n' +
  '          <variable-name>CX0406_al_ac_op_lmt_s_0m</variable-name>\n' +
  '          <description>Sum of open auto account limits</description>\n' +
  '          <value unit="AUD">-991</value>\n' +
  '          <data-level code="P">Partial</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0099" key-characteristic="false">\n' +
  '          <variable-name>CX0099_ac_rs0_24m</variable-name>\n' +
  '          <description>Number of open accounts where repayment status was current in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="count">3</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0100" key-characteristic="false">\n' +
  '          <variable-name>CX0100_ac_rs1_24m</variable-name>\n' +
  '          <description>Number of open accounts where repayment status was 1+ in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0101" key-characteristic="false">\n' +
  '          <variable-name>CX0101_ac_rs2_24m</variable-name>\n' +
  '          <description>Number of open accounts where repayment status was 2+ in the last 24 months (excl BT and BF)</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0160" key-characteristic="false">\n' +
  '          <variable-name>CX0160_ac_op_mth_rs1_24m</variable-name>\n' +
  '          <description>Months since any open account repayment status was 1+ in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0163" key-characteristic="false">\n' +
  '          <variable-name>CX0163_gcc_ac_op_mth_rs1_24m</variable-name>\n' +
  '          <description>Months since any open credit card account repayment status was 1+ in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0166" key-characteristic="true">\n' +
  '          <variable-name>CX0166_ac_op_mth_rs2_24m</variable-name>\n' +
  '          <description>Months since any open account repayment status was 2+ in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0169" key-characteristic="false">\n' +
  '          <variable-name>CX0169_gcc_ac_op_mth_rs2_24m</variable-name>\n' +
  '          <description>Months since any open credit card account repayment status was 2+ in the last 24 months</description>\n' +
  '          <value unit="months">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0194" key-characteristic="false">\n' +
  '          <variable-name>CX0194_gcc_wrs_12m</variable-name>\n' +
  '          <description>Worst open credit card account repayment status in the last 12 months</description>\n' +
  '          <value unit="char">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0399" key-characteristic="true">\n' +
  '          <variable-name>CX0399_wrs_al6m_6m</variable-name>\n' +
  '          <description>Worst open account repayment status where age of account less than or equal to 6 months in the last 6 months</description>\n' +
  '          <value unit="char">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX0400" key-characteristic="false">\n' +
  '          <variable-name>CX0400_wrs_agt6l12m_12m</variable-name>\n' +
  '          <description>Worst open account repayment status where age of account greater than 6 and less than or equal to 12 months in the last 12 months</description>\n' +
  '          <value unit="char">-991</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="CX2186" key-characteristic="true">\n' +
  '          <variable-name>CX2186_wrs_6m</variable-name>\n' +
  '          <description>Worst open account repayment status in the last 6 months</description>\n' +
  '          <value unit="char">0</value>\n' +
  '          <data-level code="C">Comprehensive</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NA8904" key-characteristic="false">\n' +
  '          <variable-name>NA8904_age_fle</variable-name>\n' +
  '          <description>Age of primary file</description>\n' +
  '          <value unit="months">90.82</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NA8908" key-characteristic="true">\n' +
  '          <variable-name>NA8908_age_ind</variable-name>\n' +
  '          <description>Main age of applicant</description>\n' +
  '          <value unit="months">336.74</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8056" key-characteristic="false">\n' +
  '          <variable-name>NX8056_enq_amt_1</variable-name>\n' +
  '          <description>Dollar amount of last consumer enquiry</description>\n' +
  '          <value unit="AUD">400000</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8057" key-characteristic="false">\n' +
  '          <variable-name>NX8057_enq_amt_2</variable-name>\n' +
  '          <description>Dollar amount of 2nd last consumer enquiry</description>\n' +
  '          <value unit="AUD">399648</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NA8902" key-characteristic="true">\n' +
  '          <variable-name>NA8902_age_fle_max</variable-name>\n' +
  '          <description>Age of oldest file</description>\n' +
  '          <value unit="months">90.82</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NA8920" key-characteristic="false">\n' +
  '          <variable-name>NA8920_em_time_1</variable-name>\n' +
  '          <description>Months at latest employer</description>\n' +
  '          <value unit="months">1.98</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NA8921" key-characteristic="false">\n' +
  '          <variable-name>NA8921_ad_time_1</variable-name>\n' +
  '          <description>Months at latest address</description>\n' +
  '          <value unit="months">52.97</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX7999" key-characteristic="false">\n' +
  '          <variable-name>NX7999_enq_7d</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 7 days</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8000" key-characteristic="false">\n' +
  '          <variable-name>NX8000_enq_1m</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 1 month</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8001" key-characteristic="true">\n' +
  '          <variable-name>NX8001_enq_3m</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 3 months</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8002" key-characteristic="false">\n' +
  '          <variable-name>NX8002_enq_6m</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 6 months</description>\n' +
  '          <value unit="count">3</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8003" key-characteristic="false">\n' +
  '          <variable-name>NX8003_enq_12m</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 12 months</description>\n' +
  '          <value unit="count">4</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8006" key-characteristic="true">\n' +
  '          <variable-name>NX8006_enq_60m</variable-name>\n' +
  '          <description>Number of consumer enquiries in the last 60 months</description>\n' +
  '          <value unit="count">11</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8043" key-characteristic="true">\n' +
  '          <variable-name>NX8043_enq_tcut_3m</variable-name>\n' +
  '          <description>Number of consumer telco or utility enquiries in the last 3 months</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8045" key-characteristic="false">\n' +
  '          <variable-name>NX8045_enq_tcut_12m</variable-name>\n' +
  '          <description>Number of consumer telco or utility enquiries in the last 12 months</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8048" key-characteristic="true">\n' +
  '          <variable-name>NX8048_enq_tcut_60m</variable-name>\n' +
  '          <description>Number of consumer telco or utility enquiries in the last 60 months</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8049" key-characteristic="false">\n' +
  '          <variable-name>NX8049_enq_own_3m</variable-name>\n' +
  '          <description>Own number of consumer enquiries in the last 3 months</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8050" key-characteristic="false">\n' +
  '          <variable-name>NX8050_enq_own_12m</variable-name>\n' +
  '          <description>Own number of consumer enquiries in the last 12 months</description>\n' +
  '          <value unit="count">0</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8059" key-characteristic="false">\n' +
  '          <variable-name>NX8059_enq_time_1</variable-name>\n' +
  '          <description>Months since last consumer enquiry</description>\n' +
  '          <value unit="months">1.98</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8060" key-characteristic="false">\n' +
  '          <variable-name>NX8060_enq_time_2</variable-name>\n' +
  '          <description>Months since 2nd last consumer enquiry</description>\n' +
  '          <value unit="months">4.87</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8062" key-characteristic="false">\n' +
  '          <variable-name>NX8062_enq_amt_3m</variable-name>\n' +
  '          <description>Total value of consumer enquiries less than 3 mths</description>\n' +
  '          <value unit="AUD">400000</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NX8063" key-characteristic="false">\n' +
  '          <variable-name>NX8063_enq_amt_60m</variable-name>\n' +
  '          <description>Total value of consumer enquiries less than 60 mths</description>\n' +
  '          <value unit="AUD">3142573</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NY8002" key-characteristic="false">\n' +
  '          <variable-name>NY8002_enq_6m</variable-name>\n' +
  '          <description>Number of commercial enquiries in the last 6 months</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NY8003" key-characteristic="false">\n' +
  '          <variable-name>NY8003_enq_12m</variable-name>\n' +
  '          <description>Number of commercial enquiries in the last 12 months</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '        <characteristic id="NY8006" key-characteristic="true">\n' +
  '          <variable-name>NY8006_enq_60m</variable-name>\n' +
  '          <description>Number of commercial enquiries in the last 60 months</description>\n' +
  '          <value unit="count">1</value>\n' +
  '          <data-level code="N">Negative</data-level>\n' +
  '        </characteristic>\n' +
  '      </data-block>\n' +
  '    </summary-data>\n' +
  '  </product-data>\n' +
  '</response>';