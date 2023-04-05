import { StyleSheet } from 'react-native';

import ApplicationStyles from '../../Theme/ApplicationStyles';

export default StyleSheet.create({
  ...ApplicationStyles,
  grid_container: {
    position: 'relative',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  grid_row: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
  },
  square: {
    position: 'relative',
    aspectRatio: 1,
    width: '16.66666%',
  },
  content_parent: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
