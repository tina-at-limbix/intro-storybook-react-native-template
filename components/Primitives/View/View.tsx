import React from 'react';
import { View as ReactNativeView } from 'react-native';
import type { ViewProps } from 'react-native';

import Colors from '../../../Theme/Colors';

// Wrapper for native View component
const View: React.FC<ViewProps> = (props: ViewProps) => {
  const {
    style,
    children,
    ...restProps
  } = props;
  return (
    <ReactNativeView
      {...restProps}
      style={[{ backgroundColor: Colors.transparent }, style]}
    >
      {children}
    </ReactNativeView>
  );
};

export default View;
