import {configureStore} from "@reduxjs/toolkit";
// import { counterReducer } from "./Counter/counterReducer";
import counterReducer from "./Counter/counterSlice";
import {combineReducers} from "redux"
import { todoReducer } from "./TodoApp/todoReducer";
const rootReducer = combineReducers({
    counter:counterReducer,
    todoApp:todoReducer
})


export const store = configureStore({
    reducer:rootReducer
})