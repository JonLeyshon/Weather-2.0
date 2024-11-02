import React from "react";
import LocationSearch from "./LocationSearch";
import DailyWeatherDetails from "./DailyWeatherDetails";

const DayCard = () => {
  return (
    <div>
      <LocationSearch />
      <DailyWeatherDetails />
    </div>
  );
};

export default DayCard;
