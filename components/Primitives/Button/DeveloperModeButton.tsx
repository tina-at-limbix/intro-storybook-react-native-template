import * as React from 'react';
import {
  Alert,
  View,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import { useState } from 'react';

type Props = {
  style?: ViewStyle;
  developerModeEnabled: boolean;
  developerModeAllowed: boolean;
  onToggleDeveloperMode: () => void;
};

const tapTriggerAmount = 7;
const delay = 300;

const DeveloperModeButton: React.FC<Props> = ({
  children,
  style,
  developerModeEnabled,
  onToggleDeveloperMode,
  developerModeAllowed,
}) => {
  const [taps, setTaps] = useState(0);
  const [lastTap, setLastTap] = useState(Date.now());

  const onPressButton = () => {
    const now = Date.now();
    let newTaps = 1;
    if (taps === 0 || (now - lastTap < delay)) {
      newTaps = taps + 1;
    }

    if (newTaps >= tapTriggerAmount) {
      const alertText = developerModeEnabled
        ? 'Developer mode will be disabled.'
        : 'Developer mode will be enabled. Tap a module to make it the current module, or '
        + 'tap a week number to make that the current week.';

      Alert.alert(
        'Developer Mode',
        alertText,
        [
          { text: 'Continue', onPress: () => onToggleDeveloperMode() },
        ],
        { cancelable: false },
      );
      newTaps = 0;
    }

    setLastTap(now);
    setTaps(newTaps);
  };
  return (
    <TouchableWithoutFeedback
      onPress={onPressButton}
      disabled={!developerModeAllowed}
    >
      <View style={style}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DeveloperModeButton;
