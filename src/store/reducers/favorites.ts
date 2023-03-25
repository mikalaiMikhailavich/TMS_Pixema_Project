import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  favorites: number[];
}

const initialState: IInitialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
