import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const AllOrderService = async () => {
  const api = REACT_URL.get("/allorders", { headers: await authHeader() });
  return api;
};

export const AddOrderService = async (data) => {
  const api = REACT_URL.post("/addorder", data, {
    headers: await authHeader(),
  });
  return api;
};

export const GetOrderService = async () => {
  const api = REACT_URL.get("/myorder", { headers: await authHeader() });
  return api;
};
