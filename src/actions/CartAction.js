import { ADDCART, GETCART, DELETECART, UPDATECART } from "../constants";
import {
  AddCart,
  GetCart,
  DeleteCart,
  UpdateCart,
} from "../services/CartService";
import { showToast } from "../components/Toast/toast";
import { ShowSpinner, HideSpinner } from "../actions/CommonAction";

export const AddCartAction = (Add) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await AddCart(Add);
    await dispatch({ type: ADDCART, payload: data });
    await dispatch(HideSpinner());
    await showToast(data?.foodName);
  } catch (err) {
    showToast(err.response.data);
  }
};

export const GetCartAction = () => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await GetCart();
    await dispatch({ type: GETCART, payload: data });
    await dispatch(HideSpinner());
  } catch (err) {
    showToast(err.response.data);
  }
};

export const UpdateCartAction = (id, updatecart) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    const { data } = await UpdateCart(id, updatecart);
    await dispatch({ type: UPDATECART, payload: data });
    await dispatch(HideSpinner());
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCartAction = (id) => async (dispatch) => {
  try {
    await dispatch(ShowSpinner());
    await DeleteCart(id);
    await dispatch({ type: DELETECART, payload: id });
    await dispatch(HideSpinner());
  } catch (error) {
    console.log(error);
  }
};
