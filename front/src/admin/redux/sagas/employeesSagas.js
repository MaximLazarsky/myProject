import { takeLatest, put} from "redux-saga/effects";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, ADD_IMG} from "../types"
import { fetchAddEmployee, fetchDeleteEmployee, fetchUpdateEmployee, fetchAddImg} from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin";


function* addEmployee({payload}) {
	const {avatar, name, surname, position, skills, expiriense, dateStartWorking, info} = payload
	try{
		yield fetchAddEmployee(avatar, name, surname, position, skills, expiriense, dateStartWorking, info);
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
	const {employeeId, avatar, name, surname, position, skills, expiriense, dateStartWorking, info} = payload
	try{
		yield fetchUpdateEmployee(employeeId, avatar, name, surname, position, skills, expiriense, dateStartWorking, info);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

function* addImg({payload}) {
	const {formData} = payload
	try{
		yield fetchAddImg(formData);		
	} catch (e) {
		console.log(e)
	}
}

export default [
	takeLatest(ADD_EMPLOYEE, addEmployee),
	takeLatest(DELETE_EMPLOYEE, deleteEmployee),
	takeLatest(UPDATE_EMPLOYEE, updateEmployee),
	takeLatest(ADD_IMG, addImg),
  ];