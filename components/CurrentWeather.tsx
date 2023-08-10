"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CustomButton } from ".";
import axios from "axios";

const CurrentWeather = () => {
  const [weather, setWeather] = useState({
    weather: { elevation: 0 },
    timestamp: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:8080/weather").then((response) => {
      setWeather(response.data);
    });

    const interval = setInterval(() => {
      axios.get("http://localhost:8080/weather").then((response) => {
        console.log(response.data.weather);
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
          Up-to-date accurate weather so you can plan out your week!
        </p>
        <div>
          {weather.weather.elevation} & {weather.timestamp}
        </div>
        <CustomButton
          title="Save Weather"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="current-weather__image-container">
        <div className="current-weather__image">
          <Image
            src="/hero.png"
            alt="hero"
            className="object-contain"
            width={700}
            height={700}
          />
        </div>
        <div className="current-weather__image-overlay"></div>
      </div>
    </div>
  );
};

export default CurrentWeather;
