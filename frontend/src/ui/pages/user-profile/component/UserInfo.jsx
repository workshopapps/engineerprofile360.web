import React, { Fragment } from "react"

import Breadcrumb from "../../../components/Breadcrumb"
import EmployeeList from "../../../components/EmployeeList"
import UserAssessment from "./UserAssessment"
import UserCard from "./UserCard"

const UserInfo = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <UserCard />
      <UserAssessment />
      <EmployeeList />
    </Fragment>
  )
}

export default UserInfo
