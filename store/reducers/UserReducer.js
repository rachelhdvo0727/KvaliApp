import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  REFRESH_TOKEN,
} from '../actions/UserActions';

const initialState = {
  loggedInUser: undefined,
  token: undefined,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return state;
    case LOG_IN:
      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
      };
    case LOG_OUT:
      return {
        ...state,
        loggedInUser: undefined,
        token: undefined,
      };
    case REFRESH_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default UserReducer;
