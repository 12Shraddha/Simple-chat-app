import { all } from "redux-saga/effects";
import { fork} from "redux-saga/effects";
import trialSaga from "./trialSaga";

export default function* rootSaga() {
  console.log("rootSaga");
  yield all([fork(trialSaga)] );
}
