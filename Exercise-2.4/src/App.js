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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>WEB DEVELOPMENT CURRICULUM</h1>
     {courses.map (eachcourse =>  <Course course={eachcourse} />)}
     
    </div>
  )
}

export default App