import {
   EVENTS,
   ADD_ATTENDANCE,
   CHANGE_ATTENDANCE_STATUS,
   DELETE_ATTENDANCE,
} from '../actions/EventActions';

interface EventState {
   events: Array<any>;
   attendance: Object | any;
}

const initialState: EventState = {
   events: [],
   attendance: {},
};

const EventReducer = (state: EventState = initialState, action: any) => {
   switch (action.type) {
      case EVENTS:
         return { ...state, events: action.payload };

      case ADD_ATTENDANCE:
         // Find the current event object
         const event = state.events.find(
            event => event.id === action.payload.eventId,
         );
         // Copy attendances to avoid mutation & add attendance from action
         const attendances = [...event.attendances, action.payload.attendance];
         // Copy event object
         const copiedEvent = { ...event };
         // Attach attendances array to event object
         copiedEvent.attendances = attendances;
         // Find event's index
         const index = state.events.findIndex(
            event => event.id === action.payload.eventId,
         );
         // Copy events array
         const newEventsArray = [...state.events];
         // Insert copiedEvent to the copied events array
         newEventsArray.splice(index, 1, copiedEvent);

         return { ...state, events: newEventsArray };

      case CHANGE_ATTENDANCE_STATUS:
         // Find the current event object
         const currentEvent = state.events.find(
            event => event.id === action.payload.eventId,
         );
         // Copy event with attendances array
         const eventCopied = { ...currentEvent };
         // Find current participant
         const currentAttendance = [...currentEvent.attendances].find(
            p => p.attendanceId === action.payload.participant,
         );
         const attendanceIndex = [...currentEvent.attendances].findIndex(
            p => p.attendanceId === action.payload.participant,
         );
         // Copy attendance
         const attendanceCopied = { ...currentAttendance };
         attendanceCopied.status = action.payload.attendance.status;
         const copiedObject = eventCopied.attendances[attendanceIndex];
         if (copiedObject.attendanceId === attendanceCopied.attendanceId) {
            copiedObject.status = attendanceCopied.status;
         }

         return { ...state, attendance: attendanceCopied };

      case DELETE_ATTENDANCE:
         // Check
         const eventIndex = state.events.findIndex(
            event => event.id === action.payload.eventId,
         );
         const newEvents = [...state.events];
         const attendanceArray = state.events[eventIndex].attendances.filter(
            (participant: any) =>
               participant.attendanceId !== action.payload.participant,
         );
         newEvents[eventIndex].attendances = attendanceArray;

         return {
            ...state,
            events: state.events,
         };
      default:
         return state;
   }
};

export default EventReducer;
