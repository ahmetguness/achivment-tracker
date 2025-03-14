import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  darkMode: boolean;
}

const initialState: AppState = {
  darkMode: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export default AppSlice.reducer;
export const { setDarkMode } = AppSlice.actions;
