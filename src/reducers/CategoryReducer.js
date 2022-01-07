import { GET_CATEGORY } from "../constants";

const initialState = {
  category: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
