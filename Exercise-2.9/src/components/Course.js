import React from 'react'


const Course = ({course})=>
{
  return(
    <>
  <Header course={course} />
  <Content parts={course.parts} />
  <Total parts={course.parts} />
  </>
  )
  
}
const Header = ({course}) => {
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}
const Content = ({parts}) => {

  return (
    <div>
     {parts.map( eachpart => <Part  part={eachpart} />)}
    </div>
  )
}
const Part=({part})=>{
  return (
    <p>
     {part.name} {part.exercises}
    </p>
  )

}
const Total = ({parts}) => {
  const total = parts.reduce((sum, x) => sum + x.exercises, 0);

  return (
    <div>
        <p>Number of total exercises  { total }</p>
    </div>
  )
}

export default Course