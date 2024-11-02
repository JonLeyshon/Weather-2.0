import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeatherData: [],
  searchTerm: "",
};

export const CurrentWeatherSlice = createSlice({
  name: "CurrentWeather",
  initialState,
  reducers: {
    setCurrentWeather: (state, { payload }) => {
      state.currentWeatherData = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { setCurrentWeather, setSearchTerm } = CurrentWeatherSlice.actions;

export const selectCurrentWeatherData = (state) =>
  state.currentWeatherData.currentWeatherData;
export const selectSearchTerm = (state) => state.currentWeatherData.searchTerm;

export default CurrentWeatherSlice.reducer;
