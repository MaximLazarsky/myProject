import { 
	ADD_PROJECT,
	DELETE_PROJECT,
	UPDATE_PROJECT,
	SET_CURRENT_PROJECT,
	ADD_MULTIPLE_IMAGES,
	SET_CURRENT_PROJECT_IMAGES,
} from "../types"

export const addNewProject = (payload) => ({type: ADD_PROJECT, payload})
export const deleteProject = (payload) => ({type: DELETE_PROJECT, payload})
export const updateProject = (payload) => ({type: UPDATE_PROJECT, payload})
export const setCurrentProject = (payload) => ({type: SET_CURRENT_PROJECT, payload})
export const addMultipleImages = (payload) => ({type: ADD_MULTIPLE_IMAGES, payload})
export const setCurrentProjectImages = (payload) => ({type: SET_CURRENT_PROJECT_IMAGES, payload})


