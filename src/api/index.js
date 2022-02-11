import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "https://yeda-backend.herokuapp.com",
});
