import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = import.meta.env.VITE_OPENWEATHER

const countriesURL = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherURL = (lat, lon) =>  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
const weatherIconURL = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`

// of country object, attribute latlng is a list [42, 2] e.g.

const Languages = ({ langs }) => (
  <div>
    <strong>languages:</strong>
    <ul>
      {Object.entries(langs).map(
        entry => <li key={entry[0]}>{entry[1]}</li>
      )}
    </ul>
  </div>
)

const Weather = ({ weather, country }) => {
  if (!weather) return null
  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>temperature {weather.main.temp} Celsius</p>
      <img src={weatherIconURL(weather.weather[0].icon)}/>
      <p>wind {weather.wind.speed}m/s</p>
    </div>
  )
}

const CountryProfile = ({ country, weather, setWeather }) => {
  console.log('country', country)
  if (!country)
    return null
  const [lat, lng] = [country.latlng[0], country.latlng[1]]
  useEffect(() => {
      axios
      .get(weatherURL(lat, lng))
      .then(response => setWeather(response.data)
      )
    }, []
  )
  return (
    <div style={{padding: 0}}>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <Languages langs={country.languages} />
      <img src={country.flags.png} alt={country.flags.alt}/>
      <Weather weather={weather} country={country}/>
    </div>
  )
}

const CountryForm = ({ search, onChange }) => (
  <div>
    find countries
    <input value={search} onChange={onChange}/>
    <button value={search} onClick={onChange}>refresh search</button>
  </div>
)

const Results = ({ filteredResults, setResults, weather, setWeather }) => {
  const resStyle = {listStyleType: "none", padding: 0}

  const len = filteredResults.length
  
  if (len === 0) {
    return null
  } else if (len > 10) {
    return (<div>Too many matches, specify another filter</div>)
  } else if (len > 1) {    
    return (
      <ul style={resStyle}>
        {filteredResults.map(country => 
          <li key={country.name.official}>
            {country.name.common}
            <button onClick={() => setResults([country])}>show</button>
          </li>
        )}
      </ul>
    )
  } 
  else {
    return <CountryProfile country={filteredResults[0]} weather={weather} setWeather={setWeather}/>
  }
}

const App = () => {
  const [search, setSearch] = useState('')
  const [initialResults, setInitialResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [weather, setWeather] = useState(null)

  
  // Set initial results once
  useEffect(() => {
    axios
    .get(countriesURL)
    .then(response => setInitialResults(response.data))
    }, []
  )

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase()
    setSearch(search)
    if (search.length === 0) {
      setFilteredResults([])
      return
    }
    setFilteredResults(initialResults
      .filter(
        country => country.name.common.toLowerCase().includes(search)
    ))
  }

  return (
    <div style={{backgroundColor: 'powderblue'}}>
      <CountryForm search={search} onChange={handleSearch}/>
      <Results filteredResults={filteredResults} setResults={setFilteredResults} weather={weather} setWeather={setWeather}/>
    </div>
  )
}

export default App
