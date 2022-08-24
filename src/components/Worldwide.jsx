import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/utils";
import "../assets/worldData.css";
const WorldWide = () => {
  const [worldData, setWorldData] = useState([]);
  useEffect(() => {
    const fetchWorldData = async () => {
      const response = await fetchData("https://disease.sh/v3/covid-19/all");
      setWorldData(response);
    };
    fetchWorldData();
  }, []);
  return (
    <div className="  worldData container-fluid d-flex justify-content-center align-items-center ">
      <div className="col-lg-2 col-sm-4  mx-5 Cases">
        <h2 className="case_title"> Cases</h2>
        <div className="today_cases"><p className="todayTotal">Today Cases</p><span className="nCases">{worldData.todayCases}</span></div>

        <div className="total_cases"><p className="todayTotal">Total Cases</p> <span className='nCases'> {worldData.cases}</span></div>
      </div>
      <div className="col-lg-2  col-sm-4 mx-5 Cases" >
        <h2 className="case_title">Deaths</h2>
        <div className="today_cases"><p className="todayTotal">Today Deaths</p> <span className='nCases'>{worldData.todayDeaths}</span></div>

        <div className="total_cases"><p className="todayTotal">Total Deaths</p><span className='nCases'>{worldData.deaths} </span></div>
      </div>
      <div className="col-lg-2 col-sm-4  mx-5 Cases" id='recovered'>
        <h2 className="case_title"> Recovered</h2>
         <div className="today_cases"><p className="todayTotal"> Today Recovered </p><span className='nCases'>{worldData.todayRecovered} </span></div>
         <div className="total_cases"><p className="todayTotal"> Total Recovered </p><span className='nCases'>{worldData.recovered} </span></div>

      </div>
    </div>
  );
};

export default WorldWide;
