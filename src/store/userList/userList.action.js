import {ADD_USER, GET_USER, DELETE_USER} from "./userList.types"

export const addUser = (list) => {
    return {
        type: ADD_USER,
        payload: list,
    }
}

export const getUser = (list) => {
    return {
        type: GET_USER,
        payload: list,
    }
}


export const deleteUser = (userId) => {
    return {
        type: DELETE_USER,
        payload: userId,
    }
}