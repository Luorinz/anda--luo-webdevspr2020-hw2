import {INIT, SET_DIFFICULTY} from "../actions/game-actions";

const initialState = {
    difficulty: "",
    wordList: [],
    answer: "",
};


export default function gameReducer(state=initialState, action) {
    switch (action.type) {
        case SET_DIFFICULTY: {
            return Object.assign({}, state, action.payload);
        }
        case INIT: {
            return Object.assign({}, state, action.payload);
        }
        default:
            return state;
    }
}