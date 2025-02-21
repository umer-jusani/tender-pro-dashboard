import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer: {
    appReducer: reducer
  },
});

export default store;