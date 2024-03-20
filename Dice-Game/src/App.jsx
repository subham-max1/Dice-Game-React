
import GamePlay from "./components/gamePlay"
import Login from "./components/login";



import { useState } from "react";





function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay =() =>{
    setIsGameStarted((prev) => !prev);
  }
  

  return (
    <>
      {isGameStarted ? <GamePlay/> :<Login toggle={toggleGamePlay}/>}
    </>
  )
}

export default App



