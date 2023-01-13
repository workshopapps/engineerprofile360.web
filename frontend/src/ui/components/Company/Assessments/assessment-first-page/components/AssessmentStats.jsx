import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "../../../../layout/Flex";
import Grid, { GridItem } from "../../../../layout/Grid";
import { Chart } from "../../../Dashboard/Stats";
import useAuth from "../../../../../../hooks/useAuth";
import axios from "../../../../../../api/axios";
import { showErrorToast } from "../../../../../../helpers/helper";
import TopStaff from "./TopStaff";
import {
  OverlayLoader,
  Title,
} from "../../../../../../styles/reusableElements.styled";
import { Link } from "react-router-dom";

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
        <Text>{props.text}</Text>
        <Text $size="28px" $weight="600" $lHeight="36px">
          {props.num}
        </Text>
      </Flex>
    </CardContainer>
  );
};

const TopPerformance = ({ topPerformance }) => {
  return (
    <Flex stack>
      <Chart topPerformance={topPerformance} />
    </Flex>
  );
};

const Assessments = () => {
  const { auth } = useAuth();
  const [stats, setStats] = useState({});
  const [topStaff, setTopStaff] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [topPerformance, setTopPerformance] = useState({});
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getStats = async () => {
      const ENDPOINTS = [
        axios.get(`assessment/${auth.org_id}`),
        axios.get(`user-assessment/org/${auth.org_id}/org-completed`),
        axios.get(`userscore/company/${auth.org_id}`),
        axios.get(`userscore/company/${auth.org_id}/max`),
        axios.get(`assessment/accepted-assessments`),
      ];

      console.log(auth);

      try {
        const response = await Promise.all(ENDPOINTS).then(function (data) {
          return data;
        });

        setIsLoading(false);

        const availableAssessments = response[0]?.data.data.length;
        const completedAssessments = response[1]?.data.data.length;
        const topstaff = response[2]?.data;
        const topPerformer = response[3]?.data.data.userscore;
        const acceptedAssessments = response[4]?.data.data.length;

        setStats({
          availableAssessments,
          completedAssessments,
          acceptedAssessments,
        });
        setTopStaff(topstaff);
        setTopPerformance(topPerformer);
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
      url: "/assessment/assessment-list",
    },
    // {
    //   text: "Accepted Assessment",
    //   number: stats.acceptedAssessments,
    //   url: "",
    // },
    {
      text: "Completed Assessments",
      number: stats.completedAssessments,
      url: "/assessment/assessment-list/completed",
    },
  ];

  return isLoading ? (
    <OverlayLoader contained>
      <div></div>
      <span>Just a moment...</span>
    </OverlayLoader>
  ) : (
    <Flex stack spacing={58}>
      <Heading />
      <Grid span={12}>
        {stat.map((info, idx) => {
          return (
            <GridItem span={6} md={12} key={idx}>
              <Link to={info.url}>
                <Card text={info.text} num={info.number} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
      <Grid
        span={12}
        style={{
          overflow: "scroll",
        }}
      >
        <GridItem span={6} md={12}>
          <TopStaff topStaff={topStaff} />
        </GridItem>
        <GridItem span={6} md={12}>
          <TopPerformance topPerformance={topPerformance} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Assessments;

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

export const Text = styled.p`
  color: ${({ $color }) => ($color ? $color : "#323130")};
  font-size: ${({ $size }) => ($size ? $size : "16px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "22px")};
  white-space: nowrap;
`;
