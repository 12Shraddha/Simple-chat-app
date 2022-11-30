import * as actions from "../ActionTypes/LoginActionTypes";

export interface LoginState {
  id: string,
  password: any,
  error: string |null,
  isLoading:boolean
  
}

const initialState: LoginState = {
  id: "",
  password: "",
  error:null,
  isLoading:false,

};

export default function LoginReducer(
  state: LoginState = initialState,
  action: actions.LoginActions
): LoginState {
  switch (action.type) {
    case actions.GET_USER_SUCCESS:
      console.log("login_succefull...",state);
      return {
        ...state,
        id: action.id,
        password: action.password,
        isLoading:false
      };
    case actions.GET_USER_FAILURE:
      console.log("login_Fail...",state);
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case actions.GET_USER_REQUEST:
      console.log("login_Request...",state);
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
