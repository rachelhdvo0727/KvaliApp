import ChatRoom from '../models/ChatRoom';
import Message from '../models/Message';
import User from '../models/User';

export const Users = [
   new User('1', 'Peter Mølle', 'Jensen', 'dummyUrlLink'),
   new User('2', 'Lasse', 'Staugaard', 'dummyUrlLink'),
   new User('3', 'Lasse', 'Vestegaard', 'dummyUrlLink'),
];

export const Messages = [
   new Message(
      '1',
      "Hello, where's everyone?",
      new Date(2021, 0, 1, 12, 10, 5),
      Users[0],
   ),
   new Message('2', "I'm here", new Date(2021, 0, 1, 12, 15, 5), Users[1]),
   new Message('3', 'Stfu', new Date(2021, 0, 1, 12, 15, 5), Users[0]),
   new Message(
      '4',
      "I'm speechless",
      new Date(2021, 0, 1, 12, 15, 5),
      Users[1],
   ),
];

export const ChatRooms = [
   new ChatRoom('1', 'CBS Surf', 'cbs-surf-2x.png', Messages),
   new ChatRoom('2', 'CBS Feminist Society', 'urlToImage', []),
   new ChatRoom('3', 'CBS Students', 'urlToImage', []),
];
