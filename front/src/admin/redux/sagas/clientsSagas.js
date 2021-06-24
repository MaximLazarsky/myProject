import { takeLatest, put} from "redux-saga/effects";
import { ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from "../types"
import { fetchAddClient, fetchDeleteClient, fetchUpdateClient } from "../../helpers/httpServices"
import { togleIsLogin } from "../actions/loginAdmin";


function* addClient({payload}) {
	const {name, surname, email} = payload
	try{
		yield fetchAddClient(name, surname, email);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

function* deleteClient({payload}) {
	try {
		yield fetchDeleteClient(payload)
		yield put(togleIsLogin())
	} catch (e) {
		console.log(e)
	}
}

function* updateClient({payload}) {
	const {clientId, name, surname, email} = payload
	try{
		yield fetchUpdateClient(clientId, name, surname, email);
		yield put(togleIsLogin())		
	} catch (e) {
		console.log(e)
	}
}

export default [
	takeLatest(ADD_CLIENT, addClient),
	takeLatest(DELETE_CLIENT, deleteClient),
	takeLatest(UPDATE_CLIENT, updateClient),
  ];