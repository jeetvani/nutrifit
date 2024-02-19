import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { setAccount } from "../../redux/features/account/accountSlice";
import API from "../api";
import {
  CHECK_EMAIL_ENDPOINT,
  GET_ACCOUT_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  REFRESH_TOKEN_ENDPOINT,
  REGISTER_ENDPOINT,
} from "../endpoints";
import { useAppDispatch } from "../../redux/store";
import {
  setLanguage,
  setLoad,
  setTheme,
} from "../../redux/features/app/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkEmailExist = async (email: string) => {
  await API.post(
    CHECK_EMAIL_ENDPOINT,
    {
      email,
    },
    {
      withCredentials: true,
    }
  );
};

export const register = async (
  newUser: {
    name: string;
    last_name: string;
    user_name: string;
    sex: string;
    birth_day: string;
    height: string;
    weight: string;
    objetive: string;
    steps: string;
    training_days: string;
    level: string;
    place: string;
    email: string;
    password: string;
  },
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  dispatch(setLoad("load"));

  const res = await API.post(
    REGISTER_ENDPOINT,
    { ...newUser, weights: [{ weight: newUser.weight, date: new Date() }] },
    {
      withCredentials: false,
    }
  );

  await login(newUser.email, newUser.password, dispatch);
};

export const login = async (
  email: string,
  password: string,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  await API.post(
    LOGIN_ENDPOINT,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );

  getAccount(dispatch);
};

export const logOut = async (dispatch: ReturnType<typeof useAppDispatch>) => {
  try {
    await API.post(LOGOUT_ENDPOINT);
    getAccount(dispatch);
    return;
  } catch (error) {
    console.error("LogOut Error:", error);
  }
};

export const refreshToken = async () => {
  try {
    const response = await API.post(REFRESH_TOKEN_ENDPOINT, {});
    return;
  } catch (error) {
    console.log("Token refresh Error:", error);
  }
};

export const getAccount = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.get(GET_ACCOUT_ENDPOINT, {
      withCredentials: true,
    });

    dispatch(
      setAccount(
        response.data.token
          ? { ...response.data.user, token: response.data.token }
          : undefined
      )
    );
    return;
  } catch (error) {
    console.log("GetAccount Error:", error);
  }
};

export const initializeData = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  const theme = await AsyncStorage.getItem("theme");
  const language = await AsyncStorage.getItem("language");
  dispatch(setLanguage(language ?? "pr"));
  dispatch(setTheme(theme ?? "light"));
  await getAccount(dispatch);
  return;
};
