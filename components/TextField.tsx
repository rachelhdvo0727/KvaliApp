import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface Props {
   inputLabel: string;
   text: string;
   errorMessage: string;
   isValid: boolean;
   onValid(arg: boolean): void;
   setContent(arg: string): void;
}

export default function TextField({
   inputLabel,
   text,
   errorMessage,
   isValid,
   onValid,
   setContent,
}: Props) {
   const [touched, setTouched] = React.useState(false);

   const handleChangeText = (enteredText: string) => {
      setTouched(true);
      enteredText === '' ? onValid(false) : onValid(true);
      setContent(enteredText);
   };
   return (
      <View style={styles.textFieldContainer}>
         <Text>{inputLabel}</Text>

         <TextInput
            style={styles.textfield}
            value={text}
            onChangeText={handleChangeText}
            onBlur={() => setTouched(true)}></TextInput>

         {/* Error message */}
         {!isValid && touched && <Text>{errorMessage}</Text>}
      </View>
   );
}

const styles = StyleSheet.create({
   textfield: {
      flex: 1,
      height: 40,
      backgroundColor: 'lightgrey',
      marginLeft: 10,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginBottom: 10,
   },
   textFieldContainer: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 5,
   },
});
