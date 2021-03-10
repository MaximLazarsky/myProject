import { LOGIN_ADMIN, SET_ERROR } from "../types";

export const loginAdmin = (payload) => ({ type: LOGIN_ADMIN, payload });

export const setErr = (payload) => ({ type: SET_ERROR, payload });
