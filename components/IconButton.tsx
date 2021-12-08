import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   icon: React.ReactNode;
   onPress(arg: any): void;
}

const IconButton = ({ icon, onPress }: Props) => {
   return (
      <Pressable onPress={onPress} style={styles.container}>
         <View style={styles.iconContainer}>{icon}</View>
      </Pressable>
   );
};

export default IconButton;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#5050A5',
      borderRadius: 5,
      ...defaultStyles.lightShadow,
      width: 37,
      height: 37,
      justifyContent: 'center',
      alignItems: 'center',
   },
   iconContainer: {
      width: 20,
      height: 20,
   },
});
