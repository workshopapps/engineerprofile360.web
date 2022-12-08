import React, { useState } from 'react'
import styled from 'styled-components';
import axios from "axios";

function Stats() {
   const [data, setData] = useState(null);

   axios
  .get("https://api.eval360.hng.tech/api/admin/overview", {
    data: {
      user: 1
    }
  })
  .then(res => {
      console.log(res)
  })
  .catch(error => {
    console.log(error)
  })

  // axios({
  //   method: 'GET',
  //   url: 'https://api.eval360.hng.tech/api/admin/overview',
     
  //    data: {

  //     users: 1,

  //     employees: 0,

  //     companies: 1,

  //     verifiedUsers: 100 
     
  //     }
     
     
     
  // }).then(response => {
  //   console.log(response);
  // }).catch(error => {
  //   console.log(error);
  // })




  
  return (
    <Container encType="application/json">
        <HeadingText>Team Axle Main Admin</HeadingText>
        <Cards>

          <Card>
            <Img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1670483167/user_pr5rfp-removebg-preview_r37p87.png" alt="user"/>
            <Subtext>User</Subtext>
            <Text>1001</Text>
          </Card>

           <Card>
            <Img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1670483137/profile-2user-removebg-preview_gs3v4k.png" alt="employees"/>
            <Subtext>Employee</Subtext>
            <Text>989</Text>
           </Card>

          <Card>
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1670483437/people-removebg-preview_ilcddu.png" alt="company"/>
            <Subtext>companies</Subtext>
            <Text>365</Text>
          </Card>

          <Card>
            <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1670483437/people-removebg-preview_ilcddu.png" alt="people"/>
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

const Img = styled.img`
  width:20px;
  heigth:13px;
`


  