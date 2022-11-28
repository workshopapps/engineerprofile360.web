import React from "react";
import { Button, Title } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as UserPhoto } from "./assets/user-photo.svg";
import { ReactComponent as ChartData } from "./assets/chart.svg";

const UserProfileData = [
  { title: "Name", value: "Sir Seyi Alameen" },
  { title: "Department", value: "UX Engineer" },
  { title: "Course", value: "Design Thinking 901" },
  { title: "Percentage", value: "93.3%", color: "#107C10" },
];

const ResultStats = [
  { title: "Design Research 203", status: "Completed", bgColor: "#F8FBFD" },
  { title: "Prototyping And Flow 205", status: "Completed" },
  { title: "User experience on WebApp", status: "Completed" },
  { title: "User experience on Mobile", status: "Completed" },
];

const ResultStatCard = ({ name, status, bgColor }) => {
  return (
    <ResultStat style={{ backgroundColor: bgColor ? bgColor : "" }}>
      <p>{name}</p>
      <p>{status}</p>
    </ResultStat>
  );
};

const UserCard = ({ name, value, color }) => {
  return (
    <UserInfoCard>
      <p>{name}</p>
      <Title
        as="h5"
        $weight="600"
        $lHeight="28px"
        $color={color ? color : "#605e5c"}
        $size="20px"
      >
        {value}
      </Title>
    </UserInfoCard>
  );
};

const UserAssessmentResult = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <SideBarContainer>
          <Sidebar />
        </SideBarContainer>
        <UserAssessmentContainer>
          <BreadCrumb>
            <BreadCrumbPrevious>Employees</BreadCrumbPrevious>
            <Next />
            <BreadCrumbPrevious>Profile</BreadCrumbPrevious>
            <Next />
            <BreadCrumbActive>Sir Seyi Alameen</BreadCrumbActive>
          </BreadCrumb>
          <ProfileStatsCard>
            <UserPhotoContainer>
              <UserPhoto />
            </UserPhotoContainer>
            {UserProfileData
              ? UserProfileData.map((item, key) => (
                  <UserCard
                    key={key}
                    name={item.title}
                    value={item.value}
                    color={item.color}
                  />
                ))
              : ""}
          </ProfileStatsCard>
          <ChartContainer>
            <Chart>
              <ChartData />
            </Chart>
            <Result>
              <Title
                as="h5"
                $weight="600"
                $lHeight="28px"
                $color="#605e5c"
                $size="20px"
              >
                Assessment Result
              </Title>
              <ResultStatsContainer>
                {ResultStats
                  ? ResultStats.map((item, key) => (
                      <ResultStatCard
                        key={key}
                        name={item.title}
                        status={item.status}
                        bgColor={item.bgColor}
                      />
                    ))
                  : ""}
              </ResultStatsContainer>
            </Result>
          </ChartContainer>
          <ButtonContainer>
            <Button
              style={{ backgroundColor: "#fff", border: "1px solid #2667FF" }}
              $color="#2667FF"
            >
              Recommend Staff for Promotion
            </Button>
            <Button>View Full Profile</Button>
          </ButtonContainer>
        </UserAssessmentContainer>
      </MainContainer>
    </>
  );
};

export default UserAssessmentResult;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: auto;
  }
`;

const SideBarContainer = styled.div`
  display: block;
  margin-top: -85px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const BreadCrumb = styled.section`
  display: flex;
  gap: 13px;
  margin-top: 40px;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  justify-items: center;
`;

const BreadCrumbPrevious = styled.h5`
  color: #605e5c;
`;

const BreadCrumbActive = styled.h5`
  font-weight: 600;
  color: #323130;
`;

const UserAssessmentContainer = styled.div`
  padding: 0px 9px;
`;

const ProfileStatsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #edebe9;
  border-radius: 8px;
  padding: 19px 20px;
  margin-top: 38px;
  gap: 30px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
`;

const UserPhotoContainer = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: 20px;
  }
`;

const UserInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    line-height: 22px;
    color: #a19f9d;
  }
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 24px;
  margin-top: 32px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 18px;
  background: #f8fbfd;
  border-radius: 8px;
  min-height: 460px;
`;

const Result = styled.div`
  border: 1px solid #edebe9;
  border-radius: 8px;
  min-height: 430px;
  width: 90%;
  padding: 19px 13px;
`;

const ResultStatsContainer = styled.div`
  margin-top: 40px;
`;

const ResultStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 19px;
  gap: 10px;
  background-color: #faf9f8;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-right: -50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  width: 100%;
  margin-bottom: 104px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  button {
    width: 100%;
    max-width: 565px;
  }
`;
