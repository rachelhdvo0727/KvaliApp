import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "../routes/Routes";
// Screens
import HomeScreen from "./HomeScreen";
import DiscoveryScreen from "./DiscoveryScreen";
import ChatTopTap from "./ChatTopTap";
import MenuScreen from "./MenuScreen";

import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomeTab() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				headerTitleStyle: {
					textTransform: "uppercase"
				},
				tabBarActiveTintColor: "#5050A5",
				tabBarIconStyle: {
					width: 40,
					height: 100
				},
				tabBarLabelStyle: {
					fontWeight: "600",
					textTransform: "uppercase"
				},
				tabBarShowIcon: true
			}}
		>
			<Tab.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={focused && styles.focusedBottomtab}>
							<Entypo name='home' size={size} color={color} />
						</View>
					),
					tabBarStyle: {
						fontWeight: 700
					}
				}}
			/>
			<Tab.Screen
				name='DiscoveryScreen'
				component={DiscoveryScreen}
				options={{
					title: "Discovery",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={focused && styles.focusedBottomtab}>
							<FontAwesome name='search' size={size} color={color} />
						</View>
					)
				}}
			/>
			<Tab.Screen
				name='ChatTopTab'
				component={ChatTopTap}
				options={{
					title: "Chat",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={focused && styles.focusedBottomtab}>
							<Entypo name='chat' size={size} color={color} />
						</View>
					),
					headerRight: ({ focused, color, size }) => (
						<Entypo name='new-message' size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name='MenuScreen'
				component={MenuScreen}
				options={{
					title: "Menu",
					tabBarIcon: ({ focused, color, size }) => (
						<View style={focused && styles.focusedBottomtab}>
							<Ionicons name='ios-menu' size={size} color={color} />
						</View>
					)
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	focusedBottomtab: {
		// borderTopWidth: 5,
		// borderTopColor: "#5050A5",
		// paddingTop: 4
		// borderRadius: "10 10 0 0",
	}
});
