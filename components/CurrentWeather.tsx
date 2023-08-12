"use client";
import React, { useEffect, useState } from "react";
import { CustomButton, WeatherCard } from ".";
import axios from "axios";

const CurrentWeather = () => {
  const [weather, setWeather] = useState({
    temperature: 0,
    weathercode: 0,
    latitude: 0,
    longitude: 0,
    timestamp: "",
  });

  useEffect(() => {
    axios.get("http://localhost:8080/weather").then((response) => {
      setWeather({
        temperature: response.data.weather.current_weather.temperature,
        weathercode: response.data.weather.current_weather.weathercode,
        latitude: response.data.weather.latitude,
        longitude: response.data.weather.longitude,
        timestamp: response.data.timestamp,
      });
    });

    const interval = setInterval(() => {
      axios.get("http://localhost:8080/weather").then((response) => {
        setWeather({
          temperature: response.data.weather.current_weather.temperature,
          weathercode: response.data.weather.current_weather.weathercode,
          latitude: response.data.weather.latitude,
          longitude: response.data.weather.longitude,
          timestamp: response.data.timestamp,
        });
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
          {" "}
          <WeatherCard weather={weather} />
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
