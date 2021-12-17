import { GET_CATEGORY } from "../constants";

const initialState = {
  loading: true,
  data: [],
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
