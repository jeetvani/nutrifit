import { createSlice } from "@reduxjs/toolkit";

export const ACCOUNT_INITIAL_VALUE = "NOT-SET";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: ACCOUNT_INITIAL_VALUE,
    favorites: { favoritesTrainings: [], favoritesNutritions: [] },
  },
  reducers: {
    setAccount: (state, action) => {
      state.user = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setAccount, setFavorites } = accountSlice.actions;
export default accountSlice.reducer;
