import AnimatedWeatherIcon from "./AnimatedWeatherIcon";

const DailyWeatherDetails = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-6">
        <h1 className="text-4xl">London</h1>
      </div>
      <div>
        <AnimatedWeatherIcon />
      </div>
      <div className="text-center ">
        {/*  Text weather details */}
        <p className="text-6xl"> 12&deg;C </p>
        <p>
          Monday, <span>16:00</span>
        </p>
        {/* Divider */}
        <div className="w-4/5 h-px bg-gray-200 my-4 mx-auto"></div>
        <div className="dailyDetailsIconContainer">
          <img
            src="/img/svg/weather/cloud.svg"
            alt="weather"
            className="dailyDetailsIcon"
          />
          <p>Mostly Cloudy </p>
        </div>
        <div className="dailyDetailsIconContainer">
          <img
            src="/img/svg/weather/rain-chance.svg"
            alt="rain-chance"
            className="dailyDetailsIcon"
          />
          <p> Rain - 30%</p>
        </div>
      </div>
    </div>
  );
};

export default DailyWeatherDetails;
