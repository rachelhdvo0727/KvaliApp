import { StyleSheet } from 'react-native';

export default generalStyles = StyleSheet.create({
   headerH1: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#32305D',
      fontFamily: 'Teko-Medium',
   },
   normalText: {
      fontSize: 12,
      fontFamily: 'OpenSans-Regular',
   },
   whiteText: {
      color: '#fff',
   },
   pageCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   loggedInBackground: {
      backgroundColor: '#F5F5F5',
   },
   welcomeBackground: {
      backgroundColor: '#fff',
   },
   input: {
      height: 40,
      backgroundColor: 'lightgray',
      margin: 12,
      borderWidth: 1,
      borderColor: 'lightgray',
      padding: 10,
      width: 333,
   },
   formInput: {
      padding: 18,
      width: 333,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EEEEEE',
   },
   fieldset: {
      flexDirection: 'column',
      padding: 0,
      width: '100%',
      margin: 20,
      borderWidth: 0.5,
      borderColor: '#EEEEEE',
      borderRadius: 5,
   },
   btnPrimary: {
      width: 340,
      textAlign: 'left',
      backgroundColor: '#5050A5',
      padding: 18,
      borderRadius: 5,
      margin: 10,
   },
   btnPrimaryContent: { color: '#fff', fontWeight: '600' },
   btnLink: {
      fontWeight: 'bold',
      color: '#5050A5',
   },
   lightShadow: {
      shadowColor: '#AAAAAA29',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,

      elevation: 3,
   },
});

// export default generalStyles;
