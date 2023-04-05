import { StyleSheet } from 'react-native';

import { Colors } from '../../Theme';

export default StyleSheet.create({
  label: {
    color: Colors.gray3,
  },
  text: {
    flex: 1,
    padding: 0,
  },
  text_input: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: Colors.gray5,
  },
  sub_text: {
    marginTop: 2,
  },
  password_icon: {
    height: 24,
    width: 24,
    alignSelf: 'flex-end',
    marginBottom: 0,
  },
  row_container: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
