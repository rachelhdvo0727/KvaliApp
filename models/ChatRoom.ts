import Message from './Message';

class ChatRoom {
   constructor(
      public id: string,
      public chatRoomName: string,
      public imageUrl: string,
      public messages: Message[],
   ) {
      this.id = id;
      this.chatRoomName = chatRoomName;
      this.imageUrl = imageUrl;
      this.messages = messages;
   }
}

export default ChatRoom;
