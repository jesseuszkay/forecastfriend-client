"use client";
import React, { useEffect, useState } from "react";
import { CustomButton, WeatherCard } from ".";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { WeatherProps } from "@/types";

const CurrentWeather = () => {
  Notify.init({ position: "left-bottom" });
  const [weather, setWeather] = useState<WeatherProps>({
    temperature: 0,
    weatherType: "",
    forecastImage: "",
    timestamp: "",
  });
  const [fetching, setFetching] = useState(true);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const fetchData = () => {
    axios
      .get("http://localhost:8080/weather")
      .then((response) => {
        setWeather({
          temperature: response.data.temperature,
          weatherType: response.data.weatherType,
          forecastImage: response.data.forecastImage,
          timestamp: response.data.timestamp,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    axios
      .get("http://localhost:8080/locations")
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
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

  if (weather.temperature === 0) {
    <></>;
  }

  return (
    <div className="current-weather">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="current-weather__title">Check out today's weather!</h1>
        <p className="current-weather__subtitle">
          Here is the current weather at longitude: {location.longitude}&deg;,
          latitude: {location.latitude}&deg;
        </p>

        <div className="flex justify-center">
          {weather.forecastImage !== "" ? (
            <WeatherCard
              temperature={weather.temperature}
              weatherType={weather.weatherType}
              forecastImage={weather.forecastImage}
              timestamp={weather.timestamp}
            />
          ) : (
            <></>
          )}
        </div>

        <div className="flex justify-center">
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
