import { useState, useEffect } from 'react'
import axios from 'axios'

const countriesURL = "https://studies.cs.helsinki.fi/restcountries/api/all"

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

const CountryProfile = ({ country }) => {
  console.log('country', country)
  if (!country)
    return null
  else return (
    <div style={{padding: 0}}>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <Languages langs={country.languages} />
      <img src={country.flags.png} alt={country.flags.alt}/>
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

const Results = ({ filteredResults, setResults }) => {
  const resStyle = {listStyleType: "none", padding: 0}

  const len = filteredResults.length
  console.log('length of results:', len)
  
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
    return <CountryProfile country={filteredResults[0]}/>
    // onShow(filteredResults[0])
  }
}

const App = () => {
  const [search, setSearch] = useState('')
  // const [numResults, setNumResults] = useState(0)
  const [initialResults, setInitialResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  // const [shownCountry, setShownCountry] = useState(null)

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
      <Results filteredResults={filteredResults} setResults={setFilteredResults}/>
      {/* <CountryProfile country={shownCountry}/> */}
    </div>
  )
}

export default App
