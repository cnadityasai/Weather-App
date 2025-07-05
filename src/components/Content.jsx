import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Content.css";
import SunIcon from '../assets/sun.png';

const Content = () => {

  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);
  const [forecast, setForecast] = useState([]);
  const [hourData, setHourData] = useState();

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
        console.log(typeof(hour))
        console.log(hour)
        for(var i=hour; i<=hour+3; i++){
          const temp = i;
          setForecast(prevArray => [...prevArray, temp])
        }
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
        // console.log(londonHour)

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
              <div className='temp-hour'><span>Current</span><b>{hourData ? hourData[forecast[0]].temp_c : "..."}<sup>•</sup></b></div>
              <div className='temp-hour'><span>{forecast[1]}:00</span><b>{hourData ? hourData[forecast[1]].temp_c: "..."}<sup>•</sup></b></div>
              <div className='temp-hour'><span>{forecast[2]}:00</span><b>{hourData ? hourData[forecast[1]].temp_c: "..."}<sup>•</sup></b></div>
              <div className='temp-hour'><span>{forecast[3]}:00</span><b>{hourData ? hourData[forecast[2]].temp_c: "..."}<sup>•</sup></b></div>
            </div>
        </div>
    </div>
  )
}

export default Content