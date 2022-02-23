import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto 30px;
  z-index: 3;
  .title {
    font-weight: 700;
    margin-bottom: 1rem;
    color: hsl(271, 36%, 24%);
  }
  .text {
    font-weight: 500;

    font-size: 1rem;
    line-height: 1.5;
    color: hsl(270, 7%, 64%);
  }
  @media (max-width: 69em) {
    margin: auto 0px;
  }
  @media (max-width: 49em) {
    max-width: 50%;
  }
  @media (max-width: 45em) {
    text-align: center;
    max-width: 70%;
  }
`;
function Text() {
  return (
    <Wrapper>
      <h1 className="title">Simple booking</h1>
      <p className="text">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </Wrapper>
  );
}

export default Text;
