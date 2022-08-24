import React from 'react'
import '../assets/country.css'
const Country = ({country}) => {
  return (
    <div className='countryCard' >
        <img src={country.countryInfo.flag} alt={country.country}/>
        <h2 className="countryName"> {country.country}</h2>
        <div className='countryCase_details'>

            <div className='detail total '>
                 < h3 className="detail_title ">Total</h3>
            <p> Cases: {country.cases}  </p>
            <p> Recoverd: { country.recovered}</p>
            <p>  Deaths: { country.deaths}</p>

            </div>
            <div className=' detail today '> 
                < h3 className="detail_title ">Today</h3>
            <p> Cases: {country.todayCases}  </p>
            <p> Recoverd: { country.todayRecovered}</p>
            <p>  Deaths: { country.todayDeaths}</p>
        </div>
        </div>

    </div>
  )
}

export default Country