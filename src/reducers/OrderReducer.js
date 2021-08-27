import { GET_ORDER } from "../constants";

const initialState = {
  loading: true,
  order: [],
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default OrderReducer;
