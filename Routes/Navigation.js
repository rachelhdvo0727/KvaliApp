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
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

const Stack = createNativeStackNavigator();

const getHeaderTitle = route => {
  // if routeName is undefined/null, return HomeTab
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'SignUpScreen';

  switch (routeName) {
    case 'HomeTab':
      return 'FEED';
    case 'HomeScreen':
      return 'FEED';
    case 'DiscoveryScreen':
      return 'DISCOVERY';
    case 'ChatTopTab':
      return 'CHAT';
    case 'MenuScreen':
      return 'MENU';
    // Chat
    case 'ChatScreen':
      return 'CHAT';
    case 'ChatRoomScreen':
      return 'CHAT';
    case 'ChatAsPrivate':
      return 'CHAT';
    case 'ChatAsOrg':
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
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
          }}>
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerBackTitleVisible: false,
              headerBackVisible: false,
            })}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerRight: ({ focused, color, size }) => (
                <Entypo name="new-message" size={size} color={color} />
              ),
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
            options={({ route }) => ({
              headerShown: false,
            })}
          />
          <Stack.Screen
            name="LogInScreen"
            component={LogInScreen}
            options={({ route }) => ({
              headerShown: false,
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
