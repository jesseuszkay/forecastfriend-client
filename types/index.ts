import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface WeatherCardProps {
  temperature: number;
  weathercode: number;
  latitude: number;
  longitude: number;
  timestamp: string;
}

export interface WeatherProps {
  temperature: number;
  weathercode: number;
  latitude: number;
  longitude: number;
  timestamp: string;
}

export interface HistoricalCardProps {
  temp_max: number;
  temp_min: number;
  date: string;
  weathercode: number;
}

export interface HistoricalProps {
  temp_max: number;
  temp_min: number;
  date: string;
  weathercode: number;
}
