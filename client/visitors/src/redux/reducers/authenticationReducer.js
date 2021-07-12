
import {
    USER_AUTHENTICATED_LOGIN,
    USER_AUTHENTICATED_LOGOUT,
    USER_REGISTER,
    USER_AUTHENTICATED_SUCCESS,
    USER_UNAUTHENTICATED_SUCCESS
} from "../actions/authenticationAction";

const initState = [];

const authenticationReducer = (state = initState, action) => {

    const user = action.payload;

  if (action.type === USER_AUTHENTICATED_LOGIN) {
   return user
  }

  if (action.type === USER_AUTHENTICATED_LOGOUT) {
    
    return null;
  }
  if (action.type === USER_REGISTER) {
    
    return user;
  }
  if (action.type === USER_AUTHENTICATED_SUCCESS) {
    
    return {
        ...state,
        login: action.payload};
  }
  
  if (action.type === USER_UNAUTHENTICATED_SUCCESS) {
    
    return action.payload;
  }

  return state;
};

export default authenticationReducer;