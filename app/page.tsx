"use client";
import { CurrentWeather, FiveDayWeather } from "@/components";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [locationStored, setLocationStored] = useState(false);
  const [formError, setFormError] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const longitudeString = formData.get("longitude") as string | null;
    const latitudeString = formData.get("latitude") as string | null;

    const longitude = longitudeString ? parseFloat(longitudeString) : null;
    const latitude = latitudeString ? parseFloat(latitudeString) : null;

    if (
      longitude !== null &&
      latitude !== null &&
      longitude >= -180 &&
      longitude <= 180 &&
      latitude >= -90 &&
      latitude <= 90 &&
      !isNaN(longitude) &&
      !isNaN(latitude)
    ) {
      axios
        .post("http://localhost:8080/location", { latitude, longitude })
        .then((response) => {
          setLocationStored(true);
          setOpenModal(false);
        })
        .catch((error) => {});
    } else {
      setFormError(true);
    }
  };

  useEffect(() => {
    if (!locationStored) {
      setOpenModal(true);
    }
  }, []);

  if (!locationStored) {
    return (
      <main className="overflow-hidden">
        <Transition.Root show={openModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => {}}>
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
                    <form
                      onSubmit={handleOnSubmit}
                      className="flex flex-col"
                      ref={formRef}
                    >
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Enter your longitude and latitude.
                            </Dialog.Title>
                            <div className="flex">
                              <label className="location__label">
                                Longitude
                                <input
                                  type="number"
                                  name="longitude"
                                  className={
                                    formError
                                      ? "location__input error"
                                      : "location__input"
                                  }
                                />
                                {formError ? (
                                  <div className="error-message">
                                    Please enter a valid longitude.
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </label>
                              <label className="location__label">
                                Latitude
                                <input
                                  type="number"
                                  name="latitude"
                                  className={
                                    formError
                                      ? "location__input error"
                                      : "location__input"
                                  }
                                />
                                {formError ? (
                                  <div className="error-message">
                                    Please enter a valid latitude.
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Enter
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </main>
    );
  }

  return (
    <main className="overflow-hidden">
      <CurrentWeather />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <FiveDayWeather />
        </div>
      </div>
    </main>
  );
}
