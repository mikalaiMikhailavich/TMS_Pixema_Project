import { combineReducers } from "@reduxjs/toolkit";
import asideMenuReducer from "./reducers/asideMenu/asideMenu.slice";
import { pixemaApi } from "./requests/pixemaRequests";
const rootReducer = combineReducers({
  asideMenu: asideMenuReducer,
  [pixemaApi.reducerPath]: pixemaApi.reducer,
});

export default rootReducer;
