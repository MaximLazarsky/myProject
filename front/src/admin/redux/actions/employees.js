import { 
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	UPDATE_EMPLOYEE
} from "../types"

export const addNewEmployee = (payload) => ({type: ADD_EMPLOYEE, payload})
export const deleteEmployee = (payload) => ({type: DELETE_EMPLOYEE, payload})
export const updateEmployee = (payload) => ({type: UPDATE_EMPLOYEE, payload})