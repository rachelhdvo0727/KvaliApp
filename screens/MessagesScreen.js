import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, Text, View, Button } from "react-native";
import UserScreen1 from "./UserScreen1";
import UserScreen2 from "./UserScreen2";


const UserTab = createMaterialTopTabNavigator();

export default function ChatMessages(props) {
	return (
		<>
			<UserTab.Navigator>
				<UserTab.Screen
					name='User1'
					component={UserScreen1}
					options={{ title: "Robert Jacobsen" }}
				></UserTab.Screen>
				<UserTab.Screen
					name='User2'
					component={UserScreen2}
					options={{ title: "CSB Surf" }}
				></UserTab.Screen>
			</UserTab.Navigator>
		</>
	);
}


