import React from 'react';
import { StyleSheet, View } from 'react-native';

import TransparentLockIcon from '../../../Images/SVG/TransparentLockIcon';
import { Colors } from '../../../Theme';

const styles = StyleSheet.create({
  overlay_style: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lockedOverlay,
  },
  lock_style: {
    width: 32,
    height: 32,
  },
});

export default (): React.ReactElement => (
  <View style={styles.overlay_style}>
    <TransparentLockIcon style={styles.lock_style} />
  </View>
);
