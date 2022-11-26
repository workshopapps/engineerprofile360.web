import React from "react";
import styled from "styled-components";

import { Title, Container, Button } from "../../../styles/reusableElements.styled";
import blog1 from "./assets/images/blog-img1.svg";
import blog2 from "./assets/images/blog-img2.svg";
import arrow from "../../../assets/icons/arrow.svg";

const posts = [
  {
    image: blog1,
    title: "6 High-Demand Engineering Skills in 2023",
    desc: `Engineers bridge the gap between scientific discoveries and
        commercial applications that meet societal and consumer needs. As
        a vast industry with numerous aspects and specialisations, many
        transferable and universal skills are useful across the entire
        spectrum of engineering. There are so many misconceptions about
        engineers, the good, the bad, and the ugly.`,
  },
  {
    image: blog2,
    title: "How Companies Get Better Talents",
    desc: `Some popular myths about engineers are that they're all math geeks, they have poor communication skills, they're all men, and they work with machines and not people, amongst others. Unbelievable, right?
    But thanks to evaluation tool, engineering teams can be tested to assess their abilities and can perform at the top of their game using results assessments.`,
  },
];

const HomeBlog = () => {
  return (
    <HomeBlogContainer>
      <HomeBlogTitle
        as="h3"
        $weight="600"
        $size="48px"
        $color="#323130"
        $lHeight="50px"
      >
        Read Our <br />
        Blog.
      </HomeBlogTitle>
      <BlogPosts>
        {posts.map((post, index) => (
            <Post key={index} marginTop={index === 1 ? true : false}>
            <PostImage>
              <img src={post.image} alt="" />
            </PostImage>
            <PostText>
              <Title
                as="h5"
                $weight="600"
                $size="24px"
                $color="#323130"
                $lHeight="50px"
              >
                {post.title}
              </Title>
              <p>
                {post.desc}
              </p>
              <Button $variant="disabled" $color="#141AE9">Read More <img src={arrow} alt="" /></Button>
            </PostText>
          </Post>
        ))}
      </BlogPosts>
    </HomeBlogContainer>
  );
};

export default HomeBlog;

const HomeBlogContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const HomeBlogTitle = styled(Title)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 32px;
  }
`;

const BlogPosts = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};
  margin: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} { 
    flex-direction: column;
    justify-content: center;
  }
`;
const Post = styled.div`
  flex: 0 0 50%;
  max-width: calc(588px - ${({ theme }) => theme.spacing(5)});
  border: 1px solid #edebe9;
  border-radius: ${({ theme }) => theme.spacing(2.2)};
  padding: ${({ theme }) => theme.spacing(2.5)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${(props) => props.marginTop === true ? "-120px" : "0"};


  ${({ theme }) => theme.breakpoints.down("sm")} { 
    flex: initial;
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} { 
    flex-direction: column;
    justify-content: center;
  }
`;
const PostImage = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;
const PostText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  p {
    color: #605e5c;
    line-height: 32px;
  }

  button {
    align-self: flex-end;
  }
`;
