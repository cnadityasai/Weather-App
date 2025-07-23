import React, {useState} from 'react';
import Close from '../assets/close.png';
import '../styles/Search.css'

const Search = ({query, setQuery, onClose}) => {

    const [suggestions, setSuggestions] = useState([])

    const data = [
        "London", "Chennai", "New York", "Seattle", "Bangalore",
        "Ernakulam", "Hyderabad", "Mumbai", "Delhi", "New Delhi"
    ]

    function handleChange(e) {
        setQuery(e.target.value)

        const filtered = data.filter((item) => 
            item.toLowerCase().startsWith(query.toLowerCase())
        )
        setSuggestions(filtered)
    }

    function handleSuggestionClick(item) {
        setQuery(item);
        setSuggestions([])
    }
  return (
    <div className='search-container'>
        <input 
            className='search-box'
            type='text' 
            placeholder='Enter Location' 
            value={query} 
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