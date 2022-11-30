import { combineReducers } from "redux"; 
import trialReducer from "./trialReducer";

import LoginReducer from "./LoginReducer";



const rootReducer = combineReducers({
  trialReducer: trialReducer,
  login: LoginReducer,
  //isLoading: IsLoadingReducer,
  //error: ErrorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;