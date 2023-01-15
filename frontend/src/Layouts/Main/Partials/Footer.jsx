import React from "react";
import styled from "styled-components";

import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";

const Footer = () => {
  return (
    <FooterTag>
      <FooterContainer>
        <SkriptContact>
          <Logo size="lg" />
          <Newsletter>
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <SubscribeButton $variant="outlined">Subscribe</SubscribeButton>
            </form>
            <span>
              By subscribing you agree to with our{" "}
              <span style={{ textDecoration: "underline" }}>
                Privacy Policy
              </span>{" "}
              and provide consent to receive updates from our company.
            </span>
          </Newsletter>
        </SkriptContact>

        <Resources>
          <ListTitle as="h6">Resources</ListTitle>
          <List>
            <Link to="help-center">
              <li>Help Centre</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <li>Customers</li>
          </List>
        </Resources>

        <About>
          <ListTitle as="h6">About</ListTitle>
          <List>
            <Link to="/about-us">
              <li>About us</li>
            </Link>
            <Link to="/contact">
              <li>Contact us</li>
            </Link>
            <li>Careers</li>
          </List>
        </About>

        <Follow>
          <ListTitle as="h6">Follow Us</ListTitle>
          <List>
            <li>
              <img src={facebook} alt="" /> Facebook
            </li>
            <li>
              <img src={instagram} alt="" /> Instagram
            </li>

            <a
              href="https://twitter.com/Eval_360?t=z-SXo1JxzC0ZSxz9k_EMNA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={twitter} alt="" /> Twitter
              </li>
            </a>

            <a
              href="https://www.linkedin.com/company/eval360/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={linkedin} alt="" /> LinkedIn
              </li>
            </a>
          </List>
        </Follow>

        <Copyright>
          <span>
            &copy; {new Date().getFullYear()} Skript. All rights reserved.
          </span>
          <ul>
            <Link to="/privacy-policy">
              <li>Privacy policy</li>
            </Link>
            <Link to="/terms">
              <li>Terms of service</li>
            </Link>
            <li>Cookie settings</li>
          </ul>
        </Copyright>
      </FooterContainer>
    </FooterTag>
  );
};

export default Footer;

const FooterTag = styled.footer`
  background: ${({ theme }) => theme.palette.grey.white};
`;

const FooterContainer = styled(Container)`
  height: 96px;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: ${({ theme }) => theme.spacing(5)};
  row-gap: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing(6)}
      ${({ theme }) => theme.spacing(2)};
  }
`;

const SkriptContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  box-sizing: initial;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-column: 1 / 5;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    grid-column: 1 / 5;
  }

  img {
    width: 175px;
  }
`;

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  p {
    color: #393a32;
  }

  span {
    color: #393a32;
  }

  form {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};

    input {
      border: 1px solid #8a8886;
      padding: ${({ theme }) => theme.spacing(1.2)};
      max-width: 345px;
      width: 70%;
      border-radius: ${({ theme }) => theme.spacing(1)};
      background: #f2f3f6;
    }
  }
`;

const SubscribeButton = styled(Button)`
  font-size: 18px;
  color: #106ebe;
  width: 30%;
  min-width: 139px;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    min-width: 105px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(3.5)};
`;

const ListTitle = styled(Title)`
  font-size: 16px;
  font-weight: 600;
  color: #393a32;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: 0;
  li {
    font-size: 14px;
    display: flex;
    padding: 0;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  a {
    color: #393a32;
  }
`;

const Copyright = styled.div`
  grid-column: 1 / 5;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(6)} 0;
  border-top: 2px solid #171ee0;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  span {
    font-size: 14px;
  }

  ul {
    margin-left: auto;
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};

    li {
      text-decoration: underline;
      font-size: 14px;
    }
  }
`;

const About = styled(ListContainer)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-column: 2 / 3;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    grid-column: 2 / 4;
  }
`;
const Resources = styled(ListContainer)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-column: 1 / 2;
  }
  ${({ theme }) => theme.breakpoints.down("xs")} {
    grid-column: 1 / 2;
  }
`;
const Follow = styled(ListContainer)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-column: 3 / 4;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    grid-column: 1 / 4;
  }
`;
