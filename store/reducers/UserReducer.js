import { SIGN_UP, LOG_IN } from '../actions/UserActions';

const initialState = {
  loggedInUser: undefined,
  token: undefined,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
      };
    case LOG_IN:
      // console.log("reducer: ", action.payload);
      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default UserReducer;
