import {combineReducers} from "redux"
import {userListReducer} from "./userList/userList.reducer"

export const reducer = combineReducers({
    userListReducer,
})