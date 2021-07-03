import { PROFILE } from "../constants";
import { Profile } from "../services/ProfileService";

export const ProfileAction = () => async (dispatch) => {
  try {
    const { data } = await Profile();
    dispatch({ type: PROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
