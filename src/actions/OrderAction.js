import { Add_ORDER, GET_ORDER, UPDATE_ORDER } from "../constants";
import {
  AddOrderService,
  GetOrderService,
  AllOrderService,
  UpdateOrderService,
} from "../services/OrderService";
import { ShowSpinner, HideSpinner } from "./CommonAction";
import { showToast } from "../components/Toast/toast";

export const AllOrderAction = () => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await AllOrderService();
    dispatch({ type: GET_ORDER, payload: data });
    dispatch(HideSpinner());
  } catch (err) {
    showToast(err.response.data);
  }
};

export const AddOrderAction = (Add) => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await AddOrderService(Add);
    dispatch({ type: Add_ORDER, payload: data });
    dispatch(GetOrderAction());
    dispatch(HideSpinner());
    showToast("Order Successfully !!!");
  } catch (err) {
    showToast(err.response.data);
  }
};

export const GetOrderAction = () => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await GetOrderService();
    dispatch({ type: GET_ORDER, payload: data });
    dispatch(HideSpinner());
  } catch (err) {
    showToast(err.response.data);
  }
};

export const UpdateOrderAction = (id, updateorder) => async (dispatch) => {
  try {
    dispatch(ShowSpinner());
    const { data } = await UpdateOrderService(id, updateorder);
    dispatch({ type: UPDATE_ORDER, payload: data });
    dispatch(GetOrderAction());
    dispatch(HideSpinner());
  } catch (error) {
    console.log(error.message);
  }
};
