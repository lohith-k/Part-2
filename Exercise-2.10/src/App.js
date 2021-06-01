import './App.css';
import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number:'9087654321'
   },
   { name: 'Ada Lovelace', number: '39-44-5323523' },
   { name: 'Dan Abramov', number: '12-43-234345' },
   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addname=(event) =>{
    event.preventDefault()
      const personexists=persons.find(person => person.name === newName);

      if (personexists) {
        alert(newName+" already exists in the phonebook. Please enter another name")}
      else{
    const personObject = {
      name: newName,
      number:newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  
};
    
  }
    const filterChange =(event =>{
        console.log(event.target.value)
        setNewFilter(event.target.value)
      })

  const nameChange =(event =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  })

  const numberChange =(event =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  })

 


 
    
 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} filterChange={filterChange}/>
      <h3>Add</h3>
      <PersonForm newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} addname={addname}/>
     
      <h2>Numbers</h2>
       <DisplayPersons persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App