import { useState } from "react";
const History = ({ all }) => {

  if (all.length == 0) {
    return (
      <h4>Click button please!</h4>
    )
  }
  return <h4>{all.join("")}</h4>

}
const Button = (props) => {
  console.log(props)
  const { handler, text } = props
  return (
    <button onClick={handler}>
      {text}
    </button>
  )
}
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  }
  const handleClear = () => {
    const clear = 0;
    setAll([]);
    setTotal(clear);
    setRight(clear);
    setLeft(clear);

  }
  const examleFuncInner = (text) => {
    const returnFunc = () => console.log('Hello! A am inner function!!', text);
    return returnFunc;
  }
  console.log(typeof total)
  return (
    <>
      <div>
        <Button handler={handleLeftClick} text="left" />
        <Button handler={handleRightClick} text="right" />
        <Button handler={handleClear} text="clear" />
      </div>
      <div>
        <History all={allClicks} />
        <h4>Total {total}</h4>

        <Button handler={examleFuncInner("ho")} text="example" />
      </div>
    </>
  )
}

export default App;