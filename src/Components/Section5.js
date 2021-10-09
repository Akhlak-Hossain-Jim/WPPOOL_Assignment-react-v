import React from "react";
import styled from "styled-components";

function Section5() {
  return (
    <Container>
      <div className="overflowes">
        <img src="/assets/Group 455.png" alt="" />
        <div className="text">
          <h1>Meet the Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy lorem dolor.
          </p>
          <a href="s">Meet The team</a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 100px;
  margin-top: -13%;

  @media (max-width: 768px) {
    padding: 50px;
    /* margin-top: -30%; */
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  .overflowes {
    margin: auto;
    padding: 50px;
    background-color: #2b8fe5;
    gap: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      padding: 50px;
    }
    @media (max-width: 548px) {
      padding: 20px;
    }
    /* margin-bottom: -50%; */
    img {
      max-width: 300px;

      @media (max-width: 548px) {
        width: 80%;
        margin: auto;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      h1 {
        color: #fff;
        font-size: 48px;
        font-weight: 900;
        margin: 0;
      }
      p {
        color: #fff;
        font-size: 21px;
        margin: 0;
      }
      a {
        width: max-content;
        text-transform: uppercase;
        color: #fff;
        font-weight: 800;
        padding: 12px 26px;
        margin-top: 10px;
        border: solid 4px #092772;
        text-decoration: none;
      }
    }
  }
`;

export default Section5;
