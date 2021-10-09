import React from "react";
import styled from "styled-components";
import { Button1 } from "./button";

function Section1() {
  return (
    <Container>
      <div className="content">
        <p className="description">What is Lorem Ipsum?</p>
        <h1 className="description">
          Lorem Ipsum is simply <br />
          dummy text of the <br />
          printing and
        </h1>
        <Button1 />
      </div>
      <div className="content">
        <img src="/assets/Section_1_vector.png" alt="" />
      </div>
    </Container>
  );
}
const Container = styled.section`
  padding: 50px 100px;
  background-image: url("/assets/wppool_shadow.png");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 180%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-height: 1440px) {
    padding: 100px;
  }
  @media (max-width: 768px) {
    background-size: 200%;
    padding: 50px;
  }
  @media (max-width: 548px) {
    grid-template-columns: 1fr;
    padding: 20px;
    background-size: 400%;
  }
  .content {
    /* aspect-ratio: 1/1; */
    img {
      width: 100%;
    }
    p.description {
      font-size: 30px;
      color: #2b8fe5;
      font-weight: 700;
      @media (max-width: 768px) {
        font-size: 25px;
      }
      @media (max-width: 548px) {
        font-size: 20px;
      }
    }
    h1.description {
      font-size: 50px;
      color: #092772;
      font-weight: 800;
      @media (min-width: 1440px) {
        font-size: 72px;
      }
      @media (max-width: 768px) {
        font-size: 40px;
      }
      @media (max-width: 548px) {
        font-size: 35px;
      }
    }
  }
`;

export default Section1;
