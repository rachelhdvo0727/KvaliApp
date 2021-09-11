import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Homescreen</Text>
			<Button
				title='Go to User Profile'
				onPress={() => navigation.navigate("User")}
			/>
		</View>
	);
}

function UserProfile({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>User profile</Text>
			<Button
				title='Go to User profile... again'
				onPress={() => navigation.push("User")}
			/>
			{/*  */}
			<Button title='Go back' onPress={() => navigation.goBack()} />
		</View>
	);
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* Take route config. as its children w additional props for config & renders contents */}
			{/* Specify the inial route in a stack  */}
			<Stack.Navigator initialRouteName='Home'>
				{/* 'name' & 'component' are required*/}
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='User' component={UserProfile} />
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
