import React from "react";
import styled from "styled-components";
import { Container, Title } from "../../../styles/reusableElements.styled";
import testimony from "./assets/images/testimony.svg";
import quotes from "./assets/icons/quotes.svg";

const HomeTestimonials = () => {
  return (
    <HomeTestimonialsCon>
      <Testimonials>
        <div>
          <TestimonialTitle
            as="h3"
            $weight="600"
            $size="48px"
            $color="#323130"
            $lHeight="50px"
          >
            What They Say <br />
            About us.
          </TestimonialTitle>
          <img src={quotes} alt=" " />
        </div>
        <Testimonial>
          <img src={testimony} alt=" " />
          <p>
            “ Our engineering team saw a faster completion rate on tasks after
            we did a reshuffling responsibilities based on the evaluation
            results from Skript, Now we successfully ship over 90% of projects
            within deadline, an improvement on our 47% completion rate. “
          </p>
          <ClientsName>
            <span>Browyn Louis - HNG Solutions</span>
          </ClientsName>
        </Testimonial>
      </Testimonials>
    </HomeTestimonialsCon>
  );
};

export default HomeTestimonials;

const HomeTestimonialsCon = styled(Container)``;
const TestimonialTitle = styled(Title)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 32px;
  }
`;
const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  width: 100%;

  div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      max-width: 100px;
    }
  }
`;
const Testimonial = styled.div`
  min-height: 233px;
  max-width: 996px;
  margin: auto;
  width: 90%;
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(8)};
  background: #201f1e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(8)}
      ${({ theme }) => theme.spacing(3)};
  }

  img {
    position: absolute;
    right: 50px;
    top: -60px;
  }

  p {
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
  }
`;

const ClientsName = styled.div`
  position: absolute;
  left: 50px;
  bottom: -15px;
  border-radius: ${({ theme }) => theme.spacing(1.2)};
  background: white;
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(1.5)};
  border: 1px solid #edebe9;

  span {
    font-weight: 600;
  }
`;
