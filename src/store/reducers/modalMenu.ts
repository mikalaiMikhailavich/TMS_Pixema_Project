import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalMenuSlice = createSlice({
  name: "asideMenu",
  initialState,
  reducers: {
    modalMenuOpen(state) {
      state.isOpen = true;
    },

    modalMenuClose(state) {
      state.isOpen = false;
    },
  },
});

export const { modalMenuOpen, modalMenuClose } = modalMenuSlice.actions;
export default modalMenuSlice.reducer;
