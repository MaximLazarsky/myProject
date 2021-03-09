import { takeLatest, put, call } from "redux-saga/effects";
import { fetchLoginAdmin } from "../../helpers/httpServices";
import { LOGIN_ADMIN, TOGLE_IS_LOGIN, SET_ERROR } from "../types";

const loginAdminSaga = function* ({ payload }) {
  const { adminEmail, password } = payload;
  try {
    const { data } = yield fetchLoginAdmin(adminEmail, password);
    localStorage.setItem("Authorization", `Bearer ${data.token}`);
    yield put({ type: TOGLE_IS_LOGIN });
  } catch (e) {
    console.log({ e });
    if (e.response.status === 401) {
      const err = "Email or password is wrong";
      yield put({ type: SET_ERROR, payload: err });
      return err;
    }
  }
};

export default [takeLatest(LOGIN_ADMIN, loginAdminSaga)];
