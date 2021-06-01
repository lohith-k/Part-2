import './App.css';
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import DisplayPersons from './components/DisplayPersons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
  useEffect(() => {
    personService
      .getAll()
      .then(setPersons)
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
    personService
    .addPerson(personObject)
    .then(pdetails => {
      setPersons(persons.concat(pdetails))
      
    })
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

  const removePerson =(pid,pname)=>
    {
      if(window.confirm("Delete "+pname +"?"))
      {
        personService.rPerson(pid).then(() => {
          setPersons(persons.filter(eachperson => eachperson.id !== pid));
          
        });
      }

    }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} filterChange={filterChange}/>
      <h3>Add</h3>
      <PersonForm newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange} addname={addname}/>
     
      <h2>Numbers</h2>
       <DisplayPersons persons={persons} newFilter={newFilter} removePerson={removePerson}/>
    </div>
  )
}

export default App