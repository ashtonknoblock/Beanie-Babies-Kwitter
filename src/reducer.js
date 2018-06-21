import { ADD_MESSAGE, ADD_USER, INPUT_CHANGE, LOGOUT } from './actions.js'
const initialState = {
    text: "",
    token: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            

            let newState = state;

            newState.text = action.payload;

                return newState;
        case ADD_USER:
            
            if (action.payload.success) {
                let newState = state;
                newState.token = action.payload.token;
                return newState;
            }
            break;
        case INPUT_CHANGE:
            let newState1 = state;
            newState1.text = action.payload
            return newState1;
            
        case LOGOUT:
            let newState2 = state;
            newState2.token = "";
            return newState2;
            default:
                return state;
    }
    
}

export default reducer;