import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

interface Props {
   title: string;
   startIcon: React.ReactNode;
   endIcon: React.ReactNode;
   helpText: string;
   onPress(arg: any): void;
}

const PageButtonLink = ({
   title,
   startIcon,
   endIcon,
   helpText,
   onPress,
}: Props) => {
   return (
      <Pressable onPress={onPress} style={styles.container}>
         <View style={styles.icon}>{startIcon}</View>
         <View style={{ width: '72%' }}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.helpText}>{helpText}</Text>
         </View>
         <View style={styles.endIcon}>{endIcon}</View>
      </Pressable>
   );
};

export default PageButtonLink;

const styles = StyleSheet.create({
   container: {
      borderColor: '#EEEEEE',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      marginVertical: 15,
      flex: 1,
      flexDirection: 'row',

      alignItems: 'stretch',
   },
   titleText: {
      fontFamily: 'Teko-Medium',
      fontSize: 16,
   },
   helpText: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 12,
      color: '#AAAAAA',
   },
   icon: {
      marginRight: 15,
   },
   endIcon: {},
});
