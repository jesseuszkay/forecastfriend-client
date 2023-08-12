"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CustomButton, WeatherCard } from ".";
import axios from "axios";

const CurrentWeather = () => {
  const [weather, setWeather] = useState({
    weather: { elevation: 0 },
    timestamp: "",
  });

  const car = {
    city_mpg: 2,
    class: "hi",
    combination_mpg: 2,
    cylinders: 2,
    displacement: 2,
    drive: "hi",
    fuel_type: "hi",
    highway_mpg: 2,
    make: "hi",
    model: "hi",
    transmission: "hi",
    year: 2,
    timestamp: weather.timestamp,
  };

  useEffect(() => {
    axios.get("http://localhost:8080/weather").then((response) => {
      setWeather(response.data);
    });

    const interval = setInterval(() => {
      axios.get("http://localhost:8080/weather").then((response) => {
        setWeather(response.data);
      });
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScroll = () => {};

  return (
    <div className="current-weather">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="current-weather__title">Check out today's weather!</h1>
        <p className="current-weather__subtitle">
          Up-to-date accurate weather so you can decide whether you want to
          leave your home.
        </p>
        <div>
          {weather.weather.elevation} & Last updated on {weather.timestamp}
          <WeatherCard car={car} />
        </div>
        <div className="flex">
          <CustomButton
            title="Pause Updates"
            containerStyles="bg-pause-red text-white rounded-full mt-10 mr-5"
            handleClick={handleScroll}
          />
          <CustomButton
            title="Resume Updates"
            containerStyles="bg-resume-green text-white rounded-full mt-10 mr-5"
            handleClick={handleScroll}
          />
          <CustomButton
            title="Save Weather"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
