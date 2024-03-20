import styled from "styled-components";

function Login({toggle}) {
  return (
    <>
      <Container>
        <div className="Image">
          <img src="/assets/dices.png" alt="Dice-Image" />
        </div>

        <div className="Contents">
          <h2>DICE GAME</h2>
          <button onClick={toggle}>Play Now</button>
        </div>
      </Container>
    </>
  );
}

export default Login;

//   style

const Container = styled.div`

    padding-top: 47px;
  display: flex;
  justify-content: center;
  align-items: center;


  .Contents button{
    background-color: black;
    color: white;
    padding: 10px;
    width:174px;
    border-radius: 10px;
    margin-left:124px;
    transition: 0.4s background ease-in;

    &:hover{
        cursor: pointer;
        background-color: white;
        color:black;
       
    }

  }

  .Contents h2{
    font-size: 50px;
  }
  
`;
