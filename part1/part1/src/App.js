import React from 'react'
const Header=(props)=>{

  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}
const Part=(props)=>{
  console.log("Part");
  console.log(props);
  return (
    <div>
       <p>
        {props.part.parts.name} {props.part.parts.exercises}
      </p>
    </div>
  )
}
const Content=(props)=>{
  console.log("Content");
  console.log(props);
  return (
    <div>
       <Part part={props}/>
    </div>
  )
}
const Total=(props)=>{
  return (
    <div>

      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
   
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0]} />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App