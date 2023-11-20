import {createStore, combineReducers, applyMiddleware} from "redux";
import { countReducer } from "./reducer";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from '../Saga/saga'

const reducers = combineReducers({counter: countReducer})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga); 

export default store;