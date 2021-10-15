import User from '../../models/User';
import Message from '../../models/Message';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export const toggleHappy = isHappy => {
  return { type: TOGGLE_HAPPY, payload: isHappy };
};

// export const newChatRoom = (chatRoomName) => {
// 	return { type: NEW_CHATROOM, payload: chatRoomName };
// };
export const newChatRoom = (chatroomId, chatRoomName, imgUrl) => {
  return async (dispatch, getState) => {
    // redux thunk
    const token = getState().user.token; // accessing token in the state.
    console.log(token);
    const response = await fetch(
      'https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' +
        token,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          //javascript to json
          //key value pairs of data you want to send to server
          id: chatroomId,
          roomName: chatRoomName,
          imageUrl: imgUrl,
        }),
      },
    );

    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem..
    } else {
      // do something?
      console.log(data);

      // dispatch({ type: NEW_CHATROOM, payload: chatroomName });
    }
  };
};

export const deleteChatRoom = chatRoomId => {
  return { type: DELETE_CHATROOM, payload: chatRoomId };
};

export const newMessage = (chatRoomId, message) => {
  const tempUser = new User('1', 'Peter Mølle', 'Jensen', 'dummyUrlLink');
  const msg = new Message(
    '3',
    message,
    new Date(2021, 0, 1, 12, 15, 5),
    tempUser,
  );
  return { type: NEW_MESSAGE, payload: { chatRoomId, msg } };
};
