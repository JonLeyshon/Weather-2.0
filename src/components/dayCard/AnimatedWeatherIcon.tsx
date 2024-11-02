import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../animation/few-clouds.json";

const AnimatedWeatherIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default AnimatedWeatherIcon;
