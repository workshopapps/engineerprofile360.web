import React, { Fragment } from "react"
import styled from "styled-components"

import Breadcrumb from "../../../components/Breadcrumb"
import UserAssessment from "./UserAssessment"
import UserCard from "./UserCard"

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Breadcrumb />
      <UserCard />
      <UserAssessment />
    </UserInfoContainer>
  )
}

export default UserInfo

const UserInfoContainer = styled.div`
  margin-top: 96px;
  margin-left: 15px;
  margin-right: 10px;
  overflow: scroll;
`
