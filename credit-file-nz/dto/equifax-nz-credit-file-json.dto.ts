export class EquifaxNzCreditFileJsonDto {
  'file-id': string;
  individual: {
    'individual-name': {
      'family-name': string;
      'first-given-name': string;
    };
    gender: string;
    'date-of-birth': string;
    address: Array<{
      'street-number': string;
      'street-name': string;
      city: string;
    }>;
  };
  'credit-file': {
    'credit-enquiry': Array<{
      'account-type': string;
      'enquiry-amount': string;
      'credit-enquirer': string;
      'first-given-name': string;
      'client-reference': string;
    }>;
  };
  'score-data': {
    'scorecard-name': string;
    'relative-risk': string;
    'relative-risk-index': string;
    'risk-odds': string;
  };
  'vcr-score-block': {
    'vcr-scores': {
      score: string;
      'scorecard-name': string;
      'scorecard-version': string;
      'relative-risk': string;
      'relative-risk-index': string;
      'relative-risk-odds': string;
    };
  };
  'negative-block': {
    characteristic: string[];
  };
}
