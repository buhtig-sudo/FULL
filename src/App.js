import { useState } from "react";
import "./style.css";
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const increaseOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const reset = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };
  return (
    <div>
      <div className="count">
        <Display counter={counter} />
      </div>
      <br />
      <Button onClick={increaseOne} text="plus" />
      <Button onClick={decreaseOne} text="minus" />
      <Button onClick={reset} text="zero" />
    </div>
  );
};

export default App;
