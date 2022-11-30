import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchApi } from "../Services/apiCall";
import * as actionCreators from "../ActionCreator/LoginActionCreator";
import * as actionTypes from "../ActionTypes/LoginActionTypes";

function* onLoad({ id, password }: actionTypes.GetUserRequest) {
    
      const user_info: actionTypes.userDetail = {
        id: id,
        password: password,
    };
    
  try {
    const { data } = yield call(fetchApi, id, password);
    console.log("DATAAAAAAAAAAA saga",data)
          const found = data.find((obj: any) => {
            return (
              obj.id === user_info.id && obj.password === user_info.password
            );
          });
          console.log("FOUND_inlogin:", found);

          if (found !== undefined) {
            yield put(actionCreators.getUserSuccess(id, password));
          } else {
            yield put(actionCreators.getUserFailure("Error recieved"));
          }
    
  } catch (error: any) {
    console.log("Error recieved",error)
    yield put(actionCreators.getUserFailure("Error recieved"));
  }
}

function* watchOnLoad() {
  yield takeEvery(actionTypes.GET_USER_REQUEST, onLoad);
}

export default function* LoginSaga() {
  yield all([fork(watchOnLoad)]);
}
