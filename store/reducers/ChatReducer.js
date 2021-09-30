import {
	TOGGLE_HAPPY,
	NEW_CHATROOM,
	DELETE_CHATROOM
} from "../actions/ChatActions";
import { ChatRooms } from "../../dummy-db/DummyData";
import ChatRoom from "../../models/ChatRoom";

const initalState = {
	isHappy: false,
	chatRooms: ChatRooms
};

const ChatReducer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_HAPPY:
			return { ...state, isHappy: action.payload };
		case NEW_CHATROOM:
			const tempId = Math.random().toString();
			const chatRoom = new ChatRoom(tempId, action.payload, "", []);
			return { ...state, chatRooms: [...state.chatRooms, chatRoom] };

		case DELETE_CHATROOM:
			return {
				...state,
				chatRooms: state.chatRooms.filter(
					(room) => room.chatRoomId !== action.payload
				)
			};
		case NEW_MESSAGE:
		// Find the chatRoom obj based on chatRoomId
		// Copy messages arr of the correct chatRoom obj
		// Copy chatRooms to avoid state mutations,
		// when updating the messages arr in the specific chatRoom obj
		default:
			return state;
	}
};

export default ChatReducer;
