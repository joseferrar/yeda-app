import { GET_USERS, POST_USERS } from "../constants";

const initialState = {
  loading: true,
  data: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AdminReducer;
