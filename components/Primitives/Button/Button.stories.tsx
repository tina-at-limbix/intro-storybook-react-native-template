
import { SafeAreaView } from 'react-native';
import Button from './Button';
import { View } from '../View';


export default {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "onPress" },
  },
};

export const Default = {
  args: {
    buttonText: "Primary Button"
  },
};

export const Rounded = {
  args: {
    rounded: true,
    buttonText: "Rounded Button"
  },
};

export const RoundedOutline = {
  args: {
    rounded: true,
    type: "outline",
    buttonText: "Rounded (outline)Button"
  },
};

export const Clear = {
  args: {
    rounded: true,
    type: "clear",
    buttonText: "Clear Button"
  },
};