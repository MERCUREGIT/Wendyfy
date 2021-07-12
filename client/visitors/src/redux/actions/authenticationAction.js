// import axios from 'axios';
// import { routes } from "../../config/routes";


export const USER_AUTHENTICATED_SUCCESS = "USER_AUTHENTICATED_SUCCESS";
export const USER_AUTHENTICATED_LOGIN = "USER_AUTHENTICATED_LOGIN";
export const USER_AUTHENTICATED_LOGOUT = "USER_AUTHENTICATED_LOGOUT";
export const USER_UNAUTHENTICATED_SUCCESS = "USER_UNAUTHENTICATED_SUCCESS";
export const USER_REGISTER = 'USER_REGISTER';

export const login = (
    username,
    userId,
    addToast,
    useremail,
  ) => {
    return dispatch => {
      if (userId) {
        addToast("Success login", { appearance: "success", autoDismiss: true });
      }
        dispatch({
        type: USER_AUTHENTICATED_LOGIN,
        payload: {
            username,
            userid:userId,
            useremail,
            login:true
                }
      });
    };
  };

export const signUp = (
    username,
    userId,
    addToast,
    useremail,
  ) => {  
    return dispatch => {
      if (userId) {
        addToast("Success registration", { appearance: "success", autoDismiss: true });
      }
      dispatch({
        type: USER_REGISTER,
        payload: {
                username: username,
                userid:userId,
                useremail: useremail,
                login:true
                }
      });
    };
  };

  export const successLogin =()=>{

    return dispatch => {
        dispatch({
        type: USER_AUTHENTICATED_SUCCESS,
        payload: true
      });
    }; 
  }

  export const logout = () => {

    // axios.delete(`${routes.server}/authentication/sign-up`).then(responce=>{
    //     if(responce.status===200){
            return dispatch => {
                dispatch({
                type: USER_UNAUTHENTICATED_SUCCESS,
                payload:{
                    login: false,
                    useremail: "",
                    userid: "",
                    username: ""}
                });
            };
        }
    // }
    // )

//   };