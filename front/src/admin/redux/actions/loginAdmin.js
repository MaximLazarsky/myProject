import { LOGIN_ADMIN, SET_ERROR, TOGLE_IS_LOGIN } from "../types";

export const togleIsLogin = () => ({ type: TOGLE_IS_LOGIN });

export const loginAdmin = (payload) => ({ type: LOGIN_ADMIN, payload });

export const setErr = (payload) => ({ type: SET_ERROR, payload });
