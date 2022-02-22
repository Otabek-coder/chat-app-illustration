import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { GrMoreVertical } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

const Wrapper = styled.div`
  border: 10px solid #fff;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 3px 9px 14px -3px rgba(0, 0, 0, 0.48);
  margin: 0px 80px;
  z-index: 3;
  min-width: 250px;
  height: 510px;
`;
const Heading = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 70px;
  padding: 0px 8px 8px 8px;
  background-color: magenta;

  .ear-phone {
    height: 30px;
    width: 125px;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .info {
    display: flex;
    padding-top: 30px;
    align-items: center;
  }
  .details {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  .avatar {
    height: 25px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-right: 8px;
  }

  .name {
    font-size: small;
    font-weight: 400;
    margin-bottom: 0px;
    color: #fff;
  }
  small {
    color: hsl(276, 100%, 81%);
    margin-top: 0px;
    font-size: 10px;
  }
`;
const Container = styled.div`
  background-color: hsl(270, 20%, 96%);
  overflow: hidden;
  max-width: 230px;
  height: 420px;

  padding: 0px 10px;

  .left-message {
    font-size: 8px;
    padding: 8px;
    margin: 10px 0px;
    border-radius: 10px 10px 10px 3px;
    width: 60%;
    background-color: hsl(276, 100%, 95%);
    color: hsl(276, 55%, 52%);
  }
  .right-message {
    background-color: #fff;
    border-radius: 10px 10px 3px 10px;
    font-weight: 400;
    padding: 8px;
    color: hsl(270, 7%, 64%);
    font-size: 8px;
    width: 60%;
    margin: 10px 0px 10px auto;
  }
  .short {
    text-align: right;
    width: 47%;
  }
  .left-message-bg {
    display: flex;
    align-items: center;
    font-size: 8px;
    margin: 10px 0px;
    border-radius: 10px 10px 10px 3px;
    color: #fff;
    background-color: hsl(276, 55%, 52%);
    width: 80%;
    padding: 10px 15px 10px 10px;
  }
  .left-message-bg p:first-of-type {
    font-weight: 400;
    margin-left: 5px;
  }
  .left-message-bg p:last-of-type {
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: auto;
  }
  .radio {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: .1px solid hsl(289, 100%, 72%);
  }
  .text-input {
    width: 100%;
    font-size: 10px;
    border-radius: 25px;
    padding: 10px 15px;
    border: 0;
  }
  .text-input::placeholder {
    color: hsl(206, 6%, 79%);
  }

  form {
    position: relative;
  }
  button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0%, -50%);
    border: none;
    border-radius: 50%;
    background-color: hsl(271, 36%, 24%);
    padding: 7px;
  }
  .img-container {
    display: flex;
    justify-content: space-between;
    width: 67%;
    margin-left: auto;
  }
  img {
    height: 40px;
    border-radius: 8px;
    margin: 0px 4px;
  }
`;
function Phone() {
  return (
    <Wrapper>
      <Heading>
        <div className="ear-phone"></div>
        <div className="info">
          <MdOutlineArrowBackIos style={{ color: "#fff" }} />
          <div className="details">
            <img src="/images/avatar.jpg" alt="avatar" className="avatar" />
            <div className="name">
              <p className="name">Samuel Green</p>
              <small>Available to Walk</small>
            </div>
          </div>
          <GrMoreVertical style={{ color: "#fff" }} />
        </div>
      </Heading>
      <Container>
        <div className="left-message">
          <p>That sounds great. I’d be happy with that. </p>
        </div>
        <div className="left-message">
          <p>Could you send over some pictures of your dog, please? </p>
        </div>
        <div className="img-container">
          <img src="/images/dog-image-1.jpg" alt="dog-1" />
          <img src="/images/dog-image-2.jpg" alt="dog-2" />
          <img src="/images/dog-image-3.jpg" alt="dog-3" />
        </div>
        <div className="right-message">
          <p>Here are a few pictures. She’s a happy girl!</p>
        </div>
        <div className="right-message short">
          <p> Can you make it?</p>
        </div>
        <div className="left-message">
          <p>
            She looks so happy! The time we discussed works. How long shall I
            take her out for?
          </p>
        </div>
        <div className="left-message-bg">
          <div className="radio"></div>
          <p>30 minutes walk</p>
          <p>$29</p>
        </div>
        <div className="left-message-bg">
          <div className="radio"></div>

          <p>1 hour walk</p>
          <p>$49</p>
        </div>
        <form>
          <input
            className="text-input"
            type="text"
            placeholder="Type a message..."
          />
          <button>
            <IoIosArrowForward style={{ color: "#fff" }} />
          </button>
        </form>
      </Container>
    </Wrapper>
  );
}

export default Phone;
