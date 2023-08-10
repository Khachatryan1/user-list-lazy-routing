import {ADD_USER, GET_USER, DELETE_USER} from "./userList.types"

const initialState = {
    list: []
}

export const userListReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                list: action.payload,
            }

        case GET_USER:
            return {
                ...state,
                list: [...state.list, action.payload],
            }

        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((user) => user.id !== action.payload),
            }

        default:
            return state
    }
}