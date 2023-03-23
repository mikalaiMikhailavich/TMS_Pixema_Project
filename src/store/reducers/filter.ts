import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,

  sortBy: "year",
  sortByYears: {
    from: 2000,
    to: 2023,
  },
  sortByRating: {
    from: 1,
    to: 10,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortBy(state, action) {
      state.sortBy = action.payload;
    },
    setYears(state, action) {
      state.sortByYears.from = action.payload.from;
      state.sortByYears.to = action.payload.to;
    },
    setRating(state, action) {
      state.sortByRating.from = action.payload.from;
      state.sortByRating.to = action.payload.to;
    },
    openFilterMenu(state) {
      state.isOpen = true;
    },
    closeFilterMenu(state) {
      state.isOpen = false;
    },
  },
});

export const { sortBy, setYears, setRating, openFilterMenu, closeFilterMenu } =
  filterSlice.actions;
export default filterSlice.reducer;
