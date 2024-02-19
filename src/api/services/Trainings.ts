import { useAppDispatch } from "../../redux/store";
import { setTheme } from "../../redux/features/app/appSlice";
import API from "../api";
import {
  CREATE_USER_TRAINING_ENPOINTS,
  DELETE_USER_TRAINING_ENPOINTS,
  GET_DEFAULTS_TRAININGS_ENPOINTS,
  GET_DEFAULTS_TRAININGS_MOCKS_ENPOINTS,
  GET_USER_TRAININGS_ENPOINTS,
  PLUS_COMPLETE_DAYS_ENPOINT,
} from "../endpoints";
import {
  setDefaultTrainings,
  setUserTrainings,
} from "../../redux/features/trainings/trainingsSlice";

export const getDefaultTrainings = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.get(GET_DEFAULTS_TRAININGS_ENPOINTS, {});
    dispatch(setDefaultTrainings(response.data.documents));
    return;
  } catch (error) {
    console.log("Get Default Training Error:", error);
  }
};

export const createUserTraining = async (
  data: { trainingGroup: string; trainings: any[] },
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(CREATE_USER_TRAINING_ENPOINTS, data, {
      withCredentials: true,
    });
    getUserTrainings(dispatch);
    return;
  } catch (error) {
    console.log("Get User Training Error:", error);
  }
};

export const deleteUserTraining = async (
  trainingGroupId: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    await API.post(
      DELETE_USER_TRAINING_ENPOINTS,
      { trainingGroupId },
      {
        withCredentials: true,
      }
    );
    getUserTrainings(dispatch);
    getDefaultTrainings(dispatch);
  } catch (error) {
    console.log("Delete User Training Error:", error);
  }
};

export const getUserTrainings = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.get(GET_USER_TRAININGS_ENPOINTS, {});
    dispatch(setUserTrainings(response.data.trainings));
    return;
  } catch (error) {
    console.log("Get User Training Error:", error);
  }
};

export const plusCompleteDays = async (
  dispatch: ReturnType<typeof useAppDispatch>,
  trainingId: string
) => {
  try {
    const response = await API.patch(PLUS_COMPLETE_DAYS_ENPOINT, {
      trainingId,
    });
    getUserTrainings(dispatch);
    return;
  } catch (error) {
    console.log("Get User Training Error:", error);
  }
};
