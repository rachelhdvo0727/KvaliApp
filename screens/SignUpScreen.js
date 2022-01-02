import React from 'react';
import defaultStyles from '../styles/General';
// Components
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import TextField from '../components/TextField';
import HrBar from '../components/HrBar';
import Button from '../components/Button';
import AppLogo from '../components/svgs/AppLogo';
// Redux
import { useDispatch } from 'react-redux';
import {
   signUp,
   restoreUser,
   refreshToken,
} from '../store/actions/UserActions';
import * as SecureStore from 'expo-secure-store';
// Navigation
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

export default function SignUpScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();

  
   const [email, onChangeEmail] = React.useState('');
   const [emailValid, setEmailValid] = React.useState(false);

   const [password, onChangePassword] = React.useState('');
   const [confirmPass, onChangeConfirmPass] = React.useState('');
   const [passwordValid, setPasswordValid] = React.useState(false);

   const handleSignUp = () => {
      password === confirmPass
         ? dispatch(signUp(email, password)) &&
           navigation.navigate('LogInScreen')
         : setPasswordValid(false) && console.error(password, confirmPass);
   };

   return (
      <View style={[defaultStyles.pageCenter, defaultStyles.welcomeBackground]}>
         <AppLogo />
         <Text style={[defaultStyles.headerH1, styles.titleAlign]}>
            Sign up to get access
         </Text>
         <View style={[styles.shadow, defaultStyles.fieldset]}>
            <TextField
               inputLabel="e-mail"
               placeholder="@student.cbs.dk"
               value={email}
               isValueValid={emailValid}
               onValid={valid => setEmailValid(valid)}
               setContent={content => onChangeEmail(content)}
               isSignUpScreen={true}></TextField>
            <HrBar />
            <TextField
               inputLabel="Password"
               placeholder="**********"
               isSecureTextEntry={true}
               value={password}
               isValueValid={passwordValid}
               onValid={valid => setPasswordValid(valid)}
               setContent={content => onChangePassword(content)}
               isSignUpScreen={true}></TextField>
            <HrBar />
            <TextField
               inputLabel="Repeat password"
               placeholder="**********"
               isSecureTextEntry={true}
               errorMessage="Passwords don't match"
               value={confirmPass}
               isValueValid={passwordValid}
               onValid={valid => setPasswordValid(valid)}
               setContent={content => onChangeConfirmPass(content)}></TextField>
         </View>
         <Button
            title="Get access"
            onPress={handleSignUp}
            buttonStyle={{
               justifyContent: 'flex-start',
               width: 340,
               padding: 18,
               ...styles.shadow,
            }}
         />
         <View style={styles.signUpLinkWrapper}>
            <Text>Already have an account? </Text>
            <Link style={defaultStyles.btnLink} to={{ screen: 'LogInScreen' }}>
               Log in
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
   titleAlign: {
      alignSelf: 'flex-start',
   },
   shadow: {
      ...defaultStyles.lightShadow,
   },
});
