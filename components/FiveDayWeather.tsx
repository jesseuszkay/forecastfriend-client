"use client";

import { useEffect, useState } from "react";
import { WeatherCard } from ".";

const FiveDayWeather = () => {
  const cars = [
    {
      id: 1,
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
      timestamp: "",
    },
    {
      id: 2,
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
      timestamp: "",
    },
    {
      id: 3,
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
      timestamp: "",
    },
    {
      id: 4,
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
      timestamp: "",
    },
    {
      id: 5,
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
      timestamp: "",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-extrabold">
        5-day Historical Temperature Chart
      </h1>
      <p>Maybe you should have gone outside then...</p>
      <div className="five-day-weather__cards flex">
        {cars?.map((car) => (
          <WeatherCard car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default FiveDayWeather;
