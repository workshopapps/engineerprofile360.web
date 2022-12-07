import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddCircle, More } from "iconsax-react";
import Flex from "../../layout/Flex";
import Grid, { GridItem } from "../../layout/Grid";
import "../../../../styles/assessmentfirstpage.css";
import PageInfo from "../../molecules/PageInfo";
import { Button, Title } from "../../../../styles/reusableElements.styled";
import { Chart } from "../Dashboard/Stats";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";
import { showErrorToast } from "../../../../helpers/helper";

const Buttons = () => {
  return (
    <Flex spacing={20} jc="flex-end">
      <Link to="/assessment/create-assessment">
        <Hide>
          <Button>
            <Flex ai="center" spacing={10}>
              <AddCircle size="24" />
              <>Create New Assessment</>
            </Flex>
          </Button>
        </Hide>
        <Show>
          <Button>
            <Flex ai="center">
              <AddCircle size="24" />
            </Flex>
          </Button>
        </Show>
      </Link>
      <Link to="/assessment/view-assessment">
        <Hide>
          <Button $variant="outlined" $color="#2667FF">
            View Assessments
          </Button>
        </Hide>
        <Show>
          <Button $variant="outlined" $color="#2667FF">
            View
          </Button>
        </Show>
      </Link>
    </Flex>
  );
};

const Heading = () => {
  return (
    <Flex ai="center">
      <Title $size="28px" $weight="700">
        Assessment
      </Title>
    </Flex>
  );
};

const Card = (props) => {
  return (
    <CardContainer>
      <Flex stack spacing={16} style={{ textAlign: "center" }}>
        <p style={{ whiteSpace: "nowrap" }}>{props.text}</p>
        <p>{props.num}</p>
      </Flex>
    </CardContainer>
  );
};

const TopStaff = ({ topStaff }) => {
  const [topEmp, setTopEmp] = useState([]);

  useEffect(() => {
    const employees = topStaff?.data
      ? topStaff?.data.filter((data) => data.points !== null)
      : [];

    setTopEmp(employees);
  }, [topStaff?.data]);

  return (
    <Flex stack spacing={18} style={{ maxHeight: "600px", paddingTop: "10px" }}>
      <Flex jc="space-between">
        <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
          Top Staff
        </Title>
        <Link to="/employees">
          <View>View all</View>
        </Link>
      </Flex>
      {topEmp.length > 0 ? (
        <TopStaffTable>
          <table cellSpacing="0">
            <tbody>
              <tr>
                <th colSpan="1">#</th>
                <th style={{ textAlign: "center" }}>Staff name</th>
                <th>Department</th>
                <th>Points</th>
              </tr>

              {topEmp.map((emp, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <Flex ai="center" jc="center" spacing={10}>
                        <img src={emp.photo} />
                        <Text $weight="600" $size="18px">
                          {emp.name}
                        </Text>
                      </Flex>
                    </td>
                    <td>
                      <Text $weight="400" $size="16px">
                        {emp.department}
                      </Text>
                    </td>
                    <td>
                      <Flex jc="space-between">
                        <Text $weight="400" $size="16px">
                          {emp.points}
                        </Text>
                        <More />
                      </Flex>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TopStaffTable>
      ) : (
        <Flex jc="center">
          <Text>Oops!, no top staff to display at this moment</Text>
        </Flex>
      )}
    </Flex>
  );
};

const TopPerformance = () => {
  return (
    <Flex stack>
      <Chart />
    </Flex>
  );
};

const Assessments = () => {
  const { auth } = useAuth();
  const [stats, setStats] = useState({});
  const [topStaff, setTopStaff] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getStats = async () => {
      const ENDPOINTS = [
        axios.get(`user-assessment/org/${auth.id}/org-available`),
        axios.get(`user-assessment/org/${auth.id}/org-completed`),
        axios.get(`userscore/company/${auth.id}`),
      ];

      try {
        const response = await Promise.all(ENDPOINTS).then(function (data) {
          return data;
        });

        setIsLoading(false);

        const availableAssessments = response[0]?.data.data.length;
        const completedAssessments = response[1]?.data.data.length;
        const acceptedAssessments = Array(12).length;
        const topstaff = response[2]?.data;

        setStats({
          availableAssessments,
          completedAssessments,
          acceptedAssessments,
        });
        setTopStaff(topstaff);
      } catch (err) {
        setIsLoading(false);
        if (!err?.response) {
          showErrorToast(err.message);
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          setFetchError(err.response.data.message);
        }
      }
    };

    getStats();
  }, []);

  const stat = [
    {
      text: "Available for Assessment",
      number: stats.availableAssessments,
    },
    {
      text: "Accepted Assessment",
      number: stats.acceptedAssessments,
    },
    {
      text: "Completed Assessments",
      number: stats.completedAssessments,
    },
  ];

  return (
    <Flex stack spacing={58}>
      <Heading />
      <Grid span={12}>
        {stat.map((info, idx) => {
          return (
            <GridItem span={4} md={12} key={idx}>
              <Card
                text={<Text>{info.text}</Text>}
                num={
                  <Text $size="28px" $weight="600" $lHeight="36px">
                    {info.number}
                  </Text>
                }
              />
            </GridItem>
          );
        })}
      </Grid>
      <Grid
        span={12}
        gap="60px"
        style={{ maxWidth: "100%", overflow: "scroll" }}
      >
        <GridItem span={6} md={12}>
          <TopStaff topStaff={topStaff} />
        </GridItem>
        <GridItem span={6} md={12}>
          <TopPerformance />
        </GridItem>
      </Grid>
    </Flex>
  );
};

const AssessmentFirstPage = () => {
  return (
    <div>
      <PageInfo breadcrumb={["Dashboard", "Performance"]} />
      <Buttons />
      <Assessments />
    </div>
  );
};

export default AssessmentFirstPage;

const Hide = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;
const Show = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: block;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 70px;
  height: 160px;
  border: 1px solid #c7e0f4;
  border-radius: 5px;
  background: #f8fbfd;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ $color }) => ($color ? $color : "##323130")};
  font-size: ${({ $size }) => ($size ? $size : "16px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "22px")};
  white-space: nowrap;
`;

const View = styled.p`
  color: #2667ff;
  font-weight: 600;
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const TopStaffTable = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    text-align: left;
    overflow: auto;
    white-space: initial;

    tr:first-of-type {
      width: 100%;

      th{
        padding-top: 12px;
        padding-bottom: 12px;
      }

      th {
        font-weight: 600;
        color: #605e5c;
      }
    }

    td {
      color: #605e5c;
      padding-bottom: 21px;
      padding-top: 21px;
      border-bottom: 1px solid #C8C6C4;
    }

    tr {
     
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
