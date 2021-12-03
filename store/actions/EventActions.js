export const EVENTS = 'EVENTS';

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
