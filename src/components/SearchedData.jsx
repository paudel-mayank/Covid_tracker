import React from "react";
import "../assets/country.css";
import "../assets/searchContainer.css";
const SearchedData = ({ searchData, country }) => {
  const searchItem = country.filter((countryItem) =>
    countryItem.country.toLowerCase().includes(searchData)
  );
  console.log(searchItem);

  if (!searchItem) {
    return <>No match Found</>;
  }
  return (
    <div className="search_container">
      {searchItem.map((search) => {
        return (
          <div className="searchData countryCard" key={search.country}>
            <img src={search.countryInfo.flag} alt={search.country} />

            <h2 className="countryName"> {search.country}</h2>
            <div className="countryCase_details">
              <div className="detail total ">
                <h3 className="detail_title ">Total</h3>
                <p> Cases: {search.cases} </p>
                <p> Recoverd: {search.recovered}</p>
                <p> Deaths: {search.deaths}</p>
              </div>
              <div className=" detail today ">
                <h3 className="detail_title ">Today</h3>
                <p> Cases: {search.todayCases} </p>
                <p> Recoverd: {search.todayRecovered}</p>
                <p> Deaths: {search.todayDeaths}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedData;
