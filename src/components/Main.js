import React from "react";
import Basic from "./Basic";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100%;
  @media (max-width: 45em) {
    height: 100vh;
  }
`;
function Main() {
  return (
    <Container>
      <Basic />
    </Container>
  );
}

export default Main;
