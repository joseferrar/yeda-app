import { REGISTER, LOGIN, LOGOUT } from "../constants";

const initialState = {
  auth: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        auth: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        auth: action.payload,
      };
    case "USER":
      return {
        ...state,
        auth: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
