import Participant from '../../models/Participant';
import Event from '../../models/Event';
export const EVENTS = 'EVENTS';
export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
export const CHANGE_ATTENDANCE_STATUS = 'CHANGE_ATTENDANCE_STATUS';
export const DELETE_ATTENDANCE = 'DELETE_ATTENDANCE';

export const fetchEvents = () => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         'https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' +
            token,
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
         let events = [];
         for (const key in data) {
            let attendances = [];
            for (const key2 in data[key].attendances) {
               let attendance = data[key].attendances[key2];
               attendances.push(
                  new Participant(key2, attendance.userId, attendance.status),
               );
            }
            let event = data[key];
            event.id = key;
            events.push(
               new Event(
                  key,
                  data[key].eventTitle,
                  data[key].eventDesc,
                  data[key].imageName,
                  data[key].address,
                  data[key].venue,
                  data[key].group,
                  data[key].attendances ? attendances : [],
                  data[key].dateTime,
               ),
            );
         }
         dispatch({ type: EVENTS, payload: events });
      }
   };
};

export const addAttendance = (eventId, userId, status) => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const objectTosend = { userId: userId, status: status };
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}/attendances.json?auth=${token}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...objectTosend }),
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      if (response.ok) {
         const participant = new Participant(data.name, userId, status);
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
      const objectTosend = { status: status };
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
      if (response.ok) {
         dispatch({
            type: CHANGE_ATTENDANCE_STATUS,
            payload: {
               eventId,
               participant: participantObject,
               attendance: data,
            },
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
