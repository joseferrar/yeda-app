import { ADDCART, GETCART, DELETECART } from "../constants";
import { AddCart, GetCart, DeleteCart } from "../services/CartService";
import { showToast } from "../components/Toast/toast";

export const CartAction = (Data) => async (dispatch) => {
  try {
    const { data } = await AddCart(Data);
    dispatch({ type: CART, payload: data });
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
