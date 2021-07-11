import { PRODUCT } from "../constants";

const initialState = {
  loading: true,
  data: [],
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default FoodReducer;
