import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

interface Props {
   title: string;
   labelStyle?: any;
   buttonStyle?: any;
   icon: () => void;
   onPress(arg: any): void;
   // buttonStatus?: React.ForwardedRef<Text>;
}

function OutlinedButton({
   title,
   onPress,
   icon,
   buttonStyle,
}: // buttonStatus,
Props) {
   return (
      <Pressable onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
         <View style={styles.iconStyle}>{icon}</View>
         <Text style={styles.labelStyle}>{title}</Text>
      </Pressable>
   );
}

export default OutlinedButton;

const styles = StyleSheet.create({
   buttonStyle: {
      backgroundColor: '#fff',
      marginVertical: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderColor: '#5050A5',
      borderWidth: 1,

      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   labelStyle: {
      color: '#5050A5',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
   },
   iconStyle: {
      marginRight: 8,
   },
});
