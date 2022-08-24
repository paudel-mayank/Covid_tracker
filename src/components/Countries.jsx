import React from 'react'
import Country from './Country'
import "../assets/countries.css"

const Countries = ({countriesData}) => {
  return (
    <div className="countries_data">
    {countriesData.map((count, index) => {
        return (
          <div className="countries" key={index}>
            <Country country={count} />
          </div>
        );
      })}
    </div>
  )
}

export default Countries