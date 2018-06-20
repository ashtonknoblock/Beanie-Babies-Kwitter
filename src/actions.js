export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (textValue) => {
    return {
        type: ADD_MESSAGE,
        payload: textValue
    }
}

export const ADD_USER = "ADD_USER";

export const addUser = (authToken) => {
    return {
        type: ADD_USER,
        payload: authToken
    }
}

