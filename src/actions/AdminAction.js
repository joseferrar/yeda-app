import {
  GET_USERS,
  POST_USERS,
  EDIT_USERS,
  DELETE_USERS,
  GET_PRODUCTS,
} from "../constants";
import {
  GetUsers,
  PostUsers,
  EditUsers,
  DeleteUsers,
  GetProducts,
} from "../services/AdminService";
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
    showToast("Created Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const EditUserAction = (id, edituser) => async (dispatch) => {
  try {
    const { data } = await EditUsers(id, edituser);
    dispatch({ type: EDIT_USERS, payload: data });
    showToast("Updated Successfully !!!");
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteUserAction = (id) => async (dispatch) => {
  try {
    await DeleteUsers(id);
    await dispatch({ type: DELETE_USERS, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

//Admin Products
export const GetProductAction = () => async (dispatch) => {
  try {
    const { data } = await GetProducts();
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};
