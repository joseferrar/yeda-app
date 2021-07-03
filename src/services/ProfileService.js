import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const Profile = async () => {
  const api = REACT_URL.get("/myprofile", { headers: await authHeader() });
  return api;
};
