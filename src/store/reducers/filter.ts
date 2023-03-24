import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isOpen: true,
  sortBy: "rating.kp",
  sortByYears: {
    from: "1980",
    to: "2023",
  },
  sortByRating: {
    from: "1",
    to: "10",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.sortBy = action.payload.sortBy;
      state.sortByYears.from = action.payload.fromYear;
      state.sortByYears.to = action.payload.toYear;
      state.sortByRating.from = action.payload.fromRating;
      state.sortByRating.to = action.payload.toRating;
    },
    openFilterMenu(state) {
      state.isOpen = true;
    },
    closeFilterMenu(state) {
      state.isOpen = false;
    },
    reset: (state) => initialState,
  },
});

export const { reset, setFilter, openFilterMenu, closeFilterMenu } =
  filterSlice.actions;
export default filterSlice.reducer;
