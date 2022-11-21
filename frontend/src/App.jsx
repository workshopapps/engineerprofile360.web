import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import { GlobalStyles, theme } from "./styles/globalStyles/index"

import Contact from "./main/pages/Contact"
import Header from "./ui/components/Header"
import { Divider, Main, MainContainer } from "./styles/reusableElements.styled"
import Sidebar from "./ui/components/Sidebar"
import AssessmentList from "./ui/components/AssessmentList"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        {/* <Contact /> */}
        <Header />
        <Divider />
        <MainContainer>
          <Main>
            <Sidebar />
            <AssessmentList />
          </Main>
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App

const AppContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`
