import {NEW_GUESS} from "../actions/user-actions";

const MAXGUESS = 4;

const initialState = {
    curGuess: 0,
    curWord: "",
    isOver: false,
};



export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_GUESS: {
            if (state.curGuess === MAXGUESS) {
                return state;
            } else {
                return {
                    curGuess: state.curGuess + 1,
                    curWord: action.payload.word,
                    isOver: action.payload.isOver,
                }
            }
        }
        default:
            return state;
    }
}