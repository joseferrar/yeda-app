import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import CountReducer from "./CountReducer";
import FoodReducer from "./FoodReducer";
import ProfileReducer from "./ProfileReducer";
import SearchReducer from "./SearchReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  food: FoodReducer,
  cart: CartReducer,
  count: CountReducer,
  search: SearchReducer,
});

export default allReducers;
