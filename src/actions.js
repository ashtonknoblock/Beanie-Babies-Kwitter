export const ADD_MESSAGE = "ADD_MESSAGE";
export const INPUT_CHANGE = "INPUT_CHANGE";
export const ADD_USER = "ADD_USER";
export const LOGOUT = "LOGOUT";
export const GET_MESSAGE = "GET_MESSAGE";


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

