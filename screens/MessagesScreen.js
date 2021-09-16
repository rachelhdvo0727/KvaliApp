import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View, Button } from "react-native";
import ChatRoom1 from "../components/ChatRoom1";
import ChatRoom2 from "../components/ChatRoom2";
import ChatMessagesHome from "../components/ChatMessagesHome";

const ChatStack = createNativeStackNavigator();

export default function ChatMessages(props) {
	return (
		<ChatStack.Navigator initialRouteName='Messages'>
			<ChatStack.Screen name='Messages' component={ChatMessagesHome} />
			<ChatStack.Screen
				name='ChatScreen'
				component={ChatRoom1}
			></ChatStack.Screen>
			<ChatStack.Screen
				name='ChatScreen2'
				component={ChatRoom2}
			></ChatStack.Screen>
		</ChatStack.Navigator>
	);
}
