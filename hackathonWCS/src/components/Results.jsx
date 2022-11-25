import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import CityCard from "../components/CityCard";


function Results() {
    const {cityList} = useContext(DataContext);
    console.log("voici cityList dans Result: ", cityList);
    return (
      <>
      {   
      cityList.City && <CityCard city={cityList.City} parent={cityList.City}/>}   
        {cityList.Region && cityList.Region.map((city) => {
        return (             
          <CityCard
            key={city.CityId}                  
            city={city}
            parent={cityList.City}
          />          
        );
      })}
      </> 
    );
}

export default Results;