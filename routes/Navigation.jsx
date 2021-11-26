import React from 'react';
import {
   NavigationContainer,
   getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// Redux
import { useSelector } from 'react-redux';
// Screens
import HomeTab from '../screens/HomeTab';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
   // if routeName is undefined/null, return HomeTab
   const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeTab';

   switch (routeName) {
      case 'HomeTab' && 'HomeScreen':
         return 'FEED';
      case 'DiscoverScreen':
         return 'DISCOVER';
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
