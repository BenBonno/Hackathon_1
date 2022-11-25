import React from "react";
import CityCard from "../components/CityCard";
import Search from "../components/Search";

function Home() {
  return (
    <div className="bg-c-creamy h-fit mt-12">
      <section className="flex justify-center items-center flex-col h-screen bg-home-theme bg-top bg-no-repeat bg-[length:100%_100%] gap-y-5">
        <h2 className="text-3xl font-bold text-btn-ocean-1">CheckOo</h2>
        <p className="w-2/3 my-4 text-gray-600 font-medium text-center">
          Welcome to CheckOo, check around you the differents points of interest
          in the search bar below.
        </p>
        <div className="w-4/5">
          <Search />
        </div>
      </section>
      <section className="h-screen flex flex-wrap gap-4 justify-center items-center">
        <CityCard />
      </section>
    </div>
  );
}

export default Home;
