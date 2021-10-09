import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [toggler, setToggler] = useState(false);
  return (
    <Container>
      <a href="/" className="logo">
        <img src="/assets/brand-logo.png" alt="WPPOOL" />
      </a>
      <Ham onClick={() => setToggler(!toggler)} tabIndex="0">
        <div className={toggler ? "hamInner active" : "hamInner"}></div>
      </Ham>
      <div className={`header_links ${toggler ? `active` : null}`}>
        <div className="header_links_container">
          <div className="con_link">
            <img src="/assets/phone_s_dark.png" alt="phone logo" />
            <span>Call:</span>
            <a href="tel:+(123) 456-7890"> (123) 456-7890</a>
          </div>
          <div className="con_link">
            <img src="/assets/email_s_dark.png" alt="phone logo" />
            <span>Email:</span>
            <a href="mailto:info@wppool.com"> info@wppool.com</a>
          </div>
          <div className="img_link_container">
            <a href="facebook.com" className="img_link">
              <img src="/assets/fa-s.png" alt="facebook logo" />
            </a>
            <a href="facebook.com" className="img_link">
              <img src="/assets/in_s.png" alt="linkedin Logo" />
            </a>
          </div>
        </div>
        <div className="header_links_container">
          <a href="/" className="link">
            Home
          </a>
          <a href="/" className="link">
            About Us
          </a>
          <a href="/" className="link">
            Meet The Team
          </a>
          <a href="/" className="link">
            Blog
          </a>
          <a href="/" className="link">
            Contact
          </a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 57px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 50px;
  }
  @media (max-width: 548px) {
    padding: 20px;
  }
  .logo {
    img {
      width: auto;
      height: 69.95px;
      @media (max-width: 1440px) {
        height: 40px;
      }
    }
  }
  .header_links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    @media (max-width: 700px) {
      display: none;
      &.active {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 60vw;
        background-color: aliceblue;
        .header_links_container {
          display: grid;
          align-items: center;
          justify-content: center;
          text-align: center !important;
          .img_link_container {
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    &_container {
      display: flex;
      gap: 20px;
      &:first-child {
        align-items: center;
        justify-content: flex-end;
      }
      .link {
        color: #092772;
        text-transform: uppercase;
        text-decoration: none;
        @media (min-width: 1441px) {
          font-size: 21px;
        }
        font-weight: 900;
      }
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
          color: #5f6672;
          font-size: 21px;
          @media (max-width: 1440px) {
            font-size: 12px;
          }
        }
        a {
          color: #2b8fe5;
          font-size: 21px;
          text-decoration: none;
          @media (max-width: 1440px) {
            font-size: 12px;
          }
        }
      }
      .img_link_container {
        display: flex;
        gap: 5px;
      }
      .img_link {
        img {
          height: 28px;
          @media (max-width: 1440px) {
            height: 16px;
          }
        }
      }
    }
  }
`;
const Ham = styled.div`
  @media (max-width: 700px) {
    margin: auto 20px;
    position: relative !important;
    height: 30px;
    width: 30px;
    @media (min-width: 769px) {
      display: none;
    }
    .hamInner {
      z-index: 12;
      position: absolute;
      top: 40%;
      right: 0px;
      width: 25px;
      height: 2px;
      border-radius: 4px;
      background-color: #0080ca;
      transform: rotate(0deg);
      &::after {
        bottom: -10px;
        transform: rotate(0deg);
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        width: 25px;
        height: 2px;
        border-radius: 4px;
        background-color: #0080ca;
      }
      &::before {
        top: -10px;
        opacity: 1;
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        width: 25px;
        height: 2px;
        border-radius: 4px;
        background-color: #0080ca;
      }
      &.active {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 0;
        height: 0;
        border-radius: 4px;
        background-color: #0080ca;
        transform: rotate(0deg);
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 12px;
          bottom: 0;
          right: 0;
          left: 2.5px;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: #0080ca;
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          transform: rotate(45deg);
        }
        &::before {
          opacity: 1;
          content: "";
          display: block;
          position: absolute;
          top: 12px;
          bottom: 0;
          right: 0;
          left: 2.5px;
          width: 30px;
          height: 2px;
          border-radius: 4px;
          background-color: #0080ca;
          transition-timing-function: ease;
          transition-duration: 0.15s;
          transition-property: transform;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

export default Header;
