import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";


function Search() {
  const { city, cityList, setCityList} = useContext(DataContext);
  const [inputSearch, setInputSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult,setSearchResult] = useState([{RegionID:""}]);
  const [manyResults,setManyResult] = useState([]);

const configCity = ((citySearch) =>{
  return {
    method: 'get',
    url: `http://thomsult.ddnsfree.com:3000/City/${citySearch}`,
    headers: { }
  };
 });  

 const configRegion = ((region) =>{
  return {
    method: 'get',
    url: `http://thomsult.ddnsfree.com:3000/Region/${region}?Limit=10`,
    headers: { }
  };
 });  

 const configCityId = ((id) =>{
  return {
    method: 'get',
    url: `http://thomsult.ddnsfree.com:3000/CityById/${id}?Region=true&Limit=10`,
    headers: { }
  };
 }); 

 const searchButton = ((inputSearchResult) =>{
  setCitySearch(inputSearchResult);
  setManyResult([]);  
 }); 

 () => searchButton(inputSearch)
 const clickSearchButton = ((inputCitySearch,e) =>{
  searchButton(inputCitySearch);
  e.preventDefault();

  setManyResult([]);  
 }); 
 
  console.log(searchResult[0].City);
  useEffect(() => {
    if (inputSearch)
      console.log(inputSearch);  

  }, [inputSearch]);

   useEffect(() => {
    // console.log(citySearch + "citySearch length"+ citySearch.length);
    if (citySearch.length>0 && typeof citySearch === "string"){
      axios(configCity(citySearch))
      .then(function (response) {
       console.log(response.data);

        // setSearchResult(response.data);
        console.log(response.data[0].City);
        //2ieme requete axios---
        if (response.data.length===1 && response.data[0].City !== undefined)  { 
          console.log("c'est ça que tu cherche ",response.data);
          // axios(configRegion(response.data[0].City.RegionID))
          axios(configCityId(response.data[0].City.CityId))
          .then(function (response2) {
            console.log("Region result: ",response2.data);
            // setRegionResult(response2.data);
            setCityList(response2.data);
          })
          .catch(function (error2) {
            console.log(error2);
          })} else setManyResult (response.data); 
          // fin 2 ieme appel
      }) 

      .catch(function (error) {
        console.log(error);
      })};
  }, [citySearch]);

  useEffect(() => {
    // console.log(citySearch + "citySearch length"+ citySearch.length);
    if (typeof citySearch === "number"){
      axios(configCityId(citySearch.toString()))
      .then(function (response) {
       console.log("Region par CityId",response.data);

        // setSearchResult(response.data);
        console.log("2 ieme cityList de Search"+response.data.Region);
        setCityList(response.data);        
      }) 

      .catch(function (error) {
        console.log(error);
      })};
  }, [citySearch]);
  
  return(
  <div>
    <div className="w-[80vw] h-[20vh]">
      <p>Tu cherches les villes les plus chaudes de ta région?</p>
      <form>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your city " value={inputSearch} onChange={(event) => setInputSearch(event.target.value)} required />
          <button type="input" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => clickSearchButton(inputSearch,e)}>Search</button>
      </div>      
      </form>
      {manyResults.length>0 && <p>précisez votre recherche:</p> } 
      {manyResults && manyResults.map((choice) => {
              return (
                <button
                  key={choice.City.CityId}                  
                onClick={() => {
                  setCitySearch(choice.City.CityId);
                }}> Ville {choice.City.City} / Pays: {choice.City.CountryName} / Region {choice.City.RegionName}</button>
              );
            })}    
    </div>    
  </div>
  );
}

export default Search;
