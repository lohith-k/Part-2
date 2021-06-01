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
     <Part part={parts[0]} />
     <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />

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
  return (
    <div>
        <p>Number of total exercises  { parts[0].exercises+parts[1].exercises+parts[2].exercises+parts[3].exercises}</p>
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