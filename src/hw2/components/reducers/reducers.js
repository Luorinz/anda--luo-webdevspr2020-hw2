import {combineReducers} from "redux";
import messageReducer from "./message-reducer";
import userReducer from "./user-reducer";
import gameReducer from "./game-reducer";

const allReducers = {
    messageBox: messageReducer,
    user: userReducer,
    game: gameReducer,
};

const rootReducer = combineReducers(allReducers);
export default rootReducer;