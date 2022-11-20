import React from "react"
import styled from "styled-components"

import dashboard from "../../assets/icons/app/dashboard.svg"
import assessment from "../../assets/icons/app/assessment.svg"
import user from "../../assets/icons/app/user.svg"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <img src={dashboard} alt="dashboard icon" />
        <p>Dashboard</p>
      </SidebarItem>
      <SidebarItem>
        <img src={assessment} alt="assessment icon" />
        <p>Assessments</p>
      </SidebarItem>
      <SidebarItem>
        <img src={user} alt="user icon" />
        <p>Employees</p>
      </SidebarItem>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  display: flex;
  padding: 60px 30px;
  flex-direction: column;
  gap: 60px;

  /* THE BLUE COLORED ICON AND TEXT REPRESENT THE ACTIVE STATE */
  div:last-child {
    p {
      color: #2667ff;
    }
  }
`

const SidebarItem = styled.div`
  display: flex;
  gap: 15px;

  /* THE BLUE COLORED ICON AND TEXT REPRESENT THE ACTIVE STATE */
  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
  }
`
