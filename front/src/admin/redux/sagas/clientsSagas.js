import { takeLatest, put } from "redux-saga/effects";
import { ADD_CLIENT } from "../types"

function* addClient({payload}) {
	const {name, surneme, email} = payload
	try{

	} catch (e) {

	}
}

export default [
	takeLatest(ADD_CLIENT, addClient),
  ];