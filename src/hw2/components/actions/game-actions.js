export const SET_DIFFICULTY = "SET_DIFFICULTY";
export const INIT = "INIT";

export function setDifficultyAction(difficulty) {
    return {
        type: SET_DIFFICULTY,
        payload: {difficulty:difficulty},
    }
}

export function init(wordList, answer) {
    return {
        type: SET_DIFFICULTY,
        payload: {
            wordList: wordList,
            answer: answer,
        },
    }
}