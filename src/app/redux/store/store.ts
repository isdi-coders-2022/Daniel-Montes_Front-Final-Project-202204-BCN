import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice/userSlice";
import penguinsReducer from "../features/penguinSlice/penguinSlice";
import uiReducer from "../features/uiSlice/uiSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    penguins: penguinsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
