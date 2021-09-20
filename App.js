import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
	NavigationContainer,
	getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DiscoveryScreen from "./screens/DiscoveryScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatRoomScreen from "./screens/ChatRoomScreen";
import MenuScreen from "./screens/MenuScreen";
import Test from "./screens/Test";

// Icons
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeTabs";

	switch (routeName) {
		case "HomeTabs":
			return "Home";
		case "DiscoveryScreen":
			return "Discovery";
		case "MenuScreen":
			return "Menu";
		// Chat
		case "ChatAsTabs":
			return "Chat";
		case "ChatScreen":
			return "Chat";
		case "ChatAsPrivate":
			return "Chat";
		case "ChatAsOrg":
			return "Chat";
	}
}

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
function ChatAsTabs() {
	return (
		<TopTap.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#5050A5",
				tabBarLabelStyle: {
					fontWeight: "bold",
				},
				tabBarIndicatorStyle: {
					backgroundColor: "#5050A5",
					height: 4,
					borderRadius: "10 10 0 0",
				},
			}}
		>
			<TopTap.Screen
				name='ChatAsPrivate'
				component={ChatScreen}
				options={{
					title: "Jacob Robertson",
				}}
			/>
			<TopTap.Screen
				name='ChatAsOrg'
				component={ChatAsOrg}
				options={{ title: "CBS Surf" }}
			/>
		</TopTap.Navigator>
	);
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#5050A5",
				tabBarIconStyle: {
					width: 40,
					height: 100,
				},
				tabBarLabelStyle: {
					fontWeight: "600",
					textTransform: "uppercase",
				},
				headerTitleStyle: {
					textTransform: "uppercase",
				},
				tabBarShowIcon: true,
			}}
		>
			<Tab.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					title: "Home",
					tabBarIcon: ({ focused, color, size }) => (
						<Entypo name='home' size={size} color={color} />
					),
					tabBarStyle: {
						fontWeight: 700,
					},
				}}
			/>
			<Tab.Screen
				name='DiscoveryScreen'
				component={DiscoveryScreen}
				options={{
					title: "Discovery",
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome name='search' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='ChatAsTabs'
				component={ChatAsTabs}
				options={{
					title: "Chat",
					tabBarIcon: ({ focused, color, size }) => (
						<Entypo name='chat' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='MenuScreen'
				component={MenuScreen}
				options={{
					title: "Menu",
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons name='ios-menu' size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer initialRouteName='HomeTabs'>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: "#5050A5",
					headerTitleStyle: {
						fontWeight: "bold",
						textTransform: "uppercase",
					},
				}}
			>
				<Stack.Screen
					name='HomeTabs'
					component={HomeTabs}
					options={({ route }) => ({
						title: "Home",
						headerTitle: getHeaderTitle(route),
					})}
				/>
				<Stack.Screen
					name='ChatAsTabs'
					component={ChatAsTabs}
					options={({ route }) => ({
						title: "Chat",
						headerTitle: getHeaderTitle(route),
					})}
				/>
				<Stack.Screen
					name='ChatRoomScreen'
					component={ChatRoomScreen}
					options={({ route }) => ({
						title: route.params?.name,
						headerBackTitleVisible: false,
					})}
				/>
			</Stack.Navigator>
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
