import React from "react";
import { Messages } from "../dummy-db/DummyData";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Message from "../components/Message";
import { Users } from "../dummy-db/DummyData";
let moment = require("moment-timezone");

export default function ChatRoomScreen(props) {
	const evenIndex = Messages?.filter((index) => index % 2 === 0);
	console.log(Messages, evenIndex, Users);
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
});
