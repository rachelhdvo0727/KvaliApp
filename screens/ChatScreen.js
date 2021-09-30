import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";

import {
	StyleSheet,
	FlatList,
	SafeAreaView,
	Image,
	Button,
	TextInput
} from "react-native";
import generalStyles from "../styles/General";
import ChatRoom from "../components/ChatRoom";
import {
	toggleHappy,
	newChatRoom,
	deleteChatRoom
} from "../store/actions/ChatActions";

let moment = require("moment-timezone");

export default function ChatScreen(props) {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const [text, onChangeText] = useState("");

	// const isHappy = useSelector((state) => state.chat.isHappy);
	const chatRooms = useSelector((state) => state.chat.chatRooms);
	const handleDelete = (id) => {
		console.log("delete", id);
		dispatch(deleteChatRoom(id));
	};
	const handleCreate = () => {
		console.log(text);
		dispatch(newChatRoom(text));
	};

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<TextInput
				style={generalStyles.input}
				value={text}
				onChangeText={onChangeText}
			/>
			<Button title='Create New Room' onPress={handleCreate} />

			<FlatList
				data={chatRooms}
				keyExtractor={(item) => item.chatRoomId}
				renderItem={({ item }) => (
					<>
						<ChatRoom
							style={styles.image}
							onPress={() => {
								navigation.navigate("ChatRoomScreen", {
									id: item.chatRoomId,
									name: item.chatRoomName
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
							timeStamp={
								item.messages.length > 0
									? moment(
											item.messages[item.messages.length - 1].messageTimestamp
									  ).format("HH:mm")
									: null
							}
						></ChatRoom>
						<Button
							title='Delete'
							onPress={handleDelete.bind(this, item.chatRoomId)}
						></Button>
					</>
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
		justifyContent: "center"
	},
	image: {
		width: 60,
		height: 60
	}
});
