import { takeLatest, put} from "redux-saga/effects";
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, ADD_MULTIPLE_IMAGES} from "../types"
import { fetchAddProject, fetchDeleteProject, fetchUpdateProject, fetchAddMultipleImages } from "../../helpers/httpServices"
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
	const {projectId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, isActive, isSuccess} = payload
	console.log("payload in SAGA", payload)
	try{
		yield fetchUpdateProject(projectId, projectName, task, skills, discription, startDate, completionDate, projectLink, platform, earned, isActive, isSuccess);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

function* addMultipleImages({payload}) {
	const {formData} = payload
	console.log("payload in SAGA", payload)
	try{
		yield fetchAddMultipleImages(formData);		
	} catch (e) {
		console.log(e)
	}
}

export default [
	takeLatest(ADD_PROJECT, addProject),
	takeLatest(DELETE_PROJECT, deleteProject),
	takeLatest(UPDATE_PROJECT, updateProject),
	takeLatest(ADD_MULTIPLE_IMAGES, addMultipleImages),
  ];