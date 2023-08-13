import Image from "next/image";
import { WeatherProps } from "@/types";

const WeatherCard = ({
  temperature,
  weatherType,
  forecastImage,
  timestamp,
}: WeatherProps) => {
  return (
    <div className="weather-card mt-5">
      <div className="weather-card__content w-full">
        <div className="weather-card__weather w-full flex justify-between">
          <div className="weather-card__text">
            <p className="weather-card__content-title">{temperature}&deg;C.</p>

            <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
              The forecast is calling for {weatherType}.
            </p>
          </div>

          <div className="relative w-80 h-80 my-3 object-contain ml-5">
            <Image
              src={forecastImage}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="weather-card__timestamp">
          Last updated on {timestamp}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
