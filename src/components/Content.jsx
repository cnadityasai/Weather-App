import React from 'react';
import "../styles/Content.css";
import SunIcon from '../assets/sun.png';

const Content = () => {
  return (
    <div className='main-container'>
        <img src={SunIcon} alt='Sun Icon'></img>
        <div className='middle-container'>
            <div className='main-temp'><b>26<sup>•</sup></b>C London</div>            
            <div className='current-weather'>Currently Sunny</div>
            <div className='rain-alert'>Rain expected at 2pm</div>
            <div className='temp-hour'><span>Current</span><b>26<sup>•</sup></b></div>
            <div className='temp-hour'><span>1:00PM</span><b>26<sup>•</sup></b></div>
            <div className='temp-hour'><span>2:00PM</span><b>26<sup>•</sup></b></div>
            <div className='temp-hour'><span>3:00PM</span><b>26<sup>•</sup></b></div>
        </div>
    </div>
  )
}

export default Content