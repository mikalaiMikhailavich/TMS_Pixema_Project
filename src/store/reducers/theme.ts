import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeLight(state) {
      state.theme = "light";
    },
    setThemeDark(state) {
      state.theme = "darkt";
    },
  },
});

export const { setThemeLight, setThemeDark } = themeSlice.actions;
export default themeSlice.reducer;
