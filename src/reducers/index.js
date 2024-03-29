import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import AuthReducer from "./AuthReducer";
import CartReducer from "./CartReducer";
import CategoryReducer from "./CategoryReducer";
import CommonReducer from "./CommonReducer";
import CountReducer from "./CountReducer";
import FoodReducer from "./FoodReducer";
import OrderReducer from "./OrderReducer";
import ProductReducer from "./ProductReducer";
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
  product: ProductReducer,
  common: CommonReducer,
  categories: CategoryReducer,
});

export default allReducers;
