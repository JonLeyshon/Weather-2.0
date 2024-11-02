import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsiveSmall } from "../../utils/carouselVariables";
import WeatherCarouselChild from "./WeatherCarouselChild";

const WeatherCarousel = () => {
  return (
    <>
      <Carousel responsive={responsiveSmall}>
        <WeatherCarouselChild />
        {/* {popularData.map((item) => {
          return <WeatherCarouselChild key={Math.random()} {...item} />;
        })} */}
      </Carousel>
    </>
  );
};

export default WeatherCarousel;
