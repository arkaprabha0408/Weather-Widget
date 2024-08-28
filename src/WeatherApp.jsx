import React, { useState } from 'react'
import SearchBox from './SearchBox';
import WeatherInfo from './WeatherInfo';

const WeatherApp = () => {
  const[wInfo,setWInfo]=useState({
    city:"delhi",
    cloud:0,
    feelsLike:20.7,
    heatIndex:24.4,
    humidity:95,
    temp:20.7
  });

  let updateInfo=(newInfo)=>{
    setWInfo(newInfo);
  }
 

  return (
    <div>
        <h2>Weather App by Arka Prabha Biswas</h2>
      <SearchBox updateInfo={updateInfo}/>
      <WeatherInfo info={wInfo}/>
    </div>
  )
}

export default WeatherApp