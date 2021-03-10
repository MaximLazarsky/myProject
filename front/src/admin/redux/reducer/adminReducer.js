import { SET_ERROR } from "../types";

const defaultState = {
  data: {},
  isLoading: false,
  err: "",
};

export default function adminReducer(state = defaultState, action) {
  switch (action.type) {
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
