| Metric Type | ID Source | Bureau Sources |
|------------|-----------|----------------|
| Defaults | Centrix: Reference<br>VedaNZ: defaulter-detail-number | CENTRIX, VEDANZ |
| Insolvencies | Centrix: InsolvencyNumber | CENTRIX |
| Bankruptcies | VedaNZ: insolvency-number<br>(filtered where insolvency-status.code = 'STACB' and insolvency-status._ = 'Current Bankrupt') | VEDANZ |
| Judgements | Centrix: JudgementNumber<br>VedaNZ: unique-id | CENTRIX, VEDANZ |
| Score | Centrix: From ExtraDataItems where ExtraDataItemType = 'CentrixScore', then NameValuePairs where Name = 'Score'<br>VedaNZ: vcr-score-block.vcr-scores.score | CENTRIX, VEDANZ |