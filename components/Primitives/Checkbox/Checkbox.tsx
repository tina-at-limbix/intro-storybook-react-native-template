import * as React from 'react';
import {
  StyleProp, StyleSheet, TouchableOpacity, ViewStyle,
} from 'react-native';

import { Colors } from '../../../Theme';
import Checkmark from '../../../Images/SVG/Checkmark';

type Props = {
  style?: StyleProp<ViewStyle>;
  isChecked: boolean;
  onPress: () => void;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    height: 11,
    width: 16,
  },
});

export default (props: Props): React.ReactElement => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.container, props.style]}
    disabled={props.disabled}
  >
    {props.isChecked ? <Checkmark style={styles.checkmark} /> : <></>}
  </TouchableOpacity>
);
