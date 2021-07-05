import { CART } from "../constants";

const initialState = {
  food: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART:
      return {
        ...state,
        food: action.payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
