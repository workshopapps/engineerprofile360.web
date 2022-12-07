import BlogCard from "../components/Blog/BlogCard";
import frame1 from "../components/Blog/assets/dp1.png";
import frame2 from "../components/Blog/assets/frame2.png";
import frame3 from "../components/Blog/assets/frame3.png";
import frame4 from "../components/Blog/assets/frame4.png";
import frame5 from "../components/Blog/assets/frame5.png";
import frame6 from "../components/Blog/assets/frame6.png";
import frame7 from "../components/Blog/assets/frame7.png";
import frame8 from "../components/Blog/assets/frame8.png";
import frame9 from "../components/Blog/assets/frame9.png";
import dp from "../components/Blog/assets/dp.png";
import dp2 from "../components/Blog/assets/dp2.png";
import dp3 from "../components/Blog/assets/dp3.png";
import styled from "styled-components";

import React from "react";
import { Button, Container, Title } from "../../styles/reusableElements.styled";
import EmailNewsLetter from "../components/Blog/EmailNewsLetter";
import { Link } from "react-router-dom";
import { Category } from "iconsax-react";

export const PostLists = [
  {
    featuredImage: frame1,
    category: "Skill Aquisation",
    timestamp: "8 mins read",
    title: "6 High-Demand skills Engineers must have in 2023",
    summary:
      "Engineers bridge the gap between scientific discoveries amd commercial applications thatEngaged  me..",
    name: "Mike Idah",
    date: "8, June, 2022",
    avatar: dp,
  },

  {
    featuredImage: frame2,
    category: "Recruitment & Sourcing",
    timestamp: "10 mins read",
    title: "Strategic HR Management and Hiring Process",
    summary:
      "When people think of Human Resource, they usually think of duties like payroll, recruitment and outsourci...",
    name: "Flem Rogers",
    date: "11, August, 2021",
    avatar: dp2,
  },

  {
    featuredImage: frame3,
    category: "Emplpoyment Engagement",
    timestamp: "5 mins read",
    title: "Benefits of Adopting Digital HR Onboarding Software",
    summary:
      "Engineers bridge the gap between scientific discoveries amd commercial applications thatEngaged  me..",
    name: "Joseph Jacob",
    date: "11, August, 2021",
    avatar: dp3,
  },

  {
    featuredImage: frame4,
    category: "Recruitment & Sourcing",
    timestamp: "10 mins read",
    title: "Improve Employee Engagement during Onboarding",
    summary:
      "Engaged employees make a difference between a companuy and that is just getting along and the on...",
    name: "Flem Rogers",
    date: "12, July, 2022",
    avatar: dp,
  },

  {
    featuredImage: frame5,
    category: "Emplpoyment Engagement",
    timestamp: "5 mins read",
    title: "Tips for Niche Talent Aquisition",
    summary:
      "With niche recruitment, you cover one industry or a few industries. You specialize in the smaller areas...",
    name: "Joseph Jacob",
    date: "11, August, 2021",
    avatar: dp2,
  },

  {
    featuredImage: frame6,
    category: "Talent Aquisition",
    timestamp: "8 mins read",
    title: "How Companies get better with Efficient Talent Evaluation",
    summary:
      "With the rise of more engineering talents, it is important to constantly assess talents for the evolut...",
    name: "Mike Idah",
    date: "8, June, 2022",
    avatar: dp3,
  },

  {
    featuredImage: frame7,
    category: "Talent Evaluation",
    timestamp: "10 mins read",
    title: "5 of the Best tools for Evalutating Engineers",
    summary:
      "With the dire need for skilled professionals in a fast-paced working environment, the need for human...",
    name: "Flem Rogers",
    date: "12, July, 2021",
    avatar: dp,
  },

  {
    featuredImage: frame8,
    category: "Emplpoyment Engagement",
    timestamp: "5 mins read",
    title: "Obstacles to manage employee performance",
    summary:
      "Skrill stands out amongst the best  evaluator tools with its unique features and scalable assessement...",
    name: "Joseph Jacob",
    date: "11, August, 2021",
    avatar: dp2,
  },

  {
    featuredImage: frame9,
    category: "Employee Experience",
    timestamp: "8 mins read",
    title: "Impact of Organizational Culture on Hiring",
    summary:
      "When you think about your ideal job, you probably aren’t just thinking about your favorite role in a w ...",
    name: "Ken Okonkwo",
    date: "8, June, 2020",
    avatar: dp3,
  },
];

const Blog = () => {
  const [mobileShow, setMobileShow] = React.useState(false);
  const NavLinks = [
    "All",
    "Recruitment & Sourcing",
    "Talent Management",
    "Performance Management",
    "Talents Analytics",
    "Employee Engagement",
    "Team Engagerment",
  ];

  return (
    <BlogContainer>
      <BlogNavigation>
        <BlogLinks>
          {NavLinks
            ? NavLinks.map((link, key) => <li key={key}>{link}</li>)
            : []}
        </BlogLinks>
        <BlogMobileLinksContainer>
          <Button onClick={() => setMobileShow(!mobileShow)}>
            <span>Categories </span>
            <Category size="28" color="#2667FF8C" />
          </Button>
          {mobileShow ? (
            <BlogMobileLinks>
              {NavLinks
                ? NavLinks.map((link, key) => <li key={key}>{link}</li>)
                : []}
            </BlogMobileLinks>
          ) : (
            ""
          )}
        </BlogMobileLinksContainer>
      </BlogNavigation>
      <HeaderContainer>
        <Title
          as="h1"
          $size="42px"
          $weight="600"
          $lHeight="52px"
          $color="#323130"
        >
          Explore The Many Hidden Potentials of Your Staff
        </Title>
      </HeaderContainer>
      <PostContainer>
        {PostLists
          ? PostLists.map((post, key) => (
              <Link to="/blog-story" key={key}>
                <BlogCard
                  featuredImage={post.featuredImage}
                  category={post.category}
                  timestamp={post.timestamp}
                  title={post.title}
                  summary={post.summary}
                  name={post.name}
                  date={post.date}
                  avatar={post.avatar}
                />
              </Link>
            ))
          : []}
      </PostContainer>
      <EmailNewsLetter />
    </BlogContainer>
  );
};

export default Blog;

const BlogContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
  gap: ${({ theme }) => theme.spacing(8)};
`;

const BlogNavigation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  padding-top: 28px;
`;

const BlogLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #edebe9;
  gap: 42px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }

  li {
    font-size: 16px;
    line-height: 24px;
    color: #605e5c;
    cursor: pointer;
    border-bottom: 4px solid transparent;
    padding-bottom: 5px;
  }

  li:hover {
    padding-bottom: 5px;
    border-bottom: 4px #141ae9 solid;
  }
`;

const BlogMobileLinksContainer = styled.div`
  display: none;
  justify-content: start;
  position: relative;

  button {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid black;
    color: #605e5c;
    text-align: left;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: flex;
    flex-direction: column;
  }
`;

const BlogMobileLinks = styled.ul`
  position: absolute;
  margin-top: 49px;
  padding: 20px 20px;
  background-color: #2667ff;
  color: #fff;
  width: 100%;
  top: 0;
  z-index: 20;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 64px 0px;

  h1 {
    max-width: 763px;
    width: 100%;
    text-align: center;
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 72px;
  margin-bottom: 104px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
