import { all } from "redux-saga/effects";
import adminSagas from "./adminSagas";
import clientsSagas from "./clientsSagas"
import employeesSagas from "./employeesSagas"
import projectsSagas from "./projectsSagas"

function* rootSaga() {
  return yield all([...adminSagas, ...clientsSagas, ...employeesSagas, ...projectsSagas]);
}

export default rootSaga;
