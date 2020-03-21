import { all, fork } from "redux-saga/effects";
import {dispatchWatcher} from "../containers/App/state/sagas";

// fork all the watchers

export default function* rootSaga() {
  yield all([fork(dispatchWatcher)]);
}
