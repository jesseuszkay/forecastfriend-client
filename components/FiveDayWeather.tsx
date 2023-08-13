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
      weatherType: "",
      forecastImage: "",
    },
  ]);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    axios.get("http://localhost:8080/historical").then((response) => {
      setHistoricalData(response.data);
    });
    axios
      .get("http://localhost:8080/locations")
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold mb-3">
        5-day Historical Temperature Chart
      </h1>
      <p className="mb-5">
        Here is the previous 5 days of weather at longitude:{" "}
        {location.longitude}&deg;, latitude: {location.latitude}&deg;
      </p>
      <div className="five-day-weather__cards w-full justify-center flex flex-col lg:flex-row ">
        {historicalData.map((day) => (
          <HistoricalCard
            temp_max={day.temp_max}
            temp_min={day.temp_min}
            date={day.date}
            weatherType={day.weatherType}
            forecastImage={day.forecastImage}
            key={day.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FiveDayWeather;
