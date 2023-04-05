import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonType = 'solid' | 'clear' | 'outline';

export type ButtonProps = {
  onPress: () => void;
  buttonText: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  disabled?: boolean;
  // Loading indicator
  loading?: boolean;
  loadingIndicatorColor?: string;
  // Type of button
  type?: ButtonType;
  // Rounded button
  rounded?: boolean;
}
