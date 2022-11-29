import { combineReducers } from "redux"; 
import trialReducer from "./trialReducer";
import IsLoadingReducer from "./IsLoadingReducer";
import LoginReducer from "./LoginReducer";
import ErrorReducer from "./ErrorReducer";


const rootReducer = combineReducers({
  trialReducer: trialReducer,
  login: LoginReducer,
  isLoading: IsLoadingReducer,
  error: ErrorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;