import { useState } from "react";


const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });

  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <>
      <div>
        <button onClick={handleLeftClick}>click</button>{clicks.left} --- {clicks.right}<button onClick={handleRightClick}>click</button>
      </div>
    </>
  )
}

export default App;