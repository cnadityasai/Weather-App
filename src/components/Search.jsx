import React from 'react';
import Close from '../assets/close.png';
import '../styles/Search.css'

const Search = ({query, setQuery, onClose}) => {

  return (
    <div className='search-container'>
        <input 
            type='text' 
            placeholder='Enter Location' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
        />
        <img src={Close} alt='Close search bar' onClick={onClose}/>
    </div>
  )
}

export default Search