import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FoodReducer from "./FoodReducer";
import ProfileReducer from "./ProfileReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  food: FoodReducer,
});

export default allReducers;
