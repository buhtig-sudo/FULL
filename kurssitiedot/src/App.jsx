import { useState } from "react";
const History = ({ all }) => {

  if (all.length == 0) {
    return (
      <h4>Click button please!</h4>
    )
  }
  return <h4>{all.join("")}</h4>

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

  console.log(typeof total)
  return (
    <>
      <div>
        <button onClick={handleLeftClick}>click</button>{left} --- {right}<button onClick={handleRightClick}>click</button>
      </div>
      <div>
        <History all={allClicks} />
        <h4>Total {total}</h4>
      </div>
    </>
  )
}

export default App;