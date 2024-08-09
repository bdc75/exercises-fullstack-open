import { useState, useEffect } from 'react'
import axios from 'axios'

const countriesURL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const CountryProfile = ({ country }) => {
  const cpStyle = {fontSize : 200}
  return (
    <div style={cpStyle}>
      {country.flag}
    </div>
  )
}

const CountryForm = ({ search, onChange }) => (
  <div>
    find countries <input value={search} onChange={onChange}/>
  </div>
)

const Results = ({ filteredResults }) => {
  const resStyle = {listStyleType: "none"}

  const len = filteredResults.length
  console.log('length of results:', len)
  if (len === 0) {
    return null
  } else if (len > 10) {
    return (<div>Too many matches, specify another filter</div>)
  } else if (len > 1) {    
    return (
      <ul style={resStyle}>
        {filteredResults.map(country => <li key={country.name.official}>{country.name.common}</li>)}
      </ul>
    )
  } 
  else {
    return <CountryProfile country={filteredResults[0]}/>
  }
}

const App = () => {
  const [search, setSearch] = useState('')
  // const [numResults, setNumResults] = useState(0)
  const [initialResults, setInitialResults] = useState({})
  const [filteredResults, setFilteredResults] = useState({})

  useEffect(() => {
    axios
    .get(countriesURL)
    .then(response => setInitialResults(response.data))
    }, []
  )
  
  // const countryNames = countries => countries.map(c => c.name)

  const handleSearch = (e) => {
    console.log('etargetvalue', e.target.value)
    const search = e.target.value.toLowerCase()
    setSearch(search)
    setFilteredResults(initialResults
      .filter(
        country => country.name.common.toLowerCase().includes(search)
    ))
  }


  console.log(initialResults)
  return (
    <div>
      <CountryForm search={search} onChange={handleSearch}/>
      <Results filteredResults={filteredResults}></Results>
      {/* <CountryProfile></CountryProfile> */}
    </div>
  )
}

export default App
