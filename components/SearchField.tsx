import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import defaultStyles from '../styles/General';

interface Props {
   inputLabel: string;
   value: string;
   placeholder: string;
   errorMessage: string;
   isValueValid: boolean;
   onValid(arg: boolean): void;
   setContent(arg: string): void;
}

function SearchField({
   inputLabel,
   value,
   placeholder,
   errorMessage,
   isValueValid,
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
      <View style={[styles.textFieldContainer, defaultStyles.lightShadow]}>
         <FontAwesome5
            name="search"
            size={20}
            color="#32305D"
            style={styles.searchIcon}
         />
         <TextInput
            style={styles.textfield}
            value={value}
            onChangeText={handleChangeText}
            onBlur={() => setTouched(true)}
            placeholder={placeholder}></TextInput>
      </View>
   );
}

const styles = StyleSheet.create({
   textFieldContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#AAAAAA29',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,

      elevation: 3,
   },
   searchIcon: {
      position: 'absolute',
      left: 25,
      zIndex: 999,
   },
   textfield: {
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginVertical: 13,
      width: '100%',
      height: 50,
      borderRadius: 5,
      paddingLeft: 50,
      fontFamily: 'OpenSans-Regular',
      fontSize: 12,
   },
});
export default SearchField;
