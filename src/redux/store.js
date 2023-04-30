import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redusers/userReduser";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
