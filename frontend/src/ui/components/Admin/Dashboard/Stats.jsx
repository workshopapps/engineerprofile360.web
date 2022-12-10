import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Profile2User, People, User } from "iconsax-react";

const Stats = ({ stats }) => {
  const [data, setData] = useState(stats);

  useEffect(() => {
    setData(stats);
  }, [stats]);

  return (
    <div encType="application/json">
      <Cards>
        <Card>
          <User size="32" color="#1E1E1E" />
          <Subtext>users</Subtext>
          <Text>{data.users ? data.users : 0 }</Text>
        </Card>

        <Card>
          <Profile2User size="32" color="#1E1E1E" />
          <Subtext>employees</Subtext>
          <Text>{data.employees ? data.employees : 0}</Text>
        </Card>

        <Card>
          <People size="32" color="#1E1E1E" />
          <Subtext>companies</Subtext>
          <Text>{data.companies ? data.companies : 0}</Text>
        </Card>

        <Card>
          <People size="32" color="#1E1E1E" />
          <Subtext>verified</Subtext>
          <Text>{data.verifiedUsers ? data.verifiedUsers.toFixed(2) : 0}%</Text>
        </Card>
      </Cards>
    </div>
  );
};

export default Stats;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 32px;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 264px;
  height: 165px;
  background: #ffffff;
  border: 1px solid #c7e0f4;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 59px;
  gap: 10px;
`;

const Subtext = styled.p`
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1e1e1e;
`;

const Text = styled.h3`
  width: 108px;
  height: 58px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 48px;
  line-height: 58px;
  color: #1e1e1e;
`;
