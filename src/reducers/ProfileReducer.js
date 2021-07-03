import { PROFILE } from "../constants";

const initialState = {
  profile: [],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
