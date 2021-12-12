import {
   EVENTS,
   ADD_ATTENDANCE,
   CHANGE_ATTENDANCE_STATUS,
   DELETE_ATTENDANCE,
} from '../actions/EventActions';

interface EventState {
   events: Array<any>;
   attendance: Object;
   status: Object;
}

const initialState: EventState = {
   events: [],
   attendance: {},
   status: {},
};

const EventReducer = (state: EventState = initialState, action: any) => {
   switch (action.type) {
      case EVENTS:
         return { ...state, events: action.payload };

      case ADD_ATTENDANCE:
         console.log(action.payload);
         return { ...state, attendance: action.payload };

      case CHANGE_ATTENDANCE_STATUS:
         return { ...state, status: action.payload };

      case DELETE_ATTENDANCE:
         return { ...state };
      default:
         return state;
   }
};

export default EventReducer;
