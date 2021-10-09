import React from "react";
import styled from "styled-components";
import { Button2 } from "./button";

function Section2() {
  return (
    <Container>
      <img src="/assets/cross_bg.png" alt="" className="fixed_cross" />
      <h1 className="title">Lorem Ipsum is simply dummy text</h1>
      <p className="subTitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="content">
        <div className="content_box">
          <img src="/assets/np_small-business_1208703_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
        <div className="content_box">
          <img src="/assets/np_software_3131672_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
        <div className="content_box">
          <img src="/assets/np_legal-team_1584321_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
        <div className="content_box">
          <img src="/assets/np_small-business_1208703_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
        <div className="content_box">
          <img src="/assets//np_software_3131672_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
        <div className="content_box">
          <img src="/assets/np_legal-team_1584321_000000.png" alt="" />
          <p className="title">Lorem Ipsum is simply dummy text of</p>
          <Button2 />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  padding: 100px;
  margin: 50px auto auto;
  @media (min-height: 1440px) {
    padding: 100px;
  }
  padding-bottom: 50px;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  img.fixed_cross {
    position: absolute;
    top: 0;
    left: -80px;
    z-index: -1;
    height: 300px;
  }
  h1.title {
    color: #092772;
    font-size: 48px;
    font-size: 48px;
    text-align: center;
    line-height: 62px;
    margin: 0;
    font-weight: 800;
  }
  p.subTitle {
    font-size: 21px;
    text-align: center;
    margin: 0;
    font-weight: 600;
  }
  .content {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
    }
    &_box {
      display: grid;
      align-items: center;
      justify-content: center;
      border: 5px solid #f8f8f8;
      aspect-ratio: 5/4;
      background-color: #fff;
      padding: 50px;
      & > * {
        align-self: center;
        justify-self: center;
      }
      p.title {
        font-size: 24px;
        color: #092772;
        font-weight: 900;
        text-align: center;
        @media (min-height: 1440px) {
          font-size: 36px;
        }
      }
    }
  }
`;

export default Section2;
