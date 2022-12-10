import React from "react";
import headerpic from "../../../assets/images/comparison.png";
import logo from "../../../assets/images/skriptlogo.svg";
import BambooHR from "../../../assets/images/bamboo.png";
import styled, { css } from "styled-components";
import { Button } from "../../../styles/reusableElements.styled";

const ComparisonHeading = styled.div`
  display: grid;
  padding: 95px;
  color: #323130;
  text-align: center;
  width: fit-content;
  justify-content: center;
  margin: auto;
  h1 {
    font-weight: 600;
    font-size: 38px;
    margin-bottom: 20px;
  }
  @media (min-width: 600px) {
    width: 100%;
    font-size: 42px;
    ${(props) =>
      props.image &&
      css`
        margin: auto;
      `}
  }
`;
const ComparisonHeader = styled.div`
  display: grid;
  padding: 0 30px;
  @media (min-width: 1000px) {
    display: grid;
    padding: 0 100px;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    & :nth-child(2) {
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }
  #firstParagraph {
    font-weight: 700;
    font-size: 20px;
    color: #323130;
    margin-bottom: 20px;
  }
  & img {
    margin: auto;
  }
  p {
    margin-bottom: 20px;
    font-size: 20px;
    color: #323130;
  }
  & buttton {
    width: 201px;
    height: 48px;
    padding: 6px 20px;
    background-color: #2667ff;
    border: 2px solid #2667ff;
    border-radius: 2px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: white;
    cursor: pointer;
  }
`;
const SecondHeader = styled.div`
  display: grid;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 100%;
  padding: 50px 30px;
  h1 {
    font-weight: 600;
    font-size: 32px;
  }
  & img {
    margin: auto;
  }
  span {
    font-weight: 600;
    font-size: 32px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 20px;
  }
  ${(props) =>
    props.image &&
    css`
      margin: auto;
    `}
  @media(min-width:1000px) {
    padding: 50px 100px;
    h1 {
      width: 657px;
      text-align: center;
      margin: auto;
    }
    ${(props) =>
      props.thirdheader &&
      css`
        display: grid;
        padding: 0 100px;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        margin: 151px 0;
        text-align: right;
        gap: 30px;
        & :nth-child(2) {
          grid-row-start: 1;
          grid-row-end: 2;
        }
      `};
    ${(props) =>
      props.fourtheader &&
      css`
        display: grid;
        padding: 0 100px;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 151px;
        text-align: left;
        & :nth-child(1) {
          grid-row-start: 1;
          grid-row-end: 2;
          margin-right: 30px;
        }
      `}
  }
`;

const Features = styled.div`
  width: 100%;
  padding: 79px 30px;
  background: #201f1e;
  color: #f8fbfd;
  text-align: center;
  display: grid;
  justify-content: center;
  h1 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
  }
  @media (min-width: 1000px) {
    p {
      width: 886px;
    }
  }
`;
const Tablelist = styled.div`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.015em;
  color: #605e5c;
  line-height: 50px;
  padding: 0 30px;
  table {
    width: 100%;
  }
  @media (min-width: 600px) {
    table {
      width: 100%;
    }
    & :nth-child(1) {
      width: 100%;
      display: block;
      font-size: 26px;
    }
  }
`;
const Tableheading = styled.div`
  font-weight: 700;
  img {
    padding: 0;
    margin: 0;
  }
  @media (min-width: 600px) {
    font-size: 26px;
  }
`;
const Tablecontent = styled.div`
  border: 1px solid #b3b3b3;
  padding: 10px;
  width: 370px;
  td {
    width: 10px;
    height: fit-content;
    margin: 0;
  }
  @media (min-width: 600px) {
    td {
      width: fit-content;
      padding: 50px 50px 50px 10px;
    }
  }
`;
const Competitor = styled.div`
  display: grid;
  padding: 122px 0;
  text-align: center;
  justify-content: center;
  margin: auto;
  h1 {
    font-weight: 600;
    font-size: 32px;
  }
  & :nth-child(1) {
    background: #201f1e;
    width: 100%;
    color: white;
    padding: 30px;
  }
  @media (min-width: 1000px) {
    padding: 53px 48px;
    width: 996px;
    h1 {
      width: 546px;
      padding-bottom: 107px;
      margin: auto;
    }
  }
`;
const FrequentlyAsked = styled.div`
  display: grid;
  padding: 0 30px;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  @media (min-width: 1000px) {
    padding: 0 100px 200px;
  }
`;
const Questions = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 15px;
  border-bottom: solid 4px #f6f6f6;
  p {
    color: #323130;
  }
  p:nth-child(2) {
    background: #f6f6f6;
    padding: 2px;
    margin-top: 10px;
  }
