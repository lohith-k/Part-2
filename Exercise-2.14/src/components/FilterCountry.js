import React from 'react'
const FilterCountry=({setFilterCountry,filterCountry})=> {
    const changeFilterCountry =(event =>{
        console.log(event.target.value)
        setFilterCountry(event.target.value)
      })
    return(
      <input value={filterCountry}  onChange={changeFilterCountry}></input>
)
    }
export default FilterCountry