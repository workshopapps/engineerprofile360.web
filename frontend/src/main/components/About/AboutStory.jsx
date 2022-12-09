import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";
import storyBg from "./assets/images/story-section.svg";

const AboutStory = () => {
  return (
    <AboutStorySection>
      <AboutStoryContainer>
        <div>
          <Title as="h2" $color="#FAF9F8" $size="42px" $weight="600">
            OUR STORY
          </Title>
          <p>Objectively Evaluating Engineers' Skill Posed Great Difficulty</p>
        </div>
        <p>
          With the rapid burst of technology in Africa and the focus on
          engineering talent, we as an organisation found it difficult to
          properly evaluate our engineers, and were often in the dark on the
          best ways to hire engineers and ensure they had the best skills for
          the role - the requisite skill - and temperament.
          <br />
          <br />
          This was our main motivation for building Eval360. A tool that will
          take away this worry from organisations, by helping them evaluate
          their engineers based on industry and worldwide standards, as well as
          tailoring it specific to their needs.
          <br />
          <br />
          We wanted to create a tool that will be useful to the human resources
          department, the CEO, the technology teams and all the various
          stakeholders that always need to stay abreast of the skills levels of
          their engineers.
          <br />
          <br />
          It has been an interesting journey because we experienced the pains of
          not knowing how to best evaluate our engineers, and have taken that
          pain to build a tool that will help many companies solve their most
          important need of ensuring they have the best people to build, manage
          their products and help their organisation achieve their goals from an
          engineering perspective.
        </p>
      </AboutStoryContainer>
    </AboutStorySection>
  );
};

export default AboutStory;

const AboutStorySection = styled.div`
  width: 100%;
  background: #004578;
  text-align: center;
  background-image: url(${storyBg});
  background-position: center;
  background-repeat: no-repeat;
`;

const AboutStoryContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 850px;

  div:nth-of-type(1) {
    p {
      color: #f3f2f1;
      font-weight: 600;
      width: initial;
    }
  }

  p {
    color: #c8c6c4;
    width: 75%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: initial;
    }
  }
`;
