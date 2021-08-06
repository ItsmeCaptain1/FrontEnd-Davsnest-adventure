import counterReducer from "./counterReducer";
import emailReducer from "./emailReducer";
import usernameReducer from "./usernameReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  username: usernameReducer,
  email: emailReducer,
});

export default rootReducer;
