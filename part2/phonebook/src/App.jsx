import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const addNewName = (e) => {
    e.preventDefault()
    const newPerson = { name: newName }
    if (!persons.find((person) => person.name === newName)) 
      setPersons(persons.concat(newPerson)) 
    else
      alert(`${newName} is already in the phonebook`)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </ul>
  
      
    </div>
  )
}

export default App