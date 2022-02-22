import React from "react";
import Phone from "./Phone";
import Text from "./Text";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  margin: auto;
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
