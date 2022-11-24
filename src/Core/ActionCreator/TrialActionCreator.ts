import * as actions from "../ActionTypes/TrialActionsTypes";

export function getAction(id: string, password: any): actions.GetAction {
  console.log("Action called", id, password);
  return {
    type: actions.FORM_DATA,
    id,
    password,
  };
}

export function setAction(id: string, password: any): actions.SetAction {
         return {
           type: actions.SET_ACTION,
             id,
             password,
           error: "Valid Input",
         };
       }




