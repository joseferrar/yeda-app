import { SHOW_SPINNER, HIDE_SPINNER } from "../constants";

const initialState = {
  loading: false,
};

const CommonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default CommonReducer;
