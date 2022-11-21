import React from "react";
import styled from "styled-components";

import { Title } from "../../../styles/reusableElements.styled";

const FeaturedArticle = () => {
  return (
    <FeaturedArticleContainer>
      <Title
        as={"h2"}
        $weight="400"
        $size="32px"
        $lHeight="40px"
        $color="#605E5C"
      >
        Featured articles
      </Title>
      <ArticleLinkContainer>
        <LinkList>
          <a href="#">What is an assessement</a>
          <a href="#">What is an assessement</a>
          <a href="#">What is an assessement</a>
        </LinkList>
        <LinkList>
          <a href="#">How to prepare for an assessement</a>
          <a href="#">How to prepare for an assessement</a>
          <a href="#">How to prepare for an assessement</a>
        </LinkList>
        <LinkList>
          <a href="#">Change your virtual background image</a>
          <a href="#">Change your virtual background image</a>
          <a href="#">Change your virtual background image</a>
        </LinkList>
        <LinkList>
          <a href="#">How to prepare for an assessement</a>
          <a href="#">How to prepare for an assessement</a>
          <a href="#">How to prepare for an assessement</a>
        </LinkList>
      </ArticleLinkContainer>
    </FeaturedArticleContainer>
  );
};

export default FeaturedArticle;

const FeaturedArticleContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 84px;
  padding: 0 40px;

  @media (max-width: 387px) {
    padding: 0 14px;
  }
`;

const ArticleLinkContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;

  @media (max-width: 630px) {
    gap: 28px;
  }

  @media (max-width: 566px) {
    gap: 16px;
  }

  @media (max-width: 471px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    align-items: start;
    justify-items: start;
  }
`;

const LinkList = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  /* background: blue; */

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #328cc1;
  }

  @media (max-width: 1237px) {
    gap: 10px;
    flex-wrap: wrap;

    a {
      font-size: 12px;
    }
  }

  @media (max-width: 566px) {
    a {
      font-size: 10px;
    }
  }

  @media (max-width: 471px) {
    gap: 10px;
    a {
      font-size: 16px;
    }
  }

  @media (max-width: 387px) {
    gap: 5px;
    a {
      font-size: 14px;
    }
  }
`;
