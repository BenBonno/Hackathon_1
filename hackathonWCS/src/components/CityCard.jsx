import React, { useEffect } from "react";
import Rating from "./Rating";
import ThumbLogo from "../assets/trombone.svg";
import Modal from "../components/Modal";
import axios from "axios";

function CityCard() {
  useEffect(() => {}, []);
  return (
    <div className="w-11/12 h-30 bg-white flex border-2 border-c-oasis rounded-2xl">
      <section className="w-3/5 relative">
        <div className="w-full h-full bg-white p-1 absolute rounded-2xl overflow-hidden">
          <div className=" bg-gray-500 w-full h-full"></div>
        </div>
        <div className="bg-card-cadre bg-center bg-no-repeat w-full h-full bg-[length:100%_100%] absolute rounded-2xl flex justify-center items-center">
          <h2 className="text-xl font-bold uppercase text-c-creamy">
            {/* Insert Name of city */}City
          </h2>
        </div>
      </section>
      <section className="w-1/3 text-sm h-full mx-auto py-2">
        <div className="w-full flex justify-end">
          <button className="">
            <img className="w-6 h-6" src={ThumbLogo} alt="thumbtack input" />
          </button>
        </div>
        <div>
          <Rating rating={10} />
        </div>
        <div className="py-4 font-medium text-gray-800">
          <p>Safety : {/* lvl safety data */}</p>
          <p>Distance : {/* distance data */}</p>
          <p>Budget : {/* budget data */}</p>
        </div>
        <div className="w-full flex justify-end">
          <Modal />
        </div>
      </section>
    </div>
  );
}

export default CityCard;