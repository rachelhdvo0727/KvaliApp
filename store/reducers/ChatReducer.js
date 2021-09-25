import { NEW_CHATROOM, TOGGLE_HAPPY } from "../actions/ChatActions";

const initalState = {
	isHappy: false,
	chatRooms: [],
};

const ChatReducer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_HAPPY:
			return { ...state, isHappy: action.payload };
		case NEW_CHATROOM:
		//todos: [...state.todos, action.payload] //new todos array
		//return { ...state };
		default:
			return state;
	}
};

export default ChatReducer;
