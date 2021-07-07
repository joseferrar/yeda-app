import { ADDCART, GETCART } from "../constants";
import { AddCart, GetCart } from "../services/CartService";
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
