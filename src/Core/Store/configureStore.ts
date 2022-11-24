import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers/rootReducer";
import rootSaga from "../Saga/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    console.log("Store is working");
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
});

SagaMiddleware.run(rootSaga);

export default store;
