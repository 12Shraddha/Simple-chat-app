import * as actions from "../ActionTypes/TrialActionsTypes";

export interface State {
    id: string,
    password: any,
    error:string|null
}

const initialState: State = {
    id:"",
    password: "",
    error:"",
    
};

export default function trialReducer(
  state: State = initialState,
  action: actions.AllAction
): State {
  switch (action.type) {
    case actions.SET_ACTION:
      console.log("trial reducer is called by set action",action.id,action.password);
      return {
        ...state,
        id: action.id,
        password:action.password,
      };
    default:
      return state;
  }
}
