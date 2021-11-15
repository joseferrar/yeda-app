import { ADDCART, GETCART, DELETECART, UPDATECART } from "../constants";
import {
  AddCart,
  GetCart,
  DeleteCart,
  UpdateCart,
} from "../services/CartService";
import { showToast } from "../components/Toast/toast";
import { ShowSpinner, HideSpinner } from "../actions/CommonAction"

export const AddCartAction = (Add) => async (dispatch) => {
  try {
    const { data } = await AddCart(Add);
    dispatch({ type: ADDCART, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};

export const GetCartAction = () => async (dispatch) => {
  try {
    const { data } = await GetCart();
    dispatch({ type: GETCART, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};

export const UpdateCartAction = (id, updatecart) => async (dispatch) => {
  try {
    dispatch(ShowSpinner())
    const { data } = await UpdateCart(id, updatecart);
    dispatch({ type: UPDATECART, payload: data });
    dispatch(HideSpinner())
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCartAction = (id) => async (dispatch) => {
  try {
    await DeleteCart(id);
    dispatch({ type: DELETECART, payload: id });
  } catch (error) {
    console.log(error);
  }
};
