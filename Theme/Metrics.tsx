import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  buttonHeight: 48,
  marginHorizontal: 10,
  paddingHorizontal: 24,
  bottomPadding: 20,
  topPadding: 24,
  progressBarVerticalPadding: 16,
  aboveButtonPadding: 20,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  buttonWidth: 300,
  buttonHorizontalPadding: 56,
  limbotVerticalMargin: 52,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  modalTransitionSpeed: 200,
  slidingModalTransitionSpeed: 600,
};
