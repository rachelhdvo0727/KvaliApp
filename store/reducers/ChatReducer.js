import {
  TOGGLE_HAPPY,
  CHAT_ROOMS,
  NEW_CHATROOM,
  DELETE_CHATROOM,
  NEW_MESSAGE,
  MESSAGES,
} from '../actions/ChatActions';
import { ChatRooms, Users } from '../../dummy-db/DummyData';
import ChatRoom from '../../models/ChatRoom';

const initialState = {
  isHappy: false,
  chatRooms: [],
  messages: [],
};

const tempId = Math.random().toString(36).substr(2);

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HAPPY:
      return { ...state, isHappy: action.payload };

    case CHAT_ROOMS:
      return { ...state, chatRooms: action.payload };
    case NEW_CHATROOM:
      return {
        ...state,
        chatRooms: [...state.chatRooms, action.payload],
      };
    case DELETE_CHATROOM:
      return {
        ...state,
        chatRooms: state.chatRooms.filter(
          room => room.chatRoomId !== action.payload,
        ),
      };

    case MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    // // Find the current chat room object
    // const currentChatroom = state.chatRooms.find(
    //   room => room.id === action.payload.id,
    // );
    // // Copy the messages array of the current chat room object
    // const chatMessages = [...currentChatroom.messages, action.payload.msg];

    // // Copy currentChatRoom object to a new chat room
    // const newChatRoom = { ...currentChatroom };

    // // Attach the copied chatMessages array
    // newChatRoom.messages = chatMessages;

    // // Insert the newChatRoom object into the chatRooms array
    // // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
    // // js Splice method to create a new array and insert the created chatroom object.
    // const index = state.chatRooms.findIndex(
    //   room => room.id === action.payload.id,
    // );
    // const chatroomArray = [...state.chatRooms];
    // chatroomArray.splice(index, 1, newChatRoom);

    default:
      return state;
  }
};

export default ChatReducer;
