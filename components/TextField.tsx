import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   inputLabel: string;
   value: string;
   placeholder: string;
   isSecureTextEntry: boolean;
   errorMessage: string;
   isValueValid: boolean;
   onValid(arg: boolean): void;
   setContent(arg: string): void;
}

export default function TextField({
   inputLabel,
   value,
   placeholder,
   isSecureTextEntry,
   errorMessage,
   isValueValid,
   onValid,
   setContent,
}: Props) {
   const [touched, setTouched] = React.useState(false);
   const [isSignUpScreen, setIsSignUpScreen] = React.useState(false);

   const handleChangeText = (enteredText: string) => {
      setTouched(true);
      enteredText === '' ? onValid(false) : onValid(true);
      setContent(enteredText);
   };

   return (
      <View style={[styles.textFieldContainer]}>
         <Text style={[styles.textfieldLabel, defaultStyles.normalText]}>
            {inputLabel}
         </Text>
         <TextInput
            style={styles.textfield}
            value={value}
            onChangeText={handleChangeText}
            onBlur={() => setTouched(true)}
            placeholder={placeholder}
            secureTextEntry={isSecureTextEntry}></TextInput>

         {/* Error message */}
         {isSignUpScreen && !isValueValid && touched && (
            <Text>{errorMessage}</Text>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   textFieldContainer: {
      flexDirection: 'column',
      paddingVertical: 10,
   },
   textfieldLabel: {
      fontWeight: '700',
      textTransform: 'uppercase',
      color: '#32305D',
      paddingHorizontal: 10,
   },
   textfield: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 13,
      // borderColor: '#000',
      // borderWidth: 1,
   },
});
