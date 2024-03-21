import styled from "styled-components";
import Score from "./Score";
import NumberSelection from "./NumberSelection";
import Dice from "./Dice";
import { useState } from "react";


function GamePlay() {

  
  const [score, getScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [buttonColor, setButtonColor] = useState('unclicked');
  const [buttonText, setButtonText] = useState('Show Rules');

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

 

  const resetScore = () => {
    getScore((prev) => (prev = 0));
    setSelectedNumber(undefined);
  };

  const handleClick = () => {
    setShowDiv(!showDiv);
    setButtonColor(showDiv ? 'unclicked' : 'clicked');
    setButtonText(showDiv ? 'Show Rules' : 'Hide Rules');
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please select a Number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      getScore((prev) => prev + randomNumber);
    } else {
      getScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <Container>
        
      <div className="main">
        <Score score={score} />
        <NumberSelection
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div>
        <Dice currentDice={currentDice} roleDice={roleDice}></Dice>
      </div>
      <div className="Bbuttons">
        <button onClick={resetScore}>Reset Score</button>
        <button className={`button ${buttonColor}` }onClick={handleClick}>{buttonText}</button> 
      </div>
      {showDiv && (
          <div className="hideDiv">
            <h3>How to play Dice Game</h3>
            
              <p>Select any Number.</p>
              <p>Click on dice image.</p>
              <p>
                after click on dice if selected number is equal to dice number
                you will get same point as dice if you get wrong guess then 2
                point will be dedcuted.
              </p>
            
          </div>
        )}
    </Container>
  );
}

export default GamePlay;

// Style

const Container = styled.div`


  .main {
    display: flex;
    justify-content: space-between;
  }


  .Bbuttons {
    margin-left:675px;
  }


  .Bbuttons button{
    justify-content: center;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    margin-top: 14px;
  }

  .unclicked {
  background-color: #fff; 
  color: #000; 
}

.clicked {
  background-color: black; 
  color: #fff; 
}

.hideDiv{

    font-size: small;

    height: 50px;
    width: 488px;
    line-height: 25px;
    padding: 64px 50px 120px 400px;

}

button{

}


`;
