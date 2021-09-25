export const TOGGLE_HAPPY = "TOGGLE_HAPPY";
export const NEW_CHATROOMS = "NEW_CHATROOMS";
export const CHAT_ROOMS = "CHAT_ROOMS";

export const toggleHappy = (isHappy) => {
	return { type: TOGGLE_HAPPY, payload: isHappy };
};

export const newChatRoom = (chatRoomNames) => {
	return { type: NEW_CHATROOMS, payload: chatRoomNames };
};

export const chatRooms = (chatRooms) => {
	return { type: CHAT_ROOMS, payload: chatRooms };
};
