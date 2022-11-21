import React from "react"
import styled from "styled-components"

import arrowRight from "../../assets/icons/app/arrow-right.svg"

const Breadcrumb = () => {
  return (
    <BreadcrumbContainer>
      <p>Employees</p>
      <img src={arrowRight} alt="Arrow Right SVG" />
      <p>Profile</p>
      <img src={arrowRight} alt="Arrow Right SVG" />
      <p>Sir Seyi Alameen</p>
    </BreadcrumbContainer>
  )
}

export default Breadcrumb

const BreadcrumbContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  /* overflow: scroll; */
  position: fixed;
  height: 9vh;
  background-color: #fff;
  z-index: 10;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }

  p:last-child {
    font-weight: 600;
  }
`
