import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchApi } from "../Services/apiCall";
import * as actionCreators from "../ActionCreator/LoginActionCreator";
import * as actionTypes from "../ActionTypes/LoginActionTypes";

function* onLoadLyrics({ id, password }: actionTypes.GetUserRequest) {
    
      const user_info: actionTypes.userDetail = {
        id: id,
        password: password,
    };
    
  try {
      const { data } = yield call(fetchApi, id, password);
          const found = data.find((obj: any) => {
            return (
              obj.id === user_info.id && obj.password === user_info.password
            );
          });
          console.log("FOUND_inlogin:", found);

          if (found) {
              yield put(actionCreators.getUserSuccess(id, password));

      }
    
  } catch (error:any) {
    yield put(actionCreators.getUserFailure(error.response.data.error));
  }
}

function* watchOnLoad() {
  yield takeEvery(actionTypes.GET_USER_REQUEST, onLoadLyrics);
}

export default function* LoginSaga() {
  yield all([fork(watchOnLoad)]);
}
