const Header = (props) => {
  console.log(props.course);
  return (
    <>
      <p>{props.course}</p>
    </>
  );
};
const Part = ({ parts }) => {
  return (
    <>
      <ol>
        {" "}
        {parts.map((i) => (
          <li>{i.name}</li>
        ))}
      </ol>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts} />
    </>
  );
};
const Total = ({ parts }) => {
  return (
    <>{Object.values(parts).reduce((acc, val) => acc + val.exercises, 0)}</>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
