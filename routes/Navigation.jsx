import React from 'react';
import {
   NavigationContainer,
   getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Redux
import { useSelector } from 'react-redux';
// Screens
import HomeTab from '../screens/HomeTab';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
   const routeName = getFocusedRouteNameFromRoute(route);
   switch (routeName) {
      case 'HomeTab' && 'HomeScreen':
         return 'FEED';
      // Discover
      case 'DiscoverScreen':
         return 'DISCOVER';
      case 'EventsScreen':
         return 'EVENTS';
      case 'MenuScreen':
         return 'MENU';
      // Chat
      case 'ChatTopTab' &&
         'ChatScreen' &&
         'ChatRoomScreen' &&
         'ChatAsPrivate' &&
         'ChatAsOrg':
         return 'CHAT';
      // Signup
      case 'SignUpScreen':
         return ' ';
      case 'LogInScreen':
         return ' ';
   }
};

export default function Navigation() {
   const loggedInUser = useSelector(state => state?.user?.loggedInUser);
   // console.log(loggedInUser);
   return (
      <NavigationContainer>
         {loggedInUser !== undefined ? (
            <Stack.Navigator
               screenOptions={{
                  headerTintColor: '#5050A5',
                  headerTitleStyle: {
                     fontFamily: 'Teko-Medium',
                     fontSize: 26,
                  },
               }}>
               <Stack.Screen
                  name="HomeTab"
                  component={HomeTab}
                  options={({ route }) => ({
                     headerTitle: getHeaderTitle(route),
                     headerShown: false,
                  })}
               />
               <Stack.Screen
                  name="ChatScreen"
                  component={ChatScreen}
                  options={({ route }) => ({
                     headerTitle: getHeaderTitle(route),
                  })}
               />
               <Stack.Screen
                  name="ChatRoomScreen"
                  component={ChatRoomScreen}
                  options={({ route }) => ({
                     title: route.params?.name,
                     headerBackTitleVisible: false,
                  })}
               />
               <Stack.Screen
                  name="EventDetailsScreen"
                  component={EventDetailsScreen}
                  options={({ route }) => ({
                     title: route.params?.eventTitle,
                     headerBackTitleVisible: false,
                  })}
               />
            </Stack.Navigator>
         ) : (
            <Stack.Navigator>
               <Stack.Screen
                  name="SignUpScreen"
                  component={SignUpScreen}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="LogInScreen"
                  component={LogInScreen}
                  options={{
                     headerShown: false,
                  }}
               />
            </Stack.Navigator>
         )}
      </NavigationContainer>
   );
}
