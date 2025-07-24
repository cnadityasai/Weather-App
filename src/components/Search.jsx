import React, {useState} from 'react';
import Close from '../assets/close.png';
import '../styles/Search.css'

const Search = ({query, setQuery, onClose}) => {

    const [suggestions, setSuggestions] = useState([])
    const [city, setCity] = useState('');

    const data = [
        "London", "Chennai", "New York", "Seattle", "Bangalore",
        "Ernakulam", "Hyderabad", "Mumbai", "Delhi", "New Delhi"
    ]

    function handleChange(e) {
        setCity(e.target.value)

        const filtered = data.filter((item) => 
            item.toLowerCase().startsWith(city.toLowerCase())
        )
        setSuggestions(filtered)
    }

    function handleSuggestionClick(item) {
        setQuery(item);
        setSuggestions([])
        onClose();
    }
  return (
    <div className='search-container'>
        <input 
            className='search-box'
            type='text' 
            placeholder='Enter Location' 
            value={city} 
            onChange={handleChange} 
        />
        {
            suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((item, index) => (
                        <li key={index} onClick={() =>handleSuggestionClick(item)}>{item}</li>
                    ))}
                </ul>
            )
        }
        <img src={Close} alt='Close search bar' onClick={onClose}/>
    </div>
  )
}

export default Search