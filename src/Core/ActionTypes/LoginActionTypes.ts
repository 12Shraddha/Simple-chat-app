export type userDetail = {
  id: string;
  password: any;
};
export type userState = {
  loading: boolean;
  user: userDetail;
  error: string | null;
};

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export interface GetUserRequest {
  type: typeof GET_USER_REQUEST;
  id: string;
  password: any;
}

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  id: string;
  password: any;
  error: string | null;
}

export const GET_USER_FAILURE = "GET_USER_FAILURE";
export interface GetUserFailure {
  type: typeof GET_USER_FAILURE;
  error: Error | string;
}

export type LoginActions = GetUserFailure|GetUserRequest|GetUserSuccess
  
