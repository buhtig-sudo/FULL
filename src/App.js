const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;

const Header = (props) => {
  return (
    <>
      <p>{props.course}</p>
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <li>{props.part}</li>
    </>
  );
};
const Content = () => {
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
};
const Total = (props) => {
  return <>{props.exercises}</>;
};
const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
