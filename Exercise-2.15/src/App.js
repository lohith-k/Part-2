import './App.css';
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
   
  
    }, [])

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
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      
    })
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