import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import MessagesScreen from "./screens/MessagesScreen";
import Settings from "./screens/Settings";

// Icons
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer initialRouteName='Home'>
			<Tab.Navigator>
				<Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
				<Tab.Screen name='Discovery' component={DiscoveryScreen}></Tab.Screen>
				<Tab.Screen
					name='CHAT'
					component={MessagesScreen}
					options={{
						title: "CHAT",
						headerRight: () => (
							<Entypo
								name='new-message'
								size={25}
								color='#5050A5'
								onPress={() => alert("show a popup here")}
							/>
						),
					}}
				/>
				<Tab.Screen name='Settings' component={Settings} />
			</Tab.Navigator>
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
