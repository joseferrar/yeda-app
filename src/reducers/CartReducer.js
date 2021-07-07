import { ADDCART, GETCART } from "../constants";

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      return {
        ...state,
        cart: action.payload,
      };
    case GETCART:
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
