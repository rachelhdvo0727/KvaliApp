import React from "react";
import { useNavigation } from "@react-navigation/core";

import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	SafeAreaView,
} from "react-native";
import ChatRoom from "./ChatRoom";

import { ChatRooms } from "../dummy-db/DummyData";

export default function ChatMessagesHome(props) {
	const navigation = useNavigation();
	console.log(ChatRooms);
	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "top" }}
		>
			<FlatList
				data={ChatRooms}
				renderItem={({ item }) => (
					<ChatRoom
						imageSrc={{ uri: "../assets/cbs-surf" + item.imageUrl }}
						titleText={item.chatRoomName}
						bodyText={item.messages}
					/>
				)}
				keyExtractor={(item) => item.chatRoomId}
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
});
