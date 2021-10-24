class Message {
  constructor(id, messageText, timestamp, user, receiver) {
    this.id = id;
    this.messageText = messageText;
    this.timestamp = timestamp;
    this.user = user;
    this.receiver = receiver;
  }
}

export default Message;
