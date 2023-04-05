import { StyleSheet } from 'react-native';

import { ApplicationStyles } from '../../Theme';

export default StyleSheet.create({
  ...ApplicationStyles,
  modal: {
    margin: 0,
  },
  modal_inner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  card_safe_area: {
    alignItems: 'stretch',
    ...ApplicationStyles.shadow,
  },
  card: {
    alignItems: 'stretch',
    paddingVertical: 24,
    paddingHorizontal: 48,
  },
  header_text: {
    paddingBottom: 6,
  },
  title_text: {
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
    alignSelf: 'stretch',
  },
  confetti_container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  },
});
