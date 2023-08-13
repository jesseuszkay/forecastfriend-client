import Image from "next/image";
import { HistoricalProps } from "@/types";

const HistoricalCard = ({
  temp_max,
  temp_min,
  date,
  weatherType,
  forecastImage,
}: HistoricalProps) => {
  return (
    <div className="weather-card m-2">
      <div className="w-190">
        <div className="">
          <p className="text-[14px] sm:text-[16px] sm:leading-[18px] font-extrabold">
            {date}
          </p>
          <p className="">Conditions: {weatherType}</p>
        </div>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={forecastImage}
            alt="forcast image"
            height={180}
            width={160}
            priority
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
    </div>
  );
};

export default HistoricalCard;
