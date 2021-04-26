import {
	SET_CURRENT_PROJECT,
  } from "../types";
  
  const defaultState = '';
  
  export default function setCurrentProject(state = defaultState, action) {
	switch (action.type) {
	  case SET_CURRENT_PROJECT:
		return action.payload
	  default:
		return state;
	}
  }