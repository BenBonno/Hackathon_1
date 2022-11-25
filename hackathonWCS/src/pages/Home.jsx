import React from "react";
import CityCard from "../components/CityCard";
import Results from "../components/Results";
import Search from "../components/Search";
import DataContext from "../contexts/DataContext";
import { useContext } from "react";

function Home() {
  const { cityList} = useContext(DataContext);
  return (
    <div className="bg-c-creamy h-fit">
      <section className="flex justify-center items-center flex-col h-screen bg-home-theme bg-top bg-no-repeat bg-[length:100%_100%] gap-y-5">
        <h2 className="text-3xl font-bold text-btn-ocean-1">CheckOo</h2>
        <p className="w-2/3 my-4 text-gray-600 font-medium text-center">
          Welcome to CheckOo, check around you the differents points of interest
          in the search bar below.
        </p>
        <div className="w-2/3">
          <Search />
        </div>
      </section>
      <section className="h-fit flex flex-wrap gap-4 justify-center items-center">
      {cityList.length > 0 && <Results />}
      </section>
    </div>
  );
}

export default Home;
