import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Components
import DiscoverScreen from './DiscoverScreen';
import EventsScreen from './EventsScreen';
import EventDetailsScreen from './EventDetailsScreen';

const Stack = createNativeStackNavigator();
const DiscoverStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerTintColor: '#5050A5',
            headerTitleStyle: {
               fontFamily: 'Teko-Medium',
               fontSize: 26,
            },
         }}>
         <Stack.Screen
            name="DiscoverScreen"
            component={DiscoverScreen}
            options={{
               headerTitle: 'DISCOVER',
            }}
         />
         <Stack.Screen
            name="EventsScreen"
            component={EventsScreen}
            options={{
               headerTitle: 'EVENTS',
               headerBackTitle: '',
            }}
         />
         <Stack.Screen
            name="EventDetailsScreen"
            component={EventDetailsScreen}
            options={({ route }) => ({
               headerTitle: route.params?.eventTitle,
               headerBackTitle: '',
            })}
         />
      </Stack.Navigator>
   );
};

export default DiscoverStack;



