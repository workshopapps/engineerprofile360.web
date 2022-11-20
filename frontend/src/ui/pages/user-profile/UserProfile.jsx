import React, { Fragment } from "react"

import Header from "../../components/Header"
import { Main, MainContainer } from "../../../styles/reusableElements.styled"
import Sidebar from "../../components/Sidebar"
import UserInfo from "./component/UserInfo"

const UserProfile = () => {
  return (
    <Fragment>
      <Header />
      <MainContainer>
        {/* <Main> */}
        <Sidebar />
        <UserInfo />
        {/* </Main> */}
      </MainContainer>
    </Fragment>
  )
}

export default UserProfile
