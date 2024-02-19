import { createSlice } from "@reduxjs/toolkit";

export const trainingsSlice = createSlice({
  name: "trainings",
  initialState: { userTrainings: [], defaultTrainings: [] },
  reducers: {
    setUserTrainings: (state, action) => {
      state.userTrainings = action.payload;
    },
    setDefaultTrainings: (state, action) => {
      state.defaultTrainings = action.payload;
    },
  },
});

export const { setUserTrainings, setDefaultTrainings } = trainingsSlice.actions;
export default trainingsSlice.reducer;
