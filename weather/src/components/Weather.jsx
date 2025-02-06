import React, { useEffect, useRef, useState } from 'react';
import "./Weather.css";
import search_icon from "../assets/search.png";
import summar_icon from "../assets/Summar.png";
import mansoon_icon from "../assets/Mansoon.png";
import winter_icon from "../assets/Winter.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import clear_icon from "../assets/clear.png"

const API_KEY = "fb220c70354db39566568ac933e79a18"
const Weather = () => {

  const [weatherData , setWeatherData] = useState(false);

  const inputRef = useRef();

  const allIcons = {
    "01d" : clear_icon,
    "01n" : clear_icon,
    "02d" : winter_icon,
    "02n" : winter_icon,
    "03d" : summar_icon,
    "03n" : summar_icon,
    "04d" : mansoon_icon,
    "04n" : mansoon_icon,
    "09d" : mansoon_icon,
    "09n" : mansoon_icon,
    "10d" : mansoon_icon,
    "10n" :mansoon_icon,
    "13n" : winter_icon,
    "13d" : winter_icon,

  }

const search = async (city)=>{
  if(city === "")
  {
    alert("Enter a city Name")
    return;
  }
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data =  await response.json();
    const icon = allIcons[data.weather[0].icon] || clear_icon
    setWeatherData({
      humidity : data.main.humidity,
      windSpeed : data.wind.speed,
      temperature : Math.floor(data.main.temp),
      location : data.name,
      icon : icon
    })
    

  }
  catch (error){

  }
}

useEffect(()=>{
  search("pune");

},[])

  return (
    <div className='weather'>
      <div className='search-bar'>
      <input type ="text" ref = {inputRef} placeholder='Enter The City Name'></input>
      <img src={search_icon} alt="image" onClick={()=>search(inputRef.current.value)}></img>
      </div>

 

      <img src={weatherData.icon} alt = "weather-image" className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}</p>
      <p className='location'>{weatherData.location}</p>
      <div className='weather-data'>
        <div className='col'>
          <img src ={humidity_icon} alt=""/>
          <div>
            <p>{weatherData.humidity}% </p>
            <span>Humidity</span>
          </div>

        </div>
        <div className='col'>
          <img src ={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed}</p>
            <span>Wind Speed</span>
          </div>

        </div>
      </div>
      ) 
    
      
    </div>
  )
}

export default Weather
