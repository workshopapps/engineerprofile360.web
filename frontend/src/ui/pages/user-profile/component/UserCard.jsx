import React from "react"
import styled from "styled-components"

import userImage from "../../../../assets/images/app/user-profile-image.png"

const UserCard = () => {
  return (
    <UserCardContainer>
      <img src={userImage} alt="User Profile" />
      <Data>
        <h3>Name</h3>
        <p>Sir Seyi Alameen</p>
      </Data>
      <Data>
        <h3>Department</h3>
        <p>UX Engineer</p>
      </Data>
      <Data>
        <h3>Course</h3>
        <p>Design Thinking 901</p>
      </Data>
      <Data>
        <h3>Percentage</h3>
        <p>93.3%</p>
      </Data>
    </UserCardContainer>
  )
}

export default UserCard

const UserCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 120px;
  margin-top: 80px;
  border: 2px solid #edebe9;
  border-radius: 8px;
  align-items: center;
  padding: 15px 10px;
  img {
    width: 94px;
    height: 94px;
    border-radius: 50%;
  }
`

const Data = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* color: ${({ theme }) => theme.palette.grey.nintey}; */
    color: #a19f9d;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    /* color: ${({ theme }) => theme.palette.grey.oneThrity}; */
    color: #605e5c;
  }

  &:last-child {
    p {
      color: ${({ theme }) => theme.palette.status.success.color};
    }
  }
`
