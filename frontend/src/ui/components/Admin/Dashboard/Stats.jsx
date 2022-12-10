import React, { useState, useEffect} from 'react'
import styled from 'styled-components';
import { Title } from "../../../../styles/reusableElements.styled";
import { Profile2User, People, User } from "iconsax-react";
import axios from '../../../../api/axios';
function Stats() {

  const  [data, setData] = useState([])

  useEffect(() => {
    axios.get('admin/overview')
    .then(response => {
      setData(response.data.data)
      console.log(response.data.data);
    })
    .catch(error => {
      console.log(error);
    }); 
  }, [])
  
  console.log(data);

  return (
    <div encType="application/json">
        
        <Title as="h4" $size="28px" $color="#1E1E1E" $weight="600">Team Axle Main Admin</Title>      
          
          <Cards key={data.id}>

            <Card>
              <User size="32" color="#1E1E1E"/>
              <Subtext>users</Subtext>
              <Text>{data.users}</Text>
            </Card>

            <Card>
              <Profile2User size="32" color="#1E1E1E"/>
              <Subtext>employees</Subtext>
              <Text>{data.employees}</Text>
            </Card>

            <Card>
              <People size="32" color="#1E1E1E"/>
              <Subtext>companies</Subtext>
              <Text>{data.companies}</Text>
            </Card>

            <Card>
              <People size="32" color="#1E1E1E"/>
              <Subtext>verified</Subtext>
              <Text>{(Math.round(data.verifiedUsers))}%</Text>
            </Card>
          </Cards> 

    </div>
  )
}

export default Stats


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
  text-align:center;
  font-size: 48px;
  line-height: 58px;
  color: #1E1E1E;
`
  