import { configureStore } from "@reduxjs/toolkit";
// import { todos } from "./reducers";
import todoSlice from './reducers'

const store = configureStore({
  reducer: { todo: todoSlice },
});

export default store;