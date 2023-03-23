import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const asideMenuSlice = createSlice({
  name: "asideMenu",
  initialState,
  reducers: {
    closeAsideMenu(state) {
      state.isOpen = false;
    },
    toggleAsideMenu(state) {
      state.isOpen = !state.isOpen;
    },
    openAsideMenu(state) {
      state.isOpen = true;
    },
  },
});

export const { closeAsideMenu, toggleAsideMenu, openAsideMenu } =
  asideMenuSlice.actions;
export default asideMenuSlice.reducer;
