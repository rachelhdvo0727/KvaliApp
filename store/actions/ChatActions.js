import User from '../../models/User';
import Message from '../../models/Message';
import ChatRoom from '../../models/ChatRoom';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const CHAT_ROOMS = 'CHAT_ROOMS';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const MESSAGES = 'MESSAGES';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export const toggleHappy = isHappy => {
  return { type: TOGGLE_HAPPY, payload: isHappy };
};

const tempId = Math.random().toString(36).substr(2);
export const fetchChatRooms = () => {
  return async (dispatch, getState) => {
    // redux thunk
    const token = getState().user.token; // accessing token in the state.
    const response = await fetch(
      `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      console.error(data);
    } else {
      let newArray = [];
      // Put objects in a new array before dispatching to reducer
      for (const key in data) {
        // Use object's name value as room's ID
        let roomObj = data[key];
        roomObj.id = key;
        // Add objects with id in the newArray
        newArray.push(roomObj);
      }
      // console.log('action', newArray);
      dispatch({
        type: CHAT_ROOMS,
        payload: newArray,
      });
    }
  };
};
export const newChatRoom = chatRoomName => {
  return async (dispatch, getState) => {
    // redux thunk
    const token = getState().user.token; // accessing token in the state.
    const response = await fetch(
      `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatRoomName: chatRoomName,
          imageUrl: 'https://',
        }),
      },
    );

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      console.error(data);
    } else {
      const chatRoom = new ChatRoom(
        data?.name,
        chatRoomName,
        data?.imageUrl,
        [],
      );
      // attach the chatroom with sent data + correct structure
      dispatch({
        type: NEW_CHATROOM,
        payload: chatRoom,
      });
    }
  };
};

export const deleteChatRoom = id => {
  return { type: DELETE_CHATROOM, payload: id };
};

export const fetchMessages = chatRoomId => {
  return async (dispatch, getState) => {
    // redux thunk
    const token = getState().user.token; // accessing token in the state.
    const loggedInUser = getState().user.loggedInUser;
    const response = await fetch(
      `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json(); // json to javascript
    if (!response.ok) {
      console.error(data);
    } else {
      let newArray = [];
      // Put objects in a new array before dispatching to reducer
      for (const key in data) {
        // Use object's name value as room's ID
        let messageObj = data[key];
        messageObj.id = key;
        // Check loggedInUser & clicked chatRoomId
        if (
          messageObj.user === loggedInUser?.id &&
          messageObj.receiver === chatRoomId
        ) {
          newArray.push(messageObj); /// Add objects with id in the newArray
        } else {
          console.log(
            `no msgs in this ${chatRoomId} room for this ${loggedInUser?.id}/${messageObj.user} user`,
          );
        }
      }
      dispatch({
        type: MESSAGES,
        payload: newArray,
      });
    }
  };
};

export const newMessage = (userId, message, timestamp, chatRoomId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const response = await fetch(
      `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageText: message,
          timestamp: timestamp,
          user: userId,
          receiver: chatRoomId, // have to be another user
        }),
      },
    );

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      console.error(data);
    } else {
      const newMessage = new Message(
        data?.name,
        message,
        timestamp,
        userId,
        chatRoomId,
      );
      // console.log(newMessage);
      // attach the new msg with sent data + correct structure
      dispatch({
        type: NEW_MESSAGE,
        payload: newMessage,
      });
    }
  };
  // const tempUser = new User('1', 'Peter Mølle', 'Jensen', 'dummyUrlLink');
  // const msg = new Message(
  //   '3',
  //   message,
  //   new Date(2021, 0, 1, 12, 15, 5),
  //   tempUser,
  // );
  // return { type: NEW_MESSAGE, payload: { id, msg } };
};
