import React, { useContext, useState } from 'react';
import {
  TouchableOpacity, ActivityIndicator,
} from 'react-native';

import { LimbixUIContext, useTheme } from 'react-native-limbix-ui';
import styles from '../../Styles/FullWidthButtonStyles';
import type { ButtonProps } from './types';
import { Text } from '../Text';

const DEBOUNCE_TIME = 500;

export default (props: ButtonProps): React.ReactElement => {
  const theme = useTheme();
  const { componentInteractionLogger } = useContext(LimbixUIContext);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [waitingForOnPress, setWaitingForOnPress] = useState(false);
  const {
    loading, disabled, loadingIndicatorColor, buttonText,
  } = props;

  const buttonStyle = { backgroundColor: disabled ? theme.button.disabled : theme.button.primary };
  const buttonTextStyle = [
    styles.text,
    {
      fontFamily: theme.typography.fontFamily.semibold,
      color: disabled ? theme.text.disabled : theme.text.secondary,
    },
  ];

  const onPressDebounced = async () => {
    const now = Date.now();
    if (now - lastTapTime > DEBOUNCE_TIME) {
      componentInteractionLogger(
        'component_interaction',
        { component: 'FullWidthButton', button_text: buttonText },
      );
      setWaitingForOnPress(true);
      await props.onPress();
      setWaitingForOnPress(false);
      setLastTapTime(now);
    }
  };

  const isLoading = loading || waitingForOnPress;

  return (
    <TouchableOpacity
      style={[buttonStyle, props.style]}
      onPress={onPressDebounced}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={loadingIndicatorColor || 'white'}
          style={styles.loading}
        />
      ) : (
        <Text as="normal" style={[buttonTextStyle, props.textStyle]}>
          {buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
};
