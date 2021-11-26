import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function UserProfile(props) {
   const navigation = useNavigation();

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>User profile</Text>
         <Button
            title="Go to User profile... again"
            onPress={() => navigation.push('User')}
         />
         <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
   );
}
