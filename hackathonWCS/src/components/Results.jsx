import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import CityCard from "../components/CityCard";


function Results() {
    const {cityList} = useContext(DataContext);
    console.log("voici cityList[0]: ", cityList[0].City)
    return (

        cityList && cityList.map((city) => {
        return (             
          <CityCard
            key={city.CityId}                  
            city={city}
          />          
        );
      }) 
    );
}

export default Results;