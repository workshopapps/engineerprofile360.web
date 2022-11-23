import React from "react"
import styled from "styled-components"
import SideNav from "../Nav/SideNav"
import StaffUser from "./StaffUser"
import UserStats from "./UserStats"

const Styledchild = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin-top: 7rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Dashboard = () => {
  return (
    <Styledchild>
      <SideNav />
      <div>
        <UserStats />
        <StaffUser />
      </div>
    </Styledchild>
  )
}

export default Dashboard
