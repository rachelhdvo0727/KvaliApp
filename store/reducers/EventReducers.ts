import {
   EVENTS,
   ADD_ATTENDANCE,
   CHANGE_ATTENDANCE_STATUS,
   DELETE_ATTENDANCE,
} from '../actions/EventActions';
import Participant from '../../models/Participant';

interface EventState {
   events: Array<any>;
   attendances: Array<any>;
   status: Object | any;
}

const initialState: EventState = {
   events: [],
   attendances: [],
   status: {},
};

const EventReducer = (state: EventState = initialState, action: any) => {
   switch (action.type) {
      case EVENTS:
         return { ...state, events: action.payload };

      case ADD_ATTENDANCE:
         const event = state.events.find(
            event => event.id === action.payload.eventId,
         );
         const attendances = [...event.attendances, action.payload.attendance];
         const copiedEvent = { ...event };
         copiedEvent.attendances = attendances;
         const index = state.events.findIndex(
            event => event.id === action.payload.eventId,
         );
         const attendanceArray = [...state.events].splice(
            index,
            1,
            copiedEvent,
         );

         return { ...state, attendances: attendanceArray };

      case CHANGE_ATTENDANCE_STATUS:
         return { ...state, status: action.payload };

      case DELETE_ATTENDANCE:
         return { ...state };
      default:
         return state;
   }
};

export default EventReducer;
