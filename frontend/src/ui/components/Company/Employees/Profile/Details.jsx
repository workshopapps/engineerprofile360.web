import React, { useState,useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import styled from "styled-components";
import { Radar } from "react-chartjs-2";
import { Edit } from "iconsax-react";

import { Title, Button } from "../../../../../styles/reusableElements.styled";

const Details = () => {
  const { employee } = useOutletContext();
  const completed = employee?.completed_assessment ? employee.completed_assessment : [];

  let arr = [];
  let arrscore = [];
  const [newarr, setNewarr] = useState([]);
  const [newarrscore, setNewarrscore] = useState([]);
const topScore =
    employee.completed_assessment.length > 0
      ? employee.completed_assessment.reduce((max, assessment) =>
          max.points > assessment.points ? max : assessment
        )
      : 
    [];
  useEffect(()=>{
    for (let i = 0; i < completed.length; i++) {
      arr.push(JSON.parse(completed[i].assessment.userscore.categories).toString());
    }
   setNewarr(arr);

    for (let j = 0; j < completed.length; j++) {
      arrscore.push(JSON.parse(completed[j].assessment.userscore.passed_questions).toString());      
    }
    setNewarrscore(arrscore);

  } , [completed]);
  
    
     

  const data = {
    labels: newarr?newarr
      : ["", "", "", "", "", ""],
    datasets: [
      {
        label: "Categories",
        data:  newarrscore?newarrscore
          : [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  console.log(topScore);
  return (
    <>
      <EmployeeProfileInnerContainer>
        <EmployeeDataContainer>
          <Title as="h5" $size="14px" $lHeight="40px" $weight="500">
            Employee Data 
            {/* <Edit size={24} /> */}
          </Title>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Name:</p>
            <p style={{ color: "#323130" }}>
              {employee.fullname ? employee.fullname : ""}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Phone Number:</p>
            <p style={{ color: "#323130" }}>
              {employee.phone_number ? employee.phone_number : "NIL"}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Email:</p>
            <p style={{ color: "#323130" }}>
              {employee.email ? employee.email : "NIL"}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Username:</p>
            <p style={{ color: "#323130" }}>
              {employee.username ? employee.username : "NIL"}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Address:</p>
            <p style={{ color: "#323130" }}>
              {employee.address ? employee.address : "NIL"}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Date of Birth:</p>
            <p style={{ color: "#323130" }}>
              {employee.date_of_birth ? employee.date_of_birth : "NIL"}
            </p>
          </EmployeeCard>

          <EmployeeCard>
            <p style={{ color: "#8E8E8E" }}>Occupation:</p>
            <p style={{ color: "#323130" }}>
              {employee.occupation ? employee.occupation : "NIL"}
            </p>
          </EmployeeCard>
        </EmployeeDataContainer>
        <EmployeeStatsContainer>
          <Title $size="14px" $lHeight="40px" $weight="500">
            Employee Stats
          </Title>
          {employee.completed_assessment.map((assessment) => (
            <EmployeeCard key={assessment.assessment_id}>
              <p style={{ color: "#8E8E8E" }}>{assessment.assessment.name}:</p>
              <p style={{ color: "#323130" }}>{`${(
                (assessment.correct_questions / assessment.total_questions) *
                100
              ).toFixed(2)}%`}</p>
            </EmployeeCard>
          ))}
          {employee.completed_assessment.length > 0 ? (
            <ButtonContainer>
              <Link to={`/employees/profile/${employee.id}/assessments`}>
                <Button style={{ marginTop: "57px" }}>View Assessments</Button>
              </Link>
            </ButtonContainer>
          ) : (
            <span>No Assessment Found For {employee.fullname}</span>
          )}
        </EmployeeStatsContainer>
        <OverallContainer>
          <Radar data={data} />
          <ChartCard>
            <Title $size="20px" $lHeight="28px" $color="#323130" $weight="400">
              Tetra
            </Title>
            <p style={{ fontSize: "16px" }}>Software Vendor</p>
          </ChartCard>
        </OverallContainer>
      </EmployeeProfileInnerContainer>
    </>
  );
};

export default Details;

const EmployeeProfileInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  // align-items: flex-start;
  padding-top: 80px;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;

const EmployeeDataContainer = styled.div`
  border: 1px solid #edebe9;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h5 {
    padding: 0px 10px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  border: 1px solid #edebe9;
  width: 100%;
  border-radius: 16px;
  padding: 24px 20px;

  h5 {
    padding: 0px 10px;
    padding-top: 20px;
  }
`;

const OverallContainer = styled.div`
  border: 1px solid #edebe9;
  border-radius: 8px;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const ChartCard = styled.div`
  // padding: 28px 30px;
  padding: ${({ theme }) => theme.spacing(1)};
`;

const ButtonContainer = styled.div`
  margin: auto;
`;
