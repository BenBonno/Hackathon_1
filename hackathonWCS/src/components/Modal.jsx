import React, { useContext, useState } from "react";
import covid from "../assets/covidLogo.svg";
import Coronavirus from "./icons/Coronavirus";
import Population from "./icons/Population";
import RatingIcon from "./icons/RatingIcon";
import Price from "./icons/Price";
import Safety from "./icons/Safety";
import Links from "./icons/Links";
import Rating from "./Rating";
import RatingSafe from "./RatingSafe";

function Modal(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleModal() {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <button
        className="block text-white bg-c-ocean border-btn-ocean-1 border-4 hover:bg-blue-800 font-medium rounded-full text-sm px-4 py-1.5 text-center"
        type="button"
        data-modal-toggle="defaultModal"
        onClick={handleModal}
      >
        Show more
      </button>
      <div className={modalOpen ? "block" : "hidden"}>
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          onClick={handleModal}
          className="bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto fixed top-0 left-0 right-0 z-50 w-full h-full justify-center pt-10"
        >
          <div className="relative">
            <div className="absolute z-50 bg-white rounded-lg shadow w-screen">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <p>
                  {JSON.stringify(props.city.data.attributes.name)}{" "}
                  {Object.values(props.city.included)[0].attributes.name}
                </p>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                  onClick={handleModal}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="py-6 px-6 bg-modal-theme bg-[length:100%_100%]">
                <ul className="divide-y divide-gray-200 dark:divide-red-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Population />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500  dark:text-gray-400">
                          {props.city.data.attributes.population} persons are
                          living here and will be happy to see you.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <RatingIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Travelers rate this city :{<Rating rating={3} />}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Coronavirus />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {Object.values(
                            props.city.data.attributes.covid
                          )[0].value.toFixed(2)}
                          % of population had SARS-CoV-2
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Safety />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          Safety rate of {props.city.data.attributes.short_name}{" "}
                          :
                          {
                            <Rating
                              rating={
                                Object.values(
                                  props.city.data.attributes.safety
                                )[0].value
                              }
                            />
                          }
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Price />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-500  dark:text-gray-400">
                          Budget juged :{" "}
                          {Object.values(
                            props.city.data.attributes.budget
                          )[0].subText.toLowerCase()}
                          <RatingSafe
                            rating={
                              Object.values(
                                props.city.data.attributes.budget
                              )[0].value
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 pb-0 sm:pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Links />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm flex-col flex  text-gray-500  truncate dark:text-gray-400">
                          Click me please, don't hesitate :
                          <br />
                          <br />
                          <div className="flex flex-col gap-2">
                            <a
                              href={props.city.data.attributes.airbnb_url}
                              target="_blank"
                            >
                              AirBnB
                            </a>
                            <a
                              href={props.city.data.attributes.wikipedia_url}
                              target="_blank"
                            >
                              Le plus beau de tous les Kikis
                            </a>
                            <a
                              href={
                                props.city.data.attributes.kayak_car_rental_url
                              }
                              target="_blank"
                            >
                              Canoe ?
                            </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
