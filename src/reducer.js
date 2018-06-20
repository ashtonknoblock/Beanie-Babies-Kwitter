import { ADD_MESSAGE, ADD_USER } from './actions.js'
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
            default:
                return state;
    }
    
}

export default reducer;