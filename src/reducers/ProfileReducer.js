import { GET_PROFILE } from "../constants";

const initialState = {
  loading: true,
  profile: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
