import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const GetUsers = async () => {
  const api = await REACT_URL.get("/allusers", { headers: await authHeader() });
  return api;
};
