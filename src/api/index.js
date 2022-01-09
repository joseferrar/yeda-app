import axios from "axios";

export const REACT_URL = axios.create({
  baseURL: "https://yeda-backend.herokuapp.com",
});

export const FOOD_API = axios.create({
  baseURL: `https://api.edamam.com`,
});
