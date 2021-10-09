import React from "react";
import styled from "styled-components";

function Section3() {
  return (
    <Container>
      <div className="content">
        <div className="content_box">
          <h1>Lorem Ipsum is simply</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, diam nonumy
            eirmod tempor invidunt ut labore et dolore.
          </p>
          <p>
            Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum.
          </p>
        </div>
        <div className="content_box">
          <img src="/assets/Group 517.png" alt="" />
          <img src="/assets/Group 4067.png" alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 50px 100px;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  .content {
    background-color: #f8f8f8;
    padding: 70px;
    display: grid;
    grid-template-columns: 5fr 4fr;
    @media (min-width: 1441px) {
      padding: 100px;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 50px;
    }
    @media (max-width: 548px) {
      padding: 20px;
    }
    &_box {
      width: 100%;
      &:last-child {
        display: flex;
        flex-direction: column nowrap;
        gap: 20px;
        img {
          width: 48%;
        }
        p {
          font-size: 21px;
        }
      }
    }
    h1 {
      font-size: 48px;
      font-weight: 900;
      color: #092772;
    }
  }
`;

export default Section3;
