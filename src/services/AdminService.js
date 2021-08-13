import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const GetUsers = async () => {
  const api = await REACT_URL.get("/allusers", { headers: await authHeader() });
  return api;
};

export const PostUsers = async (data) => {
  const api = await REACT_URL.post("/createuser", data, {
    headers: await authHeader(),
  });
  return api;
};

export const EditUsers = async (id, edituser) => {
  const api = await REACT_URL.put(`/edituser/${id}`, edituser, {
    headers: await authHeader(),
  });
  return api;
};

export const DeleteUsers = async (id) => {
  const api = await REACT_URL.delete(`/deluser/${id}`, {
    headers: await authHeader(),
  });
  return api;
};
