import { StyleSheet } from 'react-native';

import Metrics from './Metrics';
import Colors from './Colors';

export default {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  mainContainerGray: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainContainerCentered: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Metrics.marginVertical * 2,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
  },
  innerContainerVerticalPadding: {
    paddingTop: 20,
  },
  containerPadded: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: Metrics.topPadding,
    paddingBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
  },
  containerCenteredPadded: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Metrics.topPadding,
    paddingBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
  },
  containerCenteredVerticalPadded: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Metrics.topPadding,
    paddingBottom: Metrics.bottomPadding,
    backgroundColor: Colors.transparent,
  },
  containerCenteredTopPadded: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Metrics.topPadding,
    backgroundColor: Colors.transparent,
  },
  containerCenteredSidesTopPadded: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Metrics.topPadding,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
  },
  containerCenteredSidesPadded: {
    flex: 1,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
  },
  containerCentered: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
  },
  innerScrollContainerPadded: {
    flexGrow: 1,
    alignItems: 'stretch',
    paddingTop: Metrics.topPadding,
    paddingBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
  },
  innerScrollContainerCenteredPadded: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: Metrics.topPadding,
    paddingBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.paddingHorizontal,
    backgroundColor: Colors.transparent,
  },
  section: {
    margin: Metrics.section,
    padding: Metrics.baseMargin,
  },
  sectionText: {
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.white,
    marginVertical: Metrics.smallMargin,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white,
    padding: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
  },
  subContainerView: {
    paddingTop: 20,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    color: Colors.black,
  },
  titleText2: {
    fontWeight: '500',
    fontSize: 44,
    color: Colors.black,
  },
  bodyText: {
    fontWeight: 'normal',
    fontSize: 24,
    color: Colors.black,
  },
  fullWidthSVG: {
    marginVertical: 24,
    width: '100%',
  },
  fullWidthSVGNoTopMargin: {
    marginBottom: 24,
    width: '100%',
  },
  blackHeaderText: {
    marginTop: 64,
    color: 'black',
    marginHorizontal: Metrics.paddingHorizontal,
  },
  whiteHeaderText: {
    color: 'white',
    marginTop: 64,
    marginHorizontal: Metrics.paddingHorizontal,
  },
  bottomButtonContainer: {
    flex: 1,
    minHeight: Metrics.buttonHeight + Metrics.aboveButtonPadding,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  bottomButtonContainerFixedHeight: {
    height: Metrics.buttonHeight + Metrics.aboveButtonPadding,
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  progressBarContainer: {
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
    backgroundColor: Colors.white,
    paddingTop: Metrics.progressBarVerticalPadding,
  },
  progressBarContainerHorizontalPadded: {
    alignSelf: 'center',
    width: '100%',
    position: 'absolute',
    paddingTop: Metrics.progressBarVerticalPadding,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.paddingHorizontal,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  shadowLarge: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  darkLabel: {
    color: Colors.white,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hairline_divider: {
    borderColor: Colors.gray6,
    height: 0,
    borderWidth: StyleSheet.hairlineWidth,
  },
} as const;
