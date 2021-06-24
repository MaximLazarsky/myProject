import {
	SET_CURRENT_PROJECT_IMAGES,
  } from "../types";
  
  const defaultState = [];
  
  export default function currentProjectImagesReducer(state = defaultState, action) {
	switch (action.type) {
	  case SET_CURRENT_PROJECT_IMAGES:
		  console.log("action.payload.file", action.payload)
		return action.payload
		
		
	  default:
		return state;
	}
  }