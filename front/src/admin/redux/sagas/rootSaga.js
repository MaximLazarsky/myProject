import { all } from "redux-saga/effects";
import adminSagas from "./adminSagas";
import clientsSagas from "./clientsSagas"
import employeesSagas from "./employeesSagas"

function* rootSaga() {
  return yield all([...adminSagas, ...clientsSagas, ...employeesSagas]);
}

export default rootSaga;
