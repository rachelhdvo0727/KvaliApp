import Participant from '../../models/Participant';
export const EVENTS = 'EVENTS';
export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
export const CHANGE_ATTENDANCE_STATUS = 'CHANGE_ATTENDANCE_STATUS';
export const DELETE_ATTENDANCE = 'DELETE_ATTENDANCE';

export const fetchEvents = () => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=${token}`,
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      if (response.ok) {
         let array = [];
         for (const key in data) {
            let event = data[key];
            event.id = key;
            array.push(event);
         }
         // console.log(array);
         dispatch({ type: EVENTS, payload: array });
      }
   };
};

export const addAttendance = (eventId, userId, status) => {
   const participant = new Participant(userId, status);
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/attendances.json?auth=${token}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...participant }),
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      if (response.ok) {
         dispatch({
            type: ADD_ATTENDANCE,
            payload: { eventId, attendance: participant },
         });
      }
   };
};

export const editAttendanceStatus = (eventId, participantObject, status) => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/attendances/${participantObject}.json?auth=${token}`,
         {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: status }),
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      console.log('patch', data);
      if (response.ok) {
         dispatch({
            type: CHANGE_ATTENDANCE_STATUS,
            payload: data,
         });
      }
   };
};

export const deleteUserAttendance = (eventId, participantObject) => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/attendances/${participantObject}.json?auth=${token}`,
         {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      console.log('delete', data);
      if (response.ok) {
         dispatch({
            type: DELETE_ATTENDANCE,
            payload: data,
         });
      }
   };
};
