import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import avatar from "../../assets/images/Avatar.png";
import styled from "styled-components";
import { Container, Title } from "../../styles/reusableElements.styled";
import { Facebook, Instagram } from "iconsax-react";
import EmailNewsletter from "../components/Blog/EmailNewsLetter";
import { PostContainer, PostLists } from "./Blog";
import { Link } from "react-router-dom";

const BlogStory = () => {
  return (
    <>
      <BlogStoryMainContainer>
        <BlogStoryContainer>
          <BlogHero>
            <SubText>Skill Aquisition</SubText>
            <Title
              as="h1"
              $color="#EFF6FC"
              $size="42px"
              $lHeight="52px"
              $weight="600"
            >
              6 High-Demand Engineering Skills in 2023
            </Title>
            <img src={avatar} alt="avatar" />
            <Author>Micheal Kings</Author>
            <TimeStampContainer>
              <TimeStampDate>11th Nov, 2022</TimeStampDate>
              <Dot />
              <TimeStamp>10 mins read</TimeStamp>
            </TimeStampContainer>
          </BlogHero>
        </BlogStoryContainer>
      </BlogStoryMainContainer>
      <BlogStoryContainer>
        <NavigationContainer>
          <div>
            <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> /
            <Link to="/blog-story">Skill Aquisation</Link>
          </div>
          <SocialShare>
            <Facebook size="28" color="#393a32" />
            <Instagram size="28" color="#393a32" />
          </SocialShare>
        </NavigationContainer>
        <BlogContent>
          <Title
            as="h1"
            $size="32px"
            $lHeight="40px"
            $weight="600px"
            $color="#323130"
          >
            High Demand Engineering Skills{" "}
          </Title>
          <BlogContentDetails>
            <p>
              Engineers bridge the gap between scientific discoveries and
              commercial applications that meet societal and consumer needs. As
              a vast industry with numerous aspects and specialisations, many
              transferable and universal skills are useful across the entire
              spectrum of engineering
            </p>
            <p>
              There are so many misconceptions about engineers, the good, the
              bad, and the ugly.
            </p>
            <p>
              Some popular myths about engineers are that they're all math
              geeks, they have poor communication skills, they're all men, and
              they work with machines and not people, amongst others.
              Unbelievable, right?
            </p>

            <p>
              But thanks to our Engineering Team 360 skill evaluator tool,
              engineering teams can be tested to assess their abilities and can
              perform at the top of their game using the results from the
              assessments. Knowledge is power after all!
            </p>

            <p>
              We are in a fast-paced and innovative world. Here are the Top 6
              skills all engineers should have in 2023.
            </p>

            <ul>
              <li>• Technical Skills</li>
              <li>• IT Skills</li>
              <li>• Communication Skills</li>
              <li>• Problem Solving</li>
              <li>• Critical Reasoning</li>
              <li>• Leadership Skills</li>
            </ul>

            <p>
              <b>Technical Skills: </b>Technical skills are specific knowledge,
              techniques, or abilities that can be used to perform a task.
              Typically, technical skills are practical. Engineers should have
              up-to-date technical skills to advance in the engineering field..
            </p>

            <p>
              <b> IT Skills:</b> Our world today is a digital one, and the use
              of digital applications is increasing in every field, especially
              engineering. Digital technology will help engineers plan, design,
              and develop projects more adequately than ever before.
            </p>

            <p>
              <b>Communication Skills:</b> Engineers need to be able to
              communicate and listen to ensure that the project is a success and
              any issues can be resolved quickly.
            </p>

            <p>
              <b> Problem-Solving:</b> A large part of the job is for engineers
              to be able to tackle difficult situations, and then find an
              effective solution to the problem. Companies usually want to see
              that you're capable of handling challenges in your day-to-day
              work.
            </p>

            <p>
              <b>Critical Reasoning:</b> Critical thinking is the ability to
              think clearly and rationally, understanding the logical connection
              between ideas. Being critical allows you to realize where the
              value is in a piece of work and evaluate which points are crucial.
            </p>

            <p>
              <b>Leadership Skills:</b> Leadership skills are also crucial for
              anyone working in the field of engineering, even if they don't
              explicitly hold a leadership role within an organization.
            </p>

            <p>
              Find out if your engineers have these skills using our 360 skill
              evaluator! Which of these skills are paramount for you? We'll be
              waiting to read from you.
            </p>

            <BlogBottom>
              <img src={avatar} alt="avatar" />
              <Title as="h5" $weight="normal" $size="20px" $lHeight="28px">
                Micheal Kings
              </Title>
              <p>COO, Hings Contructuon Ltd </p>
              <EmailNewsletter />
            </BlogBottom>
            <BlogStoryPostMain>
              <Title
                as="h3"
                $size="32px"
                $weight="600"
                $lHeight="40px"
                $color="#605E5C"
              >
                Related Posts
              </Title>
              <PostContainer>
                {PostLists
                  ? PostLists.slice(0, 3).map((post, key) => (
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
            </BlogStoryPostMain>
          </BlogContentDetails>
        </BlogContent>
      </BlogStoryContainer>
    </>
  );
};

export default BlogStory;

const BlogStoryMainContainer = styled.div`
  min-height: 444px;
  background: rgba(38, 103, 255, 1);
`;
const BlogStoryContainer = styled(Container)``;

const BlogHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 72px;

  h1 {
    margin-bottom: 52px;
    text-align: center;
  }
`;

const SubText = styled.p`
  line-height: 28px;
  color: #eff6fc;
  margin-bottom: 24px;
`;

const Author = styled.p`
  line-height: 18px;
  line-height: 24px;
  color: #eff6fc;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const TimeStampContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const TimeStampDate = styled.p`
  line-height: 20px;
  line-height: 28px;
  color: #eff6fc;
`;

const TimeStamp = styled.p`
  line-height: 20px;
  line-height: 24px;
  color: #eff6fc;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #deecf9;
  border-radius: 8px;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 20px;
  }
`;

const SocialShare = styled.div`
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

const BlogContent = styled.div`
  margin-top: 32px;
`;

const BlogContentDetails = styled.div`
  margin-top: 24px;
  p {
    line-height: 28px;
    color: #605e5c;
    padding-bottom: 16px;
  }

  ul {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #605e5c;
    padding-bottom: 16px;
  }
`;

const BlogBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const BlogStoryPostMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 24px;
  }
`;
