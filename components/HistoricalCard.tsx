import Image from "next/image";
import { HistoricalProps } from "@/types";

const WeatherCard = ({
  temp_max,
  temp_min,
  date,
  weatherType,
  forecastImage,
}: HistoricalProps) => {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Add "st", "nd", "rd", or "th" to day
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    return `${month} ${day}${daySuffix}, ${year}`;
  }

  return (
    <div className="weather-card  m-2">
      <div className="">
        <p className="text-[14px] sm:text-[16px] sm:leading-[18px] font-extrabold">
          {formatDate(date)}
        </p>
        <p className="">Conditions: {weatherType}</p>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={forecastImage}
          alt="forcast image"
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
