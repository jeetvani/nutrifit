import { configureStore } from "@reduxjs/toolkit";
import accountReducers from "./features/account/accountSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "./features/app/appSlice";
import trainingsSlice from "./features/trainings/trainingsSlice";
import nutritionSlice from "./features/nutrition/nutritionSlice";

const store = configureStore({
  reducer: {
    account: accountReducers,
    app: appSlice,
    trainings: trainingsSlice,
    nutrition: nutritionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export default store;
