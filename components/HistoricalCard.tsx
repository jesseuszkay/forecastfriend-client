import Image from "next/image";
import { HistoricalProps } from "@/types";

interface HistoricalCardProps {
  day: HistoricalProps;
}

const WeatherCard = ({ day }: HistoricalCardProps) => {
  const { temp_max, temp_min, date, weathercode } = day;

  return (
    <div className="weather-card mb-5 lg:mb-0 lg:mr-5">
      <div className="">
        <p className="">{date}</p>
        <p className="">The weather code was {weathercode}</p>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="weather-card__content">
        <div className="">
          <div className="weather-card__max-temp">
            <p className="weather-card__subtitle">Max Temperature:</p>
            <p className="weather-card__max-min">{temp_max}&deg;C</p>
          </div>
          <div className="weather-card__min-temp">
            <p className="weather-card__subtitle">Min Temperature:</p>
            <p className="weather-card__max-min">{temp_min}&deg;C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
