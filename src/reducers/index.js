import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
});

export default allReducers;
