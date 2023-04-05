import { StyleSheet } from 'react-native';

import { Metrics } from '../../Theme';

export default StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: Metrics.buttonHeight,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
  },
});
