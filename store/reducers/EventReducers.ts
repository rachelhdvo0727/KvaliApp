import { Thasadith_400Regular } from '@expo-google-fonts/dev';
import { EVENTS } from '../actions/EventActions';

interface EventState {
   events: Array<any>;
}

const initialState: EventState = {
   events: [],
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
