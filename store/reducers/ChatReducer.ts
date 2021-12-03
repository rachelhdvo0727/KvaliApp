import {
   CHAT_ROOMS,
   NEW_CHATROOM,
   DELETE_CHATROOM,
   NEW_MESSAGE,
} from '../actions/ChatActions';

interface ChatState {
   chatRooms: Array<any>;
}

const initialState: ChatState = {
   chatRooms: [],
};

const ChatReducer = (state: ChatState = initialState, action: any) => {
   switch (action.type) {
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
               (room: any) => room?.id !== action.payload,
            ),
         };

      case NEW_MESSAGE:
         // Find the current chat room object
         const currentChatroom = state.chatRooms.find(
            room => room.id === action.payload.id,
         );
         // Copy the messages array of the current chat room object
         const chatMessages = [...currentChatroom.messages, action.payload.msg];

         // Copy currentChatRoom object to a new chat room
         const newChatRoom: any = { ...currentChatroom };

         // Attach the copied chatMessages array
         newChatRoom?.messages == chatMessages;

         // Insert the newChatRoom object into the chatRooms array
         // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
         // js Splice method to create a new array and insert the created chatroom object.
         const index = state.chatRooms.findIndex(
            room => room?.id === action.payload.chatRoomId,
         );
         const chatroomArray = [...state.chatRooms];
         chatroomArray.splice(index, 1, newChatRoom);
         return { ...state, chatRooms: chatroomArray };

      default:
         return state;
   }
};

export default ChatReducer;
