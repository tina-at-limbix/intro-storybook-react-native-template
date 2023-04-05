import * as React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import { useState } from 'react';

type Props = {
  style?: ViewStyle;
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  tapTriggerAmount?: number;
  delay?: number;
};

const DEFAULT_TAP_TRIGGER_AMOUNT = 7;
const DEFAULT_DELAY = 300;

const SecretButton: React.FC<Props> = (props: Props) => {
  const [taps, setTaps] = useState(0);
  const [lastTap, setLastTap] = useState(Date.now());

  const onPressButton = () => {
    const now = Date.now();
    let newTaps = 1;
    if (taps === 0 || (now - lastTap < (props.delay || DEFAULT_DELAY))) {
      newTaps = taps + 1;
    }

    if (newTaps >= (props.tapTriggerAmount || DEFAULT_TAP_TRIGGER_AMOUNT)) {
      props.onPress();
      newTaps = 0;
    }

    setLastTap(now);
    setTaps(newTaps);
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPressButton}
      disabled={props.disabled}
    >
      <View style={props.style}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SecretButton;
