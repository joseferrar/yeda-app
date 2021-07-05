import { CART } from "../constants";
import { AddCart } from "../services/CartService";
import { showToast } from "../components/Toast/toast";

export const CartAction = (Data) => async (dispatch) => {
  try {
    const { data } = await AddCart(Data);
    dispatch({ type: CART, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};
