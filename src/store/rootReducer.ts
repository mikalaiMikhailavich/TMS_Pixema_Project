import { combineReducers } from "@reduxjs/toolkit";
import asideMenuReducer from "./reducers/asideMenu";
import filterReducer from "./reducers/filter";
import modalMenuReducer from "./reducers/modalMenu";
import favoritesReducer from "./reducers/favorites";
import themeReducer from "./reducers/theme";
import { pixemaApi } from "./requests/pixemaRequests";
import { registration } from "./requests/registration";
import { authRequests } from "./requests/auth";
import { authReducer } from "./reducers/auth";

const rootReducer = combineReducers({
  asideMenu: asideMenuReducer,
  filter: filterReducer,
  theme: themeReducer,
  [pixemaApi.reducerPath]: pixemaApi.reducer,
  [registration.reducerPath]: registration.reducer,
  [authRequests.reducerPath]: authRequests.reducer,
  modal: modalMenuReducer,
  favorites: favoritesReducer,
  auth: authReducer,
});

export default rootReducer;
