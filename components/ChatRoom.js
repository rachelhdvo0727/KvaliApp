import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

const ChatRoom = (props) => (
	<TouchableOpacity style={styles.container} onPress={props.onPress}>
		<View>
			<Image source={props.imageSrc} />
			<View style={styles.textContainer}>
				<Text style={styles.title}>{props.titleText}</Text>
				<Text style={styles.title} numberOfLines={2}>
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
		padding: 30,
		marginHorizontal: 10,
		marginVertical: 3,

		flex: 0.08,
		flexDirection: "row",
		width: "100%",
	},
	textContainer: {
		flexGrow: 3,
		flex: 1,
		flexDirection: "column",
	},
	image: {
		flexGrow: 2,
		width: 30,
		height: 30,
		borderRadius: 50,
	},
	title: {
		fontSize: 16,
	},
});
