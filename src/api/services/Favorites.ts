import { useAppDispatch } from "../../redux/store";
import {
  ADD_FAVORITE_NUTRITION_ENPOINT,
  ADD_FAVORITE_TRAINING_ENPOINT,
  DELETE_FAVORITE_NUTRITION_ENPOINT,
  DELETE_FAVORITE_TRAINING_ENPOINT,
  GET_ALL_FAVORITES_ENPOINT,
  GET_ALL_NUTRITION_ENPOINT,
} from "../endpoints";
import API from "../api";
import { setFavorites } from "../../redux/features/account/accountSlice";

export const getFavorites = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.get(GET_ALL_FAVORITES_ENPOINT, {
      withCredentials: true,
    });

    dispatch(setFavorites(response.data.favorites));
    return;
  } catch (error) {
    console.log("Get Favorites Error:", error);
  }
};

export const addFavoriteTraining = async (
  trainingId: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(
      ADD_FAVORITE_TRAINING_ENPOINT,
      { trainingId },
      {
        withCredentials: true,
      }
    );
    getFavorites(dispatch);
    return;
  } catch (error) {
    console.log("Add favorite training Error:", error);
  }
};

export const deleteFavoriteTraining = async (
  trainingId: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(
      DELETE_FAVORITE_TRAINING_ENPOINT,
      { trainingId },
      {
        withCredentials: true,
      }
    );
    getFavorites(dispatch);
    return;
  } catch (error) {
    console.log("Delete favorite training Error:", error);
  }
};

export const addFavoriteNutrition = async (
  nutritionId: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(
      ADD_FAVORITE_NUTRITION_ENPOINT,
      { nutritionId },
      {
        withCredentials: true,
      }
    );
    getFavorites(dispatch);
    return;
  } catch (error) {
    console.log("Add favorite nutrition Error:", error);
  }
};

export const deleteFavoriteNutrition = async (
  nutritionId: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(
      DELETE_FAVORITE_NUTRITION_ENPOINT,
      { nutritionId },
      {
        withCredentials: true,
      }
    );
    getFavorites(dispatch);
    return;
  } catch (error) {
    console.log("Delete favorite nutrition Error:", error);
  }
};
