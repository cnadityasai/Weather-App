import React from 'react';
import SearchIcon from '../assets/search.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header-bar'>
        <p>Welcome to <b>Weather.io</b> </p>
        <img src={SearchIcon} alt='Search Icon'></img>
    </div>
  )
}

export default Header