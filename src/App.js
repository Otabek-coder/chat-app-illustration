import React from "react";
import Main from "./components/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      hsl(264, 100%, 61%),
      hsl(293, 100%, 63%)
    );
    border-radius: 0em 0em 9999em 9999em;
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
      height: 70%;
      width: 60%;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default App;
