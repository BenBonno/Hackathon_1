import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";


function Search() {
  const { city, cityList} = useContext(DataContext);
  const [inputSearch, setInputSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isMounting, setIsMounting] = useState(true);

  //var axios = require('axios');
  var data = '';

  var config = {
  method: 'get',
  url: `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${citySearch}`,
  headers: { 
    'Authorization': 'Basic MTA3MjFlMDJhZmEwOTM0NzdiNGI3YTRiYzBhZDkwMmM6OGM3N2UyM2JiNTE2ZTk2NzE2YmRhMmUwOWI5Y2NjM2I'
  },
  data : data
};

//http://thomsult.ddnsfree.com:3000/City/Toulouse

  /*const getCity = () => {
    axios
      .get("http://localhost:4000/cupcakes")
      .then((response) => response.data)
      .then((data) => {
        setCupcakeList(data);
      });
  };*/

 /* useEffect(() => {
    if (citySearch)
    axios(config)
.then(function (response) {
  // console.log(Object.entries(response.data));
  setResultSearch(Object.entries(response.data));
})
.catch(function (error) {
  console.log(error);
});
   console.log(citySearch);    
  }, [citySearch]);*/

  var config = {
    method: 'get',
    url: `http://thomsult.ddnsfree.com:3000/Region/1?Limit=10`,
    headers: { }
  };
  
  

   useEffect(() => {
    if (citySearch)
/*
    axios
    .get(`http://thomsult.ddnsfree.com:3000/City/${citySearch}`)
    .then((response) => response.data)
    .then((data) => {
      setResultSearch(data);
    });
*/
axios(config)
.then(function (response) {
  console.log(response.data[0].City);
})
.catch(function (error) {
  console.log(error);
});
  }, [citySearch]);
  
  useEffect(() => {
    if (inputSearch)
    console.log(inputSearch);  
    if (resultSearch.length>1)
    console.log(resultSearch);
    console.log(resultSearch);
  }, [inputSearch]);

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
          <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setCitySearch(inputSearch)}>Search</button>
      </div>
      </form>
    </div>
    {/*resultSearch.length>1 && resultSearch[0][1].length>1 && resultSearch[0][1].map((e) => {
              return (
                <button
                 type="submit"
                  
                >
                  {e[0].attributes.slug}
                </button>
              );
            })*/}
  </div>
  );
}

export default Search;
