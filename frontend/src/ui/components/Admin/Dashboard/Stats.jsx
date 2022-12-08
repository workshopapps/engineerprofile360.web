import React from 'react'
import styled from 'styled-components';
import { Profile2User, People, User } from "iconsax-react";
import axios from '../../../../api/axios';
function Stats() {

  axios.get('admin/overview')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  
  return (
    <Container encType="application/json">
        <HeadingText>Team Axle Main Admin</HeadingText>
        <Cards>

          <Card>
          <User size="32" color="#1E1E1E"/>
            <Subtext>User</Subtext>
            <Text>1001</Text>
          </Card>

           <Card>
           <Profile2User size="32" color="#1E1E1E"/>
            <Subtext>Employee</Subtext>
            <Text>989</Text>
           </Card>

          <Card>
            <People size="32" color="#1E1E1E"/>
            <Subtext>companies</Subtext>
            <Text>365</Text>
          </Card>

          <Card>
            <People size="32" color="#1E1E1E"/>
            <Subtext>verified</Subtext>
            <Text>63%</Text>
          </Card>
        </Cards>
    </Container>
  )
}

export default Stats

const Container = styled.div`


`

const HeadingText = styled.h4`
  width: 308px;
  height: 34px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #1E1E1E;
`

const Cards = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
  gap:32px;
  margin-top:40px;
`

const Card = styled.div` 
  width:264px;
  height:165px;
  background: #FFFFFF;
  border: 1px solid #C7E0F4;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 59px;
  gap: 10px;
`

const Subtext = styled.p`
  height: 19px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #1E1E1E;
`

const Text = styled.h3`
  width: 108px;
  height: 58px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  color: #1E1E1E;
`
  