export const getApplicationNameAndApplicationLayerAggirgationRequest = {
  'size': 0,
  'aggs': {
    'group_by_ApplicationName': {
      'terms': {
        'field': 'ApplicationName'
      },
      'aggs': {
        'group_by_ApplicationLayer': {
          'terms': {
            'field': 'ApplicationLayer'
          }
        }
      }
    }
  }
};
