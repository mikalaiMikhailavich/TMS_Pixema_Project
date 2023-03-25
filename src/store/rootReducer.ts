import { combineReducers } from "@reduxjs/toolkit";
import asideMenuReducer from "./reducers/asideMenu";
import filterReducer from "./reducers/filter";
import modalMenuReducer from "./reducers/modalMenu";
import favoritesReducer from "./reducers/favorites";
import themeReducer from "./reducers/theme";
import { pixemaApi } from "./requests/pixemaRequests";
import { registration } from "./requests/registration";
const rootReducer = combineReducers({
  asideMenu: asideMenuReducer,
  filter: filterReducer,
  theme: themeReducer,
  [pixemaApi.reducerPath]: pixemaApi.reducer,
  [registration.reducerPath]: registration.reducer,
  modal: modalMenuReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
