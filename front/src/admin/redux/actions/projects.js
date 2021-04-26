import { 
	ADD_PROJECT,
	DELETE_PROJECT,
	UPDATE_PROJECT,
	SET_CURRENT_PROJECT,
} from "../types"

export const addNewProject = (payload) => ({type: ADD_PROJECT, payload})
export const deleteProject = (payload) => ({type: DELETE_PROJECT, payload})
export const updateProject = (payload) => ({type: UPDATE_PROJECT, payload})
export const setCurrentProject = (payload) => ({type: SET_CURRENT_PROJECT, payload})


