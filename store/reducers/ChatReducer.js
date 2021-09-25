import { NEW_CHATROOMs, TOGGLE_HAPPY, CHAT_ROOMS } from "../actions/ChatActions";
import { ChatRooms } from "../../dummy-db/DummyData";

const initalState = {
	isHappy: false,
	chatRoomName: ChatRooms.map((room) => room.chatRoomName),
	chatRooms: ChatRooms,
};

const ChatReducer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_HAPPY:
			return { ...state, isHappy: action.payload };
		case NEW_CHATROOMs:
			return { ...state, chatRoomNames: action.payload };
		case CHAT_ROOMS:
			return { ...state, chatRooms: action.payload };
		default:
			return state;
	}
};

export default ChatReducer;
