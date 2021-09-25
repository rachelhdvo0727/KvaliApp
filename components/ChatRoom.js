import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ChatRoom = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={styles.container}>
				{props.children}
				{/* <Image source={props.imageSrc} /> */}
				<View style={styles.textContainer}>
					<Text style={[styles.texts, styles.titleText]}>
						{props.titleText}
					</Text>
					<Text
						style={[styles.texts, styles.bodyText]}
						numberOfLines={1}
						ellipsizeMode='tail'
					>
						{props.bodyText}
					</Text>
				</View>
				<View style={styles.dotView}>
					<View style={styles.dot}></View>
					<Text>{props.timeStamp}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

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
	dotView: {
		marginLeft: "auto",
		alignItems: "center",
	},
	dot: {
		height: 12,
		width: 12,
		backgroundColor: "#5050A5",
		borderRadius: 100 / 2,
		marginBottom: 10,
	},
});
