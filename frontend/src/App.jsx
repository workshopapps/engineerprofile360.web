import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"

import { GlobalStyles, theme } from "./styles/globalStyles"

import Contact from "./Main/pages/Contact"
import Header from "./ui/components/Header"
import { Divider, Main, MainContainer } from "./styles/reusableElements.styled"
import Sidebar from "./ui/components/Sidebar"

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
