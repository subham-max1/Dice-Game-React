import styled from "styled-components";


function Score({score}) {
  return (
    <Container>
       <h1>{score}</h1>
       <p>Total Score</p>
    </Container>
  )
}

export default Score


// Style

const Container = styled.div`
line-height: 40px;
padding: 40px;
max-width: 100px;
text-align: center;

h1{
    font-size: xxx-large;
}
 
`;