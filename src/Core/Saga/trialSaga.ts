import { put, call, fork,all,takeEvery} from "redux-saga/effects";
import { fetchApi } from "../Services/apiCall";
import * as actionTypes from "../ActionTypes/TrialActionsTypes";
import * as actionCreators from "../ActionCreator/TrialActionCreator";

function* onLoad({ id, password }: actionTypes.GetAction) {
  console.log("SAGA ONLOAD called");
  try {
    //yield put(actionCreators.getAction(id,password));
    const { data } = yield call(fetchApi,id,password);
    console.log("GOT data in OnLoad function: ",data);
    // data ? {
      yield put(actionCreators.setAction(id, password));
    }
  catch (error) {
    console.log(error)
    // yield put(actionCreators.getFailure(error.response.data.error));
  }
}

function* watchOnLoad() {
    console.log("watchOnLoad called")
  yield takeEvery(actionTypes.FORM_DATA, onLoad);
}

export default function* trialSaga() {
  yield all([fork(watchOnLoad)]);
}