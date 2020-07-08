import { put, call, takeLatest } from "redux-saga/effects";
import { loadLaunchAsync } from "../actions/launchActions";
import { loadLaunches } from "../services/launchService";
import { ILaunchResponse } from "../types/launchTypes";

export function* loadLaunchSaga(): Generator {
  try {
    const response = yield call(loadLaunches, "2015-08-20/2015-09-20");

    yield put(loadLaunchAsync.success(response as ILaunchResponse));
  } catch (e) {
    console.log(e);
  }
}

export default function* launchSaga() {
  yield takeLatest(loadLaunchAsync.request, loadLaunchSaga);
}
