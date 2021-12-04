import React from 'react';
import defaultStyles from '../styles/General';
import { StyleSheet, View, Text, Pressable } from 'react-native';

interface Props {
   title: string;
   labelStyle?: any;
   buttonStyle?: any;
   icon: () => void;
   onPress(arg: any): void;
}

export default function OutlinedButton({
   title,
   onPress,
   icon,
   buttonStyle,
}: Props) {
   return (
      <Pressable onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
         <View style={styles.iconStyle}>{icon}</View>
         <Text style={styles.labelStyle}>{title}</Text>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   buttonStyle: {
      backgroundColor: '#fff',
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderColor: '#5050A5',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   labelStyle: {
      color: '#5050A5',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
      // textTransform: 'capitalize',
   },
   iconStyle: {
      marginRight: 8,
   },
});
