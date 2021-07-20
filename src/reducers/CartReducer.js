import { ADDCART, GETCART, DELETECART, UPDATECART } from "../constants";

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
    case UPDATECART:
      return {
        ...state,
        loading: false,
        cart: state.cart.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
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
