"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CustomButton } from ".";

const CurrentWeather = () => {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
        setPeople(data.people);
      });
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
          <div className="">{message}</div>
          {people.map((person, index) => (
            <div key={index}>{person}</div>
          ))}
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
