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

//Admin Products
export const GetProducts = async () => {
  const api = await REACT_URL.get("/allproducts", {
    headers: await authHeader(),
  });
  return api;
};

export const AddProduct = async (data) => {
  const api = await REACT_URL.post("/createproduct", data, {
    headers: await authHeader(),
  });
  return api;
};

//Admin Category
export const GetCategory = async () => {
  const api = REACT_URL.get("/getcategory", { headers: await authHeader() });
  return api;
};

export const AddCategory = async (data) => {
  const api = await REACT_URL.post("/addcategory", data, {
    headers: await authHeader(),
  });
  return api;
};

export const DeleteCategory = async (id) => {
  const api = await REACT_URL.delete(`/delcategory/${id}`, {
    headers: await authHeader(),
  });
  return api;
};
