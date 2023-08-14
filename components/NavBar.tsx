"use client";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "./CustomButton";
import axios from "axios";
import SnapshotCard from "./SnapshotCard";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  const [snapshots, setSnapshots] = useState([
    {
      id: 0,
      temperature: 0,
      weatherType: "",
      forecastImage: "",
      timestamp: "",
    },
  ]);

  const handleOnClick = () => {
    axios
      .get("http://localhost:8080/snapshots")
      .then((response) => {
        setSnapshots(response.data);
      })
      .then(() => {
        setOpenModal(true);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="">
          <Image
            src="/logo.png"
            alt="ForecastFriend Logo"
            width={236}
            height={36}
          />
        </Link>

        <CustomButton
          title="View Saved Snapshots"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue min-w-[130px] mt-5 md:mt-0"
          handleClick={handleOnClick}
        />
      </nav>

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-[20px] font-bold leading-6 text-gray-900"
                        >
                          Most Recent Saved Weather Snapshots
                        </Dialog.Title>
                        {snapshots.length &&
                        snapshots[0].forecastImage !== "" ? (
                          <div className="mt-2 flex flex-col w-full">
                            {snapshots.map((snapshot) => (
                              <SnapshotCard
                                id={snapshot.id}
                                temperature={snapshot.temperature}
                                weatherType={snapshot.weatherType}
                                forecastImage={snapshot.forecastImage}
                                timestamp={snapshot.timestamp}
                                key={snapshot.id}
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="mt-2">
                            To take a snapshot of the weather, click the "Save
                            Weather" button below the current weather.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpenModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default NavBar;
