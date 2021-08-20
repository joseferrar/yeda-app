import { GET_PROFILE, CREATE_PROFILE } from "../constants";
import {
  GetProfile,
  CreateProfile,
  EditProfile,
} from "../services/ProfileService";
import { showToast } from "../components/Toast/toast";

export const GetProfileAction = () => async (dispatch) => {
  try {
    const { data } = await GetProfile();
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const CreateProfileAction = (Data) => async (dispatch) => {
  try {
    const { data } = await CreateProfile(Data);
    dispatch({ type: CREATE_PROFILE, payload: data });
    showToast("Created Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const EditProfileAction = (id, editProfile) => async (dispatch) => {
  try {
    const { data } = await EditProfile(id, editProfile);
    dispatch({ type: EDIT_USERS, payload: data });
    showToast("Updated Successfully !!!");
  } catch (error) {
    console.log(error.message);
  }
};
