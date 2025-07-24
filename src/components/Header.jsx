import React, {useState} from 'react';
import SearchIcon from '../assets/search.png';
import '../styles/Header.css';
import Search from './Search';

const Header = ({city, setCity}) => {

  const [showSearch, setShowSearch] = useState(true)

  function handleClick() {
    setShowSearch(false)
  }

  function handleCloseSearch() {
    setShowSearch(true)
  }

  return (
    <div className='header-bar'>
        <p>Welcome to <b>Weather.io</b> </p>
        {showSearch && <img src={SearchIcon} alt='Search Icon' onClick={handleClick} />}
        {!showSearch && <Search query={city} setQuery={setCity} onClose={handleCloseSearch} /> }
    </div>
  )
}

export default Header