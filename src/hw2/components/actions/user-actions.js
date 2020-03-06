export const NEW_GUESS = "NEW_GUESS";

export function guess(curWord, isGameover) {
    return {
        type: NEW_GUESS,
        payload: {
            word: curWord,
            isOver: isGameover,
        },
    }
}