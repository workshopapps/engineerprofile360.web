import React from "react";
import styled from "styled-components";

import { More, TickSquare } from "iconsax-react";
import { Button, Title } from "../../../../styles/reusableElements.styled";

const Profile = () => {
  return (
    <ProfileOverview>
      <>
        <EmployeeDetails>
          {/* <ProfileImage></ProfileImage> */}
          <Detail>
            <span>Name</span>
            <span>Browyn Louis</span>
          </Detail>
          <Detail>
            <span>Department</span>
            <span>Browyn Louis</span>
          </Detail>
          <Detail>
            <span>Skill Level</span>
            <span>Browyn Louis</span>
          </Detail>
          <Detail>
            <span>Course</span>
            <span>Browyn Louis</span>
          </Detail>
          <Detail>
            <span>Percentage</span>
            <span>Browyn Louis</span>
          </Detail>
        </EmployeeDetails>
        <AssessmentsDetails>
          <Chart>
            <Button
              $variant="outlined"
              $color="#2667ff"
              $maxWidth="100%"
              fullWidth
            >
              Recommend Staff for Promotion
            </Button>
          </Chart>
          <RecentAssessments>
            <Assessments>
              <Title $size="24px" $lHeight="30px" $color="#323130">
                Recent Assessments
              </Title>
              <List>
                <li>
                  <span>Maths</span>
                  <span>Completed</span>
                </li>
              </List>
            </Assessments>
            <Button fullWidth $weight="400" $maxWidth="100%">
              View Full Profile
            </Button>
          </RecentAssessments>
        </AssessmentsDetails>
        <OtherEmployees />
      </>
    </ProfileOverview>
  );
};

const OtherEmployees = () => {
  return (
    <>
      <Title as="h2" $weight="400" $size="32px">
        Other Employees in this Department
      </Title>
      <EmployeesTable>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Employee name</th>
              <th>Department name</th>
              <th>Course</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Browyn Louis</td>
              <td>AEB</td>
              <td>400LEVEL</td>
              <td>
                <TickSquare color="green" />
              </td>
              <td>
                <Button $variant="outlined" $color="#2667ff">
                  View Profile
                </Button>
                <More />
              </td>
            </tr>
          </tbody>
        </table>
      </EmployeesTable>
    </>
  );
};

export default Profile;

const ProfileOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

// const ProfileImage = styled.div``;

const EmployeeDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  border: 1px solid lightgrey;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  gap: ${({ theme }) => theme.spacing(1)};

  span:first-of-type {
    color: grey;
    font-size: 12px;
  }

  span {
    font-size: 14px;
  }
`;

const AssessmentsDetails = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
const RecentAssessments = styled.div`
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(1.5)});
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;
const Chart = styled.div`
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(1.5)});
`;

const Assessments = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(1)};
    background: #faf9f8;
    font-weight: 600;

    border-radius: ${({ theme }) => theme.spacing(1)};

    span:last-of-type {
      color: green;
    }
  }
`;

const EmployeesTable = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  table {
    width: 100%;
    min-width: 1080px;
    overflow: auto;

    tr:first-of-type {
      width: 100%;
      background: #f8fbfd;

      th:first-of-type {
        padding-right: 24px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
      }
    }

    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }

    tr {
      td:last-of-type {
        display: flex;
        gap: ${({ theme }) => theme.spacing(4)};
        justify-content: space-between;
        align-items: center;

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
