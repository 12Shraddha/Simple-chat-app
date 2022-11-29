import { all } from "redux-saga/effects";
import { fork} from "redux-saga/effects";
import trialSaga from "./trialSaga";
import LoginSaga from "./LoginSaga"

export default function* rootSaga() {
  console.log("rootSaga");
  yield all([fork(trialSaga),fork( LoginSaga)]);
}
