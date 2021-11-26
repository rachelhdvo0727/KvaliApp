import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import TextField from '../components/TextField';
import HrBar from '../components/HrBar';
import AppLogo from '../components/svgs/AppLogo';
import defaultStyles from '../styles/General';

import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/UserActions';
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
         <Pressable
            style={[defaultStyles.btnPrimary, defaultStyles.lightShadow]}
            onPress={handleSignUp}>
            <Text style={defaultStyles.btnPrimaryContent}>Get access</Text>
         </Pressable>
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
