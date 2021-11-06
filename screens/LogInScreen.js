import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Link } from '@react-navigation/native';
import defaultStyles from '../styles/General';
import { getSavedData } from '../utils/functions';
import * as SecureStore from 'expo-secure-store';

import { useDispatch } from 'react-redux';
import { logIn, restoreUser, refreshToken } from '../store/actions/UserActions';

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
         let userToken, user;
         try {
            let expired = new Date(
               JSON.parse(await SecureStore.getItemAsync('expiresIn')),
            );

            // Refresh token if current user's expiry is less than real-time
            if (expired < new Date()) {
               dispatch(refreshToken(getSavedData('refreshToken')));
            }

            userToken = getSavedData('token');
            user = JSON.parse(await SecureStore.getItemAsync('userObj'));
         } catch (e) {
            console.error(e);
         }
         dispatch(restoreUser(user, userToken));
      }
      fetchTokenFromStorage();
   });

   return (
      <View style={defaultStyles.pageCenter}>
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
         <Pressable
            style={[defaultStyles.btnPrimary, defaultStyles.lightShadow]}
            onPress={handleLogIn}>
            <Text style={defaultStyles.btnPrimaryContent}>Log in</Text>
         </Pressable>
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
});
