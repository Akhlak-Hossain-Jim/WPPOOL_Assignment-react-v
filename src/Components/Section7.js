import React from "react";
import styled from "styled-components";
import { Button1 } from "./button";

function Section7() {
  return (
    <Container>
      <h1 className="title">Let’s Have a Conversation.</h1>
      <img src="/assets/Group 4066.png" alt="" />
      <p>
        We are currently taking new individual and small business clients. If
        you’re interested in chatting with one of your partners, we would love
        to start a conversation.
      </p>
      <Button1 text="Contact Us" />
    </Container>
  );
}

const Container = styled.section`
  padding: 100px;
  display: grid;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  & > * {
    margin: auto;
  }
  h1 {
    font-size: 48px;
    text-align: center;
    color: #092772;
    margin: 10px auto;
  }
  img {
    max-width: 228px;
    margin: 20px auto;
  }
  p {
    font-size: 21px;
    text-align: center;
    max-width: 850px;
    margin: auto;
  }
`;

export default Section7;
