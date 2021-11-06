import User from '../../models/User';
import Message from '../../models/Message';
import ChatRoom from '../../models/ChatRoom';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const CHAT_ROOMS = 'CHAT_ROOMS';
export const NEW_CHATROOM = 'NEW_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
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
                    messages: [],
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
            dispatch({
                type: NEW_CHATROOM,
                payload: chatRoom,
            });
            console.log('action', chatRoom);
        }
    };
};

export const deleteChatRoom = chatRoomId => {
    return { type: DELETE_CHATROOM, payload: chatRoomId };
};

export const newMessage = (chatRoomId, message) => {
    return async (dispatch, getState) => {
        const token = getState().user.token; // accessing token in the state.
        const response = await fetch(
            `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${chatRoomId}messages.json?auth=${token}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...message,
                }),
            },
        );
        const data = await response.json();
        !response.ok
            ? console.error(data)
            : dispatch({
                  type: NEW_MESSAGE,
                  payload: { chatRoomId, message: message },
              });
    };

    // const tempUser = new User('1', 'Peter Mølle', 'Jensen', 'dummyUrlLink');
    // const msg = new Message(
    //   '3',
    //   message,
    //   new Date(2021, 0, 1, 12, 15, 5),
    //   tempUser,
    // );
    // return { type: NEW_MESSAGE, payload: { chatRoomId, msg } };
};
