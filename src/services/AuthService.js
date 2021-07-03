import { REACT_URL } from "../api";

// export const Register = (data) => REACT_URL.post("/register", data);

export const Register = (data) => {
  const api = REACT_URL.post("/register", data);
  return api;
};

export const Login = (data) => {
  const api = REACT_URL.post("/login", data);
  return api;
};
