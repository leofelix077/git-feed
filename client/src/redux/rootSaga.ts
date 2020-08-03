import { all, fork } from "redux-saga/effects";
import { localeDetectorSaga } from "./localeDetector";

function* rootSaga(): any {
  yield all([fork(localeDetectorSaga)]);
}

export default rootSaga;
