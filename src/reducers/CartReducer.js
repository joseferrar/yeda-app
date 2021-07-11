import { ADDCART, GETCART, DELETECART } from "../constants";

const initialState = {
  loading: true,
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCART:
      return {
        ...state,
        // cart: action.payload,
      };
    case GETCART:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case DELETECART:
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
