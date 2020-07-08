// external imports
import { all, fork } from "redux-saga/effects";
import launchSaga from "./launchSaga";

export const rootSaga = function* root() {
  yield all([fork(launchSaga)]);
};
