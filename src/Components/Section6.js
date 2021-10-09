import React from "react";
import styled from "styled-components";

function Section6() {
  return (
    <Container>
      <div className="arrow left">
        <img src="/assets/np_arrow-left_888650_000000.png" alt="" />
      </div>
      <div className="content">
        <div className="text">
          <h1>Latest from the Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <a href="a">Visit The Blog</a>
        </div>
        <img src="/assets/Rectangle 4020.png" alt="" />
      </div>
      <div className="arrow right">
        <img src="/assets/np_arrow-left_888650_000000.png" alt="" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 100px;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 20px 0px;
  }
  .content {
    display: grid;
    grid-template-columns: 4fr 8fr;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .text {
      display: flex;
      flex-direction: column;
      h1 {
        color: #092772;
        font-size: 48px;
        font-weight: 900;
        margin: 0;
        @media (max-width: 548px) {
          font-size: 30px;
        }
      }
      p {
        color: #000;
        font-size: 21px;
        margin: 0;
        @media (max-width: 548px) {
          font-size: 18px;
        }
      }
      a {
        width: max-content;
        text-transform: uppercase;
        color: #092772;
        font-weight: 800;
        padding: 12px 26px;
        margin-top: 10px;
        border: solid 4px #2b8fe5;
        text-decoration: none;
      }
    }
    img {
      margin: auto;
      width: 100%;
    }
  }
  .arrow {
    height: 96%;
    padding: 20px;
    border: 3px solid #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    &.right {
      transform: rotate(180deg);
    }
    @media (max-width: 548px) {
      padding: 10px;
      height: max-content;
      img {
        width: 20px;
      }
    }
  }
`;

export default Section6;
