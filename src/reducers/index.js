import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import CountReducer from "./CountReducer";
import FoodReducer from "./FoodReducer";
import ProfileReducer from "./ProfileReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  food: FoodReducer,
  cart: CartReducer,
  count: CountReducer,
});

export default allReducers;
