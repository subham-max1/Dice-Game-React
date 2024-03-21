import styled from "styled-components";
import { useState } from "react";


function Dice({currentDice,roleDice}) {

    



  return (

    <Container>
        <div className="diceImage" onClick={roleDice}>
        <img src={`assets/dice/dice_${currentDice}.png`} alt="" />
        </div>

        <div className="paragraph">
        <p>Click On Dice to Roll</p>
        </div>
        

    </Container>
    
  )
}

export default Dice


//style


const Container = styled.div`


.diceImage{
    padding-top: 50px;

justify-content: center;
display: flex;

}

.paragraph{
    justify-content: center;
    display: flex;
   
}





 
`;