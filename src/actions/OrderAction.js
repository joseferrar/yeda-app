import { Add_ORDER, GET_ORDER } from "../constants";
import { AddOrderService, GetOrderService } from "../services/OrderService";
import { showToast } from "../components/Toast/toast";

export const AddOrderAction = (Add) => async (dispatch) => {
  try {
    const { data } = await AddOrderService(Add);
    dispatch({ type: Add_ORDER, payload: data });
    showToast("Order Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const GetOrderAction = () => async (dispatch) => {
  try {
    const { data } = await GetOrderService();
    dispatch({ type: GET_ORDER, payload: data });
  } catch (err) {
    showToast(err.response.data);
  }
};