`;
const GetReady = styled.div`
  display: grid;
  text-align: center;
  background: #201f1e;
  color: white;
  padding: 120px 30px;
  justify-content: center;
  margin: auto;
  h2 {
    font-weight: 700;
    font-size: 32px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    margin: 20px 0;
  }
  Button {
    margin: auto;
  }
`;
export const ComparisonPage = () => {
  return (
    <div>
      <ComparisonHeading>
        <h1>
          Why choose Eval360 over BambooHR for evaluating engineering teams?
        </h1>
      </ComparisonHeading>

      <ComparisonHeader>
        <div className="firstpic">
          <img src={headerpic} alt="" image />
        </div>
        <div>
          <h1 id="firstParagraph">
            While we won’t deny how amazing a product BambooHR is and its many
            benefits to companies looking for an integrated tool for HRIS, we
            have built Eval360 to cater to engineering teams that want
            specificity and in-depth performance evaluation and development.
          </h1>
          <p>
            There are lots of attributes that are particular to the engineering
            sector that a generic tool like BambooHR can easily miss, not to
            mention the fact that it ships with many bells and whistles which
            makes it a very expensive option that may focus on what the team
            really needs - performance evaluations geared towards team
            improvement.
          </p>
          <p>
            Eval360 has been built to hone in on the engineering industry and
            its sub-sectors, hence the assessment questions, reporting style and
            focus of evaluation are 100% based on what is relevant to
            engineering teams.
          </p>
          <Button size="md">Request a Demo</Button>
        </div>
      </ComparisonHeader>

      <SecondHeader>
        <div>
          <h1>
            <span>Skrpit</span> is Industry-focused, not country-focused
            assessment.
          </h1>
          <p>
            Rather than make generic assessment tests for companies in a
            particular country like BambooHR does, Eval360 tailors its
            assessments to the needs of the engineering industry and makes them
            relevant all over the world with multi-language support.
          </p>
        </div>
        <div>
          <img src={headerpic} alt="" image />
        </div>
      </SecondHeader>

      <SecondHeader thirdheader className="secondHeader thirdheader ">
        <div>
          <img src={headerpic} alt="" image />
        </div>
        <div>
          <h1>Clear and affordable pricing.</h1>
          <p>
            Eval360 is very keen on transparency which is why we have a clear
            pricing system for regular plans and a clear process for enterprise
            billing. Our goal is to make the right solutions affordable for the
            teams that need them, whether it’s 10 or 1000 people teams.
          </p>
        </div>
      </SecondHeader>

      <SecondHeader fourtheader className="secondHeader fourtheader">
        <div>
          <img src={headerpic} alt="" image />
        </div>
        <div>
          <h1>Detailed performance evaluation.</h1>
          <p>
            Siince we are focused on the engineerng industry, we have become
            subject matter experts and this makes our assessments more detailed
            for engineers and more inclined to the technical and professional
            needs of the industry.
          </p>
        </div>
      </SecondHeader>

      <Features className="features">
        <h1>Features 1-to-1 comparison</h1>
        <p>
          Since we are focused on the engineerng industry, we have become
          subject matter experts and this makes our assessments more detailed
          for engineers and more inclined to the technical and professional
          needs of the industry.
        </p>
      </Features>

      <Tablelist className="tablelist">
        <table>
          <Tableheading className="tableheading">
            <td>Pricing</td>
            <td>
              <img src={logo} alt="" />
            </td>
            <td>
              <img src={BambooHR} alt="" />
            </td>
          </Tableheading>

          <Tablecontent className="tablecontent">
            <tr>
              <td>Regular</td>
              <td>
                $5/employee
                <br />
                /month
              </td>
              <td>$5/user/month</td>
            </tr>
            <tr>
              <td>Enterprise</td>
              <td>
                Custom quote <br />
                All features included
              </td>
              <td>
                $7/user/month +$2/user/
                <br />
                month for full <br />
                features
              </td>
            </tr>
          </Tablecontent>
        </table>

        <table>
          <Tableheading className="tableheading">
            <td>Evaluation</td>
          </Tableheading>

          <Tablecontent className="tablecontent">
            <tr>
              <td classname="column">Customizable Questions</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Industry Specific Assessment</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>360 Review</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Multiple Assessment Angles</td>
              <td>/</td>
              <td>/</td>
            </tr>
          </Tablecontent>
        </table>

        <table>
          <Tableheading className="tableheading">
            <td>Application Features</td>
          </Tableheading>

          <Tablecontent className="tablecontent">
            <tr>
              <td>Ease Of Use</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Engagement Tracking</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Goal Management</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Reporting/ Analytics</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Automated Reminders</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Employee Database</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Third-Party Integrations</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Intuitive Dashboard</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Scheduled Assessments</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Value-Added Services</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Negative Feedback Management</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Real-time Reporting</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Mobile Version</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Multiple Language Support</td>
              <td>/</td>
              <td>/</td>
            </tr>
          </Tablecontent>
        </table>

        <table>
          <Tableheading className="tableheading">
            <td>Customer support</td>
          </Tableheading>

          <Tablecontent className="tablecontent">
            <tr>
              <td>Ease Of Use</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Email Support</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Telephone</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Chat</td>
              <td>/</td>
              <td>/</td>
            </tr>
            <tr>
              <td>Dedicated Support</td>
              <td>/</td>
              <td>/</td>
            </tr>
          </Tablecontent>
        </table>
      </Tablelist>

      <Competitor className="competitor">
        <h1>What They Say About us against our competitors.</h1>

        <div>
          <p id="application">
            “For this period we've been using Eval360, running a small team of
            dedicated and capable engineers has never been so interesting and
            enjoyable. Eval360 makes it easy to see the team’s work application
            and technical understanding in their fields. This has helped us
            reshuffle the team optimally.
            <br />
            Their newfound enthusiasm and commitment is infectious, and it's
            exciting to see them complete their mission, and overcome several
            technical difficulties and issues.”
          </p>
        </div>

        <p>Muhammad Aisha, London</p>
      </Competitor>

      <FrequentlyAsked className="frequentlyAsked">
        <h2>Frequently Asked Questions</h2>

        <Questions className="questions">
          <p>
            Can I migrate my existing employee data easily from BambooHR to
            Eval360?
          </p>
          <p>
            Yes, you can easily. Export your employee data on BambooHR as a CSV
            file, then upload that file on Eval360.
          </p>
        </Questions>
        <Questions className="questions">
          <p>Are there any hidden costs on Eval360?</p>
          <p>
            None whatsoever. What you see is what you get. Enterprise package
            starts at 500 employees and for that you get a custom quote,
            otherwise, it’s $5 per employee per month.
          </p>
        </Questions>
        <Questions className="questions">
          <p>Does Eval360 offer 24/7 support?</p>
          <p>
            We offer support to customers that is available round-the-clock
            through our knowledgebase, help center, live chat, email and
            telephone support.
          </p>
        </Questions>
      </FrequentlyAsked>

      <GetReady className="getReady">
        <h2>Ready to get started?</h2>
        <p>
          Start your journey to increased engineer productivity and widespread
          organizational growth today.
        </p>
        <Button size="large">Request A Demo</Button>
      </GetReady>
    </div>
  );
};
