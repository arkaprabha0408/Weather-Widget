import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './WeatherInfo.css'

const WeatherInfo = ({info}) => {
    
  const HOT_URL="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className='WeatherInfo'>
    <div className='card-container'>
      <Card style={{ width:'300px'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>75?RAIN_URL : info.temp>18?HOT_URL:COLD_URL}
        title="weather widget"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {info.city}&nbsp;
          {info.humidity>75?<ThunderstormIcon/>:info.temp>18?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Cloud: {info.cloud}</p>
          <p>FeelsLike: {info.feelsLike}</p>
          <p>HeatIndex: {info.heatIndex}</p>
          <p>Humidity: {info.humidity}</p>
          <p>Temperature: {info.temp}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default WeatherInfo
