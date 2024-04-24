import { useState } from 'react'
import cl from "./style.module.css";
export const Button = (props) => {

  return (
    <button className={props.className} onClick={props.handler}>
      {props.text}
    </button>
  );
}
function App() {
  const [gcount, setCountGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = gcount + neutral + bad;
  const reset = () => {
    setCountGood(0);
    setNeutral(0);
    setBad(0);
  }
  
  let average = (gcount - bad)/all;
  let positive = (gcount /all)*100;
  if (Number.isNaN(average) ) {
    average = 0;
  }
  if (Number.isNaN(positive)) {
    positive = 0;
  }
  
  return (
    <>

      <h3>Geeve feedback</h3>

      <Button text="good" handler={() => setCountGood(gcount + 1)} />
      <Button text="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button text="bad" handler={() => setBad(bad + 1)} />
      <Button className={cl.creset} text="reset" handler={reset} />

      <h4>Statistics</h4>
      <t> good: {gcount}</t>
      <t> neutral: {neutral}</t>
      <t> bad: {bad}</t>
      <t> all: {all}</t>
      <t>average: {average}</t>
      <t>positive: {positive} %</t>
    </>
  )
}

export default App;
