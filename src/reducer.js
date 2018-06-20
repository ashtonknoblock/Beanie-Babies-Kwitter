import { ADD_MESSAGE } from './actions.js'
import messageList from './messageList.json'



const initialState = {
    // loggedIn: false,
    messages: messageList,
    text: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            if (!action.payload.length) {
                return;
            }

            return {
                ...state, messages: [...state.messages, {
                    "id": 1,
                    "text": action.payload,
                    "userId": state.messages.length + 1
                }]
            }
            default:
                return state;
    }
    
}

export default reducer;