import { combineReducers } from "@reduxjs/toolkit";
import asideMenuReducer from "./reducers/asideMenu";
import filterReducer from "./reducers/filter";
import { pixemaApi } from "./requests/pixemaRequests";
const rootReducer = combineReducers({
  asideMenu: asideMenuReducer,
  filter: filterReducer,
  [pixemaApi.reducerPath]: pixemaApi.reducer,
});

export default rootReducer;
