import React, {useState} from 'react';
import SearchIcon from '../assets/search.png';
import '../styles/Header.css';
import Search from './Search';

const Header = () => {

  const [showSearch, setShowSearch] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

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
        {!showSearch && <Search query={searchQuery} setQuery={setSearchQuery} onClose={handleCloseSearch} /> }
    </div>
  )
}

export default Header