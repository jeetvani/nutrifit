import { useAppDispatch } from "../../redux/store";
import { GET_ALL_NUTRITION_ENPOINT } from "../endpoints";
import API from "../api";
import { setNutrition } from "../../redux/features/nutrition/nutritionSlice";

export const getNutrition = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.get(GET_ALL_NUTRITION_ENPOINT, {
      withCredentials: true,
    });

    dispatch(setNutrition(response.data.nutrition));
    return;
  } catch (error) {
    console.log("Get Nutrition Error:", error);
  }
};
