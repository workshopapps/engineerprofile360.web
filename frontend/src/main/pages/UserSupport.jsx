import React from "react";
import { Link } from "react-router-dom";
import Flex from "../../ui/components/layout/Flex";
import demo from "../../assets/images/demo.svg";
import privacy from "../../assets/images/privacy.svg";
import terms from "../../assets/images/terms.svg";
import faq from "../../assets/images/faq.svg";
import icon from "../../assets/icons/search.svg";
import Grid, { GridItem } from "../../ui/components/layout/Grid";
import { Container } from "../../styles/reusableElements.styled";
import styled from "styled-components";

const Card = () => {
  return (
    <Grid span={12}>
      <GridItem span={4} md={6} sm={12}>
        <Link to="/demo">
          <CardContainer>
            <Flex ai="center" jc="center" stack spacing={16}>
              <img src={demo} />
              <CardTitle>Demo</CardTitle>
              <CardDesc>
                Watch a Tutorial video explaining how engineer 360 works
              </CardDesc>
            </Flex>
          </CardContainer>
        </Link>
      </GridItem>
      <GridItem span={4} md={6} sm={12}>
        <Link to="/privacy-policy">
          <CardContainer>
            <Flex ai="center" jc="center" stack spacing={16}>
              <img src={privacy} />
              <CardTitle>Privacy Policies</CardTitle>
              <CardDesc>Privacy,Legal Information, Service agreements</CardDesc>
            </Flex>
          </CardContainer>
        </Link>
      </GridItem>
      <GridItem span={4} md={6} sm={12}>
        <Link to="/terms">
          <CardContainer>
            <Flex ai="center" jc="center" stack spacing={16}>
              <img src={terms} />
              <CardTitle>Terms of Services</CardTitle>
              <CardDesc>
                Get information relating to using Engineer 360 as a Company
                Administrator, User or third party
              </CardDesc>
            </Flex>
          </CardContainer>
        </Link>
      </GridItem>
      <GridItem span={2} md={0} sm={0} />
      <GridItem span={4} md={6} sm={12}>
        <CardContainer>
          <Flex ai="center" jc="center" stack spacing={16}>
            <img src={faq} />
            <CardTitle>FAQ’s</CardTitle>
            <CardDesc>
              Subscription plans, Survey templates, Setting up my profile and
              much more.
            </CardDesc>
          </Flex>
        </CardContainer>
      </GridItem>
      <GridItem span={4} md={6} sm={12}>
        <CardContainer>
          <Flex ai="center" jc="center" stack spacing={16}>
            <img src={faq} />
            <CardTitle>FAQ’s</CardTitle>
            <CardDesc>
              Subscription plans, Survey templates, Setting up my profile and
              much more.
            </CardDesc>
          </Flex>
        </CardContainer>
      </GridItem>
      <GridItem span={2} md={0} sm={0} />
    </Grid>
  );
};

const SearchContainer = () => {
  return (
    <SearchArea>
      <Flex
        jc="center"
        ai="center"
        style={{ height: "100%" }}
        stack
        spacing={30}
      >
        <Heading>How Can We Help You?</Heading>

        <SearchBox>
          <SearchIcon src={icon} alt="" />
          <input
            style={{
              width: "100%",
              height: "56px",
              background: "#F0F0F0",
              border: "none",
              borderRadius: "4px",
              paddingLeft: "52px",
            }}
            placeholder="Find terms of service, privacy policies and more..."
          />
          <SearchBtn
            style={{
              padding: "6px 29px",
              borderRadius: "4px",
              border: "none",
              background: "#2667FF",
              color: "white",
            }}
          >
            Search
          </SearchBtn>
        </SearchBox>
      </Flex>
    </SearchArea>
  );
};

const UserSupport = () => {
  return (
    <div>
      <SearchContainer />
      <Container style={{ background: "#FBFBFB" }}>
        <Card />
      </Container>
    </div>
  );
};

export default UserSupport;

const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  background: #ffffff;
  border-radius: 4px;
  height: 400px;
`;

const SearchArea = styled.div`
  height: 100%;
  padding: 12rem 0;
  background: rgba(38, 103, 255, 0.3);
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 4rem 0;
  }
`;

const CardTitle = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const CardDesc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
`;

const Heading = styled.p`
  font-weight: 600;
  font-size: 42px;
  line-height: 52px;
  color: #ffffff;
  text-align: center;
`;

const SearchBox = styled.div`
  display: flex;
  min-width: 50%;
  margin-left: auto;
  margin-right: auto;
  background: #f0f0f0;
  border-radius: 5px;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 80%;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 20px;
`;

const SearchBtn = styled.button`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;
