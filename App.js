import React from "react";
import { StyleSheet } from "react-native";

//Redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";

// Navigation
import {
	NavigationContainer,
	getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeTab from "./screens/HomeTab";
import ChatScreen from "./screens/ChatScreen";
import ChatRoomScreen from "./screens/ChatRoomScreen";

// Icons
import { Entypo } from "@expo/vector-icons";

function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeTabs";

	switch (routeName) {
		case "HomeTab":
			return "HOME";
		case "DiscoveryScreen":
			return "DICOVERY";
		case "ChatTopTap":
			return "CHAT";
		case "MenuScreen":
			return "MENU";
		// Chat
		case "ChatScreen":
			return "CHAT";
		case "ChatRoomScreen":
			return null;
		case "ChatAsPrivate":
			return "CHAT";
		case "ChatAsOrg":
			return "CHAT";
	}
}

const Stack = createNativeStackNavigator();
export default function App() {
	const rootReducer = combineReducers({
		chat: ChatReducer,
	});

	const store = createStore(rootReducer);

	return (
		<Provider store={store}>
			<NavigationContainer initialRouteName='HomeTab'>
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
						name='HomeTab'
						component={HomeTab}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
						})}
					/>
					<Stack.Screen
						name='ChatScreen'
						component={ChatScreen}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
							headerRight: ({ focused, color, size }) => (
								<Entypo name='new-message' size={size} color={color} />
							),
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
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	focusedBottomtab: {
		borderTopWidth: 5,
		borderTopColor: "#5050A5",
		paddingTop: 4,
		// borderRadius: "10 10 0 0",
	},
});
