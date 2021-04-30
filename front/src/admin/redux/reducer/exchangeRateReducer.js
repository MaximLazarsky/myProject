import {
	SET_EXCHANGE_RATE,
  } from "../types";
  
  const defaultState = [];
  
  export default function setCurrentProject(state = defaultState, action) {
	switch (action.type) {
	  case SET_EXCHANGE_RATE:
		return action.payload
	  default:
		return state;
	}
  }