import * as actions from "../ActionTypes/LoginActionTypes"


export function getUserRequest(id: string, password: any): actions.GetUserRequest {
  return {
    type: actions.GET_USER_REQUEST,
    id,
    password,
  };
}

export function getUserSuccess(id: string, password: any): actions.GetUserSuccess {
  return {
    type: actions.GET_USER_SUCCESS,
    id,
    password,
    error: "Valid Input",
  };
}

export function getUserFailure(
  error: Error | string
): actions.GetUserFailure {
  return {
    type: actions.GET_USER_FAILURE,
    error,
  };
}