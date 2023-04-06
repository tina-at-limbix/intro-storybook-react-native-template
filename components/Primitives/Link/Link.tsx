import React, { useContext } from 'react';
import {
  StyleProp, Text, TextStyle,
} from 'react-native';

import { linkToUrl } from '../../../Common/LinkingUtils';
import { LimbixUIContext, useTheme } from 'react-native-limbix-ui';
import type { TextProps } from '../Text';

type Props = {
  url?: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  underlined?: boolean;
} & TextProps;

const LinkText: React.FC<Props> = ({
  children,
  style,
  underlined,
  onPress,
  url,
  ...restProps
}) => {
  const { componentInteractionLogger } = useContext(LimbixUIContext);
  const theme = useTheme();
  const linkStyle: Array<StyleProp<TextStyle>> = [
    {
      textDecorationLine: underlined ? 'underline' : 'none',
      color: theme.text.link,
    },
    style,
  ];
  return (
    <Text
      {...restProps}
      style={linkStyle}
      onPress={async () => {
        if (url) {
          await componentInteractionLogger(
            'component_interaction',
            { component: 'LinkText', url },
          );
          await linkToUrl(url);
        } else {
          await componentInteractionLogger(
            'component_interaction',
            { component: 'LinkText', url: 'onPress' },
          );
          onPress();
        }
      }}
    >
      {children}
    </Text>
  );
};

export default LinkText;
