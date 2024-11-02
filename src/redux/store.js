import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./currentWeatherSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});
