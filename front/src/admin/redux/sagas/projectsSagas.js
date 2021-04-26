import { takeLatest, put} from "redux-saga/effects";
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT} from "../types"
import { fetchAddProject, fetchDeleteProject, fetchUpdateProject } from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin";


function* addProject({payload}) {
	const {clientId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, employeeId, isActive, isSuccess} = payload
	try{
		yield fetchAddProject(clientId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, employeeId, isActive, isSuccess);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

function* deleteProject({payload}) {
	try {
		yield fetchDeleteProject(payload)
		yield put(togleIsLogin())
	} catch (e) {
		console.log(e)
	}
}

function* updateProject({payload}) {
	const {projectId, clientId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, employeeId, isActive, isSuccess} = payload
	console.log("payload in SAGA", payload)
	try{
		yield fetchUpdateProject(projectId, clientId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, employeeId, isActive, isSuccess);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

export default [
	takeLatest(ADD_PROJECT, addProject),
	takeLatest(DELETE_PROJECT, deleteProject),
	takeLatest(UPDATE_PROJECT, updateProject)
  ];