import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View, Button } from "react-native";
import ChatRoom1 from "../components/ChatRoom1";
import ChatRoom2 from "../components/ChatRoom2";
import ChatMessagesHome from "../components/ChatMessagesHome";

const ChatStack = createNativeStackNavigator();

export default function UserScreen1(props) {
	return (
		<ChatStack.Navigator initialRouteName='Messages'>
			<ChatStack.Screen
				name='MessagesHome'
				component={ChatMessagesHome}
				options={{ headerShown: false }}
			/>
		</ChatStack.Navigator>
	);
}


