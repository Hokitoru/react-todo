import {applyMiddleware, combineReducers, createStore} from "redux";
import {taskReducer} from "./taskReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({task: taskReducer});

export const store = createStore(rootReducer, composeWithDevTools());