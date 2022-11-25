import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const { city, cityList, setCityList } = useContext(DataContext);
  const [inputSearch, setInputSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([{ RegionID: "" }]);
  const [manyResults, setManyResult] = useState([]);

  const configCity = (citySearch) => {
    return {
      method: "get",
      url: `http://thomsult.ddnsfree.com:3000/City/${citySearch}`,
      headers: {},
    };
  };

  const configRegion = (region) => {
    return {
      method: "get",
      url: `http://thomsult.ddnsfree.com:3000/Region/${region}?Limit=10`,
      headers: {},
    };
  };

  const configCityId = (id) => {
    return {
      method: "get",
      url: `http://thomsult.ddnsfree.com:3000/CityById/${id}?Region=true&Limit=10`,
      headers: {},
    };
  };

  const searchButton = (inputSearchResult) => {
    setCitySearch(inputSearchResult);
    setManyResult([]);
  };

  () => searchButton(inputSearch);
  const clickSearchButton = (inputCitySearch, e) => {
    searchButton(inputCitySearch);
    e.preventDefault();

    setManyResult([]);
  };

  console.log(searchResult[0].City);
  useEffect(() => {
    if (inputSearch) console.log(inputSearch);
  }, [inputSearch]);

  useEffect(() => {
    // console.log(citySearch + "citySearch length"+ citySearch.length);
    if (citySearch.length > 0 && typeof citySearch === "string") {
      axios(configCity(citySearch))
        .then(function (response) {
          console.log(response.data);

          // setSearchResult(response.data);
          console.log(response.data[0].City);
          //2ieme requete axios---
          if (
            response.data.length === 1 &&
            response.data[0].City !== undefined
          ) {
            console.log(response.data[0].RegionID);
            axios(configRegion(response.data[0].RegionID))
              .then(function (response2) {
                console.log("Region result: " + response2.data);
                // setRegionResult(response2.data);
                setCityList(response2.data);
              })
              .catch(function (error2) {
                console.log(error2);
              });
          } else setManyResult(response.data);
          // fin 2 ieme appel
        })

        .catch(function (error) {
          console.log(error);
        });
    }
  }, [citySearch]);

  useEffect(() => {
    // console.log(citySearch + "citySearch length"+ citySearch.length);
    if (typeof citySearch === "number") {
      axios(configCityId(citySearch.toString()))
        .then(function (response) {
          console.log(response.data);

          // setSearchResult(response.data);
          console.log(response.data);
          setCityList(response.data);
        })

        .catch(function (error) {
          console.log(error);
        });
    }
  }, [citySearch]);

  return (
    <div>
      <div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-c-oasis rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your city "
              value={inputSearch}
              onChange={(event) => setInputSearch(event.target.value)}
              required
            />
            <button
              type="input"
              className="text-white absolute right-2.5 bottom-2.5 bg-c-oasis hover:bg-btn-oasis focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 font-HelvetiHand"
              onClick={(e) => clickSearchButton(inputSearch, e)}
            >
              Search
            </button>
          </div>
        </form>
        <div className="absolute h-fit bg-white mx-auto w-8/12 rounded-xl mt-4">
          {manyResults.length > 0 && (
            <p className="text-center font-bold text-gray-600">
              need more precision :
            </p>
          )}
          {manyResults &&
            manyResults.map((choice) => {
              return (
                <button
                  className="rounded-lg w-full hover:bg-btn-oasis-1 hover:text-white font-medium py-2 ease-in duration-200"
                  key={choice.CityId}
                  onClick={() => {
                    setCitySearch(choice.CityId);
                  }}
                >
                  {" "}
                  City {choice.City} / Country: {choice.CountryName} / Region{" "}
                  {choice.RegionName}
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Search;
