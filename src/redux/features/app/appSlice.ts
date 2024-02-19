import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: { theme: "light", load: "noLoad", language: "pr" },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLoad: (state, action) => {
      state.load = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLoad, setLanguage } = appSlice.actions;
export default appSlice.reducer;
