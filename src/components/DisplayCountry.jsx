import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/utils";
import "../assets/displaycountry.css";
import Countries from "./Countries";
import SearchedData from "./SearchedData";
const DisplayCountry = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetchData(
        "http://disease.sh/v3/covid-19/countries"
      );
      setCountriesData(response);
    };
    fetchCountriesData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="container-fluid countriesData ">
      <form  onSubmit={handleSubmit}>
        <input
        className='searchField'
          type="text"
          placeholder="...searchbyCountryName"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
        <button type="submit" className='search'> Search</button>
      </form>
      <div className="data_container">
      {searchCountry ? <SearchedData searchData={searchCountry.toLowerCase()} country={countriesData}/> :<Countries countriesData={countriesData}/>}
  </div>
    </div>
  );
};

export default DisplayCountry;
