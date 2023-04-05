import Colors from '../Colors';
import type { ThemeType } from '../Theme';

import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'ProximaNova-Semibold': require('../../Assets/fonts/ProximaNova-Semibold.otf'),
    'ProximaNova-Medium': require('../../Assets/fonts/ProximaNova-Medium.otf'),
    'ProximaNova-Regular': require('../../Assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNova-Bold': require('../../Assets/fonts/ProximaNova-Bold.otf'),
  });
}


export const DEFAULT_TEXT_PADDING = 16;

export const defaultTheme: ThemeType = {
  background: {
    primary: Colors.white,
    secondary: Colors.limbixPrimary,
    tertiary: Colors.gray1,
    disabled: Colors.disabled,
    error: Colors.coral4,
  },
  button: {
    primary: Colors.limbixPrimary,
    secondary: Colors.white,
    disabled: Colors.gray6,
  },
  text: {
    primary: Colors.black,
    primaryVariant: Colors.limbixPrimary,
    secondary: Colors.white,
    tertiary: Colors.gray4,
    subHeader: Colors.gray2,
    disabled: Colors.disabledText,
    error: Colors.coralFont,
    link: Colors.limbixPrimary,
  },
  typography: {
    textPadding: DEFAULT_TEXT_PADDING,
    fontFamily: {
      regular: 'ProximaNova-Regular',
      medium: 'ProximaNova-Medium',
      semibold: 'ProximaNova-Semibold',
      bold: 'ProximaNova-Bold',
    },
    tags: {
      h1: { fontFamily: 'ProximaNova-Regular', fontSize: 32, lineHeight: 44 },
      h2: { fontFamily: 'ProximaNova-Regular', fontSize: 28, lineHeight: 40 },
      h3: { fontFamily: 'ProximaNova-Regular', fontSize: 24, lineHeight: 32 },
      h4: { fontFamily: 'ProximaNova-Regular', fontSize: 20, lineHeight: 28 },
      normal: { fontFamily: 'ProximaNova-Regular', fontSize: 18, lineHeight: 24 },
      medium: { fontFamily: 'ProximaNova-Regular', fontSize: 16, lineHeight: 24 },
      small: { fontFamily: 'ProximaNova-Regular', fontSize: 14, lineHeight: 20 },
      tiny: { fontFamily: 'ProximaNova-Regular', fontSize: 12, lineHeight: 16 },
      b: { fontFamily: 'ProximaNova-Bold' },
    },
  },
};
