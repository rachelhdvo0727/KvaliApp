import React from 'react';
import { View, Text } from 'react-native';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from './ChatScreen';

function ChatAsOrg() {
   return (
      <>
         <View>
            <Text>Org user</Text>
         </View>
      </>
   );
}

const TopTap = createMaterialTopTabNavigator();

export default function ChatTopTap(props) {
   // console.log(props.route);
   return (
      <TopTap.Navigator
         screenOptions={{
            // headerTitle: props.routeName.headerTitle,
            tabBarActiveTintColor: '#5050A5',
            tabBarLabelStyle: {
               fontWeight: 'bold',
            },
            tabBarIndicatorStyle: {
               backgroundColor: '#5050A5',
               height: 4,
               borderRadius: '10 10 0 0',
            },
         }}>
         <TopTap.Screen
            name="ChatAsPrivate"
            component={ChatScreen}
            options={{
               title: 'Jacob Robertson',
            }}
         />
         <TopTap.Screen
            name="ChatAsOrg"
            component={ChatAsOrg}
            options={{ title: 'CBS Surf' }}
         />
      </TopTap.Navigator>
   );
}
