import { configureStore } from "@reduxjs/toolkit";
import { pixemaApi } from "./requests/pixemaRequests";
import { registration } from "./requests/registration";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pixemaApi.middleware)
      .concat(registration.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
