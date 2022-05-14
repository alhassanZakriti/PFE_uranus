import { combineReducers } from "redux";
import userInfo from "./userInfoReducer";
import isLogged from "./loggedReducer";
import mainChat from "./setMianChatReducer";
const reducers = combineReducers({
    userInfo,
    isLogged,
    mainChat
})

export default reducers