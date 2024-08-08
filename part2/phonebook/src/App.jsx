import { useEffect, useState } from 'react'
import Person from './components/Person'
import axios from 'axios'
import personServices from './services/persons'

const Filter = ({ onChange }) => {
  return <div>filter shown with: <input onChange={onChange}/></div>
}

const Persons = ({ persons, onDelete }) => (
  <ul>
    {persons.map(person => <Person key={person.id} person={person} onDelete={() => onDelete(person)}/>)}
  </ul>
)

const PersonForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <h3>Add a new</h3>
    <div>
      name: <input value={props.name} onChange={props.onNameChange}/><br/>
      number: <input value={props.number} onChange={props.onNumberChange}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect');
    personServices
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchChange = (e) => {
    const searchLower = e.target.value.toLowerCase()
    const filtered = persons.filter(
      person => person.name.toLowerCase().startsWith(searchLower)
    )
    setPersons(filtered)
  }


  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const foundPerson = persons.find((person) => person.name === newName)
    console.log('person found:', foundPerson)
    if (!foundPerson) {
      personServices
      .create(newPerson)
      .then(response => {
        console.log('adding to persons: ', response)
        setPersons(persons.concat(response)) 
      })
    }
    else {
      if (window.confirm(`${newName} is already in the phonebook, replace old number with new one?`)) {
        newPerson.id = foundPerson.id
        updatePhone(foundPerson.id, newPerson)
      }
    }
      
  }

 
  const deletePerson = person => {
      if (!window.confirm(`Delete "${person.name}"?`)) 
        return;
      personServices
      .deleteService(person.id)
      .then(response => {
        console.log('delete person response:', response)
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }

  const updatePhone = (id, newPerson) => {
    personServices
    .update(id, newPerson)
    .then(response => {
      console.log('update phone response:', response)
      setPersons(persons.map(person => id === person.id
        ? newPerson
        : person
      ))
    })
  }
  

  console.log('render persons as: ', persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearchChange}/>
      <PersonForm 
        onSubmit={addPerson}
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}  
      />
      <h2>Numbers</h2>
      <Persons persons={persons} onDelete={deletePerson}/>
    </div>
  )
  // debugger
}



export default App