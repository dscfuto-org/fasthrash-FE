import { configureStore } from "@reduxjs/toolkit";
import Alertdata from "./alerts";

const store = configureStore({
  reducer: {
    alert: Alertdata.reducer,
  },
});

export default store;
