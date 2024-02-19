import { createSlice } from "@reduxjs/toolkit";

export const nutritionSlice = createSlice({
  name: "nutrition",
  initialState: { nutrition: undefined },
  reducers: {
    setNutrition: (state, action) => {
      state.nutrition = action.payload;
    },
  },
});

export const { setNutrition } = nutritionSlice.actions;
export default nutritionSlice.reducer;
