import { User } from "iconsax-react";
import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";
import {
  Title,
  OverlayLoader,
} from "../../../../styles/reusableElements.styled";

const Profile = () => {
  const { ID } = useParams();
  const [employeeID, setEmployeeID] = useState(ID);
  const [employee, setEmployee] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
  }, [ID, employeeID]);

  return (
    <>
      {!isLoading ? (
        // Employee Overview Container

        <EmployeeProfileContainer>
          <EmployeeProfileStatsCard>
            <EmployeeProfileInfoCard>
              <EmployeeProfileInfo>
                <img
                  src={`https://avatars.dicebear.com/api/micah/${
                    employee.username ? employee.username : "photo"
                  }.svg`}
                  width="150px"
                  alt="Avatar"
                />
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
                  <p>
                    {employee.department?.name
                      ? employee.department.name
                      : "NIL"}
                  </p>
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
                    {employee.completed_assessment_count
                      ? employee.completed_assessment_count
                      : "0"}
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
                    {employee.points
                      ? `${(
                          (employee.points / employee.total_points) *
                          100
                        ).toFixed(2)}%`
                      : "0%"}
                  </Title>
                  <p>Performance</p>
                </EmployeeProfileDataCard>
              </EmployeeProfileDataContainer>
            </EmployeeProfileInfoCard>
          </EmployeeProfileStatsCard>

          {/* Renders outlet */}

          <Outlet context={{ employee }} />
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
