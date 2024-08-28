import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";

const SearchBox = ({updateInfo}) => {
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="http://api.weatherapi.com/v1/current.json";
    const API_KEY="a21e717e2169414f87964517242508";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.current.temp_c,
            humidity:jsonResponse.current.humidity,
            feelsLike:jsonResponse.current.feelslike_c,
            heatIndex:jsonResponse.current.heatindex_c,
            cloud:jsonResponse.current.cloud,
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
            console.log("Error is API response");
        }
        
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
        
    }
  return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} id="cityname" label="City Name" variant="outlined" value={city} required/>
        <br></br><br></br>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Search
        </Button>
        </form>
        {error && <div style={{color:'red'}}> No such place exists in API </div>}
    </div>
  )
}

export default SearchBox
