import { all, fork } from "redux-saga/effects";
import { localeDetectorSaga } from "./localeDetector";
import { authRootSaga } from "./authState";

function* rootSaga(): any {
  yield all([fork(localeDetectorSaga), fork(authRootSaga)]);
}

export default rootSaga;
