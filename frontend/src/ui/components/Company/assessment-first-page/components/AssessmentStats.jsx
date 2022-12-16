import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Flex from "../../../../layout/Flex";
import Grid, { GridItem } from "../../../../layout/Grid";
import { Title } from "../../../../../../styles/reusableElements.styled";
import { Chart } from "../../../Dashboard/Stats";
import useAuth from "../../../../../../hooks/useAuth";
import axios from "../../../../../../api/axios";
import { showErrorToast } from "../../../../../../helpers/helper";
import TopStaff from "./TopStaff";

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
        axios.get(`user-assessment/org/${auth.org_id}/org-available`),
        axios.get(`assessment/completed-assessments/${auth.org_id}/${auth.id}`),
        // axios.get(`user_score/company/${auth.org_id}`),
      ];

      console.log(auth);

      try {
        const response = await Promise.all(ENDPOINTS).then(function (data) {
          return data;
        });

        setIsLoading(false);

        const availableAssessments = response[0]?.data.data.length;
        const completedAssessments = response[1]?.data.data.data.length;
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
        style={{
          overflow: "scroll",
        }}
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
  color: ${({ $color }) => ($color ? $color : "##323130")};
  font-size: ${({ $size }) => ($size ? $size : "16px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "22px")};
  white-space: nowrap;
`;
