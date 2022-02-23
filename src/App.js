import React from "react";
import Main from "./components/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  /* background-color: magenta; */
`;

const LeftBg = styled.div`
  background: linear-gradient(45deg, hsl(264, 100%, 61%), hsl(293, 100%, 63%));
  border-radius: 0px 0px 250px 250px;
  position: absolute;
  top: 0;
  left: -5%;
  width: 35%;
  height: 90%;
  @media (max-width: 69em) {
    left: -10%;
    top: -0%;
  }
  @media (max-width: 45em) {
    border-radius: 0px 0px 200px 200px;
    height: 70%;
    width: 60%;
  }
`;
const RightBg = styled.div`
  background-color: hsl(270, 20%, 96%);
  border-radius: 250px 250px 0px 0px;
  position: absolute;
  bottom: 0;
  right: -10%;
  width: 35%;
  height: 90%;
  opacity: 0.4;
  @media (max-width: 69em) {
    right: -15%;
    bottom: -0%;
  }
  @media (max-width: 45em) {
    border-radius: 200px 200px 0px 0px;
    height: 40%;
    width: 60%;


  }
`;

function App() {
  return (
    <Wrapper>
      <LeftBg></LeftBg>
      <Main />
      <RightBg></RightBg>
    </Wrapper>
  );
}

export default App;
