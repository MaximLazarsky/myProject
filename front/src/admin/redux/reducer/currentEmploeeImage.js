import {
	SET_CURRENT_EMPLOYEE_IMG,
  } from "../types";
  
  const defaultState = [];
  
  export default function setCurrentEmployeeImage(state = defaultState, action) {
	switch (action.type) {
	  case SET_CURRENT_EMPLOYEE_IMG:
		  
		return {
			currentEmploeeImage: action.payload
		};
	  
	  default:
		return state;
	}
  }