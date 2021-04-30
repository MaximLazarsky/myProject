import {
  LOGIN_ADMIN,
  SET_ERROR,
  SET_IS_LOGIN,
  TOGLE_IS_LOADING,
  GET_DATA,
  LOGOUT,
  SET_EXCHANGE_RATE,
} from "../types";

export const togleIsLogin = () => ({ type: SET_IS_LOGIN });
export const togleIsLoading = () => ({ type: TOGLE_IS_LOADING });
export const loginAdmin = (payload) => ({ type: LOGIN_ADMIN, payload });
export const setErr = (payload) => ({ type: SET_ERROR, payload });
export const getData = (payload) => ({ type: GET_DATA, payload });
export const logout = () => ({ type: LOGOUT });
export const getExchangeRate = (payload) => ({ type: SET_EXCHANGE_RATE, payload });
