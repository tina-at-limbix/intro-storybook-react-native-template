import type { TextProps as ReactNativeTextProps } from 'react-native';

import type { TypographyType } from '../../../Theme/Typography';

export type TextProps = {
  as?: keyof TypographyType['tags'],
} & ReactNativeTextProps;
