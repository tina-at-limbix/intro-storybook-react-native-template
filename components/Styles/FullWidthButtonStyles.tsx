import { StyleSheet } from 'react-native';

import { Metrics } from '../../Theme';

export default StyleSheet.create({
  text: {
    alignSelf: 'stretch',
    flexGrow: 1,
    padding: Metrics.baseMargin,
    textAlign: 'center',
  },
  loading: {
    padding: 13,
  },
});
