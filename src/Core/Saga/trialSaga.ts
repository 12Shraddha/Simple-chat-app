import { put, call, fork,all,takeEvery} from "redux-saga/effects";
import { fetchApi } from "../Services/apiCall";
import * as actionTypes from "../ActionTypes/TrialActionsTypes";
import * as actionCreators from "../ActionCreator/TrialActionCreator";
import { userDetail } from "../ActionTypes/TrialActionsTypes";

function* onLoad({ id, password }: actionTypes.GetAction) {
  const user_info: userDetail = {
  id:id,
  password:password,
  };
  
  console.log("SAGA ONLOAD called",id,password);
 
    //yield put(actionCreators.getAction(id,password));
    const { data } = yield call(fetchApi, id, password);
    console.log("GOT data in OnLoad function: ", data);

    const found = data.find((obj:any) => {
      return (obj.id===user_info.id && obj.password===user_info.password);
    });
  console.log("FOUND:", found);
  

    if (found)  {
    yield put(actionCreators.setAction(id, password));
    
  }
    else {
      console.log("ERROR")
      
  }

}

function* watchOnLoad() {
    console.log("watchOnLoad called")
  yield takeEvery(actionTypes.FORM_DATA, onLoad);
}

export default function* trialSaga() {
  yield all([fork(watchOnLoad)]);
}