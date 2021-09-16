import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import MessagesScreen from "./screens/MessagesScreen";
import HomeScreen from "./screens/HomeScreen";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer initialRouteName='Home'>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
				<Tab.Screen
					name='Messages'
					component={MessagesScreen}
					options={{ title: "Messages", headerShown: false }}
				/>
				<Tab.Screen name='Settings' component={Settings} />
			</Tab.Navigator>

			{/* Take route config. as its children w additional props for config & renders contents */}
			{/* Specify the inial route in a stack  */}
			{/* <Stack.Navigator initialRouteName='Home'>
				{/* 'name' & 'component' are required
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='User' component={UserProfile} />
			</Stack.Navigator> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
