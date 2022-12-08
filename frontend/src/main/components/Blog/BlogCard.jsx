import styled from "styled-components";
import React from "react";
import { Title } from "../../../styles/reusableElements.styled";

const BlogCard = ({
  featuredImage,
  category,
  timestamp,
  title,
  summary,
  avatar,
  name,
  date,
}) => {
  return (
    <BlogCardContainer>
      <FeaturedImage src={featuredImage} alt="featured-image" />
      <BlogInnerContainer>
        <InfoOne>
          <p>{category}</p>
          <TimeStamp>
            <StatusDot />
            <p>{timestamp}</p>
          </TimeStamp>
        </InfoOne>
        <Title
          as="h1"
          $size="18px"
          $lHeight="24px"
          color="#323130"
          $weight="400"
        >
          {title}
        </Title>
        <Summary>{summary}</Summary>
        <InfoTwo>
          <img src={avatar} alt="avatar" />
          <div>
            <Title as="h5" $size="14px" $weight="400" $lHeight="20px">
              {name}
            </Title>
            <p>{date}</p>
          </div>
        </InfoTwo>
      </BlogInnerContainer>
    </BlogCardContainer>
  );
};

export default BlogCard;

const BlogCardContainer = styled.div`
  border: 1px solid #d1d1d1;
<<<<<<< HEAD
=======
  min-height: 480px;
  max-height: 700px;
  height: 100%;
>>>>>>> e4911459a466f60d8b9e0d77604c955b404b8aa1
`;

const FeaturedImage = styled.img`
  width: 100%;
`;

const BlogInnerContainer = styled.div`
  padding: 0px 16px;

  h1 {
    margin-bottom: 8px;
  }
`;

const Summary = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #605e5c;
  margin-bottom: 50px;
`;
const InfoOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 24px;

  p {
    font-size: 12px;
    line-height: 16px;
  }
`;

const InfoTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 18px;

  p {
    font-size: 12px;
    line-height: 16px;
  }
`;

const TimeStamp = styled.div`
  display: flex;
  gap: 8px;
<<<<<<< HEAD
  align-items: center;
=======
  justify-content: center;
  align-items: baseline;
  text-align: center;
>>>>>>> e4911459a466f60d8b9e0d77604c955b404b8aa1
`;
const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: #328cc1;
  border-radius: 8px;
`;
