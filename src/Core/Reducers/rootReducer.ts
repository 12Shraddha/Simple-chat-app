import { combineReducers } from "redux"; 
import trialReducer from "./trialReducer";


const rootReducer = combineReducers({
  trialReducer: trialReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;