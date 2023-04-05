import { StyleSheet } from 'react-native';

import {
  ApplicationStyles,
} from '../../Theme';

export default StyleSheet.create({
  ...ApplicationStyles,
  modal: {
    margin: 0,
  },
  modal_inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    maxHeight: '90%',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 16,
  },
  content_container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  graphic_container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title_text: {
    textAlign: 'center',
  },
  body_text: {
    textAlign: 'center',
    paddingBottom: 40,
  },
  buttons_container: {
    height: 60,
    flexDirection: 'row',
  },
  button_left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
  },
  button_right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 16,
  },
  alert_text_left: {
    textAlign: 'center',
  },
  alert_text_right: {
    textAlign: 'center',
  },
  graphic: {
    alignSelf: 'center',
    maxWidth: '100%',
    height: 140,
    marginBottom: 32,
  },
});
