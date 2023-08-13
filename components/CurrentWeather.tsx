"use client";
import React, { useEffect, useState } from "react";
import { CustomButton, WeatherCard } from ".";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const CurrentWeather = () => {
  Notify.init({ position: "left-bottom" });
  const [weather, setWeather] = useState({
    temperature: 0,
    weathercode: 0,
    timestamp: "",
  });

  const [fetching, setFetching] = useState(true);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/weather")
      .then((response) => {
        setWeather({
          temperature: response.data.weather.current_weather.temperature,
          weathercode: response.data.weather.current_weather.weathercode,
          timestamp: response.data.timestamp,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  const startFetching = () => {
    fetchData();
    setFetching(true);
  };

  const stopFetching = () => {
    setFetching(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (fetching) {
      fetchData();
      interval = setInterval(fetchData, 60000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [fetching]);

  const handleOnClick = () => {
    axios
      .post("http://localhost:8080/snapshots", weather)
      .then(() => {
        Notify.success("Weather Snapshot Saved");
      })
      .catch((error) => {
        Notify.failure(
          "Weather Snapshot Could Not Be Saved, Please Try Again Later."
        );
      });
  };

  return (
    <div className="current-weather">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="current-weather__title">Check out today's weather!</h1>
        <p className="current-weather__subtitle">
          Up-to-date accurate weather so you can decide whether you want to
          leave your home.
        </p>
        <div>
          <WeatherCard weather={weather} />
        </div>
        <div className="flex">
          {fetching ? (
            <CustomButton
              title="Pause Updates"
              containerStyles="bg-pause-red text-white rounded-full mt-10 mr-5"
              handleClick={stopFetching}
            />
          ) : (
            <CustomButton
              title="Resume Updates"
              containerStyles="bg-resume-green text-white rounded-full mt-10 mr-5"
              handleClick={startFetching}
            />
          )}
          <CustomButton
            title="Save Weather"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
