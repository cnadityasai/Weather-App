import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Content.css";
import SunIcon from '../assets/sun.png';

const Content = () => {

  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [forecast, setForecast] = useState([]);
  const [hourData, setHourData] = useState([]);

  const hour = parseInt(new Date().toLocaleTimeString("en-GB", {timeZone: 'Europe/London', hour: "2-digit", hour12: false}))

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'http://api.weatherapi.com/v1/current.json',
          {
            params: {
              key: '529ba33930584163887165234251806',
              q: city
            }
          }
        )
        const data = response.data;
        setTemp(data.current.temp_c)
        setWeather(data.current.condition.text)
        const hours = []
        for(var i=hour; i<=hour+3; i++){
          hours.push(i);
        }
        setForecast(hours)
      } catch (error) {
        console.error('Error fetching weather: ', error)
      }
    };

    const fetchFutureWeather = async () => {
      try {
        const response1 = await axios.get(
          'http://api.weatherapi.com/v1/forecast.json',
          {
            params: {
              key: '529ba33930584163887165234251806',
              q: city
            }
          }
        )
        const futureWeather = response1.data;
        setHourData(futureWeather.forecast.forecastday[0].hour)

      } catch (error) {
        console.log("Error fetching future weather: ", error)
      }
    }

    fetchWeather();
    fetchFutureWeather();
  }, []);

  return (
    <div className='main-container'>
        <img src={SunIcon} alt='Sun Icon'></img>
        <div className='middle-container'>
            <div className='main-temp'><b>{temp}<sup>•</sup></b>C {city}</div>            
            <div className='current-weather'>{weather}</div>
            {/* <div className='rain-alert'>Rain expected at 2pm</div> */}
            <div className='temp-hour-container'>
              {forecast.map((hourIndex, idx) => (
                <div className='temp-hour'><span>{idx===0?"Current":hourIndex}</span><b>{hourData.length > 0 && hourData[hourIndex] ? hourData[hourIndex].temp_c : "..."}<sup>•</sup></b></div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Content