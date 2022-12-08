import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";
import { Button, Title, OverlayLoader } from "../../../../styles/reusableElements.styled";
import { ReactComponent as EmployeeProfilePhoto } from "../../../components/assets/user-photo.svg";
import { Radar } from "react-chartjs-2";

const Profile = () => {
  const { ID } = useParams();
  const [employeeID, setEmployeeID] = useState(ID);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get Employee Details
  useEffect(() => {
    setEmployeeID(ID);
    const getDetails = async () => {
      try {
        const response = await axios.get(`employee/${employeeID}`);
        setEmployee(response?.data.data);
        console.log(response?.data.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(true);
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      }
    };
    getDetails();
  }, [ID]);

  return (
    <>
      {!isLoading ? (
        <EmployeeProfileContainer>
          <EmployeeProfileStatsCard>
            <EmployeeProfileInfoCard>
              <EmployeeProfileInfo>
                <EmployeeProfilePhoto />
                <EmployeeProfileInfoDetails>
                  <Title
                    as="h5"
                    $size="18px"
                    $color="#323130"
                    $lHeight="24px"
                    $weight="600"
                  >
                    {employee.fullname ? employee.fullname : ""}
                  </Title>
                  <p>{employee.occupation ? employee.occupation : "NIL"}</p>
                </EmployeeProfileInfoDetails>
              </EmployeeProfileInfo>

              <EmployeeProfileDataContainer>
                <EmployeeProfileDataCard>
                  <Title
                    as="h5"
                    $size="40px"
                    $color="#323130"
                    $lHeight="40px"
                    $weight="400"
                  >
                    70%
                  </Title>
                  <p>Assessments</p>
                </EmployeeProfileDataCard>

                <EmployeeProfileDataCard>
                  <Title
                    as="h5"
                    $size="40px"
                    $color="#323130"
                    $lHeight="40px"
                    $weight="400"
                  >
                    70%
                  </Title>
                  <p>Performance</p>
                </EmployeeProfileDataCard>
              </EmployeeProfileDataContainer>
            </EmployeeProfileInfoCard>
          </EmployeeProfileStatsCard>
          <EmployeeProfileInnerContainer>
            <EmployeeDataContainer>
              <Title as="h5" $size="14px" $lHeight="40px" $weight="500">
                Employee Data
              </Title>

              <EmployeeCard>
                <p style={{ color: "#8E8E8E" }}>Name:</p>
                <p style={{ color: "#323130" }}>
                  {employee.fullname ? employee.fullname : ""}
                </p>
              </EmployeeCard>
            </EmployeeDataContainer>
            <EmployeeStatsContainer>
              <Title $size="14px" $lHeight="40px" $weight="500">
                Employee Stats
              </Title>
              {/* {EmployeeStatsData
              ? EmployeeStatsData.map((item, key) => (
                  <EmployeeCard key={key}>
                    <p style={{ color: "#8E8E8E" }}>{item.title}:</p>
                    <p style={{ color: "#323130" }}>{item.value}</p>
                  </EmployeeCard>
                ))
              : ""} */}
              <ButtonContainer>
                <Link to="">
                  <Button style={{ marginTop: "57px" }}>View Assessment</Button>
                </Link>
              </ButtonContainer>
            </EmployeeStatsContainer>
            <OverallContainer>
              <Radar data={data} />
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
          </EmployeeProfileInnerContainer>
        </EmployeeProfileContainer>
      ) : (
        <OverlayLoader contained>
          <div></div>
          <span>Just a moment</span>
        </OverlayLoader>
      )}
    </>
  );
};

const data = {
  labels: ["Javascript", "PHP", "Java", "ReactJs", "Nodejs", "WordPress"],
  datasets: [
    {
      label: "Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
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

export default Profile;

const EmployeeProfileContainer = styled.div`
  padding: 0px 0px;
  padding-bottom: 100px;
`;

const EmployeeProfileStatsCard = styled.div`
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

const EmployeeProfileInfoCard = styled.div`
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

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    gap: 20px;
  }
`;

const EmployeeProfileInfo = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

const EmployeeProfileInfoDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    align-items: center;
  }
`;

const EmployeeProfileDataContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

const EmployeeProfileDataCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #8a8886;
  border-radius: 8px;
  padding: 24px 20px;

  p {
    color: #323130;
  }
`;

const EmployeeProfileInnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  padding-top: 80px;

  ${({ theme }) => theme.breakpoints.down("touch")} {
    flex-direction: column;
    justify-content: center;
    gap: ${({theme}) => theme.spacing(6)};
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
