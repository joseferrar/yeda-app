import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const AddCart = async (data) => {
  const api = REACT_URL.post("/addcart", data, { headers: await authHeader() });
  return api;
};

export const GetCart = async () => {
  const api = REACT_URL.get("/mycart", { headers: await authHeader() });
  return api;
};

export const DeleteCart = async (id) => {
  const api = REACT_URL.delete(`/delcart/${id}`, {
    headers: await authHeader(),
  });
  return api;
};
