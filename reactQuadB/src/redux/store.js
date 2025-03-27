import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice";
import weatherReducer from "./slices/weatherSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
});

export default store;

