import * as actions from "../ActionTypes/LoginActionTypes";

export interface LoginState {
  id: string,
  password: any,
  
}

const initialState: LoginState = {
  id: "",
  password: "",

};

export default function lyricsReducer(
  state: LoginState = initialState,
  action: actions.LoginActions
): LoginState {
  switch (action.type) {
      case actions.GET_USER_SUCCESS:
          console.warn("login_succefull")
      return {
          id: action.id,
        password: action.password,
   
      };
    default:
      return state;
  }
}
