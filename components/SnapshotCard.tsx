import Image from "next/image";
import { SnapshotProps } from "@/types";

const SnapshotCard = ({
  temperature,
  weatherType,
  forecastImage,
  timestamp,
}: SnapshotProps) => {
  return (
    <div className="flex flex-col py-2 px-5 mt-5 justify-start items-start text-black-100 bg-primary-blue-100 rounded-3xl w-full">
      <div className="flex flex-col justify-between items-start gap-2 w-full">
        <div className="weather-card__weather w-full flex justify-between items-center">
          <div className="weather-card__text flex flex-col">
            <div className="flex">
              <p className="text-[14px] sm:text-[20px]">
                {weatherType} ({temperature}&deg;C)
              </p>
            </div>
            <div className="text-[8px] sm:text-[14px]">
              Last updated on {timestamp}
            </div>
          </div>

          <div className="relative w-7 h-6 sm:w-14 sm:h-12 my-3">
            <Image
              src={forecastImage}
              alt="forecast image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;
