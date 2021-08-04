import { GET_USERS, POST_USERS } from "../constants";
import { GetUsers, PostUsers } from "../services/AdminService";
import { showToast } from "../components/Toast/toast";

export const GetUsersAction = () => async (dispatch) => {
  try {
    const { data } = await GetUsers();
    dispatch({ type: GET_USERS, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};

export const PostUserAction = (Data) => async (dispatch) => {
  try {
    const { data } = await PostUsers(Data);
    dispatch({ type: POST_USERS, payload: data });
    console.log(data);
  } catch (err) {
    showToast(err.response.data);
  }
};
