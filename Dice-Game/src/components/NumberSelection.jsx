import styled from "styled-components";
import { useState } from "react";


function NumberSelection({error, selectedNumber, setSelectedNumber}) {

    const arrayNumber=[1,2,3,4,5,6];
    

    console.log(selectedNumber)
  return (
    <Container>
        <p>{error}</p>
        {arrayNumber.map((value,i)=>(
            <Box 
             key={i} onClick={() => setSelectedNumber(value)}
             isSelected={value===selectedNumber}
            >{value}</Box>
        ))}


        <h4>Select Number</h4>

        
       
        
    </Container>
    
    
  )
}

export default NumberSelection

//style

const Container = styled.div`
display: flex;

line-height: 40px;
padding: 40px;

text-align: center;

p{
    color: red;
    
}
h4{
    padding-left: 10px;
}
 
`;


const Box = styled.div`

height: 54px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
margin-left: 19px;
background-color: ${(props) => (props.isSelected ? "black": "white")};
color: ${(props) => (!props.isSelected ? "black": "white")};

&:hover{
    cursor: pointer;
    color:black;  
}
    
`