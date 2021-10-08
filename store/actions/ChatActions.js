import User from "../../models/User";
import Message from "../../models/Message";

export const TOGGLE_HAPPY = "TOGGLE_HAPPY";
export const NEW_CHATROOM = "NEW_CHATROOM";
export const DELETE_CHATROOM = "DELETE_CHATROOM";
export const NEW_MESSAGE = "NEW_MESSAGE";

export const toggleHappy = (isHappy) => {
	return { type: TOGGLE_HAPPY, payload: isHappy };
};

export const newChatRoom = (chatRoomName) => {
	return { type: NEW_CHATROOM, payload: chatRoomName };
};

export const deleteChatRoom = (chatRoomId) => {
	return { type: DELETE_CHATROOM, payload: chatRoomId };
};

export const newMessage = (chatRoomId, message) => {
	const tempUser = new User("1", "Peter Mølle", "Jensen", "dummyUrlLink");
	const msg = new Message(
		"3",
		message,
		new Date(2021, 0, 1, 12, 15, 5),
		tempUser
	);
	return { type: NEW_MESSAGE, payload: { chatRoomId, msg } };
};
