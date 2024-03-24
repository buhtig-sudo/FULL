import { useState } from 'react';

const Header = (props) => {
  return (
    <>
      <h1>Course {props.course}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
     <p> {props.part} {props.excercises} </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return <>
  <Header course={course} />
  <Content part={part1} excercises={exercises1}/>
  </>;
};

export default App;
