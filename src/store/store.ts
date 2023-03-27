import { configureStore } from "@reduxjs/toolkit";
import { pixemaApi } from "./requests/pixemaRequests";
import { registration } from "./requests/registration";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authRequests } from "./requests/auth";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      pixemaApi.middleware,
      registration.middleware,
      authRequests.middleware
    ),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export { store, persistor };

export type { RootState, AppDispatch };
