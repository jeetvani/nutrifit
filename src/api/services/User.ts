import { useAppDispatch } from "../../redux/store";
import { GET_ALL_FAVORITES_ENPOINT, SET_USER_ENPOINT } from "../endpoints";
import API from "../api";
import { setFavorites } from "../../redux/features/account/accountSlice";
import { getAccount } from "./Auth";

export const setUsers = async (
  data: any,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await API.post(SET_USER_ENPOINT, data, {
      withCredentials: true,
    });

    getAccount(dispatch);
    return;
  } catch (error) {
    console.log("Set User Error:", error);
  }
};
