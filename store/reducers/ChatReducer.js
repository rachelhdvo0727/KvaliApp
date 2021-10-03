import {
	TOGGLE_HAPPY,
	NEW_CHATROOM,
	DELETE_CHATROOM,
	NEW_MESSAGE
} from "../actions/ChatActions";
import { ChatRooms, Users } from "../../dummy-db/DummyData";
import ChatRoom from "../../models/ChatRoom";
import Message from "../../models/Message";

const initialState = {
	isHappy: false,
	chatRooms: ChatRooms
	// room: {}
};

const tempId = Math.random().toString();

const ChatReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_HAPPY:
			return { ...state, isHappy: action.payload };
		case NEW_CHATROOM:
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
			const message = new Message(
				tempId,
				action.payload.message,
				new Date(),
				Users[0]
			);
			// Find the chatRoom obj based on chatRoomId
			const currentChatRoom = state.chatRooms.find(
				(room) => room.chatRoomId === action.payload.chatRoomId
			);
			// Copy messages arr of the correct chatRoom obj
			const messages = [...currentChatRoom.messages, message];
			// Copy chatRooms to avoid state mutations,
			// when updating the messages arr in the specific chatRoom obj
			const test = {
				...state, messages, 
			};
			console.log(test);
			return test;

		default:
			return state;
	}
};

export default ChatReducer;
