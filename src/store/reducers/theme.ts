import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeLight(state) {
      state.theme = "light";
    },
    setThemeDark(state) {
      state.theme = "dark";
    },
  },
});

export const { setThemeLight, setThemeDark } = themeSlice.actions;
export default themeSlice.reducer;
