import {
	TOGGLE_HAPPY,
	NEW_CHATROOM,
	DELETE_CHATROOM,
	NEW_MESSAGE
} from "../actions/ChatActions";
import { ChatRooms, Users } from "../../dummy-db/DummyData";
import ChatRoom from "../../models/ChatRoom";

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
			// Find the current chat room object
			const currentChatroom = state.chatRooms.find(
				(room) => room.chatRoomId === action.payload.chatRoomId
			);
			// Copy the messages array of the current chat room object
			const chatMessages = [...currentChatroom.messages, action.payload.msg];

			// Copy currentChatRoom object to a new chat room
			const newChatRoom = { ...currentChatroom };

			// Attach the copied chatMessages array
			newChatRoom.messages = chatMessages;

			// Insert the newChatRoom object into the chatRooms array
			// Hint: use js-array's findIndex function, to find the index in the array of the object we want.
			// js Splice method to create a new array and insert the created chatroom object.
			const index = state.chatRooms.findIndex(
				(room) => room.chatRoomId === action.payload.chatRoomId
			);
			const chatroomArray = [...state.chatRooms];
			chatroomArray.splice(index, 1, newChatRoom);
			return { ...state, chatRooms: chatRoomArr };

		default:
			return state;
	}
};

export default ChatReducer;
