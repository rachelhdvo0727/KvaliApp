import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ChatScreen(props) {
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Chat Room 1</Text>
			{/* <Button
				title='Go back'
				onPress={() => navigation.push("Messages")}
			></Button> */}
		</View>
	);
}
