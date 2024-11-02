import axios from "axios";

const apiKey: string = process.env.REACT_APP_WEATHER_API_KEY || "";

export const fetchCurrentWeatherData = async (city: string) => {
  try {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    console.log("error with API retreival:", error);
  }
};
