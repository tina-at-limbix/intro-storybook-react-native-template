import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { useTheme } from 'react-native-limbix-ui';
import type { TextProps } from './types';

// Wrapper for native Text component and sets typography to the theme's base config
const Text: React.FC<TextProps> = ({
  children,
  style,
  as,
  ...restProps
}) => {
  const theme = useTheme();
  const textStyle = as && theme.typography.tags[as]
    ? theme.typography.tags[as] : {};
  return (
    <ReactNativeText
      {...restProps}
      style={[
        {
          color: theme.text.primary,
          ...textStyle,
        },
        style,
      ]}
    >
      {children}
    </ReactNativeText>
  );
};

export default Text;
