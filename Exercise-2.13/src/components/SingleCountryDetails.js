import React from 'react'

const SingleCountryDetails=({filteredcountries}) =>{
return(
<div>
           <h2>{filteredcountries[0].name}</h2>
           <p>Capital city  <strong>{filteredcountries[0].capital}</strong></p>
           <p>population  <strong>{filteredcountries[0].population}</strong></p>
            <h3>Languages Spoken</h3>
            <ul>
            {filteredcountries[0].languages.map(languages =>(
              <li key={languages.name}>
            {languages.name}
              </li>))}
            </ul>
            <h3>FLAG</h3>
            <img src={filteredcountries[0].flag} alt="" height="200" width="200" />
  
           </div>
)
}

export default SingleCountryDetails
