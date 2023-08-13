"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between items-start gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.png" alt="logo" width={200} height={24.75} />
          <div className="">
            <SocialIcon
              url="https://linkedin.com/in/juszkay"
              style={{ height: 30, width: 30, marginRight: 5 }}
            />
            <SocialIcon
              url="https://github.com/jesseuszkay"
              network="github"
              style={{ height: 30, width: 30, marginRight: 5 }}
            />
            <SocialIcon
              url="mailto:jea"
              network="email"
              style={{ height: 30, width: 30, marginRight: 5 }}
            />
          </div>
        </div>
        <p className="text-base text-gray-700">
          <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>{" "}
          <br />
          ForecastFriend 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
