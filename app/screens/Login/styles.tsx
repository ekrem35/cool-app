import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  linearGradientBackground: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: 36,
    borderRadius: 6,
    justifyContent: 'center',
  },
  logo: {height: 60, width: 160},
  userNameItem: {marginLeft: 0, marginTop: 48},
  passwordItem: {marginLeft: 0, marginTop: 24},
  signInButton: {marginTop: 36, borderRadius: 6, borderColor: '#fff'},
  buttonText: {color: '#fff'},
  inputTitle: {color: '#fff'},
  input: {color: '#fff', paddingLeft: 0},
  disabledButton: {borderColor: '#b3b4b5'},
  disabledButtonText: {color: '#b3b4b5'},
  formMessage: {color: '#fff', fontSize: 12, marginTop: 12},
});
