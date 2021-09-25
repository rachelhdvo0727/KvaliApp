import React from "react";
import { Messages } from "../dummy-db/DummyData";
import { StyleSheet, TextInput, View, Button, Image } from "react-native";
import Message from "../components/Message";
import { Users } from "../dummy-db/DummyData";
let moment = require("moment-timezone");

export default function ChatRoomScreen(props) {
	console.log(props);
	const [onChangeMsg, setOnChangeMsg] = React.useState("");
	const handleSend = () => {
		console.log("value " + onChangeMsg);
		// setOnChangeMsg(onChangeMsg);
	};
	return (
		<>
			<View style={styles.view}>
				{Messages.map((msg, i) => {
					if (msg?.user.id === "1") {
						return (
							<Message
								key={i}
								msgWrapperStyles={styles.alignMsgBox}
								msgBoxStyles={styles.alignMsgBox}
								textMsgBoxStyles={styles.sentMsgContainer}
								textMsgStyles={styles.sentMsgText}
								text={msg.messageText}
								timeStampText={moment(msg.messageTimestamp).format("HH:mm")}
								timeStampStyles={{ textAlign: "right" }}
							/>
						);
					} else {
						return (
							<Message
								key={i}
								senderImage={
									<Image
										style={styles.senderImage}
										source={require("../assets/cbs-surf/cbs-surf.png")}
									/>
								}
								textMsgBoxStyles={styles.incomingMsgContainer}
								text={msg.messageText}
								timeStampText={moment(msg.messageTimestamp).format("HH:mm")}
							/>
						);
					}
				})}
				<View style={styles.inputView}>
					<TextInput
						style={styles.input}
						onChangeText={(e) => setOnChangeMsg(e)}
						value={onChangeMsg}
						placeholder=''
					/>
					<Button title='Send' onPress={handleSend}></Button>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		padding: 18,
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		overflow: "scroll",
	},
	alignMsgBox: {
		alignSelf: "flex-end",
	},
	sentMsgText: {
		color: "#fff",
	},
	sentMsgContainer: {
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 4,
		backgroundColor: "#5050A5",
	},
	senderImage: {
		width: 30,
		height: 30,
	},
	incomingMsgContainer: {
		backgroundColor: "#EEEEEE",
		borderBottomRightRadius: 12,
		borderBottomLeftRadius: 4,
		marginLeft: 10,
	},
	incomingMessageText: {
		borderBottomRightRadius: 15,
		borderBottomLeftRadius: 10,
	},
	timeStampStyles: {},
	embeddedLink: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "grey",
		backgroundColor: "#fff",
	},
	input: {
		flex: 1,
		height: 40,
		backgroundColor: "lightgray",
		marginLeft: 10,
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginBottom: 10,
	},
	inputView: {
		flexDirection: "row",
		marginTop: 20,
		marginLeft: 5,
	},
});
