import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

interface Props {
   title: string;
   labelStyle?: any;
   buttonStyle?: any;
   iconStyle?: any;
   secondaryIconStyle?: any;
   icon: () => void;
   secondaryIcon: () => void;
   onPress(arg: any): void;
}

export default function OutlineButton({
   title,
   icon,
   secondaryIcon,
   buttonStyle,
   labelStyle,
   iconStyle,
   secondaryIconStyle,
   onPress,
}: Props) {
   return (
      <Pressable onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
         <View style={styles.leftWrapper}>
            <View style={[styles.iconStyle, iconStyle]}>{icon}</View>
            <Text style={[styles.labelStyle, labelStyle]}>{title}</Text>
         </View>
         <View style={[secondaryIconStyle]}>{secondaryIcon}</View>
      </Pressable>
   );
}

const styles = StyleSheet.create({
   buttonStyle: {
      margin: 10,
      // padding: 18,
      backgroundColor: '#5050A5',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   leftWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   labelStyle: {
      color: '#fff',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
      // textTransform: 'capitalize',
   },
   iconStyle: {
      marginRight: 8,
   },
   secondaryIconStyle: {},
});
