import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import {
	newChatRoom,
	toggleHappy,
	chatRooms,
} from "../store/actions/ChatActions";

let moment = require("moment-timezone");

import { StyleSheet, FlatList, SafeAreaView, Image } from "react-native";
import ChatRoom from "../components/ChatRoom";

export default function ChatScreen(props) {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	// const isHappy = useSelector((state) => state.chat.isHappy);
	// const chatRoomNames = useSelector((state) => state.chat.chatRoomNames);
	const chatRooms = useSelector((state) => state.chat.chatRooms);
	console.log(chatRooms);

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<FlatList
				data={chatRooms}
				renderItem={({ item }) => (
					<ChatRoom
						style={styles.image}
						onPress={() => {
							navigation.navigate("ChatRoomScreen", {
								id: item.chatRoomId,
								name: item.chatRoomName,
							});
						}}
						titleText={item.chatRoomName}
						bodyText={
							item.messages.length > 0
								? item.messages[item.messages.length - 1].messageText
								: null
						}
						children={
							<Image
								source={
									item?.chatRoomName === "CBS Surf"
										? require("../assets/cbs-surf/cbs-surf.png")
										: item?.chatRoomName === "CBS Feminist Society"
										? require("../assets/cbs-fem/cbs-fem.png")
										: item?.chatRoomName === "CBS Students"
										? require("../assets/cbs-students/cbs-students.png")
										: item?.chatRoomName === "CBS Golf"
										? require("../assets/cbs-golf/cbs-golf.png")
										: item?.chatRoomName === "CBS Poker"
										? require("../assets/cbs-poker/cbs-poker.png")
										: null
								}
							/>
						}
						keyExtractor={(item) => item.chatRoomId}
						timeStamp={
							item.messages.length > 0
								? moment(
										item.messages[item.messages.length - 1].messageTimestamp
								  ).format("HH:mm")
								: null
						}
					></ChatRoom>
				)}
			></FlatList>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 60,
		height: 60,
	},
});
