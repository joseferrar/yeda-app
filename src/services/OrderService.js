import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const AllOrderService = async () => {
  const api = await REACT_URL.get("/allorders", {
    headers: await authHeader(),
  });
  return api;
};

export const AddOrderService = async (data) => {
  const api = await REACT_URL.post("/addorder", data, {
    headers: await authHeader(),
  });
  return api;
};

export const GetOrderService = async () => {
  const api = await REACT_URL.get("/myorder", { headers: await authHeader() });
  return api;
};

export const UpdateOrderService = async (id, updateorder) => {
  const api = await REACT_URL.put(`/uporder/${id}`, updateorder, {
    headers: await authHeader(),
  });
  return api;
};
