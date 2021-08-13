import { GET_USERS, POST_USERS, EDIT_USERS, DELETE_USERS } from "../constants";

const initialState = {
  loading: true,
  users: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case POST_USERS:
      return {
        ...state,
      };
    case EDIT_USERS:
      return {
        ...state,
        loading: false,
        // users: users.map((item) =>
        //   item._id === action.payload._id ? action.payload : item
        // ),
      };

    case DELETE_USERS:
      return {
        ...state,
        loading: false,
        // users: state.users.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default AdminReducer;
