import { TOGLE_IS_LOGIN, SET_ERROR } from "../types";
// import { loginAdmin } from "../actions/loginAdmin";

const defaultState = {
  data: {},
  isLoading: false,
  isLogin: false,
  err: "",
};

export default function adminReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGLE_IS_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case SET_ERROR:
      console.log(action.payload);
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}
