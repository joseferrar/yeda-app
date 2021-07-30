import { PRODUCT, SEARCH } from "../constants";
import { getFood, getSearch } from "../services/FoodService";

export const FoodAction = () => async (dispatch) => {
  try {
    const { data } = await getFood();
    dispatch({ type: PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const SearchAction = (query) => async (dispatch) => {
  try {
    const { data } = await getSearch(query);
    dispatch({ type: SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
