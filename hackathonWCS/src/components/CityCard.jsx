import React from "react";
import covid from "../assets/covidLogo.svg";
import bgCardImage from "../assets/bgCardImage.svg";
import cardImg from "../assets/cadreImg.svg";
import trombone from "../assets/trombone.svg";

function CityCard() {
  
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-3 border-2 border-[#FE9063] rounded-3xl h-[30vh] w-11/12 ">
        <section className=" h-full w-3/4">
          <div className="flex flex-col ">
            <div className="flex justify-evenly p-2 ">
              <img src={covid} alt=" covidLogo" />
              <p className="">covid area</p>
            </div>
            <div className="flex justify-center">
              <img
                className="object-cover bg-red-600 h-full w-5/6 rounded-3xl "
                src={bgCardImage}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="w-3/5 flex flex-col">
          <div className="flex gap-6">
            <div className="">
              <span className="text-xl text-orange-400">&#9733;</span>
              <span className="text-xl text-orange-400">&#9733;</span>
              <span className="text-xl text-orange-400">&#9733;</span>
              <span className="text-xl text-orange-400">&#9733;</span>
              <span className="text-xl text-grey-200">&#9733;</span>
            </div>
            <div>
            <img className="h-[4vh]" src={trombone} alt="trombone" />
            </div>
          </div>
          <div className="flex flex-col pb-10 ">
            <div className="text-red-200 ">info 1</div>
            <div className="text-blue-200 ">info 2</div>
            <div className=" text-blue-800 ">info 3</div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-white bg-[#27C7D4] border-[#32AFB9] border-2  font-medium rounded-3xl text-sm py-2.5 w-5/6 text-center flex-start"
            >
              Show more
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CityCard;
