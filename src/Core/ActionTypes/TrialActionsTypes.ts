export type userDetail ={
  "id": string,
  "password": any
    
}
export type userState = {
  loading: boolean;
  user: userDetail;
  error: string | null;
};

export const FORM_DATA = "FORM_DATA";
export interface GetAction {
  type: typeof FORM_DATA;
  id: string;
  password: any;
}

export const SET_ACTION = "SET_ACTION";
export interface SetAction {
  type: typeof SET_ACTION;
  id: string,
  password:any,
  error:string | null
}




export type AllAction = SetAction | GetAction;

// import { Actiontype } from "./Actions/ActionType";

// export type userDetail = {
//   id: string;
//   password: any;
// };

// export type userState = {
//   loading: boolean;
//   user: userDetail;
//   error: string | null;
// };

// export type FetchSuccessPayload = {
//   user: userDetail;
// };

// export type FetchFailurePayload = {
//   error: string;
// };

// export const FORM_DATA = "FORM_DATA";
// export interface LoginAction {
//   type: typeof FORM_DATA;
//   payload: userDetail;
// }

// export const SET_ACTION = "SET_ACTION";
// export interface ActionCalled {
//   type: typeof SET_ACTION;
//   payload: userDetail;
// }

// export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
// export interface fetchUserRequest {
//   type: typeof FETCH_USER_REQUEST;
//   payload: FetchSuccessPayload;
// }

// export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS";
// export type fetchUserSucess = {
//   type: typeof FETCH_USER_SUCESS;
//   payload: FetchSuccessPayload;
// };

// export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
// export type fetchUserFailure = {
//   type: typeof FETCH_USER_FAILURE;
//   payload: FetchFailurePayload;
// };

// export type allActions =
//   | fetchUserRequest
//   | fetchUserSucess
//   | fetchUserFailure
//   | LoginAction
//   | ActionCalled;