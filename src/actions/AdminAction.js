import { GET_USERS } from "../constants";
import { GetUsers } from "../services/AdminService";
import { showToast } from "../components/Toast/toast";

export const GetUsersAction = () => async (dispatch) => {
  try {
    const { data } = await GetUsers();
    dispatch({ type: GET_USERS, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};
