import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface WeatherProps {
  temperature: number;
  weatherType: string;
  forecastImage: string;
  timestamp: string;
}

export interface SnapshotProps {
  id: number;
  temperature: number;
  weatherType: string;
  forecastImage: string;
  timestamp: string;
}

export interface HistoricalProps {
  temp_max: number;
  temp_min: number;
  date: string;
  weatherType: string;
  forecastImage: string;
}
