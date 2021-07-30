import { SEARCH } from "../constants";

const initialState = {
  loading: true,
  data: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
         loading: false,
        data: action.payload,
      }
    default:
      return state;
  }
};

export default SearchReducer;
