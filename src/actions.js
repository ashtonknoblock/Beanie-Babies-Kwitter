export const ADD_MESSAGE = "ADD_MESSAGE";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const ADD_USER = "ADD_USER";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGE = "GET_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const USER_ACTION = "USER_ACTION";
export const USER_MESSAGE = "USER_MESSAGE";

export const userMessage = (data) => {
    return {
        type: USER_MESSAGE,
        payload: data
    }
}

export const userAction = (data) => {
    return {
        type: USER_ACTION,
        payload: data
    }
}

export const deleteMessage = (index) => {
    return {
        type: DELETE_MESSAGE,
        payload: index
    }
}


export const getMessages = (response) => {
    return {
        type: GET_MESSAGE,
        payload: response
    }
}

export const addMessage = (text) => {
    return {
        type: ADD_MESSAGE,
        payload: text
    }
}


export const addUser = (authToken) => {
    return {
        type: ADD_USER,
        payload: authToken
    }
}

export const inputChange = (text) => {
    return {
        type: INPUT_CHANGE,
        payload: text
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

