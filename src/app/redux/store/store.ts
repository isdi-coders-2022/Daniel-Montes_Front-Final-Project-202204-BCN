import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice/userSlice";
import penguinsReducer from "../features/penguinSlice/penguinSlice";
import uiReducer from "../features/uiSlice/uiSlice";
import penguinReducer from "../features/DetailSlice/DetailSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    penguins: penguinsReducer,
    ui: uiReducer,
    penguin: penguinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
