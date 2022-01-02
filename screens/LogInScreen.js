import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Button from '../components/Button';
import { Link } from '@react-navigation/native';
import defaultStyles from '../styles/General';

import { useDispatch } from 'react-redux';
import { logIn, restoreUser, refreshToken } from '../store/actions/UserActions';
import * as SecureStore from 'expo-secure-store';

export default function LogInScreen(props) {
   const dispatch = useDispatch();

   const [email, onChangeEmail] = React.useState('');
   const [password, onChangePassword] = React.useState('');
   const handleLogIn = () => {
      // Attach and Send to Actions
      dispatch(logIn(email, password));
   };

   React.useEffect(() => {
      async function fetchTokenFromStorage() {
         let userToken, user, expiration, now, refreshTokenString;

         try {
            expiration = new Date(
               JSON.parse(await SecureStore.getItemAsync('expiration')),
            );
            now = new Date();
            if (expiration < now) {
               // then it is expired
               refreshTokenString = await SecureStore.getItemAsync(
                  'refreshToken',
               );
               dispatch(refreshToken(refreshTokenString));
            }
            console.log('no refresh token needed');

            userToken = await SecureStore.getItemAsync('userToken');
            user = JSON.parse(await SecureStore.getItemAsync('user'));
         } catch (e) {
            // Restoring token failed
            console.log('restore token failed', e);
         }
         dispatch(restoreUser(user, userToken));
      }
      // fetchTokenFromStorage();
   }, []);

   return (
      <View style={[defaultStyles.pageCenter, defaultStyles.welcomeBackground]}>
         <Text style={[defaultStyles.headerH1, styles.titleAlign]}>Log in</Text>
         <View style={[defaultStyles.fieldset, defaultStyles.lightShadow]}>
            <TextInput
               style={defaultStyles.formInput}
               onChangeText={v => onChangeEmail(v)}
               value={email}
               placeholder="student@student.cbs.dk"></TextInput>
            <TextInput
               style={defaultStyles.formInput}
               onChangeText={v => onChangePassword(v)}
               secureTextEntry={true}
               value={password}
               placeholder="********"></TextInput>
         </View>

         <Text style={[defaultStyles.btnLink, styles.forgotPass]}>
            Forgot password?
         </Text>
         <Button
            title="Login"
            onPress={handleLogIn}
            buttonStyle={{
               justifyContent: 'flex-start',
               width: 340,
               padding: 18,
               ...styles.shadow,
            }}
         />
         <View style={styles.signUpLinkWrapper}>
            <Text>Don't have an account? </Text>
            <Link style={defaultStyles.btnLink} to={{ screen: 'SignUpScreen' }}>
               Sign up
            </Link>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   signUpLinkWrapper: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      margin: 20,
   },
   forgotPass: {
      margin: 10,
   },
   titleAlign: {
      alignSelf: 'flex-start',
   },
   welcomeView: {
      backgroundColor: '#fff',
   },
});
