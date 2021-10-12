import React from "react";
import { StyleSheet } from "react-native";

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ChatReducer from "./store/reducers/ChatReducer";
import UserReducer from "./store/reducers/UserReducer";
import ReduxThunk from "redux-thunk";

// Navigation
import {
	NavigationContainer,
	getFocusedRouteNameFromRoute
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeTab from "./screens/HomeTab";
import ChatScreen from "./screens/ChatScreen";
import ChatRoomScreen from "./screens/ChatRoomScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LogInScreen from "./screens/LogInScreen";

// Icons
import { Entypo } from "@expo/vector-icons";

const getHeaderTitle = (route) => {
	// if routeName is undefined/null, return HomeTab
	const routeName = getFocusedRouteNameFromRoute(route) ?? "SignUpScreen";

	switch (routeName) {
		case "HomeTab":
			return "FEED";
		case "HomeScreen":
			return "FEED";
		case "DiscoveryScreen":
			return "DISCOVERY";
		case "ChatTopTab":
			return "CHAT";
		case "MenuScreen":
			return "MENU";
		// Chat
		case "ChatScreen":
			return "CHAT";
		case "ChatRoomScreen":
			return "CHAT";
		case "ChatAsPrivate":
			return "CHAT";
		case "ChatAsOrg":
			return "CHAT";
		// Signup
		case "SignUpScreen":
			return " ";
		case "LogInScreen":
			return " ";
	}
};
const Stack = createNativeStackNavigator();
export default function App() {
	const rootReducer = combineReducers({
		chat: ChatReducer,
		user: UserReducer
	});

	const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerTintColor: "#5050A5",
						headerTitleStyle: {
							fontWeight: "bold",
							textTransform: "uppercase"
						}
					}}
				>
					<Stack.Screen
						name='SignUpScreen'
						component={SignUpScreen}
						options={({ route }) => ({
							headerShown: false
						})}
					/>
					<Stack.Screen
						name='LogInScreen'
						component={LogInScreen}
						options={({ route }) => ({
							headerShown: false
						})}
					/>
					<Stack.Screen
						name='HomeTab'
						component={HomeTab}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
							headerBackTitleVisible: false,
							headerBackVisible: false
						})}
					/>
					<Stack.Screen
						name='ChatScreen'
						component={ChatScreen}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
							headerRight: ({ focused, color, size }) => (
								<Entypo name='new-message' size={size} color={color} />
							)
						})}
					/>
					<Stack.Screen
						name='ChatRoomScreen'
						component={ChatRoomScreen}
						options={({ route }) => ({
							title: route.params?.name,
							headerBackTitleVisible: false
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
		justifyContent: "center"
	}
});
