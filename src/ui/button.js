import {StyleSheet} from 'react-native';
export const buttonStyle = StyleSheet.create({
  btnAccept: {
    width: '50%',
    justifyContent: 'center',
    marginHorizontal: 8,
    height: 40,
    marginTop: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 25,
  },
  btnAcceptDisable: {
    width: '50%',
    borderRadius: 25,
    marginHorizontal: 8,
    marginTop: 10,
    backgroundColor: '#919191',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignOut: {},
});
