"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalCard } from ".";

const FiveDayWeather = () => {
  const [historicalData, setHistoricalData] = useState([
    {
      id: 999,
      temp_max: 0,
      temp_min: 0,
      date: "",
      weathercode: 0,
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:8080/historical").then((response) => {
      const allWeatherData = response.data.daily;
      const fiveDayWeather = [];
      for (let i = 0; i < 5; i++) {
        fiveDayWeather.push({
          id: i,
          temp_max: allWeatherData.temperature_2m_max[i],
          temp_min: allWeatherData.temperature_2m_min[i],
          date: allWeatherData.time[i],
          weathercode: allWeatherData.weathercode[i],
        });
      }
      setHistoricalData(fiveDayWeather);
    });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold mb-3">
        5-day Historical Temperature Chart
      </h1>
      <p className="mb-5">Maybe you should have gone outside back then...</p>
      <div className="five-day-weather__cards w-full justify-center flex flex-col lg:flex-row ">
        {historicalData.map((day) => (
          <HistoricalCard day={day} key={day.id} />
        ))}
      </div>
    </div>
  );
};

export default FiveDayWeather;
