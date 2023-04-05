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
    paddingVertical: 32,
  },
  card_content: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  graphic: {
    alignSelf: 'center',
    maxWidth: '100%',
    height: 112,
    marginBottom: 32,
  },
  title_text: {
    textAlign: 'center',
  },
  body_text: {
    textAlign: 'center',
    paddingBottom: 40,
  },
  button: {
    width: '50%',
    alignSelf: 'center',
  },
});
