import React from "react";
import Phone from "./Phone";
import Text from "./Text";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: auto;

  @media (max-width: 69em) {
    width: 70%;
  }
  @media (max-width: 49em) {
    width: 90%;
  }
  @media (max-width: 45em) {
    padding: 4em 0em;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function Basic() {
  return (
    <Wrapper>
      <Phone />
      <Text />
    </Wrapper>
  );
}

export default Basic;
