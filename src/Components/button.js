import React from "react";
import styled from "styled-components";

export function Button1({ link = "ww", text = "Learn About" }) {
  return (
    <Container>
      <a href={link}>{text}</a>
    </Container>
  );
}
const Container = styled.div`
  border: solid 4px #2b8fe5;
  padding: 20px 30px;
  width: max-content;
  @media (min-width: 1441px) {
    padding: 30px 36px 23px;
    border: solid 5px #2b8fe5;
  }
  a {
    color: #092772;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    @media (min-width: 1441px) {
      font-size: 24px;
    }
  }
`;

export function Button2({ link = "ww", text = "Learn About" }) {
  return (
    <Container2>
      <a href={link}>{text}</a>
    </Container2>
  );
}
const Container2 = styled.div`
  border: solid 4px #2b8fe5;
  padding: 18px 25px;
  width: max-content;
  @media (min-width: 1441px) {
    padding: 26px 32px 19px;
    border: solid 5px #2b8fe5;
  }
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
  a {
    color: #092772;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    @media (min-width: 1441px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
