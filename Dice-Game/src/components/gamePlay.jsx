import styled from "styled-components";
import Score from "./Score";
import NumberSelection from "./NumberSelection";
import Dice from "./Dice";
import { useState } from "react";

function GamePlay() {

    const [score,getScore]=useState(0);

    const [selectedNumber, setSelectedNumber] =useState();
    const [currentDice, setCurrentDice] =useState(1);
    const [error, setError] =useState("");



    const generateRandomNumber=(min,max) =>{
        
        return Math.floor( Math.random() * (max - min)+min);
    }


    const roleDice=() =>{
        if(!selectedNumber){
        setError("Please select a Number")
        return;
        }
        setError("")
        const randomNumber =generateRandomNumber(1,7)

        setCurrentDice((prev)=> randomNumber)
        

       

        if(selectedNumber ===randomNumber){
            getScore((prev)=> prev +randomNumber);

        }
        else{
            getScore((prev) => prev -2);
        }

        setSelectedNumber(undefined)
    }

  return (

    <Container>
        <div className="main">
        <Score score={score}/>
        <NumberSelection
        error={error}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <div>
            <Dice currentDice={currentDice} roleDice={roleDice}></Dice>
        </div>
       
    </Container>
    

  );
}

export default GamePlay;

// Style

const Container = styled.div`

.main{
    display: flex;
justify-content:space-between;

}



 
`;
