import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import FilterCountry from './components/FilterCountry';
import DisplayCountries from './components/DisplayCountries'
function App() {
const [countries,setCountries]=useState([])
const [filterCountry,setFilterCountry]=useState('')
useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}, [])


  return (
 <div>
   <p>Search for an Country </p>
   <FilterCountry setFilterCountry={setFilterCountry} filterCountry={filterCountry} />
     <DisplayCountries countries={countries} filterCountry={filterCountry}  />
 </div>
  );
}

export default App;
