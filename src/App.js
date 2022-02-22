import React from "react";
import Main from "./components/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
`;

const LeftBg = styled.div`
  background-color: hsl(271, 36%, 24%);
  border-radius: 0px 0px 250px 250px;
  position: absolute;
  top: 0;
  left: -70px;
  width: 35%;
  height: 90%;
`;
const RightBg = styled.div`
  background-color: hsl(270, 20%, 96%);
  border-radius: 250px 250px 0px 0px;
  position: absolute;
  bottom: 0;
  right: -10%;
  width: 35%;
  height: 90%;
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
