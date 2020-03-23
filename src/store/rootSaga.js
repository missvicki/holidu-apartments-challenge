import { all, fork } from "redux-saga/effects";
import {getsApartmentsWatcher} from '../containers/Main/state/sagas/apartments'

// fork all the watchers

export default function* rootSaga() {
  yield all([fork(getsApartmentsWatcher)]);
}
