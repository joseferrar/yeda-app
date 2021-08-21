import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import CountReducer from "./CountReducer";
import FoodReducer from "./FoodReducer";
import OrderReducer from "./OrderReducer";
import ProfileReducer from "./ProfileReducer";
import SearchReducer from "./SearchReducer";

const allReducers = combineReducers({
  auth: AuthReducer,
  profile: ProfileReducer,
  food: FoodReducer,
  cart: CartReducer,
  count: CountReducer,
  search: SearchReducer,
  admin: AdminReducer,
  order: OrderReducer,
});

export default allReducers;
