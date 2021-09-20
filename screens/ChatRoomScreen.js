import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function ChatRoomScreen(props) {
	return (
		<View style={styles.view}>
			<View style={(styles.container, styles.sentMessageContainer)}>
				<Text style={styles.sentMessageText}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam?
				</Text>
			</View>
			<View style={styles.container}>
				<Image
					style={styles.senderImage}
					source={require("../assets/cbs-surf/cbs-surf.png")}
				/>
				<Text style={styles.incomingMessageText}>
					Lorem ipsum dolor sit amet, conset sadipscing elitr, sed ipsum dolor
					sit amet
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		padding: 20,
		height: 500,
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	container: {
		flexDirection: "row",
	},
	sentMessageContainer: {
		backgroundColor: "#5050A5",
	},
	sentMessageText: {
		color: "#fff",
	},
	incomingMessageContainer: {
		backgroundColor: "#EEEEEE",
	},
	incomingMessageText: {
		color: "#000",
		flexBasis: 50,
	},
	senderImage: {
		width: 30,
		height: 30,
		flexBasis: 150,
	},
	embeddedLink: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "grey",
		backgroundColor: "#fff",
	},
});
