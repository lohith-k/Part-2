
import SingleCountryDetails from './SingleCountryDetails'
const DisplayCountries =({filterCountry,countries,setFilterCountry})=>{
    if(filterCountry==='')
    {
      return (
        <div>
  
        </div>
      )
    }
    else{
    const filteredcountries = countries.filter(eachcountry => eachcountry.name.toLowerCase().includes(filterCountry.toLowerCase()));
  
    return(
      <div>
        {
         filteredcountries.length>10 ?
         <p> Too many matches for your search, please try another search</p> 
         :
         filteredcountries.length===1?
         <SingleCountryDetails filteredcountries={filteredcountries}/>
         :
            filteredcountries.map(eachcountry => 
           
           ( <p key={eachcountry.name} >{eachcountry.name}<button onClick={()=> setFilterCountry(eachcountry.name)
          }>show</button></p>))
             }
             
               </div>
           
    )
  }}

  export default DisplayCountries