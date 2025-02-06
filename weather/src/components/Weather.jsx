import React, { useEffect } from 'react';
import "./Weather.css";
import search_icon from "../assets/search.png";
import summar_icon from "../assets/Summar.png";
import mansoon_icon from "../assets/Mansoon.png";
import winter_icon from "../assets/Winter.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png"


const Weather = () => {

const search = async (city)=>{
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);

  }
  catch (error){

  }
}

useEffect(()=>{
  search("London");

},[])
console.log("API Key:", import.meta.env.VITE_APP_ID);


  return (
    <div className='weather'>
      <div className='search-bar'>
      <input type ="text" placeholder='Enter The City Name'></input>
      <img src={search_icon} alt="image"></img>
      </div>

      <img src={clear_icon} alt = "weather-image" className='weather-icon'/>
      <p className='temperature'>16°c</p>
      <p className='location'>Mumbai</p>
      <div className='weather-data'>
        <div className='col'>
          <img src ={humidity_icon} alt=""/>
          <div>
            <p>91 % </p>
            <span>Humidity</span>
          </div>

        </div>
        <div className='col'>
          <img src ={wind_icon} alt="" />
          <div>
            <p>3.6 km/hr</p>
            <span>Wind Speed</span>
          </div>

        </div>
      </div>
    
      
    </div>
  )
}

export default Weather
