import { all } from "redux-saga/effects";
import adminSagas from "./adminSagas";

function* rootSaga() {
  return yield all([...adminSagas]);
}

export default rootSaga;
