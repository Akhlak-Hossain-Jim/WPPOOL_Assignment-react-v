import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <img src="/assets/logo.png" alt="" className="logo" />
      <div className="content">
        <div className="con_link">
          <img src="/assets/np_phone_2173681_000000.png" alt="phone logo" />
          <span>Call:</span>
          <a href="tel:+(123) 456-7890"> (123) 456-7890</a>
        </div>
        <div className="con_link">
          <img src="/assets/np_envelope_1982262_000000.png" alt="phone logo" />
          <span>Email:</span>
          <a href="mailto:info@wppool.com"> info@wppool.com</a>
        </div>
      </div>
      <div className="content_link">
        <a href="a" className="link">
          Home
        </a>
        <a href="a" className="link">
          About Us
        </a>
        <a href="a" className="link">
          Meet the Team
        </a>
        <a href="a" className="link">
          Blog
        </a>
        <a href="a" className="link">
          Contact
        </a>
      </div>
      <div className="credit">
        <p>&copy; Copyright 2020. WPPOOL, LLC. All rights reserved.</p>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: #092772;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 50px;
  img {
    margin: auto;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 25px 0;
    .con_link {
      display: flex;
      gap: 3px;
      align-items: center !important;
      justify-content: center;
      img {
        height: 22px;
        @media (max-width: 1440px) {
          height: 12px;
        }
      }
      span {
        color: #fff;
        font-size: 21px;
        @media (max-width: 1440px) {
          font-size: 12px;
        }
      }
      a {
        color: #fff;
        font-size: 21px;
        text-decoration: none;
        @media (max-width: 1440px) {
          font-size: 12px;
        }
      }
    }
  }
  .content_link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    justify-content: center;
    .link {
      text-transform: uppercase;
      font-weight: 900;
      color: #fff;
      text-decoration: none;
    }
  }
  .credit {
    padding: 50px 0 20px;
    text-align: center;
    color: #818181;
    font-size: 14px;
    font-weight: 900;
  }
`;

export default Footer;
