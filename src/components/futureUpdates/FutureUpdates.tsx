import { useState } from "react";
import WeatherCarousel from "./WeatherCarousel";

const FutureUpdates = () => {
  const [timePeriod, setTimePeriod] = useState<string>("Today");

  const selectTimePeriod = (TP: string) => {
    setTimePeriod(TP);
  };

  return (
    <div>
      <div className="flex justify-center mt-10 text-slate-500">
        {/* week title */}
        <p
          className={`mr-2 cursor-pointer ${
            timePeriod === "Today" ? "text-black underline font-bold" : ""
          }`}
          onClick={() => selectTimePeriod("Today")}
        >
          Today
        </p>
        <p
          className={`cursor-pointer ${
            timePeriod === "Week" ? "text-black underline font-bold" : ""
          }`}
          onClick={() => selectTimePeriod("Week")}
        >
          Week
        </p>
      </div>
      <div>
        <WeatherCarousel />
      </div>
    </div>
  );
};

export default FutureUpdates;
