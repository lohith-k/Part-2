import React from 'react'
const Course = ({course})=>
{
  return(
    <>
  <Header course={course} />
  <Content parts={course.parts} />
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