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
      <h1>{course.name}</h1>
    </div>
  )
}
const Content = ({parts}) => {

  return (
    <div>
     {parts.map( eachpart => <Part part={eachpart} />)}
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
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1

      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      },
      {
        name: 'Redux',
        exercises: 11,
        id:4
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
     
    </div>
  )
}

export default App