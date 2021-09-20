import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

const ChatRoom = (props) => (
	<TouchableOpacity onPress={props.onPress}>
		<View style={styles.container}>
			{props.children}
			{/* <Image source={props.imageSrc} /> */}
			<View style={styles.textContainer}>
				<Text style={styles.texts + styles.titleText}>{props.titleText}</Text>
				<Text style={styles.texts + styles.bodyText} numberOfLines={2}>
					{props.bodyText}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

export default ChatRoom;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		padding: 15,
		marginHorizontal: 10,
		marginVertical: 1,

		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "stretch",
	},
	textContainer: {
		flexBasis: 300,
		marginLeft: 20,
	},
	texts: {
		fontSize: 16,
	},
	titleText: {
		fontWeight: "bold",
	},
	bodyText: {},
});
