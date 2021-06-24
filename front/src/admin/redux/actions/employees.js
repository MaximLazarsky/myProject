import { 
	ADD_EMPLOYEE,
	DELETE_EMPLOYEE,
	UPDATE_EMPLOYEE,
	ADD_IMG,
	SET_CURRENT_EMPLOYEE_IMG,
} from "../types"

export const addNewEmployee = (payload) => ({type: ADD_EMPLOYEE, payload})
export const deleteEmployee = (payload) => ({type: DELETE_EMPLOYEE, payload})
export const updateEmployee = (payload) => ({type: UPDATE_EMPLOYEE, payload})
export const addImg = (payload) => ({type: ADD_IMG, payload})
export const setCurrentEmployeeImage = (payload) => ({type: SET_CURRENT_EMPLOYEE_IMG, payload})