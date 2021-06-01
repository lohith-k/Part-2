import './App.css';
import React, { useState } from 'react'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const addname=(event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    
  }
  const nameChange =(event =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addname}>
        <div>
          name: <input type="text" value={newName} onChange={nameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map(eachperson =>  <p key={eachperson.name} >{eachperson.name}</p>)}
    </div>
  )
}

export default App