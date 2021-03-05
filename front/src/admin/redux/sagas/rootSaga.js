import { all } from "redux-saga/effects";
import loginSagas from "./loginSagas";

function* rootSaga() {
  return yield all([...loginSagas]);
}

export default rootSaga;
