import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  Button,
  Container,
  MainContainer,
} from "../../../styles/reusableElements.styled";
import arrow from "./arrow.svg";
import graph from "./graph.svg";
import frame from "./Frame.png";
const AdminViewProfile = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <Main>
          <HeaderNav>
            <p>Employees </p>
            <img src={arrow} alt="" />
            <p>Staff </p>
            <img src={arrow} alt="" />
            <p className="user">User Profile </p>
          </HeaderNav>
          <Box>
            <div>
              <img src={frame} alt="" />
              <div>
                <p>Emmanuella Bella</p>
                <span>Junior Engineer</span>
              </div>
            </div>
            <div>
              <div>
                <p>77</p>
                <p>Assessments</p>
              </div>
              <div>
                <p>1024</p>
                <p>Performance</p>
              </div>
              <div>
                <p>22</p>
                <p>Feedbacks</p>
              </div>
            </div>
          </Box>
          <Flex>
            <Card>
              <h5>Employee Data</h5>
              <div>
                <span>Name:</span>
                <p>Emmanuella Bella</p>
              </div>
              <div>
                <span>Date of Birth:</span>
                <p>03-04-2005</p>
              </div>
              <div>
                <span>Telephone: </span>
                <p>+234 904 500 4705</p>
              </div>

              <div>
                <span>Email Address: </span>
                <p>engr.emmy@gmail.com</p>
              </div>
              <div>
                <span>Contact Address: </span>
                <p>No. 14 Alimosho, Lagos</p>
              </div>

              <div>
                <span>Department </span>
                <p>Civil Engineering </p>
              </div>
              <div>
                <span>Position: </span>
                <p>Team Lead </p>
              </div>
              <div>
                <span>Level: </span>
                <p>Junior Engineer </p>
              </div>
            </Card>

            <Card>
              <h5>Employee Stats</h5>
              <div>
                <span>Technical Skill: </span>
                <p>60% </p>
              </div>
              <div>
                <span>Communication Skill: </span>
                <p>50% </p>
              </div>
              <div>
                <span>Languages: </span>
                <p> 80% </p>
              </div>
              <div>
                <span>Soft Skills: </span>
                <p>70%</p>
              </div>
              <div>
                <span> Experience Skill:</span>
                <p>60%</p>
              </div>
              <Button $size={"md"}> View Assessments </Button>
            </Card>

            <Column>
              <HalfCard>
                <img src={graph} alt="" />
              </HalfCard>
              <HalfCard>
                <p>Tetra</p>
                <span>Software Vendor</span>
              </HalfCard>
            </Column>
          </Flex>
        </Main>
      </MainContainer>
    </>
  );
};

export default AdminViewProfile;

const Main = styled.main`
  padding-bottom: 80px;
`;
const HalfCard = styled.div`
  border: 1px solid #c7e0f4;
  border-radius: 8px;
  width: 344px;
  height: fit-content;
`;
const Card = styled.article`
  border: 1px solid #c7e0f4;
  border-radius: 8px;
  padding: 35px 25px;
  width: 344px;

  h5 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    line-height: 40px;
    border: 1px solid #eff6fc;
    padding: 5px 0;
    border-right: none;
    border-left: none;

    span {
      color: #8e8e8e;
      display: block;
    }
    p {
      font-size: 12px;
      color: #323130;
    }
  }
  button{
    margin 55px auto 0;
    background: #2667FF;
    padding: 8px 16px
  }
`;

const HeaderNav = styled.div`
  display: flex;
  margin-top: 24px;
  p {
    margin: 0 13px;
    font-size: 18px;
    font-weight: 400;
  }
  p:nth-child(5) {
    font-weight: 600;
  }
`;

const Box = styled.div`
  display: flex;
  border: 1px solid #8a8886;
  border-radius: 12px;
  padding: 24px 42px;
  margin: 50px 0 60px 62px;
  max-width: 1044px;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
    div {
      margin: 20px 0 0 30px;
      flex-direction: column;
    }
    div > p {
      font-weight: 600;
      margin-bottom: 10px;
    }
    div > span {
      font-size: 18px;
      color: #605e5c;
    }
  }

  div:nth-child(2) {
    display: flex;
    div:nth-child(2) {
      margin: 0 20px;
    }
    div {
      border: 1px solid #8a8886;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 24px;
      p:nth-child(1) {
        font-size: 40px;
        line-height: 40px;
      }
      p:nth-child(2) {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #323130;
      }
    }
  }
`;
const Flex = styled.section`
  display: flex;

  article:nth-child(2) {
    margin: 0 25px;
  }
`;
const Column = styled.article`
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    padding: 35px 25px;
  }
  div:nth-child(2) {
    padding: 20px 25px;
    margin-top: 45px;
    span {
      font-size: 18px;
      color: #605e5c;
    }
  }
`;
