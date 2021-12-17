import {
  GET_USERS,
  POST_USERS,
  EDIT_USERS,
  DELETE_USERS,
  GET_PRODUCTS,
  ADD_PRODUCT,
  GET_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY
} from "../constants";
import {
  GetUsers,
  PostUsers,
  EditUsers,
  DeleteUsers,
  GetProducts,
  AddProduct,
  GetCategory,
  AddCategory,
  DeleteCategory,
} from "../services/AdminService";
import { showToast } from "../components/Toast/toast";
import { ShowSpinner, HideSpinner } from "./CommonAction";

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

export const AddProductAction = (Data) => async (dispatch) => {
  try {
    const { data } = await AddProduct(Data);
    dispatch({ type: ADD_PRODUCT, payload: data });
    showToast("Created Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

//Admin Category
export const GetCategoryAction = () => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await GetCategory();
    dispatch({ type: GET_CATEGORY, payload: data });
    dispatch(HideSpinner());
  } catch (err) {
    showToast(err.response.data);
  }
};

export const AddCategoryAction = (Data) => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await AddCategory(Data);
    dispatch({ type: ADD_CATEGORY, payload: data });
    dispatch(GetCategoryAction());
    dispatch(HideSpinner());
    showToast("Created Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const DeleteCategoryAction = (id) => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    await DeleteCategory(id);
    await dispatch({ type: DELETE_CATEGORY, payload: id });
    dispatch(GetCategoryAction());
    dispatch(HideSpinner());
  } catch (error) {
    console.log(error.message);
  }
};
