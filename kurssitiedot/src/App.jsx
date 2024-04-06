import { useState } from 'react';
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

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );
};
const Content = (props) => {
  return (
    <>

      <p>{props.parts[0].name} {props.parts[0].exercises} </p>
      <p>{props.parts[1].name} {props.parts[1].exercises} </p>
      <p>{props.parts[2].name} {props.parts[2].exercises} </p>

    </>
  )
};

const Header = (props) => {
  console.log(props)
  return <h1>{props.name}</h1>
}
// const Total = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h6>{props.parts[0].exercises}</h6>
//       <h6>{props.parts[1].exercises}</h6>
//       <h6>{props.parts[2].exercises}</h6>

//     </>
//   )
// }
const App = () => {


  return <>
    <Header name={course.name} />
    <Content parts={course.parts} />



  </>;
};

export default App;
