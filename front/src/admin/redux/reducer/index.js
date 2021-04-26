import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/rootSaga";
import adminReducer from "./adminReducer";
import currentEmploeeImage from "./currentEmploeeImage"
import currentProjectReducer from './currentProjectReducer'

const rootReduser = combineReducers({
  data: adminReducer,
  currentEmployeeImage: currentEmploeeImage,
  currentProject: currentProjectReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
