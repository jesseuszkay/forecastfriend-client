import Image from "next/image";
import { CarProps } from "@/types";

interface CarCardProps {
  car: CarProps;
}

const WeatherCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive, timestamp } = car;

  return (
    <div className="car-card mr-5">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="">Last updated on {timestamp}</div>
    </div>
  );
};

export default WeatherCard;
