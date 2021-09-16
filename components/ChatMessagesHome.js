import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { useNavigation } from "@react-navigation/core";

export default function ChatMessagesHome(props) {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>All chatrooms</Text>
			<Button
				title='Chat room nr. 1'
				onPress={() => navigation.navigate("ChatScreen")}
			></Button>
			<Button
				title='Chat room nr. 2'
				onPress={() => navigation.navigate("ChatScreen2")}
			></Button>
		</View>
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
