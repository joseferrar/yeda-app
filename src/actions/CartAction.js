import { ADDCART, GETCART, DELETECART } from "../constants";
import { AddCart, GetCart, DeleteCart } from "../services/CartService";
import { showToast } from "../components/Toast/toast";

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

export const DeleteCartAction = (id) => async (dispatch) => {
  try {
    await DeleteCart(id);
    dispatch({ type: DELETECART, payload: id });
  } catch (error) {
    console.log(error);
  }
};
