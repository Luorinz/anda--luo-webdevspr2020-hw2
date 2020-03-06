import {ADD_MESSAGE} from "../actions/message-actions";

export default function messageReducer(state={messages:[]}, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state, messages: [...state.messages, action.payload]
            }

        }
        default:
            return state;
    }
}