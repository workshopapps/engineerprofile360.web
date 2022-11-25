import React from "react";
import {
  Main,
  Container,
  FirstPage,
  Left,
  Text1,
  Textvs,
  Right,
  SideImg,
  TranSIde,
  DescBelow,
  Line,
  Text,
  Upper,
  SecondPage,
  SPtext,
  UpperSvg,
  LowerSvg,
  ThirdPage,
  How,
  ScriptText,
  Which,
  What,
  Fag,
  HowContent,
  Wrapper,
  WhichText,
  BoxWhich,
  WhichContent,
  Heading,
  T1,
  T2,
  T3,
  Down,
} from "./Market.styled";
import HowFrag from "./HowFrag";
import WhichFrag from "./WhichFrag";
import MarketImg from "../../../assets/images/market.png";
import Side from "../../../assets/images/markey-2.png";
import UpperS from "../../../assets/images/markt3.svg";
import UpperL from "../../../assets/images/mrket4.svg";
import How1 from "../../../assets/images/how1.svg";
import How2 from "../../../assets/images/how2.svg";

const Market = () => {
  console.log(MarketImg);
  return (
    <>
      <Main>
        <Container>
          <FirstPage>
            <Upper>
              <Left>
                <Text1>Skript</Text1>
                <Textvs>VS</Textvs>
                <Text1>Small Improvement</Text1>
              </Left>
              <Right>
                <SideImg src={MarketImg} alt="/" />
              </Right>
            </Upper>

            <Down>
              <TranSIde src={Side} />
              <DescBelow>
                <Line></Line>
                <Text>
                  Skript, the solution to all your Engineering review needs: a
                  better solution to Small-Improvements.
                </Text>
              </DescBelow>
            </Down>
          </FirstPage>
        </Container>
        <SecondPage>
          <Container>
            <UpperSvg src={UpperS} />
            <SPtext>
              Skript and Small-improvements, are both performance analysis tools
              that cater to companies seeking to make their engineers better.
              Which is the better option to cater to your needs? Here, you can
              see how Skript compares to Small-Improvements, a performance
              review software for mid-sized companies.
            </SPtext>
          </Container>
          <LowerSvg src={UpperL} />
        </SecondPage>
        <ThirdPage>
          <Container>
            <How>
              <ScriptText>How Skript works</ScriptText>
              <HowContent>
                <HowFrag
                  logo={How1}
                  title={"Industry specific assessment"}
                  writeUp={
                    "Skript allows you to sync data from recognised governing bodies of any engineering industry in any country. This data is used in preparing the evaluation questions, and ensures that you bring out the best in your engineers!"
                  }
                />
                <Wrapper>
                  <HowFrag
                    logo={How1}
                    title={"Top-notch security"}
                    writeUp={
                      "Skript displays each engineer evaluation profile in the form of a spider web chart to show multivariate data. This allows you to evaluate your engineer using multiple variables, for the best possible result."
                    }
                  />
                </Wrapper>
                <HowFrag
                  logo={How1}
                  title={"Unique data representation"}
                  writeUp={
                    "Skript ensures that the information used in the process of evaluation is secured at the highest level with multi factor authentication. No one is getting their hands on your data!"
                  }
                />

                <Wrapper>
                  <HowFrag
                    logo={How2}
                    title={"Automation"}
                    writeUp={
                      "Your evaluation goes on without you having to lift a finger. All you have to do is set a time and date for your evaluations to be carried out, and Skript will handle the rest. Assessment and scoring is automated, and you can trust that the insights are accurate!"
                    }
                  />
                </Wrapper>
              </HowContent>
            </How>
            <Which>
              <WhichText>Which one has more benefits for you?</WhichText>

              <WhichContent>
                <Heading>
                  <T1>Pricing</T1>
                  <T2>Skript</T2>
                  <T3>Small Improvement</T3>
                </Heading>
                <BoxWhich>
                  <WhichFrag
                    item={"Regular"}
                    script={"$5/employee/month"}
                    improvement={"$5/user/month"}
                  />
                  <WhichFrag
                    item={"Enterprise"}
                    script={"Custom quote All features included"}
                    improvement={
                      "$7/user/month +$2/user/month for full features"
                    }
                  />
                </BoxWhich>

                <Heading>
                  <T1>Evaluation</T1>
                </Heading>
                <BoxWhich>
                  <WhichFrag
                    item={"Customizable Questions"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Industry Specific Assessment"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"360 Review"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Multiple Assessment Angles"}
                    script={"/"}
                    improvement={"/"}
                  />
                </BoxWhich>
                <Heading>
                  <T1>Application Features</T1>
                </Heading>
                <BoxWhich>
                  <WhichFrag
                    item={"Ease Of Use"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Engagement Tracking"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Goal Management"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Reporting/ Analytics"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Automated Reminders"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Employee Database"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Third-Party Integrations"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Intuitive Dashboard"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Scheduled Assessments"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Value-Added Services"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Negative Feedback Management"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Real-time Reporting"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Mobile Version"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Multiple Language Support"}
                    script={"/"}
                    improvement={"/"}
                  />
                </BoxWhich>
                <Heading>
                  <T1>Customer support</T1>
                </Heading>
                <BoxWhich>
                  <WhichFrag
                    item={"Ease Of Use"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Email Support"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag
                    item={"Telephone"}
                    script={"/"}
                    improvement={"/"}
                  />
                  <WhichFrag item={"Chat"} script={"/"} improvement={"/"} />
                  <WhichFrag
                    item={"Dedicated Support"}
                    script={"/"}
                    improvement={"/"}
                  />
                </BoxWhich>
              </WhichContent>
            </Which>
            <What></What>
            <Fag></Fag>
          </Container>
        </ThirdPage>
      </Main>
    </>
  );
};

export default Market;
