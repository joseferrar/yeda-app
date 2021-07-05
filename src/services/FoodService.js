import { FOOD_API } from '../api'
import { api_id, api_key } from "../api/key";
export const getFood = () => FOOD_API.get(`/search?q=biryani&app_id=${api_id}&app_key=${api_key}`)