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





