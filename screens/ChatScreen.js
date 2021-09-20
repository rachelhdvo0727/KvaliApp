import React from "react";
import { useNavigation } from "@react-navigation/core";

import { StyleSheet, FlatList, SafeAreaView, Image } from "react-native";
import ChatRoom from "../components/ChatRoom";

import { ChatRooms } from "../dummy-db/DummyData";

export default function ChatScreen(props) {
	const navigation = useNavigation();

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<FlatList
				data={ChatRooms}
				renderItem={({ item }) => (
					<ChatRoom
						onPress={() => {
							navigation.navigate("ChatRoomScreen", {
								name: item.chatRoomName,
							});
						}}
						style={styles.image}
						titleText={item.chatRoomName}
						bodyText={item.messages}
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
					></ChatRoom>
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
	image: {
		width: 60,
		height: 60,
	},
});
