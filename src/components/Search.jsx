import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Close from '../assets/close.png';
import '../styles/Search.css'

const Search = ({query, setQuery, onClose}) => {

    const [suggestions, setSuggestions] = useState([])
    const [city, setCity] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const data = [
        "London", "Chennai", "New York", "Seattle", "Bangalore",
        "Ernakulam", "Hyderabad", "Mumbai", "Delhi", "New Delhi"
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(city);
        }, 400)

        return () => clearTimeout(timer);
    }, [city]);

    useEffect(() => {
        if(debouncedQuery.length < 2) return; 

        const fetchSuggestions = async () => {
            try{
                const response = await axios.get(
                    'https://api.weatherapi.com/v1/search.json',
                    {
                        params: {
                            key: apiKey,
                            q: debouncedQuery
                        }
                    }
                )
                setSuggestions(response.data.map((item) => item.name));
            } catch (error) {
                console.error('Failed to fetch city suggestions', error);
                setSuggestions([]);
            }
        }
        fetchSuggestions();
    }, [debouncedQuery])

    function handleChange(e) {
        setCity(e.target.value)
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