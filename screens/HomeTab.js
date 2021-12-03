import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './HomeScreen';
import DiscoverStack from './DiscoverStack';
import ChatTopTap from './ChatTopTap';
import MenuScreen from './MenuScreen';

import { FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';

import { newChatRoom } from '../store/actions/ChatActions';

const Tab = createBottomTabNavigator();

export default function HomeTab() {

   return (
      <Tab.Navigator
         screenOptions={{
            headerTitleStyle: {
               textTransform: 'uppercase',
               color: '#5050A5',
               fontFamily: 'Teko-Medium',
               fontSize: 26,
            },
            tabBarActiveTintColor: '#5050A5',
            tabBarLabelStyle: {
               textTransform: 'uppercase',
               fontFamily: 'Teko-Medium',
               fontSize: 16,
            },
            tabBarShowIcon: true,
            tabBarStyle: {
               height: 90,
            },
         }}>
         <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
               headerTitle: 'Feed',
               title: 'Home',
               tabBarIcon: ({ focused, color, size }) => (
                  <View style={focused && styles.focusedBottomtab}>
                     <Entypo name="home" size={size} color={color} />
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="DiscoverStack"
            component={DiscoverStack}
            options={{
               headerShown: false,
               title: 'Discover',
               tabBarIcon: ({ focused, color, size }) => (
                  <View style={focused && styles.focusedBottomtab}>
                     <FontAwesome name="search" size={size} color={color} />
                  </View>
               ),
               headerShadowVisible: true,
            }}
         />
         <Tab.Screen
            name="ChatTopTab"
            component={ChatTopTap}
            options={{
               title: 'Chat',
               tabBarIcon: ({ focused, color, size }) => (
                  <View style={focused && styles.focusedBottomtab}>
                     <Entypo name="chat" size={size} color={color} />
                  </View>
               ),
               headerRight: () => (
                  <View style={styles.newMessageIcon}>
                     <Entypo
                        name="new-message"
                        size={20}
                        color="#5050A5"
                        // onPress={handleCreate}
                     />
                  </View>
               ),
            }}
         />
         <Tab.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{
               title: 'Menu',
               tabBarIcon: ({ focused, color, size }) => (
                  <View style={focused && styles.focusedBottomtab}>
                     <Ionicons name="ios-menu" size={size} color={color} />
                  </View>
               ),
            }}
         />
      </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   focusedBottomtab: {
      // borderTopWidth: 3,
      // borderTopColor: '#5050A5',
      // borderRadius: 5,
   },
   newMessageIcon: {
      marginRight: 20,
   },
});

{
   /* <Tab.Screen
				name='SignUpScreen'
				component={SignUpScreen}
				options={{
					title: "Sign Up",
					tabBarStyle: {
						fontWeight: 700
					}
				}}
			/> */
}
