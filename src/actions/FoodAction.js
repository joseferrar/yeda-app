import { PRODUCT } from "../constants";
import { getFood } from "../services/FoodService";

export const FoodAction = () => async (dispatch) => {
  try {
    const { data } = await getFood();
    dispatch({ type: PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
