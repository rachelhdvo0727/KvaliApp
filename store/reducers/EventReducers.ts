import { EVENTS, EVENT } from '../actions/EventActions';

interface EventState {
   events: Array<any>;
   event: Object;
}

const initialState: EventState = {
   events: [],
   event: {},
};

const EventReducer = (state: EventState = initialState, action: any) => {
   switch (action.type) {
      case EVENTS:
         return { ...state, events: action.payload };
      default:
         return state;
   }
};

export default EventReducer;
