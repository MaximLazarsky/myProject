import { 
	ADD_CLIENT,
	DELETE_CLIENT, 
	UPDATE_CLIENT,
} from "../types"

export const addNewClient = (payload) => ({type: ADD_CLIENT, payload})
export const deleteClient = (payload) => ({type: DELETE_CLIENT, payload})
export const updateClient = (payload) => ({type: UPDATE_CLIENT, payload})