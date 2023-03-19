import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const asideMenuSlice = createSlice({
  name: "asideMenu",
  initialState,
  reducers: {
    close(state) {
      state.isOpen = false;
    },
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    open(state) {
      state.isOpen = true;
    },
  },
});

export const { close, toggle, open } = asideMenuSlice.actions;
export default asideMenuSlice.reducer;
