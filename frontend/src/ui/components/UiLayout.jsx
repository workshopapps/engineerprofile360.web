import React from "react"
import styled from "styled-components"

import Sidebar from "./Sidebar"

const UiLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  )
}

export default UiLayout

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
  height: 100vh;
  overflow: hidden;
`
const MainContent = styled.div`
  margin-top: 96px;
  margin-left: 15px;
  margin-right: 10px;
  overflow: scroll;
`
