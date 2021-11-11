import { GET_PRODUCTS } from "../constants";

const initialState = {
  loading: true,
  data: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
