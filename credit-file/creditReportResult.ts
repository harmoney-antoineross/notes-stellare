const creditReportResult =
  '<vs:response xmlns:vs="http://vedaxml.com/vxml2/vedascore-apply-v2-0.xsd" response-type="report">\n' +
  '  <vs:product-data>\n' +
  '    <vs:summary-data>\n' +
  '      <vs:data-block name="genesis" type="standard">\n' +
  '        <vs:characteristic id="CX0207" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0207_op_ac_oldest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of oldest open account (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">39.75</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0208" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0208_tc_op_ac_oldest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of oldest open telco account</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0211" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0211_gpl_op_ac_oldest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of oldest open personal loan account</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0213" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0213_op_ac_ygest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of youngest open account (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">3.83</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0216" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0216_gcc_op_ac_ygest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of youngest open credit card account</vs:description>\n' +
  '          <vs:value unit="months">39.75</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0217" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0217_gpl_op_ac_ygest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of youngest open personal loan account</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0218" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0218_rm_op_ac_ygest_0m</vs:variable-name>\n' +
  '          <vs:description>Age of youngest open mortgage account</vs:description>\n' +
  '          <vs:value unit="months">3.83</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0233" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0233_rs2_12m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 12 where the worst open account repayment status was 2+ (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0234" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0234_rs1_12m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 12 where the worst open account repayment status was 1+ (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0238" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0238_rs2_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open account repayment status was 2+ (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0239" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0239_rs1_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open account repayment status was 1+ (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0240" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0240_rs0_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open account repayment status was current (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">24</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0270" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0270_gcc_rs0_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open credit card account repayment status was current</vs:description>\n' +
  '          <vs:value unit="months">23</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0280" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0280_gpl_rs0_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open personal loan account repayment status was current</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0436" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0436_al_rs0_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where the worst open auto account repayment status was current</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX2239" key-characteristic="false">\n' +
  '          <vs:variable-name>CX2239_rs1_6m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 6 where the worst open account repayment status was 1+ (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX2286" key-characteristic="false">\n' +
  '          <vs:variable-name>CX2286_rm_rs4_6m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 6 where the worst open mortgage account repayment status was 4+</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX2290" key-characteristic="false">\n' +
  '          <vs:variable-name>CX2290_rm_rs0_6m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 6 where the worst open mortgage account repayment status was current</vs:description>\n' +
  '          <vs:value unit="months">6</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0339" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0339_time_worst_dlq_24m</vs:variable-name>\n' +
  '          <vs:description>Months since worst open account repayment status in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0344" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0344_rm_time_worst_dlq_24m</vs:variable-name>\n' +
  '          <vs:description>Months since worst open mortgage account repayment status in the last 24 months</vs:description>\n' +
  '          <vs:value unit="months">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0086" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0086_lmt_rs1_rate_24m</vs:variable-name>\n' +
  '          <vs:description>Proportion of open account limits where repayment status was 1+ in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="percentage">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0090" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0090_nrm_lmt_rs1_rate_24m</vs:variable-name>\n' +
  '          <vs:description>Proportion of open non-mortgage account limits where repayment status was 1+ in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="percentage">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0092" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0092_nrm_lmt_rs2_rate_24m</vs:variable-name>\n' +
  '          <vs:description>Proportion of open non-mortgage account limits where repayment status was 2+ in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="percentage">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0020" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0020_gcc_ac_cls_24m</vs:variable-name>\n' +
  '          <vs:description>Number of closed credit card accounts in the last 24 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0022" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0022_rm_ac_cls_24m</vs:variable-name>\n' +
  '          <vs:description>Number of closed mortgage accounts in the last 24 months</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0047" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0047_ac_op_lmt_mxs_24m</vs:variable-name>\n' +
  '          <vs:description>Maximum sum of open account limits in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">796043</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0048" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0048_sec_ac_op_lmt_mxs_24m</vs:variable-name>\n' +
  '          <vs:description>Maximum sum of open secured account limits in the last 24 months</vs:description>\n' +
  '          <vs:value unit="AUD">793043</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0049" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0049_nsec_ac_op_lmt_mxs_24m</vs:variable-name>\n' +
  '          <vs:description>Maximum sum of open unsecured account limits in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0052" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0052_nsec_ac_op_lmt_mns_24m</vs:variable-name>\n' +
  '          <vs:description>Minimum sum of open unsecured account limits in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0056" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0056_ac_op_lmt_mxs_12m</vs:variable-name>\n' +
  '          <vs:description>Maximum sum of open account limits in the last 12 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">796043</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0058" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0058_nsec_ac_op_lmt_mxs_12m</vs:variable-name>\n' +
  '          <vs:description>Maximum sum of open unsecured account limits in the last 12 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0059" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0059_ac_op_lmt_mns_12m</vs:variable-name>\n' +
  '          <vs:description>Minimum sum of open account limits in the last 12 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">396308</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0064" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0064_nsec_ac_op_lmt_avs_12m</vs:variable-name>\n' +
  '          <vs:description>Average sum of open unsecured account limits in the last 12 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0395" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0395_sec_lmt_rate_6m</vs:variable-name>\n' +
  '          <vs:description>Proportion of open secured account limits in the last 6 months</vs:description>\n' +
  '          <vs:value unit="percentage">0.9962313593612405</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0348" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0348_time_lmt_inc_24m</vs:variable-name>\n' +
  '          <vs:description>Months since last open account limits increased in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">7</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0389" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0389_nsec_time_lmt_inc_24m</vs:variable-name>\n' +
  '          <vs:description>Months since last open unsecured account limits increased in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0349" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0349_gcc_time_lmt_dec_24m</vs:variable-name>\n' +
  '          <vs:description>Months since last open credit card account limits decreased in the last 24 months</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0350" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0350_months_lmt_inc_24m</vs:variable-name>\n' +
  '          <vs:description>Months out of the last 24 where open account limits increased (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="months">1</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0023" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0023_ac_op_al6m_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open accounts where age of account <= 6 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0026" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0026_gcc_ac_op_al6m_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open credit card accounts where age of account <= 6 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0029" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0029_gpl_ac_op_al6m_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open personal loan accounts where age of account <= 6 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0352" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0352_wrs_closure_24m</vs:variable-name>\n' +
  '          <vs:description>Worst repayment status at closure in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="char">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0355" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0355_gcc_wrs_closure_24m</vs:variable-name>\n' +
  '          <vs:description>Worst credit card repayment status at closure in the last 24 months</vs:description>\n' +
  '          <vs:value unit="char">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0041" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0041_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open account limits (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="AUD">401246</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0044" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0044_gcc_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open credit card account limits</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0045" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0045_gpl_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open personal loan account limits</vs:description>\n' +
  '          <vs:value unit="AUD">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0066" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0066_sec_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open secured account limits</vs:description>\n' +
  '          <vs:value unit="AUD">39824</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0067" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0067_nsec_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open unsecured account limits</vs:description>\n' +
  '          <vs:value unit="AUD">1000</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0406" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0406_al_ac_op_lmt_s_0m</vs:variable-name>\n' +
  '          <vs:description>Sum of open auto account limits</vs:description>\n' +
  '          <vs:value unit="AUD">-991</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0291" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0291_ac_24m</vs:variable-name>\n' +
  '          <vs:description>Number of total accounts in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="count">3</vs:value>\n' +
  '          <vs:data-level code="P">Partial</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0100" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0100_ac_rs1_24m</vs:variable-name>\n' +
  '          <vs:description>Number of open accounts where repayment status was 1+ in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0101" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0101_ac_rs2_24m</vs:variable-name>\n' +
  '          <vs:description>Number of open accounts where repayment status was 2+ in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0134" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0134_gpl_ac_rs0_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open personal loan accounts where repayment status was current</vs:description>\n' +
  '          <vs:value unit="count">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0144" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0144_rm_ac_rs0_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open mortgage accounts where repayment status was current</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0145" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0145_rm_ac_rs1_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open mortgage accounts where repayment status was 1+</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0146" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0146_rm_ac_rs2_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open mortgage accounts where repayment status was 2+</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0147" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0147_rm_ac_rs3_0m</vs:variable-name>\n' +
  '          <vs:description>Number of open mortgage accounts where repayment status was 3+</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0150" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0150_rm_ac_rs1_24m</vs:variable-name>\n' +
  '          <vs:description>Number of open mortgage accounts where repayment status was 1+ in the last 24 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0164" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0164_gpl_ac_op_mth_rs1_24m</vs:variable-name>\n' +
  '          <vs:description>Months since any open personal loan account repayment status was 1+ in the last 24 months</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0169" key-characteristic="false">\n' +
  '          <vs:variable-name>CX0169_gcc_ac_op_mth_rs2_24m</vs:variable-name>\n' +
  '          <vs:description>Months since any open credit card account repayment status was 2+ in the last 24 months</vs:description>\n' +
  '          <vs:value unit="months">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0186" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0186_wrs_24m</vs:variable-name>\n' +
  '          <vs:description>Worst open account repayment status in the last 24 months (excl BT and BF)</vs:description>\n' +
  '          <vs:value unit="char">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0199" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0199_rm_wrs_0m</vs:variable-name>\n' +
  '          <vs:description>Worst open mortgage account repayment status</vs:description>\n' +
  '          <vs:value unit="char">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX0399" key-characteristic="true">\n' +
  '          <vs:variable-name>CX0399_wrs_al6m_6m</vs:variable-name>\n' +
  '          <vs:description>Worst open account repayment status where age of account <= 6 months in the last 6 months</vs:description>\n' +
  '          <vs:value unit="char">-991</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="CX2201" key-characteristic="false">\n' +
  '          <vs:variable-name>CX2201_rm_wrs_6m</vs:variable-name>\n' +
  '          <vs:description>Worst open mortgage account repayment status in the last 6 months</vs:description>\n' +
  '          <vs:value unit="char">0</vs:value>\n' +
  '          <vs:data-level code="C">Comprehensive</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8904" key-characteristic="false">\n' +
  '          <vs:variable-name>NA8904_age_fle</vs:variable-name>\n' +
  '          <vs:description>Age of primary file</vs:description>\n' +
  '          <vs:value unit="months">90.82</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8905" key-characteristic="true">\n' +
  '          <vs:variable-name>NA8905_ntb_flg</vs:variable-name>\n' +
  '          <vs:description>New to bureau flag</vs:description>\n' +
  '          <vs:value unit="boolean">No</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8908" key-characteristic="true">\n' +
  '          <vs:variable-name>NA8908_age_ind</vs:variable-name>\n' +
  '          <vs:description>Main age of applicant</vs:description>\n' +
  '          <vs:value unit="months">336.74</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NP8509" key-characteristic="true">\n' +
  '          <vs:variable-name>NP8509_dr_prev_120m_ever</vs:variable-name>\n' +
  '          <vs:description>Number of previous directorships in the last 120 months-ever</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8056" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8056_enq_amt_1</vs:variable-name>\n' +
  '          <vs:description>Dollar amount of last consumer enquiry</vs:description>\n' +
  '          <vs:value unit="AUD">400000</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8057" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8057_enq_amt_2</vs:variable-name>\n' +
  '          <vs:description>Dollar amount of 2nd last consumer enquiry</vs:description>\n' +
  '          <vs:value unit="AUD">399648</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NY7591" key-characteristic="false">\n' +
  '          <vs:variable-name>NY7591_df_s_1_60_84m</vs:variable-name>\n' +
  '          <vs:description>Status of last commercial default/SCI in the last 60/84 months</vs:description>\n' +
  '          <vs:value unit="char">-991</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NY8056" key-characteristic="false">\n' +
  '          <vs:variable-name>NY8056_enq_amt_1</vs:variable-name>\n' +
  '          <vs:description>Dollar amount of last commercial enquiry</vs:description>\n' +
  '          <vs:value unit="AUD">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8902" key-characteristic="true">\n' +
  '          <vs:variable-name>NA8902_age_fle_max</vs:variable-name>\n' +
  '          <vs:description>Age of oldest file</vs:description>\n' +
  '          <vs:value unit="months">90.82</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8920" key-characteristic="false">\n' +
  '          <vs:variable-name>NA8920_em_time_1</vs:variable-name>\n' +
  '          <vs:description>Months at latest employer</vs:description>\n' +
  '          <vs:value unit="months">1.98</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NA8921" key-characteristic="false">\n' +
  '          <vs:variable-name>NA8921_ad_time_1</vs:variable-name>\n' +
  '          <vs:description>Months at latest address</vs:description>\n' +
  '          <vs:value unit="months">52.97</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX7999" key-characteristic="false">\n' +
  '          <vs:variable-name>NX7999_enq_7d</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 7 days</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8000" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8000_enq_1m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 1 month</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8001" key-characteristic="true">\n' +
  '          <vs:variable-name>NX8001_enq_3m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 3 months</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8002" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8002_enq_6m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 6 months</vs:description>\n' +
  '          <vs:value unit="count">3</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8003" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8003_enq_12m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 12 months</vs:description>\n' +
  '          <vs:value unit="count">4</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8006" key-characteristic="true">\n' +
  '          <vs:variable-name>NX8006_enq_60m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer enquiries in the last 60 months</vs:description>\n' +
  '          <vs:value unit="count">11</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8045" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8045_enq_tcut_12m</vs:variable-name>\n' +
  '          <vs:description>Number of consumer telco or utility enquiries in the last 12 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8049" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8049_enq_own_3m</vs:variable-name>\n' +
  '          <vs:description>Own number of consumer enquiries in the last 3 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8050" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8050_enq_own_12m</vs:variable-name>\n' +
  '          <vs:description>Own number of consumer enquiries in the last 12 months</vs:description>\n' +
  '          <vs:value unit="count">0</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8059" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8059_enq_time_1</vs:variable-name>\n' +
  '          <vs:description>Months since last consumer enquiry</vs:description>\n' +
  '          <vs:value unit="months">1.98</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8060" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8060_enq_time_2</vs:variable-name>\n' +
  '          <vs:description>Months since 2nd last consumer enquiry</vs:description>\n' +
  '          <vs:value unit="months">4.87</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8062" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8062_enq_amt_3m</vs:variable-name>\n' +
  '          <vs:description>Total value of consumer enquiries < 3 mths</vs:description>\n' +
  '          <vs:value unit="AUD">400000</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NX8063" key-characteristic="false">\n' +
  '          <vs:variable-name>NX8063_enq_amt_60m</vs:variable-name>\n' +
  '          <vs:description>Total value of consumer enquiries < 60 mths</vs:description>\n' +
  '          <vs:value unit="AUD">3142573</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NY8002" key-characteristic="false">\n' +
  '          <vs:variable-name>NY8002_enq_6m</vs:variable-name>\n' +
  '          <vs:description>Number of commercial enquiries in the last 6 months</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '        <vs:characteristic id="NY8003" key-characteristic="false">\n' +
  '          <vs:variable-name>NY8003_enq_12m</vs:variable-name>\n' +
  '          <vs:description>Number of commercial enquiries in the last 12 months</vs:description>\n' +
  '          <vs:value unit="count">1</vs:value>\n' +
  '          <vs:data-level code="N">Negative</vs:data-level>\n' +
  '        </vs:characteristic>\n' +
  '      </vs:data-block>\n' +
  '    </vs:summary-data>\n' +
  '  </vs:product-data>\n' +
  '</vs:response>';