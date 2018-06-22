import { ADD_MESSAGE, ADD_USER, INPUT_CHANGE, LOGOUT, GET_MESSAGE, USER_ACTION, USER_MESSAGE, DELETE_MESSAGE } from './actions'
const initialState = {
    text: "",
    token: {token: ""},
    messageItem: {messages: []},
    displayName: "",
    messages: []
    // profileMessages:  {
    //     displayName: "",
    //     messages: []
    // }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            let newState = {...state};
            newState.text = action.payload;

                return newState;
        case ADD_USER:
            
            if (action.payload.success) {
                let newState = {...state};
                newState.token.token = action.payload.token;
                return newState;
            }
            break;
        case INPUT_CHANGE:
            let newState1 = {...state};
            newState1.text = action.payload
            return newState1;
            
        case LOGOUT:
            let newState2 = {...state};
            newState2.token = "";
            return newState2;
        case USER_ACTION:
            let newState3 = {...state};
            newState3.displayName = action.payload;
            return newState3;
            // break;
        case USER_MESSAGE:
            let newState4 = {...state};
            newState4.messages = action.payload;
            return newState4;
        case GET_MESSAGE:
            let newState5 = {...state};
            newState5.messageItem = action.payload;
            return newState5;
        case DELETE_MESSAGE:
            let newState6 = {...state};
            newState6.messages.splice(action.payload, 1);
            console.log(newState6);
            // return newState6;
            // break;
            default:
                return state;
    }
    
}

export default reducer;