import React from 'react'



 const DisplayPersons =({persons,newFilter})=>{
    
    return(
      <div>
        
         {  persons.filter(eachperson => eachperson.name.toLowerCase().includes(newFilter.toLowerCase()))
                .map(eachperson => 
         
          <p key={eachperson.name} >{eachperson.name} {eachperson.number}</p>)}
        </div>
    )
    }
    export default DisplayPersons