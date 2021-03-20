import { all } from "redux-saga/effects";
import adminSagas from "./adminSagas";
import clientsSagas from "./clientsSagas"

function* rootSaga() {
  return yield all([...adminSagas, ...clientsSagas]);
}

export default rootSaga;
