import { REACT_URL } from "../api";
import authHeader from "../api/authHeader";

export const GetProfile = async () => {
  const api = await REACT_URL.get("/myprofile", {
    headers: await authHeader(),
  });
  return api;
};

export const CreateProfile = async (data) => {
  const api = await REACT_URL.post("/createprofile", data, {
    headers: await authHeader(),
  });
  return api;
};

export const EditProfile = async (id, editProfile) => {
  const api = await REACT_URL.put(`/editprofile/${id}`, editProfile, {
    headers: await authHeader(),
  });
  return api;
};
