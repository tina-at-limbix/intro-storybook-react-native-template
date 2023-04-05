import React, { useContext, useState } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from '../../Styles/ButtonStyles';
import type { ButtonProps } from './types';
import { LimbixUIContext, useTheme } from 'react-native-limbix-ui'
import Colors from '../../../Theme/Colors';
import { Text } from '../Text';

const DEBOUNCE_TIME = 500;

export default (props: ButtonProps): React.ReactElement => {
  const theme = useTheme();
  const { componentInteractionLogger } = useContext(LimbixUIContext);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [waitingForOnPress, setWaitingForOnPress] = useState(false);
  const {
    buttonText,
    backgroundColor,
    disabled,
    loading,
    style,
    textStyle,
    loadingIndicatorColor,
    type = 'solid',
    rounded,
  } = props;

  const buttonStyle = [
    styles.button,
    type === 'solid' && { backgroundColor: theme.button.primary },
    type === 'clear' && { backgroundColor: Colors.transparent },
    type === 'outline' && {
      borderColor: theme.button.primary,
      borderWidth: 1,
    },
    backgroundColor && { backgroundColor },
    rounded && { borderRadius: 22.5 },
    disabled && {
      backgroundColor: theme.button.disabled,
      borderColor: theme.button.disabled,
    },
  ];

  const buttonTextStyle = [styles.text,
    {
      fontFamily: theme.typography.fontFamily.semibold,
      color: theme.text.secondary,
    },
    (type === 'outline' || type === 'clear') && { color: theme.text.primary },
    disabled && { color: theme.text.disabled },
    textStyle,
  ];

  const onPressDebounced = async () => {
    const now = Date.now();
    if (now - lastTapTime > DEBOUNCE_TIME) {
      componentInteractionLogger(
        'component_interaction',
        { component: 'Button', button_text: buttonText },
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
      style={[buttonStyle, style]}
      onPress={onPressDebounced}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingIndicatorColor || 'white'} />
      ) : (
        <Text as="normal" style={buttonTextStyle}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};
