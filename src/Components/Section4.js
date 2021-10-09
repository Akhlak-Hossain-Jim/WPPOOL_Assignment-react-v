import React from "react";
import styled from "styled-components";

function Section4() {
  return (
    <Container>
      <div className="content first">
        <div className="fixed">
          <img src="/assets/Group 4068.png" alt="" />
        </div>
        <div className="text-container one">
          <h1>About Our Firm</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <a href="s">About Us</a>
        </div>
        <div className="text-container two">
          <h1>Our Mission + Values</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="content second">
        <div className="content_box">
          <img src="/assets/np_honesty_3152285_000000.png" alt="Honesty" />
          <p>Honesty</p>
        </div>
        <div className="content_box">
          <img src="/assets/np_quality_2754604_000000.png" alt="Honesty" />
          <p>Quality</p>
        </div>
        <div className="content_box">
          <img src="/assets/np_idea_3036784_000000.png" alt="Honesty" />
          <p>Knowledge</p>
        </div>
        <div className="content_box">
          <img src="/assets/np_handshake_2698026_000000.png" alt="Honesty" />
          <p>Respect</p>
        </div>
        <div className="content_box">
          <img src="/assets/np_teamwork_1671988_000000.png" alt="Honesty" />
          <p>Culture</p>
        </div>
        <div className="content_box">
          <img
            src="/assets/np_community-network_1551028_000000.png"
            alt="Honesty"
          />
          <p>Community</p>
        </div>
      </div>
      <div className="butto">
        <a href="s">MISSION + VALUES</a>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 100px;
  padding-bottom: 200px;
  background-color: #092772;
  @media (max-width: 768px) {
    padding: 50px;
    padding-bottom: 100px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  .content {
    z-index: 1;
    &.first {
      aspect-ratio: 16/10;
      position: relative;
      display: flex;
      flex-direction: column;
      .fixed {
        position: absolute;
        z-index: -1;
        right: 0px;
        top: 0px;
        width: 90%;
        @media (max-width: 548px) {
          width: 350%;
        }
        img {
          width: 100%;
        }
      }
      .text-container.one {
        max-width: 500px;
        z-index: 10 !important;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 20px;
          border-radius: 20px;
        }
        h1 {
          color: #fff;
          font-size: 48px;
          font-weight: 900;
        }
        p {
          color: #fff;
          font-size: 21px;
        }
        a {
          width: max-content;
          text-transform: uppercase;
          color: #fff;
          font-weight: 800;
          padding: 12px 26px;
          margin-top: 10px;
          border: solid 4px #2b8fe5;
        }
      }
      .text-container.two {
        bottom: -15%;
        max-width: 900px;
        margin: auto;
        margin-bottom: -4%;
        z-index: 10 !important;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: rgba(255, 255, 255, 0);
        h1 {
          color: #fff;
          font-size: 48px;
          font-weight: 900;
          margin: 0;
        }
        p {
          color: #fff;
          font-size: 21px;
        }
        a {
          width: max-content;
          text-transform: uppercase;
          color: #fff;
          font-weight: 800;
          padding: 12px 26px;
          margin-top: 10px;
          border: solid 4px #2b8fe5;
        }
      }
    }
    &.second {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      align-items: center;
      justify-content: space-around;
      margin: 140px 0 0;
      @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 548px) {
        grid-template-columns: repeat(2, 1fr);
      }
      .content_box {
        display: grid;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        & > * {
          justify-self: center;
        }
        img {
          width: 60%;
        }
        p {
          margin: 0;
          @media (min-width: 1441px) {
            font-size: 30px;
          }
          font-size: 24px;
          color: #fff;
          font-weight: 900;
        }
      }
    }
  }
  .butto {
    margin: 50px auto;
    display: flex;
    a {
      width: max-content;
      text-transform: uppercase;
      text-decoration: none;
      color: #fff;
      font-weight: 800;
      padding: 12px 26px;
      margin-top: 10px;
      border: solid 4px #2b8fe5;
      margin: auto;
    }
  }
`;

export default Section4;
