import React from "react";
import styled from "styled-components";
import { Button, Title } from "../../../styles/reusableElements.styled";
import { ReactComponent as UserProfilePhoto } from "../../components/assets/user-photo.svg";
import { ReactComponent as OverallChart } from "../../components/assets/overall-chart.svg";

const UserProfileData = [
  {
    name: "Emmanuella Bella",
    department: "Electrical Engineering",
    level: "Junior Engineer",
  },
];

const UserProfileStats = [
  {
    total: 77,
    category: "Assessment",
  },
  {
    total: 1024,
    category: "Performance",
  },

  {
    total: 22,
    category: "FeedBacks",
  },
];

const EmployeeData = [
  { title: "Name", value: "Emmanuella Bella" },
  { title: "Date of Birth", value: "03-04-2005" },
  { title: "Telephone", value: "+234 904 500 4705" },
  { title: "Email Address", value: "engr.emmy@gmail.com" },
  { title: "Contact Address", value: "No. 14 Alimosho, Lagos" },
  { title: "Department", value: "Civil Engineering" },
  { title: "Position", value: "Team Lead" },
  { title: "Level", value: "Junior Engineer" },
];
const EmployeeStatsData = [
  { title: "Technical Skills", value: "60%" },
  { title: "Communication SKills", value: "50%" },
  { title: "Languages", value: "80%" },
  { title: "Soft Skills", value: "70%" },
  { title: "Experience Skills", value: "60%" },
];
const UserProfileDetailsCard = ({ name, department, level }) => {
  return (
    <UserProfileInfoDetails>
      <Title
        as="h5"
        $size="18px"
        $color="#A19F9D"
        $lHeight="24px"
        $weight="600px"
      >
        {name}
      </Title>
      <p style={{ fontSize: "16px", color: "#201F1E" }}>{department}</p>
      <p style={{ fontSize: "12px", color: "#A19F9D" }}>{level}</p>
    </UserProfileInfoDetails>
  );
};

const UserProfileCard = () => {
  return (
    <>
      <UserProfileContainer>
        <UserProfileStatsCard>
          <UserProfileInfoCard>
            <UserProfileInfo>
              <UserProfilePhoto />
              {UserProfileData
                ? UserProfileData.map((item, key) => (
                    <UserProfileDetailsCard
                      key={key}
                      name={item.name}
                      department={item.department}
                      level={item.level}
                    />
                  ))
                : ""}
            </UserProfileInfo>
            {UserProfileStats
              ? UserProfileStats.map((item, key) => (
                  <UserProfileDataCard key={key}>
                    <Title
                      as="h5"
                      $size="40px"
                      $color="#A19F9D"
                      $lHeight="40px"
                      $weight="400"
                    >
                      {item.total}
                    </Title>
                    <p>{item.category}</p>
                  </UserProfileDataCard>
                ))
              : ""}
          </UserProfileInfoCard>
        </UserProfileStatsCard>
        <UserProfileInnerContainer>
          <EmployeeDataContainer>
            <Title as="h5" $size="14px" $lHeight="40px" $weight="500">
              Employee Data
            </Title>
            {EmployeeData
              ? EmployeeData.map((item, key) => (
                  <EmployeeCard key={key}>
                    <p style={{ color: "#8E8E8E" }}>{item.title}:</p>
                    <p style={{ color: "#323130" }}>{item.value}</p>
                  </EmployeeCard>
                ))
              : ""}
          </EmployeeDataContainer>
          <EmployeeStatsContainer>
            <Title $size="14px" $lHeight="40px" $weight="500">
              Employee Stats
            </Title>
            {EmployeeStatsData
              ? EmployeeStatsData.map((item, key) => (
                  <EmployeeCard key={key}>
                    <p style={{ color: "#8E8E8E" }}>{item.title}:</p>
                    <p style={{ color: "#323130" }}>{item.value}</p>
                  </EmployeeCard>
                ))
              : ""}
            <ButtonContainer>
              <Button style={{ marginTop: "57px" }}>View Assessment</Button>
            </ButtonContainer>
          </EmployeeStatsContainer>
          <OverallContainer>
            <OverallChart />
            <ChartCard>
              <Title
                $size="20px"
                $lHeight="28px"
                $color="#323130"
                $weight="400"
              >
                Tetra
              </Title>
              <p style={{ fontSize: "16px" }}>Software Vendor</p>
            </ChartCard>
          </OverallContainer>
        </UserProfileInnerContainer>
      </UserProfileContainer>
    </>
  );
};

export default UserProfileCard;
const UserProfileContainer = styled.div`
  padding: 0px 9px;
  padding-bottom: 100px;
`;

const UserProfileStatsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #edebe9;
  border-radius: 8px;
  padding: 19px 20px;
  gap: 30px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;
  }
`;

const UserProfileInfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  gap: 20px;
  p {
    line-height: 22px;
    color: #a19f9d;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const UserProfileInfo = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
  }
`;

const UserProfileInfoDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const UserProfileDataCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #8a8886;
  border-radius: 8px;
  padding: 24px 20px;
`;

const UserProfileInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  padding-top: 80px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

const EmployeeDataContainer = styled.div`
  border: 1px solid #f8fbfd;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h5 {
    padding: 0px 10px;
    padding-top: 20px;
  }
`;

const EmployeeCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eff6fc;
  border-bottom: 1px solid #eff6fc;
  padding: 10px 10px;

  p {
    font-size: 12px;
  }
`;

const EmployeeStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c7e0f4;
  width: 100%;
  border-radius: 16px;
  padding: 24px 20px;

  h5 {
    padding: 0px 10px;
    padding-top: 20px;
  }
`;

const OverallContainer = styled.div`
  border: 1px solid #f8fbfd;
  border-radius: 8px;
  width: 100%;

  svg {
    width: 100%;
  }
`;

const ChartCard = styled.div`
  padding: 28px 30px;
`;

const ButtonContainer = styled.div`
  margin: auto;
`;
