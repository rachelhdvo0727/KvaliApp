import React from "react";
import { useNavigation } from "@react-navigation/core";

import { StyleSheet, Text, View, Button } from "react-native";


export default function HomeScreen(props) {
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>This is the m*****f**k Home Screen</Text>
		</View>
	);
}

