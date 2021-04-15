import { takeLatest, put} from "redux-saga/effects";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from "../types"
import { fetchAddEmployee, fetchDeleteEmployee, fetchUpdateEmployee } from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin";


function* addEmployee({payload}) {
	console.log("add payload", {payload})
	const {name, surname, position, skills, expiriense, dateStartWorking, info} = payload
	try{
		yield fetchAddEmployee(name, surname, position, skills, expiriense, dateStartWorking, info);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

function* deleteEmployee({payload}) {
	try {
		yield fetchDeleteEmployee(payload)
		yield put(togleIsLogin())
	} catch (e) {
		console.log(e)
	}
}

function* updateEmployee({payload}) {
	const {employeeId, name, surname, position, skills, expiriense, dateStartWorking, info} = payload
	console.log("payload", {employeeId, name, surname, position, skills, expiriense, dateStartWorking, info} )
	try{
		yield fetchUpdateEmployee(employeeId, name, surname, position, skills, expiriense, dateStartWorking, info);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

export default [
	takeLatest(ADD_EMPLOYEE, addEmployee),
	takeLatest(DELETE_EMPLOYEE, deleteEmployee),
	takeLatest(UPDATE_EMPLOYEE, updateEmployee)
  ];