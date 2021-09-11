import ChatRoom from "../models/ChatRoom";
import Message from "../models/Message";
import User from "../models/User";

export const Users = [
	new User("1", "Peter Mølle", "Jensen", "dummyUrlLink"),
	new User("2", "Lasse", "Staugaard", "dummyUrlLink"),
	new User("3", "Lasse", "Vestegaard", "dummyUrlLink"),
];

export const Messages = [
	new Message(
		"1",
		"Hello, where's everyone?",
		new Date(2021, 0, 1, 12, 10, 5),
		User[0]
	),
	new Message("2", "I'm here", new Date(2021, 0, 1, 12, 15, 5), User[1]),
	new Message("3", "Stfu", new Date(2021, 0, 1, 12, 15, 5), User[0]),
	new Message("4", "I'm speechless", new Date(2021, 0, 1, 12, 15, 5), User[1]),
];

export const ChatRooms = [
	new ChatRoom("1", "urlToImage", "CBS Surf", Messages),
	new ChatRoom("2", "urlToImage", "CBS Feminist Society"),
	new ChatRoom("3", "urlToImage", "CBS Students"),
];
