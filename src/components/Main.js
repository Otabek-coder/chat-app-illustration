import React from "react";
import Basic from "./Basic";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100%;
  width: 100%;
  
  &::after {
    content: "";
    background-color: hsl(270, 20%, 96%);
    border-radius: 9999em 9999em 0px 0px;
    position: fixed
    ;
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
      height: 50%;
      width: 60%;
    }
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
