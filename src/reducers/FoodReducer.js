import { PRODUCT } from "../constants";

const initialState = {
  data: [],
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default FoodReducer;
